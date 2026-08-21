import { useEffect, useState, useRef } from 'react';

interface FlyingBirdOverlayProps {
  sourceId?: string;
  targetId?: string;
  patternIndex?: number;
  onComplete: () => void;
}

interface Point {
  x: number;
  y: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  opacity: number;
}

export default function FlyingBirdOverlay({
  sourceId = 'contact-submit-btn',
  targetId = 'nav-get-in-touch',
  patternIndex,
  onComplete,
}: FlyingBirdOverlayProps) {
  const [birdState, setBirdState] = useState<{
    x: number;
    y: number;
    angle: number;
    opacity: number;
    scale: number;
    wingAngle: number;
  } | null>(null);

  const [pathPoints, setPathPoints] = useState<Point[]>([]);
  const [trailOpacity, setTrailOpacity] = useState(1);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isArrived, setIsArrived] = useState(false);

  const animFrameRef = useRef<number | null>(null);
  const completedCalledRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (completedCalledRef.current) return;
    // 1. Calculate Start and End coordinates
    const sourceEl = document.getElementById(sourceId);
    const targetEl = document.getElementById(targetId);

    const sRect = sourceEl
      ? sourceEl.getBoundingClientRect()
      : { left: window.innerWidth / 2 - 80, top: window.innerHeight - 150, width: 160, height: 45, right: window.innerWidth / 2 + 80 };

    const tRect = targetEl
      ? targetEl.getBoundingClientRect()
      : { left: window.innerWidth - 160, top: 20, width: 130, height: 40 };

    const p0: Point = {
      x: sRect.left + sRect.width / 2,
      y: sRect.top + sRect.height / 2,
    };

    const p3: Point = {
      x: tRect.left + tRect.width / 2,
      y: tRect.top + tRect.height / 2,
    };

    const dy = p3.y - p0.y;

    // Determine variant (guaranteed 0, 1, or 2, alternating each submission)
    const selectedVariant =
      typeof patternIndex === 'number'
        ? Math.abs(patternIndex) % 3
        : Math.floor(Math.random() * 3);

    // Compute distinct flight paths for each variant
    const computePosition = (t: number): Point => {
      if (selectedVariant === 0) {
        // === VARIANT 0: Aerobatic Double Loop-de-Loop ===
        const rightMarginX = Math.min(
          window.innerWidth - 60,
          Math.max(sRect.right + 90, window.innerWidth * 0.75)
        );
        const p1: Point = { x: rightMarginX + 30, y: p0.y - 40 };
        const p2: Point = { x: Math.max(p3.x + 40, rightMarginX), y: p0.y + dy * 0.65 };

        // Base curve
        const u = 1 - t;
        const tt = t * t;
        const uu = u * u;
        const uuu = uu * u;
        const ttt = tt * t;
        const baseX = uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x;
        const baseY = uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y;

        let offX = 0;
        let offY = 0;

        // Loop 1 (Lower loop)
        if (t >= 0.20 && t <= 0.50) {
          const u1 = (t - 0.20) / 0.30;
          const theta1 = u1 * 2 * Math.PI;
          const env1 = Math.sin(u1 * Math.PI);
          offX += Math.sin(theta1) * 75 * env1;
          offY += -(1 - Math.cos(theta1)) * 65 * env1;
        }

        // Loop 2 (Upper corkscrew loop)
        if (t >= 0.62 && t <= 0.86) {
          const u2 = (t - 0.62) / 0.24;
          const theta2 = u2 * 2 * Math.PI;
          const env2 = Math.sin(u2 * Math.PI);
          offX += -Math.sin(theta2) * 50 * env2;
          offY += -(1 - Math.cos(theta2)) * 45 * env2;
        }

        return { x: baseX + offX, y: baseY + offY };
      } else if (selectedVariant === 1) {
        // === VARIANT 1: Wide Swoop & Giant High-Altitude Loop ===
        // Sweeps all the way to the far right screen margin, does a giant vertical loop in mid-air
        const farRightX = window.innerWidth - 45;
        const p1: Point = { x: farRightX, y: p0.y - 80 };
        const p2: Point = { x: farRightX - 10, y: p0.y + dy * 0.70 };

        const u = 1 - t;
        const tt = t * t;
        const uu = u * u;
        const uuu = uu * u;
        const ttt = tt * t;
        const baseX = uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x;
        const baseY = uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y;

        let offX = 0;
        let offY = 0;

        // Giant dramatic sky loop
        if (t >= 0.35 && t <= 0.75) {
          const u1 = (t - 0.35) / 0.40;
          const theta1 = u1 * 2 * Math.PI;
          const env1 = Math.sin(u1 * Math.PI);
          offX += -Math.sin(theta1) * 95 * env1;
          offY += -(1 - Math.cos(theta1)) * 85 * env1;
        }

        return { x: baseX + offX, y: baseY + offY };
      } else {
        // === VARIANT 2: Wide Undulating S-Wave Zigzag with Tight Spin ===
        // S-curves horizontally before making a high-speed spin into the target
        const midRightX = Math.min(window.innerWidth - 70, sRect.right + 70);
        const p1: Point = { x: midRightX + 40, y: p0.y - 20 };
        const p2: Point = { x: Math.max(p3.x + 20, midRightX), y: p0.y + dy * 0.60 };

        const u = 1 - t;
        const tt = t * t;
        const uu = u * u;
        const uuu = uu * u;
        const ttt = tt * t;
        const baseX = uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x;
        const baseY = uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y;

        // Wide sinusoidal wave
        const wave = Math.sin(t * Math.PI * 3.5) * 45 * Math.sin(t * Math.PI);
        let offX = wave;
        let offY = 0;

        // Tight corkscrew near finish
        if (t >= 0.60 && t <= 0.88) {
          const u2 = (t - 0.60) / 0.28;
          const theta2 = u2 * 2 * Math.PI;
          const env2 = Math.sin(u2 * Math.PI);
          offX += Math.sin(theta2) * 55 * env2;
          offY += -(1 - Math.cos(theta2)) * 50 * env2;
        }

        return { x: baseX + offX, y: baseY + offY };
      }
    };

    // Numerical tangent calculation for accurate dynamic banking
    const computeTangent = (t: number): Point => {
      const delta = 0.002;
      const t1 = Math.max(0, t - delta);
      const t2 = Math.min(1, t + delta);
      const pA = computePosition(t1);
      const pB = computePosition(t2);
      return {
        x: pB.x - pA.x,
        y: pB.y - pA.y,
      };
    };

    const duration = 3000;
    const startTime = performance.now();
    const collectedPoints: Point[] = [p0];

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      const t = rawProgress;
      const pos = computePosition(t);
      const tangent = computeTangent(t);
      const angle = (Math.atan2(tangent.y, tangent.x) * 180) / Math.PI;

      // Realistic wing flapping
      const wingAngle = Math.sin(rawProgress * Math.PI * 26) * 32;

      collectedPoints.push(pos);
      setPathPoints([...collectedPoints]);

      if (rawProgress < 1) {
        setBirdState({
          x: pos.x,
          y: pos.y,
          angle,
          opacity: 1,
          scale: 1,
          wingAngle,
        });

        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        setIsArrived(true);

        // Solid neutral gray arrival particles
        const grayColors = ['#475569', '#64748b', '#94a3b8', '#cbd5e1', '#e2e8f0'];
        const burstParticles: Particle[] = Array.from({ length: 16 }, (_, i) => {
          const speed = 1.5 + Math.random() * 3;
          const particleAngle = (Math.PI * 2 * i) / 16 + (Math.random() - 0.5) * 0.4;
          return {
            id: i,
            x: p3.x,
            y: p3.y,
            vx: Math.cos(particleAngle) * speed,
            vy: Math.sin(particleAngle) * speed,
            color: grayColors[Math.floor(Math.random() * grayColors.length)],
            size: 2.5 + Math.random() * 2.5,
            opacity: 0.9,
          };
        });
        setParticles(burstParticles);

        // Bird disappears ("gayab")
        setBirdState({
          x: p3.x,
          y: p3.y,
          angle,
          opacity: 0,
          scale: 0.2,
          wingAngle: 0,
        });

        // Trigger success toast
        if (!completedCalledRef.current) {
          completedCalledRef.current = true;
          onCompleteRef.current();
        }

        // Fade out dotted trail smoothly
        let fadeProgress = 1;
        const fadeInterval = setInterval(() => {
          fadeProgress -= 0.07;
          setTrailOpacity(Math.max(0, fadeProgress));
          setParticles((prev) =>
            prev
              .map((p) => ({
                ...p,
                x: p.x + p.vx,
                y: p.y + p.vy,
                opacity: p.opacity - 0.06,
              }))
              .filter((p) => p.opacity > 0)
          );

          if (fadeProgress <= 0) {
            clearInterval(fadeInterval);
          }
        }, 30);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []); // Only run once on mount per flightId

  // Convert trail points to SVG Path
  const trailSvgPath =
    pathPoints.length > 1
      ? pathPoints.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, '')
      : '';

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      <svg className="w-full h-full absolute inset-0">
        {/* Solid neutral gray dotted flight trail */}
        {trailSvgPath && (
          <path
            d={trailSvgPath}
            fill="none"
            stroke="#64748b"
            strokeWidth="2.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
            style={{
              opacity: trailOpacity * 0.9,
              transition: 'opacity 0.4s ease-out',
            }}
          />
        )}

        {/* Neutral Gray Arrival Particles */}
        {particles.map((p) => (
          <circle
            key={p.id}
            cx={p.x}
            cy={p.y}
            r={p.size}
            fill={p.color}
            opacity={p.opacity}
          />
        ))}
      </svg>

      {/* Clean Matte Bird */}
      {birdState && (
        <div
          className="absolute will-change-transform"
          style={{
            left: `${birdState.x}px`,
            top: `${birdState.y}px`,
            transform: `translate(-50%, -50%) rotate(${birdState.angle}deg) scale(${birdState.scale})`,
            opacity: birdState.opacity,
            transition: isArrived ? 'opacity 0.25s ease-out, transform 0.25s ease-out' : 'none',
          }}
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 64 64"
            fill="none"
          >
            {/* Back Wing */}
            <g
              style={{
                transformOrigin: '30px 32px',
                transform: `rotate(${-birdState.wingAngle * 0.7}deg)`,
              }}
            >
              <path
                d="M30 32 L40 12 C35 16, 22 22, 24 34 Z"
                fill="#2563eb"
                opacity="0.85"
              />
            </g>

            {/* Bird Tail Feathers */}
            <path
              d="M18 34 L6 31 L11 36 L6 41 L20 37 Z"
              fill="#1d4ed8"
            />

            {/* Main Body (Matte Blue) */}
            <path
              d="M18 34 C20 26, 32 24, 46 28 C52 30, 56 34, 54 38 C50 43, 30 45, 18 34 Z"
              fill="#3b82f6"
            />

            {/* Front Flapping Wing */}
            <g
              style={{
                transformOrigin: '32px 32px',
                transform: `rotate(${birdState.wingAngle}deg)`,
              }}
            >
              <path
                d="M32 32 L46 10 C39 14, 24 21, 26 35 Z"
                fill="#60a5fa"
              />
            </g>

            {/* Beak */}
            <path
              d="M52 32 L61 34 L52 37 Z"
              fill="#f59e0b"
            />

            {/* Eye */}
            <circle cx="48" cy="31" r="2" fill="#ffffff" />
            <circle cx="48.5" cy="31" r="1" fill="#0f172a" />

            {/* Small Mail Envelope in Beak */}
            <g transform="translate(51, 34) scale(0.6)">
              <rect x="0" y="0" width="13" height="9" rx="1" fill="#ffffff" stroke="#64748b" strokeWidth="0.8" />
              <path d="M0 0 L6.5 5.5 L13 0" stroke="#64748b" strokeWidth="0.8" fill="none" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}

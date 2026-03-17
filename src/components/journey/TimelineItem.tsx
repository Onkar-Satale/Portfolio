import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

// Local Type Definition
interface Skill {
  name: string;
  image?: string | null;
}

interface TimelineItemData {
  id: string;
  logo: string | null;
  role?: string;
  companyName?: string;
  companyLink?: string;
  courseName?: string;
  institutionName?: string;
  institutionLink?: string;
  grade?: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  skills?: Skill[];
  type: 'experience' | 'education';
  certificateLink?: string;
}

interface TimelineItemProps {
  item: TimelineItemData;
  isLast: boolean;
}

export default function TimelineItem({ item, isLast }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  const isDescriptionLong = item.description && item.description.length > 200;
  const isExperience = item.type === 'experience';

  return (
    <div className="flex gap-4 sm:gap-6">
      {/* Timeline Dot and Line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm overflow-hidden">
          {item.logo && (
            <img
              src={item.logo}
              alt={isExperience ? item.companyName : item.institutionName}
              className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-300"
            />
          )}
        </div>
        {!isLast && <div className="w-px h-full bg-slate-200 dark:bg-slate-700 mt-2"></div>}
      </div>

      {/* Timeline Content */}
      <div className="pb-12 flex-grow min-w-0">
        <p className="text-sm font-semibold text-blue-600">
          {formatDate(item.startDate)} - {item.endDate ? formatDate(item.endDate) : 'Present'}
        </p>

        {isExperience ? (
          <>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-1">{item.role}</h3>
            <a
              href={item.companyLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 mt-1 font-semibold text-slate-600 dark:text-slate-300 ${item.companyLink && 'hover:text-blue-600 transition-colors'
                }`}
            >
              {item.companyName}
              {item.companyLink && <FiExternalLink size={14} />}
            </a>
          </>
        ) : (
          <>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-1">{item.courseName}</h3>
            <a
              href={item.institutionLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 mt-1 font-semibold text-slate-600 dark:text-slate-300 ${item.institutionLink && 'hover:text-blue-600 transition-colors'
                }`}
            >
              {item.institutionName}
              {item.institutionLink && <FiExternalLink size={14} />}
            </a>
          </>
        )}

        {item.description && (
          <>
            <p className={`mt-4 text-slate-600 dark:text-slate-300 leading-relaxed ${!isExpanded && 'line-clamp-3'}`}>
              {item.description}
            </p>
            {isDescriptionLong && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="cursor-pointer text-sm font-semibold text-blue-600 hover:underline mt-2 inline-block"
              >
                {isExpanded ? 'Show Less' : 'Read More'}
              </button>
            )}
          </>
        )}

        {item.certificateLink && (
          <div className="mt-3">
             <a
              href={item.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
             >
               <FiExternalLink size={14} />
               View Certificate
             </a>
          </div>
        )}

        {item.skills && item.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.skills.map((skill: any, index: number) => {
              // If skill is a string, wrap it in an object with name
              const skillName = typeof skill === "string" ? skill : skill.name;
              const skillImage = typeof skill === "string" ? null : skill.image;

              return (
                <div
                  key={skillName + index}
                  className="flex items-center gap-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium px-2 py-1 rounded-full"
                >
                  {skillImage && <img src={skillImage} alt={skillName} className="w-4 h-4 object-contain" />}
                  <span>{skillName}</span>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}

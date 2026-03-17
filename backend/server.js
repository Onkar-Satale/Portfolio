// ------------------ Imports ------------------
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./db.js";
import authRoutes from "./routes/auth.js";
import portfolioRoutes from "./routes/portfolio.js";

dotenv.config();

// Connect Database
connectDB();

// ------------------ Configurations ------------------
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://your-portfolio-domain.com", "http://localhost:5174"],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

// ------------------ Routes ------------------

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api", portfolioRoutes);

// POST /api/send-message (Nodemailer legacy email route - keeping it functional + DB save)
app.post("/api/send-message", async (req, res) => {
  console.log("Received contact form:", req.body);
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS, // Gmail App Password
      },
    });

    await transporter.verify();
    console.log("SMTP server ready");

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New message from ${name}: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ success: false, message: "Failed to send message", error: err.message });
  }
});

// ------------------ Start Server ------------------
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

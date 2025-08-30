import React from "react";
import { Mail, Linkedin, Facebook, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";

const Card = ({ children }) => (
  <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">{children}</div>
);

export default function PersonalBrandPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">

      {/* HERO */}
      <header className="max-w-5xl mx-auto px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-indigo-700"
        >
          Đặng Minh Tuấn
        </motion.h1>
        <p className="mt-3 text-lg text-slate-600">
          Lecturer • Researcher • STEM-AI Innovator
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <a href="#contact" className="px-5 py-2 rounded-xl bg-indigo-600 text-white">Contact</a>
          <a href="#projects" className="px-5 py-2 rounded-xl border border-slate-300">Projects</a>
        </div>
      </header>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-slate-600">
          Giảng viên Trường Đại học Giáo dục – ĐHQGHN; nghiên cứu giáo dục STEM và tích hợp AI.
          Phát triển mô hình 5C-AI, xuất bản bài báo quốc tế (Q1/Q2), dẫn dắt Mentora Study Hubs & MEI Foundation.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <Card>
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              <div>
                <div className="font-semibold">Mentora Study Hubs</div>
                <div className="text-slate-600">34 hubs across Vietnam</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              <div>
                <div className="font-semibold">MEI Foundation</div>
                <div className="text-slate-600">Scholarships for STEM talents</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold mb-4">Roadmap 2025–2027</h2>
        <ul className="list-disc pl-6 text-slate-600">
          <li><strong>2025:</strong> Postdoc/Research in US • Expand Mentora Hubs</li>
          <li><strong>2026:</strong> 3+ Q1 papers • Build AI-STEM network</li>
          <li><strong>2027:</strong> Tenure-track position • Scale partnerships</li>
        </ul>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <h2 className="text-lg font-semibold mb-2">Contact</h2>
        <div className="flex justify-center gap-6 text-slate-600">
          <a href="mailto:youremail@example.com" aria-label="Email"><Mail className="w-6 h-6"/></a>
          <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn"><Linkedin className="w-6 h-6"/></a>
          <a href="https://facebook.com/yourprofile" aria-label="Facebook"><Facebook className="w-6 h-6"/></a>
        </div>
      </footer>
    </div>
  );
}

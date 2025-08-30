import React from "react";
import { Mail, Globe, MapPin, Award, BookOpen, Users, ListChecks, GraduationCap } from "lucide-react";

const Container = ({ children }) => (
  <div className="max-w-5xl mx-auto px-5 md:px-6">{children}</div>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="py-10 scroll-mt-20">
    <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs mr-2 mb-2">
    {children}
  </span>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* TOP NAV (anchor links) */}
      <nav className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <a href="#top" className="font-semibold">About</a>
            <div className="hidden md:flex gap-4 text-sm">
              <a href="#research" className="hover:text-indigo-600">Research</a>
              <a href="#publications" className="hover:text-indigo-600">Publications</a>
              <a href="#services" className="hover:text-indigo-600">Services</a>
              <a href="#awards" className="hover:text-indigo-600">Awards</a>
              <a href="#students" className="hover:text-indigo-600">Students</a>
              <a href="#contact" className="hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </Container>
      </nav>

      {/* HERO / HEADER */}
      <header id="top" className="py-10">
        <Container>
          <div className="grid md:grid-cols-[160px_1fr] gap-6 items-start">
            {/* Ảnh đại diện (tùy chọn đưa file vào public/avatar.jpg) */}
            <img
              src="/avatar.jpg"
              alt="Profile"
              className="w-36 h-36 rounded-md object-cover border bg-slate-100"
              onError={(e)=>{e.currentTarget.style.display='none'}}
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">Đặng Minh Tuấn</h1>
              <p className="mt-1">Lecturer • Researcher • STEM–AI Innovator</p>
              <div className="mt-2 text-sm text-slate-600 space-y-1">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Vietnam ↔ USA</div>
                <div className="flex items-center gap-2"><Globe className="w-4 h-4"/> University of Education (VNU) & Mentora Study Hubs</div>
              </div>
              <p className="mt-3 text-slate-700">
                Research interests: AI-in-Education, STEM pedagogy, learning analytics, curriculum design.
              </p>
              <div className="mt-3">
                <Pill>AI • STEM</Pill>
                <Pill>Learning Analytics</Pill>
                <Pill>Curriculum & Mentoring</Pill>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <Container>
          {/* RESEARCH */}
          <Section id="research" title="Research">
            <p className="text-slate-700">
              I focus on AI-enhanced STEM learning, bilingual curriculum design and learning analytics.
              Current work: 5C-AI model for classroom integration, teacher upskilling, and national Mentora Study Hubs.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="border rounded-lg p-4">
                <BookOpen className="w-5 h-5 text-indigo-600 mb-1"/>
                <div className="font-medium">AI-STEM Curriculum</div>
                <div className="text-sm text-slate-600">Design & evaluation of AI-infused STEM modules.</div>
              </div>
              <div className="border rounded-lg p-4">
                <ListChecks className="w-5 h-5 text-emerald-600 mb-1"/>
                <div className="font-medium">Learning Analytics</div>
                <div className="text-sm text-slate-600">Assessment, dashboards, and outcomes tracking.</div>
              </div>
              <div className="border rounded-lg p-4">
                <Users className="w-5 h-5 text-amber-600 mb-1"/>
                <div className="font-medium">Mentoring & Outreach</div>
                <div className="text-sm text-slate-600">Mentora Hubs • MEI Foundation scholarships.</div>
              </div>
            </div>
          </Section>

          {/* SELECTED PUBLICATIONS (giống kiểu liệt kê chọn lọc) */}
          <Section id="publications" title="Selected Publications">
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>
                <span className="font-medium">[2025] AI-STEM Classroom Integration: A 5C-AI Framework.</span> Journal Q1. DOI: <a className="underline text-indigo-600" href="#" target="_blank" rel="noreferrer">10.0000/example</a>
              </li>
              <li>
                <span className="font-medium">[2024] Learning Analytics Dashboard for Bilingual STEM.</span> KDD Workshop. <a className="underline text-indigo-600" href="#" target="_blank" rel="noreferrer">PDF</a>
              </li>
              <li>
                <span className="font-medium">[2023] Mentoring at Scale: Provincial Study Hubs.</span> IEEE TLT (under review).
              </li>
            </ul>
            <div className="mt-3">
              <a className="text-sm underline text-slate-600" href="#" target="_blank" rel="noreferrer">Full list (Google Scholar / ORCID)</a>
            </div>
          </Section>

          {/* SERVICES (PC/Chair/Associate Editor) */}
          <Section id="services" title="Academic Services">
            <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1">
              <li>Program Committee / Reviewer: IJCAI, AAAI, EDM, AIED</li>
              <li>Guest editor & panelist on AI-in-Education topics</li>
              <li>Organizer: AI-STEM Summer Institute / Outreach in provinces</li>
            </ul>
          </Section>

          {/* AWARDS */}
          <Section id="awards" title="Honors & Awards">
            <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1">
              <li>Best Paper (National STEM Conference), 2024</li>
              <li>Provincial Education Innovation Award, 2023</li>
              <li>University Teaching Excellence Award, 2022</li>
            </ul>
          </Section>

          {/* STUDENTS (đơn giản, giống mục “Students”) */}
          <Section id="students" title="Students & Supervision">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="border rounded-lg p-4">
                <GraduationCap className="w-5 h-5 text-indigo-600 mb-1"/>
                <div className="font-medium">Graduate</div>
                <ul className="list-disc pl-5">
                  <li>Nguyễn A — Learning Analytics (2025–)</li>
                  <li>Trần B — AI-STEM Curriculum (2025–)</li>
                </ul>
              </div>
              <div className="border rounded-lg p-4">
                <GraduationCap className="w-5 h-5 text-emerald-600 mb-1"/>
                <div className="font-medium">Undergraduate</div>
                <ul className="list-disc pl-5">
                  <li>Phạm C — STEM Outreach (2025)</li>
                  <li>Lê D — Dashboard Dev (2025)</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* CONTACT */}
          <Section id="contact" title="Contact">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a className="inline-flex items-center gap-2 underline" href="mailto:youremail@example.com">
                <Mail className="w-4 h-4"/> youremail@example.com
              </a>
              <a className="inline-flex items-center gap-2 underline" href="#" target="_blank" rel="noreferrer">
                <Globe className="w-4 h-4"/> Personal Site / Scholar
              </a>
            </div>
          </Section>
        </Container>
      </main>

      <footer className="py-8 border-t text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Đặng Minh Tuấn — About
      </footer>
    </div>
  );
}

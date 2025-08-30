import React from "react";
import { Mail, Globe, MapPin, BookOpen, Users, ListChecks, GraduationCap } from "lucide-react";

const Container = ({ children }) => (
  <div className="max-w-5xl mx-auto px-5 md:px-6">{children}</div>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="py-10 scroll-mt-20">
    <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

const Card = ({ children }) => (
  <div className="rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm">{children}</div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs mr-2 mb-2">
    {children}
  </span>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* STICKY NAV */}
      <nav className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <a href="#top" className="font-semibold">About</a>
            <div className="hidden md:flex gap-4 text-sm">
              <a href="#research" className="hover:text-indigo-600">Research</a>
              <a href="#publications" className="hover:text-indigo-600">Publications</a>
              <a href="#experience" className="hover:text-indigo-600">Experience</a>
              <a href="#projects" className="hover:text-indigo-600">Projects</a>
              <a href="#awards" className="hover:text-indigo-600">Awards</a>
              <a href="#education" className="hover:text-indigo-600">Education</a>
              <a href="#contact" className="hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </Container>
      </nav>
      
     <main>
      {/* HEADER */}
    
        <Container>
          <div className="grid md:grid-cols-[160px_1fr] gap-6 items-start">
            {/* Optional avatar: add public/avatar.jpg to repo */}
            <img
              src="/public/avatar.jpg"
              alt="Profile"
              className="w-36 h-36 rounded-md object-cover border bg-slate-100"
              onError={(e)=>{e.currentTarget.style.display='none'}}
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">Dang Minh Tuan</h1>
              <p className="mt-1">Lecturer • Researcher • STEM–AI Innovator</p>
              <div className="mt-2 text-sm text-slate-600 space-y-1">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Hanoi, Vietnam ↔ USA</div>
                <div className="flex items-center gap-2"><Globe className="w-4 h-4"/> VNU University of Education & Mentora Study Hubs</div>
              </div>
              <p className="mt-3 text-slate-700">
                Research interests: STEM/Physics education for preservice teachers; teacher professional development;
                AI/IT-enhanced instruction (AI, VR/AR); learning analytics & assessment; curriculum design; educational entrepreneurship.
              </p>
              <div className="mt-3">
                <Pill>AI • STEM</Pill><Pill>Learning Analytics</Pill><Pill>Curriculum & Mentoring</Pill>
              </div>
            </div>
          </div>
        </Container>
     
     
        <Container>
          {/* RESEARCH */}
          <Section id="research" title="Research">
            <p className="text-slate-700">
              I focus on AI-enhanced STEM learning, bilingual curriculum design, and learning analytics for preservice teacher training.
              Current work includes the 5C-AI classroom integration model, teacher upskilling, and the nationwide Mentora Study Hubs.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <Card>
                <BookOpen className="w-5 h-5 text-indigo-600 mb-1"/>
                <div className="font-medium">AI-STEM Curriculum</div>
                <div className="text-sm text-slate-600">Design & evaluation of AI-infused STEM modules.</div>
              </Card>
              <Card>
                <ListChecks className="w-5 h-5 text-emerald-600 mb-1"/>
                <div className="font-medium">Learning Analytics</div>
                <div className="text-sm text-slate-600">Assessment, dashboards, outcomes tracking.</div>
              </Card>
              <Card>
                <Users className="w-5 h-5 text-amber-600 mb-1"/>
                <div className="font-medium">Mentoring & Outreach</div>
                <div className="text-sm text-slate-600">Mentora Hubs • MEI Foundation scholarships.</div>
              </Card>
            </div>
          </Section>

          {/* PUBLICATIONS */}
          <Section id="publications" title="Selected Publications">
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>
                <span className="font-medium">Assessment of Preservice Teachers’ Awareness and Ability to Apply Artificial Intelligence in Science Teaching.</span>
                <span> Journal of Educational Psychology, 30(6), 267–271, 2025.</span>
              </li>
              <li>
                <span className="font-medium">A New 5C-AI Model and Selected STEM Teacher Education Models from the Past 20 Years: An International Review and Recommendations for Vietnam.</span>
                <span> East African Scholars Journal of Education, Humanities, and Literature, 8(6), 2025.</span>
              </li>
              <li>
                <span className="font-medium">STEM Teaching Competency Framework for Preservice Natural Science Teachers.</span>
                <span> Journal of Educational Psychology, 30(6), 2024.</span>
              </li>
              <li>
                <span className="font-medium">Integrating Educational Robotics into Training Programs for ICT Competence in Teaching.</span>
                <span> In <i>Intelligent Learning Paradigm and Student Empowerment: Digital Integration and Transformation</i>, 2024.</span>
              </li>
              <li>
                <span className="font-medium">Training Teachers with the Combined Teaching Model in Vietnam.</span>
                <span> Springer Nature Conference Proceedings, 2023.</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">
              *Full list available upon request or via Google Scholar/ORCID.*
            </p>
          </Section>

          {/* EXPERIENCE */}
          <Section id="experience" title="Academic Appointments & Professional Experience">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <div className="font-medium">Lecturer, VNU University of Education (2020–present)</div>
                <div className="text-sm text-slate-600 mt-1">
                  Courses: Mathematical Olympiad training, Integrated Science, Teaching Physics in English, Energy & Transformation,
                  Academic Assessment, STEM methods; practicum supervision.
                </div>
              </Card>
              <Card>
                <div className="font-medium">Research Fellow, VNU University of Education (2024–present)</div>
                <div className="text-sm text-slate-600 mt-1">STEM/physics education; IT-supported models for preservice teachers.</div>
              </Card>
              <Card>
                <div className="font-medium">CEO, UberMath – Tuniver Education Group (2017–2019)</div>
                <div className="text-sm text-slate-600 mt-1">Bilingual math education, teacher training, program design.</div>
              </Card>
              <Card>
                <div className="font-medium">Teacher, Hanoi–Amsterdam High School for the Gifted (2011–2017)</div>
                <div className="text-sm text-slate-600 mt-1">Math & science education in English; Olympiad coaching.</div>
              </Card>
              <Card>
                <div className="font-medium">Deputy Director, FPT School System (2014–2015)</div>
                <div className="text-sm text-slate-600 mt-1">Curriculum management and teacher professional development.</div>
              </Card>
              <Card>
                <div className="font-medium">Training Specialist, Dept. of Secondary Education, MOET (2013–2014)</div>
                <div className="text-sm text-slate-600 mt-1">National teacher-training workshops in English for Math/Science.</div>
              </Card>
              <Card>
                <div className="font-medium">Teacher, Southshore Young Adults (SYA) High School, USA (2011–2012)</div>
              </Card>
            </div>
          </Section>

          {/* PROJECTS */}
          <Section id="projects" title="Research Projects">
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>
                <span className="font-medium">QS.24.04 (2024–present):</span> Developing teaching competencies for primary education students through blended methodology courses. Institutional-level project, VNU University of Education.
              </li>
            </ul>
          </Section>

          {/* AWARDS */}
          <Section id="awards" title="Honors & Teaching Achievements">
            <ul className="list-disc pl-6 text-sm text-slate-700 space-y-1">
              <li>Certificates of Excellence, VNU University of Education (2022, 2023).</li>
              <li>Recognitions from Hanoi DoET for national team training at IJSO (2013) and KIMC (2014).</li>
              <li>MOET Award for guiding ISEF national prize-winning projects (2014).</li>
              <li>Co-author, <i>Energy and Transformation</i> (VNU Press, 2024); Series Editor, <i>OpenMath</i> (Grades 1–8, 2020); <i>Self-study Mathematics in English</i> (Grades 1–9, 2015).</li>
            </ul>
          </Section>

          {/* EDUCATION */}
          <Section id="education" title="Education">
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li><b>Ph.D. in Theory, Methods, and Technology of Teaching</b> (2020–2025), VNU University of Education, Hanoi. 
                Dissertation: Developing STEM Teaching Competencies for Preservice Natural Science Teachers Supported by IT (Energy & Transformation). Supervisors: Assoc. Prof. Dr. Pham Kim Chung; Prof. Dr. Mai Van Hung.
              </li>
              <li><b>M.Sc. in Physics</b> (2007–2008), Claude Bernard University Lyon 1, France. Thesis: Observation of Z0 Events in the First Data of the ATLAS Detector (CERN). Supervisor: Prof. Theodore Todorov.</li>
              <li><b>B.Sc. in Physics</b> (2002–2003), University of Paris 11 – Paris Saclay, France.</li>
              <li><b>B.Sc. in Physics Education</b> (1999–2002), VNU University of Science, Vietnam National University, Hanoi.</li>
            </ul>
          </Section>

          {/* CONTACT */}
          <Section id="contact" title="Contact">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a className="inline-flex items-center gap-2 underline" href="mailto:youremail@example.com">
                <Mail className="w-4 h-4"/> tuandang@vnu.edu.vn or minhtuan.dang@gmail.com
              </a>
              <a className="inline-flex items-center gap-2 underline" href="#" target="_blank" rel="noreferrer">
                <Globe className="w-4 h-4"/> ORCID https://orcid.org/0000-0002-4103-1685
              </a>
            </div>
          </Section>
        </Container>
      </main>

      <footer className="py-8 border-t text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Dang Minh Tuan — About
      </footer>
    </div>
  );
}

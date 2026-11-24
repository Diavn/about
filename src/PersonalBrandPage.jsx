import React from "react";
import { Mail, Globe, MapPin, BookOpen, GraduationCap, ExternalLink, Microscope, Users, Award, ClipboardCheck } from "lucide-react";

const pubs = [
  ["2026", "Định hướng thiết kế hoạt động học tập với trí tuệ nhân tạo tạo sinh trong đào tạo giáo viên: Bảo toàn nỗ lực nhận thức, phán đoán sư phạm và liêm chính học thuật", "Đặng Minh Tuấn & Vũ Thị Thúy · Tạp chí Giáo dục, 26(số đặc biệt 8), 276–283", "https://tcgd.tapchigiaoduc.edu.vn/index.php/tapchi/article/view/6302"],
  ["2026", "Đề xuất bước đầu khung năng lực hiểu biết trí tuệ nhân tạo cho học sinh phổ thông: Tổng quan quốc tế và hàm ý thích ứng tại Việt Nam", "Đặng Minh Tuấn · Tạp chí Giáo dục, 26(17), 16–23", "https://tcgd.tapchigiaoduc.edu.vn/index.php/tapchi/article/view/6323"],
  ["2026", "Rethinking digital competence for pre-service teachers in the GenAI era: A conceptual framework for pedagogical GenAI judgment", "Journal of Digital Learning in Teacher Education, 42(3), 168–181", "https://doi.org/10.1080/21532974.2026.2701010"],
  ["2024", "Integrating educational robotics into the training program for developing students’ ICT competence in teaching", "In Intelligent Learning Paradigm and Student Empowerment, CRC Press / Taylor & Francis", null],
  ["2023", "Fostering STEM education competency for elementary education students in university of pedagogy in Vietnam", "International Conference on Mathematical Modeling and Computational Science, Springer Nature, pp. 107–124", null],
  ["2023", "Training teachers by the model of combined teaching in Vietnam", "International Conference on Mathematical Modeling and Computational Science, Springer Nature, pp. 219–234", null],
  ["2022", "The investigation and some suggestions for improvement of STEM education for students majoring in Natural Science Pedagogy at VNU University of Education", "Proceedings of Scientific Conference for Postgraduates, pp. 156–164", null]
];
const Section=({id,kicker,title,children})=><section id={id} className="profile-section"><p className="profile-kicker">{kicker}</p><h2 className="profile-section-title">{title}</h2>{children}</section>;
const Card=({title,children})=><div className="profile-card"><h3 className="card-title">{title}</h3><div className="card-body">{children}</div></div>;
const Anchor=({href,children})=><a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#397d70] hover:underline underline-offset-4">{children}<ExternalLink size={13}/></a>;
export default function AboutPage(){
 return <div className="min-h-screen profile-shell">
   <header className="site-masthead"><div className="masthead-inner"><a className="site-brand" href="#top">Tuan Minh Dang, PhD</a><nav className="header-links" aria-label="Academic navigation"><a href="#about" aria-current="page">About</a><a href="#research">Research</a><a href="https://diavn.github.io/research/shd-ai/">SHD-AI</a><a href="#pgj">PGJ</a><a href="#publications">Publications</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#contact">Contact</a></nav></div></header>
   <div id="top" className="profile-hero"><div className="profile-hero-inner">
       <div className="w-full max-w-[260px] mx-auto"><img src={import.meta.env.BASE_URL + "avatar-2026.jpg"} alt="Portrait of Tuan Minh Dang" className="aspect-square w-full rounded-2xl object-cover shadow-lg" onError={e=>{e.currentTarget.src=import.meta.env.BASE_URL + "avatar.jpg";e.currentTarget.onerror=null;}}/></div>
       <div><p className="profile-kicker mb-3">Academic profile · November 2026</p><h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950">Tuan Minh Dang, PhD</h1><p className="text-lg text-slate-700 mt-3">Lecturer & Researcher · Teacher Education · STEM Education · Human–AI Pedagogical Judgment</p><div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mt-4"><span className="flex items-center gap-1"><MapPin size={16}/> Hanoi, Vietnam</span><span className="flex items-center gap-1"><GraduationCap size={16}/> VNU University of Education, Vietnam National University, Hanoi</span></div><p className="mt-5 max-w-3xl text-slate-700 leading-relaxed">My work asks what counts as credible evidence of human competence and professional judgment when AI participates in educational decisions. I connect teacher education, mathematics and science pedagogy, educational assessment, and the sociology of professional work.</p><div className="profile-actions flex flex-wrap gap-3 mt-6 text-sm"><a href="#pgj" className="rounded-lg bg-[#16354d] text-white px-5 py-3 hover:bg-[#235750]">Explore PGJ research</a><a href="#shd-ai" className="rounded-lg border border-[#a5c2b7] bg-white px-5 py-3 hover:bg-[#e6f0ed]">SHD-AI research agenda</a><a href="#publications" className="rounded-lg border border-[#a5c2b7] bg-white px-5 py-3 hover:bg-[#e6f0ed]">Selected publications</a></div></div>
   </div></div>
   <main className="profile-main">
     <Section id="about" kicker="Biography" title="About"><p className="max-w-4xl leading-relaxed">I am a lecturer and researcher at VNU University of Education, Vietnam National University, Hanoi, with more than 15 years of experience across mathematics and physics teaching, STEM teacher education, curriculum development and research. My academic background combines doctoral work in teaching methodology and educational technology with earlier physics research in France, including ATLAS/CERN-related work. I have taught advanced mathematics in Vietnamese and international school settings and work with prospective teachers on instructional design, assessment and technology-supported learning.</p><p className="max-w-4xl mt-4 leading-relaxed">My current research focuses on how educators evaluate, adapt and justify AI-supported decisions—and on the kinds of evidence needed to distinguish independently demonstrated professional competence from polished human–AI outputs.</p></Section>
     <Section id="research" kicker="Research profile" title="Research areas"><div className="grid md:grid-cols-2 gap-4">
       <Card title="Professional judgment & AI">Pedagogical GenAI Judgment (PGJ), human–AI decision making, teacher agency, interpretive authority, accountability and educational governance.</Card>
       <Card title="Assessment & evidence">Assessment validity, performance-based evidence, independent reasoning, process traces, learning analytics and educational measurement.</Card>
       <Card title="Teacher education & STEM">Pre-service science and primary teacher education, mathematics/physics pedagogy, STEM/STEAM integration, digital teaching competence and curriculum development.</Card>
       <Card title="Education systems & institutions">Teacher professionalization, organizational change and the social and policy context of education and digital transformation in Vietnam and Southeast Asia.</Card>
     </div></Section>
     <Section id="shd-ai" kicker="Long-term research programme · 2026–2035" title="Science of Human Development in the AI Era (SHD-AI)">
       <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
         <div className="profile-feature p-6 md:p-9">
           <p className="feature-kicker font-semibold uppercase mb-3">SHD-AI · Interdisciplinary research agenda</p>
           <h3 className="text-xl md:text-3xl font-semibold tracking-tight leading-snug">How can education transform the growing intelligence of machines into the enduring development of human intelligence, agency, and potential?</h3>
           <p className="mt-4 max-w-3xl text-sm md:text-base text-slate-300 leading-relaxed">My proposed long-term research agenda examines how AI-augmented performance can become durable human capability. It extends the PGJ research programme into the learning sciences, educational measurement, teacher professional learning, creativity and talent, educational equity, relational pedagogy and human-centred AI ecosystems.</p>
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-7">
             {[["7","Research strands"],["35","Proposed studies"],["3","Flagship studies"],["2026–2035","Research roadmap"]].map(([n,label])=><div key={label} className="feature-stat"><p className="text-xl md:text-2xl font-semibold">{n}</p><p className="text-xs text-slate-300 mt-1">{label}</p></div>)}
           </div>
           <div className="flex flex-wrap gap-3 mt-7 text-sm"><a href="https://diavn.github.io/research/shd-ai/" className="profile-button inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold">Explore the research website <ExternalLink size={14}/></a><a href="https://diavn.github.io/research/shd-ai/?lang=vi" className="profile-button secondary inline-flex items-center gap-2 rounded-md px-5 py-3">Tiếng Việt <ExternalLink size={14}/></a></div>
         </div>
         <div className="p-6 md:p-8">
           <p className="text-xs font-semibold uppercase tracking-widest text-[#397d70] mb-4">Three proposed flagship studies</p>
           <div className="grid md:grid-cols-3 gap-5">
             {[
              ["01 · Cognitive science","Generative human understanding","Investigate how learners reconstruct and transfer knowledge supplied by AI."],
              ["02 · Educational measurement","Assessment diagnosticity","Examine when AI-supported work ceases to provide credible evidence of independent competence."],
              ["03 · Education systems","Pedagogical convergence and inequality","Investigate how AI-mediated instructional convergence may shape the distribution of learning opportunities."]
             ].map(([label,title,desc])=><div key={label} className="border-l-2 border-slate-200 pl-4"><p className="text-xs text-[#397d70] font-semibold">{label}</p><h4 className="font-semibold text-slate-900 mt-2">{title}</h4><p className="text-sm text-slate-600 mt-2 leading-relaxed">{desc}</p></div>)}
           </div>
           <p className="mt-6 text-xs text-slate-500 leading-relaxed">SHD-AI is a proposed personal research agenda, not an approved institutional programme or a claim of completed empirical validation. The dedicated bilingual website contains the theoretical foundations, candidate research gaps, study designs, illustrative models and research roadmap.</p>
         </div>
       </div>
     </Section>
     <Section id="pgj" kicker="Conceptual contribution" title="Pedagogical GenAI Judgment (PGJ)">
       <div className="profile-feature rounded-lg p-6 md:p-8"><p className="text-xl md:text-2xl font-medium leading-relaxed">When AI helps produce a convincing lesson plan or assessment, the quality of the finished product alone cannot establish who exercised the pedagogical judgment behind it.</p><p className="text-sm text-[#d7e5e7] mt-4">Research problem underlying PGJ · conceptual framework published in 2026</p></div>
       <p className="max-w-4xl mt-6 leading-relaxed">My 2026 conceptual article introduces PGJ as pre-service teachers’ capacity to determine when and why to use generative AI, formulate pedagogically meaningful prompts, evaluate and revise AI output, adapt it to learners and curriculum, disclose AI use, and remain responsible for final decisions. The article proposes the DigiGen-PST 2030 framework, integrating four connected layers.</p>
       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">{[
         ["01","Foundational digital competence","Information, digital creation, safety and informed use of AI."],
         ["02","Pedagogical transformation","Translate technologies into learning design, feedback and assessment."],
         ["03","Pedagogical GenAI judgment","Decide, prompt, verify, contextualize, disclose and account."],
         ["04","Future-skills orientation","Cultivate learner agency, creativity, collaboration and responsibility."]
       ].map(x=><Card key={x[0]} title={x[0]+" · "+x[1]}>{x[2]}</Card>)}</div>
       <p className="mt-5 text-sm text-slate-600">PGJ and DigiGen-PST 2030 are conceptual proposals; the published article does not claim completed psychometric or intervention validation. <Anchor href="https://doi.org/10.1080/21532974.2026.2701010">Read the published paper</Anchor></p>
     </Section>
     <Section id="agenda" kicker="Research agenda" title="Current and future directions"><div className="grid md:grid-cols-3 gap-4">
       <Card title="1 · Construct and measurement">Examine the boundaries of PGJ alongside PCK, TPACK and AI literacy; study authentic judgment tasks, expert reviews, scoring quality and alternative explanations.</Card>
       <Card title="2 · Human–AI evidence">Investigate verification, revision, reliance and independent performance using task products and decision-process traces, with attention to measurement validity.</Card>
       <Card title="3 · Institutions and governance">Explore how GenAI reshapes professional authority, responsibility and educational decision making across Vietnamese institutions, with longer-term comparative potential.</Card>
     </div><p className="text-sm text-slate-600 mt-4">These directions describe an ongoing research programme and prospective studies, not completed empirical findings or confirmed multi-institutional partnerships.</p></Section>
     <Section id="publications" kicker="Scholarly record" title="Selected publications"><ol className="space-y-4">{pubs.map((p,i)=><li key={i} className="border-l-2 border-[#a5c2b7] pl-4"><p className="text-xs uppercase tracking-wide font-semibold text-[#397d70]">{p[0]}</p><p className="font-medium text-slate-900 mt-1">{p[1]}</p><p className="text-sm text-slate-600 mt-1">{p[2]}{p[3]&&<> · <Anchor href={p[3]}>DOI</Anchor></>}</p></li>)}</ol><p className="text-sm text-slate-600 mt-4">A curated selection, not a complete bibliography. Manuscripts in preparation or under review are not listed as publications. For additional entries, see <a href="https://scholar.google.com/citations?user=x1qvaZ0AAAAJ" target="_blank" rel="noopener noreferrer" className="text-[#397d70] underline">my Google Scholar profile</a>.</p></Section>
     <Section id="experience" kicker="Academic work" title="Appointments and professional experience"><div className="grid md:grid-cols-2 gap-4">
       <Card title="Lecturer & Researcher · VNU University of Education (2020–present)">Teacher preparation, integrated science and primary education, STEM/STEAM methodology, assessment, educational technology, teaching physics in English and academic supervision.</Card>
       <Card title="Mathematics Teacher · Reigate Grammar School Vietnam (2023–2026)">IB Diploma, A-Level and IGCSE mathematics in English; advanced mathematics instruction and assessment.</Card>
       <Card title="Mathematics & Physics Teacher · Hanoi–Amsterdam High School for the Gifted (2011–2017)">Advanced secondary teaching and preparation for mathematics and science competitions.</Card>
       <Card title="Teacher training & education initiatives">Earlier work in national teacher professional development, bilingual mathematics programmes, curriculum and educational projects.</Card>
       <Card title="Scientific Secretary · VNU AI Tutor Project (2026–present)">A VNU-funded initiative on intelligent tutoring for lower-secondary mathematics; total project budget VND 5 billion (approximately USD 190,000). This is total project funding, not a personal grant.</Card>
       <Card title="Earlier physics research">ATLAS/CERN-related master's research; computational modelling and later electromagnetic/metamaterials research in Vietnam.</Card>
     </div></Section>
     <Section id="education" kicker="Qualifications" title="Education and credential evaluation"><div className="space-y-4">
       <Card title="PhD · Theory, Methodology and Technology of Teaching · VNU Hanoi, 2026">Dissertation defended 30 October 2025; degree awarded 24 February 2026. Research on fostering pre-service natural science teachers’ STEM teaching competence with information-technology support.</Card>
       <Card title="U.S. academic credential evaluation · Trustforte, 31 August 2026">Trustforte evaluated the VNU doctorate as equivalent to a U.S. Doctor of Philosophy degree in Educational Technology. This is a third-party credential evaluation; the doctorate was awarded by Vietnam National University, Hanoi, not by a U.S. institution.</Card>
       <Card title="MSc · Physics · Université Claude Bernard Lyon 1, France, 2008">Research in the ATLAS/CERN particle-physics context.</Card>
       <Card title="BSc (Honours) · Physics · Université Paris 11, France, 2003">Undergraduate honours programme in physics.</Card>
       <Card title="BSc (Honours/Talented Students) · Mathematics and Physics · VNU University of Science, 2002">Mathematics and physics training.</Card>
       <Card title="Bok Teaching Certificate · Higher Education Pedagogy, 2018">Harvard Derek Bok Center for Teaching and Learning / HarvardX online programme; a teaching certificate.</Card>
     </div></Section>
     <Section id="service" kicker="Scholarly community" title="Service and professional engagement"><div className="grid md:grid-cols-2 gap-4">
       <Card title="Editorial and scholarly service">Editorial Board Member, Journal of College Science Teaching (2026–2027); Grand Awards Judge, Regeneron ISEF, Physics and Astronomy (2023).</Card>
       <Card title="Science and research communities">International Philosophy Olympiad delegation leadership; engagement in teacher education, educational research training and cross-institutional scholarly collaboration.</Card>
       <Card title="VERS · Vietnam Educational Research Society">A research-development community connecting educators and scholars through methods training, academic seminars, shared resources and opportunities for scholarly collaboration. <Anchor href="https://diavn.github.io/VERS/">Explore VERS</Anchor></Card>
       <Card title="VAR · Vietnam Academic Retreat">A developing research-and-writing retreat concept in Viet Hai, Cat Ba, bringing together focused manuscript work, constructive academic feedback and time for reflection in nature. <Anchor href="https://diavn.github.io/VAR/">Explore VAR</Anchor></Card>
       <Card title="Languages">Vietnamese (native); English and French (professional working proficiency).</Card>
     </div></Section>
     <Section id="contact" kicker="Contact and profiles" title="Get in touch"><div className="flex flex-wrap gap-5 text-sm"><a className="inline-flex items-center gap-2 text-[#397d70] hover:underline" href="mailto:tuandang@vnu.edu.vn"><Mail size={17}/> tuandang@vnu.edu.vn</a><Anchor href="https://orcid.org/0000-0002-4103-1685">ORCID 0000-0002-4103-1685</Anchor><Anchor href="https://diavn.github.io/VERS/">VERS Research Community</Anchor><Anchor href="https://diavn.github.io/VAR/">VAR website</Anchor></div><p className="text-xs text-slate-500 mt-5">Public academic profile updated November 2026. Research plans are described as directions rather than completed results.</p></Section>
   </main><footer className="academic-footer">
<div className="footer-inner">
  <section><div className="footer-identity"><img src="https://diavn.github.io/about/avatar-2026.jpg" alt="" loading="lazy" /><div><h2><a href="https://diavn.github.io/about/">Tuan Minh Dang, PhD</a></h2><p>Lecturer &amp; Researcher</p></div></div><p>Teacher education · STEM education · Human–AI pedagogical judgment</p><p>VNU University of Education, Vietnam National University, Hanoi</p><p>Hanoi, Vietnam</p></section>
  <section><h2 className="footer-heading">Contact &amp; scholarly profiles</h2><div className="footer-links"><a href="mailto:tuandang@vnu.edu.vn">tuandang@vnu.edu.vn</a><a href="https://orcid.org/0000-0002-4103-1685">ORCID: 0000-0002-4103-1685</a><a href="https://scholar.google.com/citations?user=x1qvaZ0AAAAJ">Google Scholar</a><a href="https://diavn.github.io/about/">Personal academic website</a></div></section>
  <section><h2 className="footer-heading">Research &amp; academic communities</h2><div className="footer-links"><a href="https://doi.org/10.1080/21532974.2026.2701010">Pedagogical GenAI Judgment (PGJ) — published article</a><a href="https://diavn.github.io/VERS/">VERS · Vietnam Educational Research Society</a><a href="https://diavn.github.io/VAR/">VAR · Vietnam Academic Retreat</a></div></section>
</div>
<div className="footer-bottom"><span>© {new Date().getFullYear()} Tuan Minh Dang · Academic profile</span></div>
</footer>
 </div>;
}

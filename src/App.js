import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Code, Award, Briefcase, GraduationCap, FolderOpen, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section.toLowerCase());
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              LS
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    activeSection === item.toLowerCase() ? 'text-purple-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-purple-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              LS
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Siphoso Lithalethu
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-semibold">
            Computer Science Honours Graduate
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Oracle Certified Java Developer | Agile PM Certified | SAP ABAP Trained
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full shadow-lg">
              Java SE 8 Certified
            </span>
            <span className="px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full shadow-lg">
              Agile PM Certified
            </span>
            <span className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg">
              Available for Hire
            </span>
          </div>
          <button
            onClick={() => scrollToSection('Contact')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-t-4 border-purple-500">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Computer Science Honours graduate with <span className="font-bold text-purple-600">Oracle Certified Java SE 8 Programmer</span> and <span className="font-bold text-pink-600">Agile Project Management (APMG International)</span> certifications. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hands-on experience in IT support at <span className="font-semibold">University of Fort Hare ICT Department</span> and enterprise software development training at <span className="font-semibold">Mercedes-Benz SA IT Hub</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Proficient in <span className="font-semibold text-blue-600">Java, Python, SAP ABAP, and SQL</span> with a strong foundation in object-oriented programming and Agile methodologies. Passionate about delivering innovative, scalable IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Programming Languages', skills: ['Java', 'Python', 'SAP ABAP', 'C++', 'Visual Basic'], color: 'purple' },
              { category: 'Web Technologies', skills: ['HTML', 'CSS'], color: 'pink' },
              { category: 'Databases', skills: ['MySQL', 'SQL'], color: 'blue' },
              { category: 'Tools & Technologies', skills: ['Git', 'OpenCV', 'Figma', 'MS Office'], color: 'indigo' },
              { category: 'Methodologies', skills: ['Agile Project Management', 'Scrum'], color: 'purple' },
              { category: 'Soft Skills', skills: ['Communication', 'Problem-Solving', 'Teamwork', 'Time Management'], color: 'pink' },
            ].map((skillGroup, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow border-t-4" style={{ borderColor: `var(--${skillGroup.color}-500)` }}>
                <h3 className={`text-xl font-bold mb-4 text-${skillGroup.color}-600`}>{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, i) => (
                    <div key={i} className={`px-4 py-2 bg-${skillGroup.color}-50 rounded-lg text-${skillGroup.color}-700 font-medium`}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl p-8 border-l-8 border-purple-500 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Briefcase className="text-purple-600" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">IT Learner – Agile, Java & SAP ABAP</h3>
                  <p className="text-lg text-purple-600 font-semibold">Netcampus Learnership & Mercedes-Benz Training</p>
                  <p className="text-gray-600">July 2023 – June 2024</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700 ml-12">
                <li>• Completed 6-month intensive training in Agile Project Management and Java SE8, earning certifications</li>
                <li>• Gained strong foundation in software development, OOP, and Agile methodology</li>
                <li>• Selected for SAP ABAP training at Mercedes-Benz SA, with hands-on enterprise systems exposure</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-8 border-l-8 border-blue-500 hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Briefcase className="text-blue-600" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Technical Support Intern</h3>
                  <p className="text-lg text-blue-600 font-semibold">University of Fort Hare – ICT Department</p>
                  <p className="text-gray-600">Jan 2023 – June 2023</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700 ml-12">
                <li>• Provided onsite and remote IT support for staff, lecturers, and students</li>
                <li>• Managed card processing systems and supported audio/video conference equipment</li>
                <li>• Assisted with user migration to Windows Domain and provided Teams/Zoom/Google Meet support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-500">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-purple-600" size={40} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">BSc (Hons) Computer Science</h3>
                  <p className="text-lg text-purple-600 font-semibold">University of Fort Hare</p>
                  <p className="text-gray-600">Feb 2022 - Nov 2022</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-500">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-blue-600" size={40} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">BSc Computer Science & Physics</h3>
                  <p className="text-lg text-blue-600 font-semibold">University of Fort Hare</p>
                  <p className="text-gray-600">Feb 2017 - Nov 2021</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-6 border-l-8 border-yellow-500">
                <div className="flex items-center gap-4">
                  <Award className="text-yellow-600" size={36} />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Oracle Certified Java SE 8 Programmer</h4>
                    <p className="text-yellow-700 font-semibold">2024</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-xl p-6 border-l-8 border-green-500">
                <div className="flex items-center gap-4">
                  <Award className="text-green-600" size={36} />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Agile Project Management</h4>
                    <p className="text-green-700 font-semibold">APMG International - 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12 border-t-4 border-purple-500">
            <div className="flex items-start gap-4 mb-6">
              <FolderOpen className="text-purple-600" size={40} />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Face Detection and Recognition System</h3>
                <p className="text-lg text-purple-600 font-semibold">Academic Project</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Python</span>
                  <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">OpenCV</span>
                  <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Machine Learning</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg ml-14">
              Developed an intelligent facial recognition system using Python and OpenCV library for potential campus security and attendance tracking application.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <p className="text-center text-xl text-gray-700 mb-8">
              I'm available for exciting opportunities! Let's connect.
            </p>
            <div className="space-y-6">
              <a href="mailto:lithalethusiphoso@gmail.com" className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="p-3 bg-purple-500 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-lg font-semibold text-gray-800">lithalethusiphoso@gmail.com</p>
                </div>
              </a>

              <a href="tel:+27787910505" className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="p-3 bg-blue-500 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="text-lg font-semibold text-gray-800">+27 78 791 0505</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/lithalethu-s-579025227/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="p-3 bg-pink-500 rounded-full">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">LinkedIn</p>
                  <p className="text-lg font-semibold text-gray-800">linkedin.com/in/lithalethu-s-579025227</p>
                </div>
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">📍 East London, Eastern Cape, South Africa</p>
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold shadow-lg">
                ✓ Available for Immediate Employment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Siphoso Lithalethu</p>
          <p className="text-purple-200">Computer Science Honours Graduate | Java Developer | Agile PM Certified</p>
          <p className="text-sm text-purple-300 mt-4">© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
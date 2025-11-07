import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Briefcase, GraduationCap, FolderOpen, Menu, X, Award } from 'lucide-react';

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

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f3ff 0%, #fce7f3 50%, #dbeafe 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    nav: {
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
      transition: 'all 0.3s ease'
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px'
    },
    logo: {
      fontSize: '28px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #9333ea, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navLinks: {
      display: 'flex',
      gap: '30px',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      background: 'none',
      border: 'none',
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      cursor: 'pointer',
      transition: 'color 0.3s',
      padding: '5px 0'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '100px 20px 20px'
    },
    heroAvatar: {
      width: '128px',
      height: '128px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #c084fc, #f472b6, #60a5fa)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '48px',
      fontWeight: 'bold',
      margin: '0 auto 30px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
    },
    heroTitle: {
      fontSize: '56px',
      fontWeight: 'bold',
      marginBottom: '16px',
      background: 'linear-gradient(135deg, #9333ea, #ec4899, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    section: {
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '48px',
      background: 'linear-gradient(135deg, #9333ea, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    card: {
      background: 'white',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px'
    },
    badge: {
      display: 'inline-block',
      padding: '8px 20px',
      borderRadius: '20px',
      fontWeight: '600',
      margin: '5px',
      fontSize: '14px'
    },
    skillCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      borderTop: '4px solid'
    },
    skillBadge: {
      padding: '10px 16px',
      borderRadius: '8px',
      marginBottom: '8px',
      fontWeight: '500'
    },
    button: {
      padding: '16px 32px',
      background: 'linear-gradient(135deg, #9333ea, #ec4899)',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 10px 15px -3px rgba(147, 51, 234, 0.3)',
      transition: 'transform 0.2s',
      marginTop: '20px'
    },
    contactCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '16px',
      background: 'linear-gradient(135deg, #f3e8ff, #fce7f3)',
      borderRadius: '12px',
      marginBottom: '16px',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'box-shadow 0.3s'
    },
    iconCircle: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>LS</div>
          <div style={{ display: window.innerWidth > 768 ? 'block' : 'none' }}>
            <ul style={styles.navLinks}>
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    style={{
                      ...styles.navLink,
                      color: activeSection === item.toLowerCase() ? '#9333ea' : '#374151'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#9333ea'}
                    onMouseOut={(e) => e.target.style.color = activeSection === item.toLowerCase() ? '#9333ea' : '#374151'}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div>
          <div style={styles.heroAvatar}>LS</div>
          <h1 style={styles.heroTitle}>Siphoso Lithalethu</h1>
          <p style={{ fontSize: '28px', color: '#374151', marginBottom: '16px', fontWeight: '600' }}>
            Computer Science Honours Graduate
          </p>
          <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '30px' }}>
            Oracle Certified Java Developer | Agile PM Certified | SAP ABAP Trained
          </p>
          <div style={{ marginBottom: '30px' }}>
            <span style={{ ...styles.badge, background: 'linear-gradient(135deg, #9333ea, #a855f7)', color: 'white' }}>
              Java SE 8 Certified
            </span>
            <span style={{ ...styles.badge, background: 'linear-gradient(135deg, #ec4899, #f472b6)', color: 'white' }}>
              Agile PM Certified
            </span>
            <span style={{ ...styles.badge, background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', color: 'white' }}>
              Available for Hire
            </span>
          </div>
          <button
            style={styles.button}
            onClick={() => scrollToSection('Contact')}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <div style={{ ...styles.card, borderTop: '4px solid #9333ea' }}>
          <p style={{ fontSize: '18px', color: '#374151', lineHeight: '1.8', marginBottom: '20px' }}>
            Computer Science Honours graduate with <strong style={{ color: '#9333ea' }}>Oracle Certified Java SE 8 Programmer</strong> and <strong style={{ color: '#ec4899' }}>Agile Project Management (APMG International)</strong> certifications.
          </p>
          <p style={{ fontSize: '18px', color: '#374151', lineHeight: '1.8', marginBottom: '20px' }}>
            Hands-on experience in IT support at <strong>University of Fort Hare ICT Department</strong> and enterprise software development training at <strong>Mercedes-Benz SA IT Hub</strong>.
          </p>
          <p style={{ fontSize: '18px', color: '#374151', lineHeight: '1.8' }}>
            Proficient in <strong style={{ color: '#3b82f6' }}>Java, Python, SAP ABAP, and SQL</strong> with a strong foundation in object-oriented programming and Agile methodologies. Passionate about delivering innovative, scalable IT solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ ...styles.section, background: 'linear-gradient(135deg, #f3e8ff, #fce7f3)', padding: '80px 20px', margin: 0 }}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { category: 'Programming Languages', skills: ['Java', 'Python', 'SAP ABAP', 'C++', 'Visual Basic'], color: '#9333ea' },
            { category: 'Web Technologies', skills: ['HTML', 'CSS'], color: '#ec4899' },
            { category: 'Databases', skills: ['MySQL', 'SQL'], color: '#3b82f6' },
            { category: 'Tools & Technologies', skills: ['Git', 'OpenCV', 'Figma', 'MS Office'], color: '#6366f1' },
            { category: 'Methodologies', skills: ['Agile Project Management', 'Scrum'], color: '#8b5cf6' },
            { category: 'Soft Skills', skills: ['Communication', 'Problem-Solving', 'Teamwork', 'Time Management'], color: '#d946ef' },
          ].map((skillGroup, idx) => (
            <div key={idx} style={{ ...styles.skillCard, borderTopColor: skillGroup.color }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: skillGroup.color }}>
                {skillGroup.category}
              </h3>
              <div>
                {skillGroup.skills.map((skill, i) => (
                  <div key={i} style={{ ...styles.skillBadge, background: `${skillGroup.color}20`, color: skillGroup.color }}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={styles.section}>
        <h2 style={styles.sectionTitle}>Professional Experience</h2>
        <div style={{ ...styles.card, background: 'linear-gradient(135deg, #f5f3ff, #fce7f3)', borderLeft: '8px solid #9333ea' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <Briefcase color="#9333ea" size={32} />
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>IT Learner – Agile, Java & SAP ABAP</h3>
              <p style={{ fontSize: '18px', color: '#9333ea', fontWeight: '600' }}>Netcampus Learnership & Mercedes-Benz Training</p>
              <p style={{ color: '#6b7280' }}>July 2023 – June 2024</p>
            </div>
          </div>
          <ul style={{ marginLeft: '48px', color: '#374151', lineHeight: '1.8' }}>
            <li>Completed 6-month intensive training in Agile Project Management and Java SE8, earning certifications</li>
            <li>Gained strong foundation in software development, OOP, and Agile methodology</li>
            <li>Selected for SAP ABAP training at Mercedes-Benz SA, with hands-on enterprise systems exposure</li>
          </ul>
        </div>

        <div style={{ ...styles.card, background: 'linear-gradient(135deg, #dbeafe, #e0e7ff)', borderLeft: '8px solid #3b82f6', marginTop: '24px' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <Briefcase color="#3b82f6" size={32} />
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Technical Support Intern</h3>
              <p style={{ fontSize: '18px', color: '#3b82f6', fontWeight: '600' }}>University of Fort Hare – ICT Department</p>
              <p style={{ color: '#6b7280' }}>Jan 2023 – June 2023</p>
            </div>
          </div>
          <ul style={{ marginLeft: '48px', color: '#374151', lineHeight: '1.8' }}>
            <li>Provided onsite and remote IT support for staff, lecturers, and students</li>
            <li>Managed card processing systems and supported audio/video conference equipment</li>
            <li>Assisted with user migration to Windows Domain and provided Teams/Zoom/Google Meet support</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" style={{ ...styles.section, background: 'linear-gradient(135deg, #dbeafe, #f3e8ff)', padding: '80px 20px', margin: 0 }}>
        <h2 style={styles.sectionTitle}>Education</h2>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ ...styles.card, borderTop: '4px solid #9333ea', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <GraduationCap color="#9333ea" size={40} />
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>BSc (Hons) Computer Science</h3>
                <p style={{ fontSize: '18px', color: '#9333ea', fontWeight: '600' }}>University of Fort Hare</p>
                <p style={{ color: '#6b7280' }}>Feb 2022 - Nov 2022</p>
              </div>
            </div>
          </div>

          <div style={{ ...styles.card, borderTop: '4px solid #3b82f6', marginBottom: '40px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <GraduationCap color="#3b82f6" size={40} />
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>BSc Computer Science & Physics</h3>
                <p style={{ fontSize: '18px', color: '#3b82f6', fontWeight: '600' }}>University of Fort Hare</p>
                <p style={{ color: '#6b7280' }}>Feb 2017 - Nov 2021</p>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>Certifications</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ ...styles.card, background: 'linear-gradient(135deg, #fef3c7, #fed7aa)', borderLeft: '8px solid #f59e0b' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Award color="#f59e0b" size={36} />
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>Oracle Certified Java SE 8 Programmer</h4>
                  <p style={{ color: '#92400e', fontWeight: '600' }}>2024</p>
                </div>
              </div>
            </div>
            <div style={{ ...styles.card, background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)', borderLeft: '8px solid #10b981' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Award color="#10b981" size={36} />
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>Agile Project Management</h4>
                  <p style={{ color: '#065f46', fontWeight: '600' }}>APMG International - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        <div style={{ ...styles.card, background: 'linear-gradient(135deg, #f5f3ff, #fce7f3, #dbeafe)', borderTop: '4px solid #9333ea' }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
            <FolderOpen color="#9333ea" size={40} />
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Face Detection and Recognition System</h3>
              <p style={{ fontSize: '18px', color: '#9333ea', fontWeight: '600' }}>Academic Project</p>
              <div style={{ marginTop: '12px' }}>
                <span style={{ ...styles.badge, background: '#dbeafe', color: '#1e40af' }}>Python</span>
                <span style={{ ...styles.badge, background: '#d1fae5', color: '#065f46' }}>OpenCV</span>
                <span style={{ ...styles.badge, background: '#f3e8ff', color: '#7c3aed' }}>Machine Learning</span>
              </div>
            </div>
          </div>
          <p style={{ fontSize: '18px', color: '#374151', lineHeight: '1.8', marginLeft: '56px' }}>
            Developed an intelligent facial recognition system using Python and OpenCV library for potential campus security and attendance tracking application.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ ...styles.section, background: 'linear-gradient(135deg, #f3e8ff, #fce7f3, #dbeafe)', padding: '80px 20px', margin: 0 }}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <div style={{ ...styles.card, maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: '20px', color: '#374151', marginBottom: '30px' }}>
            I'm available for exciting opportunities! Let's connect.
          </p>
          
          <a href="mailto:lithalethusiphoso@gmail.com" style={styles.contactCard}>
            <div style={{ ...styles.iconCircle, background: '#9333ea' }}>
              <Mail size={24} />
            </div>
            <div>
              <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Email</p>
              <p style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>lithalethusiphoso@gmail.com</p>
            </div>
          </a>

          <a href="tel:+27787910505" style={styles.contactCard}>
            <div style={{ ...styles.iconCircle, background: '#3b82f6' }}>
              <Phone size={24} />
            </div>
            <div>
              <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Phone</p>
              <p style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>+27 78 791 0505</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/lithalethu-s-579025227/" target="_blank" rel="noopener noreferrer" style={styles.contactCard}>
            <div style={{ ...styles.iconCircle, background: '#ec4899' }}>
              <Linkedin size={24} />
            </div>
            <div>
              <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>LinkedIn</p>
              <p style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>linkedin.com/in/lithalethu-s-579025227</p>
            </div>
          </a>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <p style={{ color: '#6b7280', marginBottom: '16px' }}>📍 East London, Eastern Cape, South Africa</p>
            <div style={{ 
              display: 'inline-block', 
              padding: '12px 24px', 
              background: 'linear-gradient(135deg, #10b981, #059669)', 
              color: 'white', 
              borderRadius: '25px', 
              fontWeight: '600',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              ✓ Available for Immediate Employment
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: 'linear-gradient(135deg, #581c87, #be185d, #1e40af)', 
        color: 'white', 
        padding: '40px 20px', 
        textAlign: 'center' 
      }}>
        <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Siphoso Lithalethu</p>
        <p style={{ color: '#e9d5ff', marginBottom: '8px' }}>Computer Science Honours Graduate | Java Developer | Agile PM Certified</p>
        <p style={{ fontSize: '14px', color: '#f0abfc', marginTop: '16px' }}>© 2025 All rights reserved</p>
      </footer>
    </div>
  );
};

export default Portfolio;
import React from "react";

export default function Undergraduate() {
  const styles = {
    container: {
      fontFamily: "Segoe UI, sans-serif",
      backgroundColor: "#f0f0f0",
      color: "#000",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "30px",
    },
    sectionBox: {
      width: "100%",
      maxWidth: "1000px",
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      padding: "24px",
      marginBottom: "24px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    headerContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
    },
    logoTitle: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    logo: {
      height: "48px",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#004d40",
    },
    nav: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    navLink: {
      color: "#004d40",
      textDecoration: "none",
      fontWeight: "500",
      fontSize: "16px",
    },
    sectionBlock: {
      marginBottom: "20px",
    },
    heading: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#004d40",
      marginBottom: "6px",
    },
    text: {
      fontSize: "16px",
      lineHeight: "1.6",
      whiteSpace: "pre-line",
    },
    link: {
      color: "#004d40",
      textDecoration: "underline",
      fontWeight: "500",
      cursor: "pointer",
    },
    footerText: {
      textAlign: "center",
      color: "#004d40",
      fontWeight: "500",
      fontSize: "15px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <section style={styles.sectionBox}>
        <div style={styles.headerContent}>
          <div style={styles.logoTitle}>
            <img
              src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
              alt="AMU Logo"
              style={styles.logo}
            />
            <span style={styles.title}>Aligarh Muslim University</span>
          </div>
          <nav style={styles.nav}>
            <a style={styles.navLink} href="/">
              Home
            </a>
            <a style={styles.navLink} href="/about">
              About
            </a>
            <a style={styles.navLink} href="/programs">
              Programs
            </a>
            <a style={styles.navLink} href="/faculty">
              Faculty
            </a>
            <a style={styles.navLink} href="/contact">
              Contact
            </a>
          </nav>
        </div>
      </section>

      {/* Body Section */}
      <section style={styles.sectionBox}>
        <div style={styles.sectionBlock}>
          <div style={styles.heading}>Program Name:</div>
          <div style={styles.text}>B.Sc. (Hons.) Computer Applications</div>
        </div>

        <div style={styles.sectionBlock}>
          <div style={styles.heading}>Specialization:</div>
          <div style={styles.text}>Computer Science</div>
        </div>

        <div style={styles.sectionBlock}>
          <div style={styles.heading}>Number of Seats:</div>
          <div style={styles.text}>60</div>
        </div>

        <div style={styles.sectionBlock}>
          <div style={styles.heading}>Degree Requirements:</div>
          <div style={styles.text}>Refer concerned academic ordinances</div>
        </div>

        <div style={styles.sectionBlock}>
          <div style={styles.heading}>Course Requirement:</div>
          <div style={styles.text}>Refer concerned academic ordinances</div>
        </div>

        <div style={styles.sectionBlock}>
          <div style={styles.heading}>Job Prospects:</div>
          <div style={styles.text}>TCS, Wipro, Accenture, HCL, etc.</div>
        </div>

        <div style={styles.sectionBlock}>
          <div style={styles.heading}>
            Program Educational Objectives (PEOs):
          </div>
          <div style={styles.text}>
            PEO1: To produce computer science graduates who will be used as
            leaders and talents for higher education in the field of computer
            science and information technology.{"\n"}
            PEO2: To produce graduates who are skilled in both multidisciplinary
            and domain IT environment.
          </div>
        </div>

        <div style={styles.sectionBlock}>
          <div style={styles.heading}>Program Outcomes (POs):</div>
          <div style={styles.text}>
            PO1: Demonstrate comprehensive knowledge and understanding of the
            field of Computer Science and its inter-disciplinary relevance.
            {"\n"}
            PO2: Demonstrate skills in problem solving, critical thinking and
            scientific reasoning.{"\n"}
            PO3: Demonstrate understanding of professional ethics and social
            responsibility.{"\n"}
            PO4: Develop proficiency in scientific communication.{"\n"}
            PO5: Demonstrate knowledge of mathematical modeling and computing.
            {"\n"}
            PO6: Acquire skills for careers in teaching, research, employment.
            {"\n"}
            PO7: Skills in data management and programming using open source.
            {"\n"}
            PO8: Knowledge in AI, IoT, data science, cloud computing.{"\n"}
            PO9: Apply knowledge to real-world software solutions.{"\n"}
            PO10: Contribute to society through innovation, leadership.
          </div>
        </div>

        <div style={styles.sectionBlock}>
          <div style={styles.heading}>Syllabus:</div>
          <a href="#" style={styles.link}>
            Click here to view syllabus
          </a>
        </div>

        <div style={styles.sectionBlock}>
          <div style={styles.heading}>Curriculum:</div>
          <a href="#" style={styles.link}>
            Click here to view curriculum
          </a>
        </div>

        <div style={styles.sectionBlock}>
          <div style={styles.heading}>Accreditation:</div>
          <div style={styles.text}>Yes</div>
        </div>
      </section>

      {/* Footer Section */}
      <section style={styles.sectionBox}>
        <div style={styles.footerText}>
          © {new Date().getFullYear()} Aligarh Muslim University. All Rights
          Reserved.
        </div>
      </section>
    </div>
  );
}

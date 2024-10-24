import React from 'react';
import './YourStyles.css'; // Ensure this imports your updated styles

function Profile() {
  return (
    <section className="profile-section">
      <h2>About Me</h2>
      <p>
        I am a dedicated and highly motivated Information Technology (IT) major at Kean University with a passion for technology. I have a solid academic background in computer networks, database management, programming, and web development. I aim to apply my skills in internships or entry-level IT positions while contributing to a dynamic organization.
      </p>
      <h3>My Skills</h3>
      <ul className="skills-list">
        <li>Operating Systems: Windows, Linux</li>
        <li>Programming: Java, PHP, Python</li>
        <li>Web Development: HTML, CSS, React</li>
        <li>Database Management: SQL, MySQL</li>
        <li>Network Administration: TCP/IP, DNS, DHCP</li>
      </ul>
    </section>
  );
}

export default Profile;

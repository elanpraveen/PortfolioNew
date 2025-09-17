import React from "react";
import "./Skills.css";

const Skills = () => {
  // Card 1 → Frontend only
  const frontendSkills = {
    category: "Frontend Development",
    items: [
      "React.js",
      "React Router",
      "JavaScript (ES6+)",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "REST/GraphQL API Integration",
    ],
  };

  // Card 2 → Backend + Programming Languages
  const backendAndLanguages = [
    {
      category: "Backend (Support)",
      items: ["Django", "RESTful APIs", "GraphQL"],
    },
    {
      category: "Programming Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "Python"],
    },
  ];

  // Card 3 → Databases + Tools & Software
  const databasesAndTools = [
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL"],
    },
    {
      category: "Tools & Software",
      items: [
        "Git",
        "GitHub",
        "GitLab",
        "Postman",
        "VS Code",
        "PyCharm",
        "Chrome DevTools",
      ],
    },
  ];

  return (
    <div id="skills" className="skills-section">
      <div className="skills-header">
        <h2>
          My <span>Skills</span>
        </h2>
        <p>
          A blend of frontend, backend, and database skills with modern tools to
          build efficient and scalable applications.
        </p>
      </div>

      <div className="skills-grid">
        {/* Card 1 → Frontend */}
        <div className="skill-card">
          <h3>{frontendSkills.category}</h3>
          <ul>
            {frontendSkills.items.map((item, idx) => (
              <li key={idx}>
                <span className="check">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2 → Backend + Programming Languages */}
        <div className="skill-card">
          {backendAndLanguages.map((group, index) => (
            <div key={index} className="grouped-section">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="check">✔</span> {item}
                  </li>
                ))}
              </ul>
              {index < backendAndLanguages.length - 1 && (
                <hr className="divider" />
              )}
            </div>
          ))}
        </div>

        {/* Card 3 → Databases + Tools & Software */}
        <div className="skill-card">
          {databasesAndTools.map((group, index) => (
            <div key={index} className="grouped-section">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="check">✔</span> {item}
                  </li>
                ))}
              </ul>
              {index < databasesAndTools.length - 1 && (
                <hr className="divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

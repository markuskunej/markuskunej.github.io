import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Markus from "../assets/markus.jpeg";
import Resume from "../assets/Markus_Kunej_Resume.pdf";
import "../styles/Home.css";
import Button from "@material-ui/core/Button";

const technicalSkills = [
  { category: "Languages", skills: ["Python", "SQL", "Go"] },
  {
    category: "ML & Data",
    skills: ["TensorFlow", "PyTorch", "LightGBM", "ONNX", "Ray", "Arize", "Snowflake"],
  },
  {
    category: "Backend & Infrastructure",
    skills: ["Django", "AWS (S3, IAM, EKS, ECS)", "Kubernetes", "Docker", "Terraform", "Temporal", "Protobuf"],
  },
  { category: "Frontend", skills: ["React"] },
  {
    category: "Developer Tools",
    skills: ["Claude Code (Custom skills, plugins, and repository guidance)"],
  },
];

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={Markus} alt="Markus Kunej" width="300" height="300" />
        <h2> Welcome!</h2>
        <div className="prompt">
          <p>
            My name’s Markus, and I enjoy turning ideas into useful software,
            applying AI and machine learning, and building reliable systems that
            bring it all together.
          </p>
          <p>
            <Button
              component="a"
              variant="contained"
              href={Resume}
              download="Markus-Kunej-Resume.pdf"
            >
              Download Resume
            </Button>
          </p>
          <a href="https://github.com/markuskunej">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/markuskunej/">
            <LinkedInIcon />
          </a>
          <a href="mailto:kunejmarkus@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
      <section className="skills" aria-labelledby="skills-title">
        <h1 id="skills-title">Skills</h1>
        <ul className="skills-grid">
          {technicalSkills.map(({ category, skills }) => (
            <li className="skill-card" key={category}>
              <h2>{category}</h2>
              <ul className="skill-tags" aria-label={category}>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="interests">
          <h2>Hobbies & Interests</h2>
          <p>
            Soccer, Strategy Games (Catan, Diplomacy), Bikepacking (biking +
            camping), Triathlon, Rocket League
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;

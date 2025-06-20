import React from "react";

const projects = [
  {
    title: "Quiz-App",
    description: "A responsive quiz app built with React and Tailwind CSS that fetches trivia questions from the Open Trivia DB API. Users can customize the number of questions, select answers, view instant score feedback, and replay the quiz with new questions. Features include dynamic rendering, single-answer logic, and smooth UI interactions using hooks and conditional styling.",
    link: "https://github.com/soham1904/Quiz-App",
  },
  {
    title: "EEG-Emotion-Stress-Detection",
    description: "This repository contains the implementation of a machine learning pipeline for the analysis of EEG (electroencephalogram) signals to detect human emotions and stress levels.",
    link: "https://github.com/soham1904/EEG-Emotion-Stress-Detection",
  },
  {
    title: "Business-Project",
    description: "This business website is for fictional small business users. The website is professional and user-friendly, providing visitors with information about the business, its services, contact details, and potentially, an online store.",
    link: "https://github.com/soham1904/Business-Project",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

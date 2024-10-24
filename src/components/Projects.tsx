import React from "react";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="project-heading">Projects</h2>

      <div className="projects-box">
        <div className="project-card">
          <Image
            src="/project1.jpg"
            alt="project image"
            height={220}
            width={400}
          />
          <h3>Calculator</h3>
          <p>
            Developed a fully functional calculator using HTML, CSS, and
            JavaScript, demonstrating my ability to create interactive web
            applications with clean, responsive design and efficient
            functionality.
          </p>

          <button className="project-btn">
            <Link href="">Review Project</Link>
          </button>
        </div>

        <div className="project-card">
          <Image
            src="/project2.jpg"
            alt="project image"
            height={220}
            width={400}
          />
          <h3>Responsive Navbar</h3>
          <p>
            Created a responsive and visually appealing navigation bar using
            HTML, CSS, and JavaScript, ensuring seamless user experience across
            devices with smooth transitions and interactive elements.
          </p>

          <button className="project-btn">
            <Link href="">Review Project</Link>
          </button>
        </div>

        <div className="project-card">
          <Image
            src="/project3.jpg"
            alt="project image"
            height={220}
            width={400}
          />
          <h3>Login Form</h3>
          <p>
            Developed a secure and user-friendly login form using HTML, CSS, and
            JavaScript, with validation features to ensure smooth user
            interaction and enhanced security.
          </p>

          <button className="project-btn">
            <Link href="">Review Project</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

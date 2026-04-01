import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Engineer</h4>
                <h5>INFOSYS</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>Full Stack Java Developer, skilled in building scalable web applications using Java, Spring Boot, and React.
               Proficient in developing RESTful APIs, managing databases, and creating responsive user interfaces. 
               Strong problem-solving abilities with hands-on experience in debugging, performance optimization, and working in Agile environments.
               
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE Intern</h4>
                <h5>INFOSYS</h5>
              </div>
              <h3>2025-26</h3>
            </div>
            <p>
              (Sept 2025 - Jan 2026)
              Software Engineer Intern at Infosys with hands-on experience in developing full-stack web applications using 
              Java, Spring Boot, and React. Built and optimized RESTful APIs, designed efficient database schemas, 
              and worked with SQL to improve performance. 
              Contributed to scalable microservices in a distributed systems environment while following best coding practices. 
              Gained exposure to Agile development, automated testing using Selenium and BDD.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech(CSE)</h4>
                <h5>Graphic Era University </h5>
              </div>
              <h3>2021–25</h3>
            </div>
            <p>
             Bachelor of Technology (B.Tech) in Computer Science, with a strong foundation in 
             data structures, algorithms, and software development principles. 
             Developed problem-solving skills and hands-on experience through academic projects and practical implementations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

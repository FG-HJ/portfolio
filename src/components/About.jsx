import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "02" }
  ];

 
  const googleDriveLink = "https://drive.google.com/file/d/1--trq6QHwvHEXgdZva76OSoTD3oEQFtt/view?usp=sharing";


  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h1 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h1>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I am a software engineer with a focus on creating user-friendly, scalable, and secure applications. 
              With over 4 years of experience in the industry, I have developed software solutions for clients in Smart Contract, 
              Multi-signature wallet integration, NFT markatplace design and development,  Dapp development, finance, and e-commerce. 
              <br/>My expertise in programming languages such as Rust, Golang, Java, Java spring, Python, Solidity , MongoDB, PostgreSQL and SQL, 
              as well as my experience with agile development methodologies, has enabled me to deliver high-quality software on time and within budget. 
              I am passionate about using technology to solve complex problems and improve people's lives. 
              As an engineer, I strive to stay up-to-date with the latest industry trends and innovations, 
              and I am always looking for new challenges and opportunities to learn and grow.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { Component } from "react";
import ReactGA from "react-ga4";

export class AboutPrasidh extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => {},
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      education: <Education />,
      skills: <Skills />,
      projects: <Projects />,
      resume: <Resume />,
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.send({
      hitType: "pageview",
      page: `/${screen}`,
      title: "Custom Title",
    });

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="about prasidh"
            src="./themes/Yaru/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="prasidh' education"
            src="./themes/Yaru/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="prasidh' skills"
            src="./themes/Yaru/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="prasidh' projects"
            src="./themes/Yaru/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="prasidh's resume"
            src="./themes/Yaru/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutPrasidh;

export const displayAboutPrasidh = () => {
  return <AboutPrasidh />;
};

function About() {
  return (
    <>
      <div className="w-20 md:w-28 my-4 bg-white rounded-full">
        <img
          className="w-full"
          src="./images/logos/bitmoji.png"
          alt="prasidh Patel Logo"
        />
      </div>
      <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
        <div>
          my name is <span className="font-bold">Prasidh Aggarwal</span> ,
        </div>
        <div className="font-normal ml-1">
          I'm a{" "}
          <span className="text-pink-600 font-bold">Software Engineer!</span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc">
          I'm a <span className=" font-medium">Graduate Student</span> currently pursuing Computer Science at ASU. I've previously worked at Deloitte as a backend developer for 
          2 years, and now I'm looking for full-time software engineer roles! ( Hit me
          up{" "}
          <a className="text-underline" href="mailto:paggar10@asu.edu">
            <u>@paggar10@asu.edu</u>
          </a>{" "}
          :) )
        </li>
        <li className=" mt-3 list-building">
          {" "}
          I enjoy building awesome softwares that solve practical problems.
        </li>
        <li className=" mt-3 list-time">
          {" "}
          When I am not coding my next project, I like to spend my time working out, playing chess, learning magic/cardistry, or watching {" "}
          <a
            href="https://www.youtube.com/@danidaortiz_oficial"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            dani daoritiz's videos.
          </a>
        </li>
        <li className=" mt-3 list-star">
          {" "}
          I also have interest in Cloud Computing and DevOps!
        </li>
      </ul>
    </>
  );
}
function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Arizona State University
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2022 - 2024</div>
          <div className=" text-sm md:text-base">Computer Science</div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            GPA &nbsp; 4.0/4.0
          </div>
          <br></br>
        </li>
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Manipal Institute of Technology - MU
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2016 - 2020</div>
          <div className=" text-sm md:text-base">Computer Engineering</div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            CGPA &nbsp; 8.9/10
          </div>
        </li>
        <li className="list-disc mt-5">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            Class 12<sup>th</sup> (ICSE)
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2014 - 2016</div>
          <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            Percentile Rank &nbsp; 93.8%
          </div>
        </li>
      </ul>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          I've worked with a wide variety of programming languages & frameworks.
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            My areas of expertise are{" "}
            <strong className="text-ubt-gedit-orange">
              java back-end development, especially Microservices, REST APIs, and Spring boot.
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages & Tools
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
              alt="prasidh java"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white"
              alt="prasidh bash"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
              alt="prasidh c++"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"
              alt="prasidh aws"
            />
            <a
              href="https://www.google.com/search?q=is+html+a+language%3F"
              target="_blank"
              rel="noreferrer"
            >
              <img
                title="yes it's a language!"
                className="m-1"
                src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"
                alt="prasidh HTML"
              />
            </a>
            <img
              src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
              alt="prasidh git"
              className="m-1"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
              alt="prasidh python"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"
              alt="prasidh spring"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="prasidh react"
            />
            <img
              src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
              alt="prasidh node"
              className="m-1"
            />
          </div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <span> And of course,</span>{" "}
          <img
            className=" inline ml-1"
            src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
            alt="prasidh linux"
          />{" "}
          <span>!</span>
        </li>
      </ul>
    </>
  );
}

function Projects() {
  const project_list = [
    {
      name: "Image Classification with IaaS",
      date: "Spring 2023",
      link: "https://github.com/prasidh-agg/Image-Recognition-IaaS",
      description: [
        "An Image classification system made using Java, Python, AWS S3, SQS, Cloudwatch, and EC2.",
      ],
      domains: ["java", "AWS", "python"],
    },
    {
      name: "Digit Classification with Offloading",
      date: "Fall 2022",
      link: "https://github.com/prasidh-agg/digit-classification-offloading",
      description: [
        "An android app that sends an image of a handwritten digit, broken into parts to 4 worker devices that each run ML models and together classify the digit.",
      ],
      domains: ["java", "ML", "android-development"],
    },
    {
      name: "Face Recognition using PaaS",
      date: "Spring 2023",
      link: "https://github.com/prasidh-agg/face-recognition-paas",
      description: [
        "A face recognition system built using Java, tensorFlow, and AWS Lambda.",
      ],
      domains: ["java", "node", "ML", "AWS"],
    },
    {
      name: "Fibo Calculator",
      date: "Spring 2021",
      link: "https://github.com/prasidh-agg/fibo-calculator/tree/master",
      description: [
        "A fibonacci calculator built using AWS Elastic beanstalk, Redis, and PostgreSQL.",
      ],
      domains: ["html5", "javascript", "redis", "postgres", "docker"],
    }
  ];

  const tag_colors = {
    
    html5: "pink-600",
    ML: "yellow-600",
    python: "green-200",
    java: "pink-300",
    python: "blue-300",
    AWS: "purple-600"
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      {project_list.map((project, index) => {
        const projectNameFromLink = project.link.split("/");
        const projectName = projectNameFromLink[projectNameFromLink.length - 1];
        return (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex w-full flex-col px-4"
          >
            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-center items-center">
                  <div className=" text-base md:text-lg mr-2">
                    {project.name.toLowerCase()}
                  </div>
                  <iframe
                    src={`https://ghbtns.com/github-btn.html?user=prasidh-agg&repo=${projectName}&type=star&count=true`}
                    frameBorder="0"
                    scrolling="0"
                    width="150"
                    height="20"
                    title={project.name.toLowerCase() + "-star"}
                  ></iframe>
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                {project.description.map((desc, index) => {
                  return (
                    <li key={index} className="list-disc mt-1 text-gray-100">
                      {desc}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-2">
                {project.domains
                  ? project.domains.map((domain, index) => {
                      const borderColorClass = `border-${tag_colors[domain]}`;
                      const textColorClass = `text-${tag_colors[domain]}`;

                      return (
                        <span
                          key={index}
                          className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}
                        >
                          {domain}
                        </span>
                      );
                    })
                  : null}
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/Prasidh-Aggarwal-Resume.pdf"
      title="prasidh aggarwal resume"
    ></iframe>
  );
}

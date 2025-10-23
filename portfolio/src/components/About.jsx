import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

function About() {
  return (
    <section id="about" className="dark:bg-dark">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black dark:text-white">
            Tyler Christensen
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            Full Stack Developer
          </h1>
          <p className="mb-8 leading-relaxed dark:text-white">
            I am a Full-stack web & app developer with a passion for building
            user-friendly web applications that solve real-world problems.
            Proven ability to learn new technologies quickly and apply them to
            real-world projects. Experience with HTML, CSS, JS, TS, React, Vue,
            Flutter, and Dart, Go, Python. Expertise in building both front-end
            and Full-stack applications, as well as web and mobile apps with
            Flutter & Kotlin.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black dark:text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg dark:text-white"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white dark:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
          <div className="p-8 text-black dark:text-white inline-flex flex-wrap">
            <a
              href="https://github.com/Tylerchristensen100"
              title="github"
              className="block w-40"
              target="_blank"
            >
              <BsGithub className="mx-auto inline-block w-20 mb-4" size={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/tyler-c-83900b11b/"
              title="linkedin"
              className="block w-40"
              target="_blank"
            >
              <BsLinkedin
                className="mx-auto inline-block w-20 mb-4"
                size={50}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

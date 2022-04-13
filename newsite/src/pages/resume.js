import React from 'react';
import resume from './resume/resume.json';




const Info = () => {
return (
    <>
    <h1>{resume.name}</h1>
    <h2>{resume.degree}</h2>
    <p><a id="link" href="https://github.com/Tylerchristensen100">{resume.contact.github}</a></p>
    <br />
    </>
);
}

const Skills = () => {
   
    return (
        <>
            <h3>{resume.skills[0].name}</h3>
            <h5>{resume.skills[0].detail}</h5>
            <h5>{resume.skills[0].experience}</h5>
            <br />

            <h3>{resume.skills[1].name}</h3>
            <h5>{resume.skills[1].detail}</h5>
            <h5>{resume.skills[1].experience}</h5>
            <br />

            <h3>{resume.skills[2].name}</h3>
            <h5>{resume.skills[2].detail}</h5>
            <h5>{resume.skills[2].experience}</h5>
            <br />

            <h3>{resume.skills[3].name}</h3>
            <h5>{resume.skills[3].detail}</h5>
            <h5>{resume.skills[3].experience}</h5>
            <br />

            <h3>{resume.skills[4].name}</h3>
            <h5>{resume.skills[4].detail}</h5>
            <h5>{resume.skills[4].experience}</h5>
            <br />
        </>

    );
    }

const Education = () => {
    return(
        <>
        <h3>{resume.education.name}</h3>
        <h5>{resume.education.level}</h5>
        <h5>{resume.education.expected}</h5>
        <br />
        </>
    );
}


const Projects = () => {
    
        return(
            <>
            <h3>{resume.projects[0].title}</h3>
            <h5>{resume.projects[0].detail}</h5>
            <br />
            <h3>{resume.projects[1].title}</h3>
            <h5>{resume.projects[1].detail}</h5>
            <br />
            </>
        );
     
}

const Awards = () => {
    return(
        <>
            <h5>{resume.awards[0]}</h5>
            <h5>{resume.awards[1]}</h5>
        </>
    );
}





const Resume = () => {
return (
	<>
        <div className="header"><h1>Resume</h1></div>
        <Info />
        <h2>Skills</h2>
        <Skills />
        <h2>Education</h2>
        <Education />
        <h2>Projects</h2>
        <Projects />
        <h2>Awards</h2>
        <Awards />
    </>
);
};

export default Resume;

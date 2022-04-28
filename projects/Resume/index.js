function ready() {
    $(document).ready(function() {

        $.getJSON('englishResume.json', function (resumeData) {
            resume = resumeData;
            displayFromJson();
        });


        $('#toggleSkills').click(toggleSkills);
        $('#toggleEducation').click(toggleEducation);
        $('#toggleProjects').click(toggleProjects);
        $('#toggleAwards').click(toggleAwards);
    });
}

ready();

var resumeG;
var easter = false;
var showSkills = false;
var showProjects = false;
var showEducation = false;
var showAwards = false;

function toggleSkills() {
    showSkills = !showSkills;
    if (showSkills === true) {
        $('#skillsHandler').css('display','block');
    } else {
        $('#skillsHandler').css('display','none');
    }
   
}


function toggleProjects() {
    showProjects = !showProjects;
    if (showProjects === true) {
        $('#projectHandler').css('display','block');
    } else {
        $('#projectHandler').css('display','none');
    }
}

function toggleEducation() {
    showEducation = !showEducation;
    if (showEducation === true) {
        $('#educationHandler').css('display','block');
    } else {
        $('#educationHandler').css('display','none');
    }
}

function toggleAwards() {
    showAwards = !showAwards;
    if (showAwards === true) {
        $('#awardsHandler').css('display','block');
    } else {
        $('#awardsHandler').css('display','none');
    }
}


function Contact() {
   
    $('#name').html(resume.name);
    $('#egg').html(resume.egg);
    $('#cs').html(resume.degree);
    $('#link').html(resume.contact.github);  
}

function Skills() {

    Html();
    Css();
    Jasc();
    Cs();
    Cplpl();

    function Html() {
        $('#htmlName').html(resume.skills.html.name);
        $('#htmlDetail').html(resume.skills.html.detail);
        $('#htmlExperience').html(resume.skills.html.experience);
    }

    function Css() {
        $('#cssName').html(resume.skills.css.name);
        $('#cssDetail').html(resume.skills.css.detail);
        $('#cssExperience').html(resume.skills.css.experience);
    }

    function Jasc() {
        $('#jsName').html(resume.skills.javascript.name);
        $('#jsDetail').html(resume.skills.javascript.detail);
        $('#jsExperience').html(resume.skills.javascript.experience);
    }

    function Cs() {
        $('#csName').html(resume.skills.cSharp.name);
        $('#csDetail').html(resume.skills.cSharp.detail);
        $('#csExperience').html(resume.skills.cSharp.experience);
        $('#csKnowledge').html(resume.skills.cSharp.knowledge);
    }

    function Cplpl() {
        $('#cppName').html(resume.skills.cPP.name);
        $('#cppDetail').html(resume.skills.cPP.detail);
        $('#cppExperience').html(resume.skills.cPP.experience);
    }

}

function Project() {
    $('#project1').html(resume.projects.title1);
    $('#detail1').html(resume.projects.detail1);
    $('#project2').html(resume.projects.title2);
    $('#detail2').html(resume.projects.detail2);
}

function Education() {
    $('#eduName').html(resume.education.name);
    $('#eduGrad').html(resume.education.level);
    $('#eduGradDate').html(resume.education.expected);
}

function Awards() {

    $('#award1').html(resume.awards[0]);
    $('#award2').html(resume.awards[1]);
}

function displayFromJson() {
      
    Contact();
    Skills();
    Project();
    Education();
    Awards();
   
}





  $('#egg').click(checkEaster);


  function checkEaster() {
      if (easter === false) {
          easterEgg();
          easter = true;
      }
      else if (easter === true){
          displayFromJson();
          easter = false;
      }
  }

var easterajax = false;
  function easterEgg() {
    if(easterajax === false) {
        ajaxEaster();
        easterajax = true;
    }
    else if(easterajax === true) {
        displayFromJsonGreek();
    }
    else {
        console.log("ERROR");
    }
  }
   
   function ajaxEaster() {
    $.getJSON('greekedResume.json', function (resumeData) {
        resumeG = resumeData;
        displayFromJsonGreek();
    });
   }
function ContactGreek() {

    $('#name').html(resumeG.name);
    $('#egg').html(resumeG.egg);
    $('#cs').html(resumeG.degree);
    $('#tel').html(resumeG.contact.phone);
    $('#mail').html(resumeG.contact.email);
    $('#link').html(resumeG.contact.github);
}

function SkillsGreek() {

    HtmlGreek();
    CssGreek();
    JascGreek();
    CsGreek();
    CplplGreek();

    function HtmlGreek() {
        $('#htmlName').html(resumeG.skills.html.name);
        $('#htmlDetail').html(resumeG.skills.html.detail);
        $('#htmlExperience').html(resumeG.skills.html.experience);
    }

    function CssGreek() {
        $('#cssName').html(resumeG.skills.css.name);
        $('#cssDetail').html(resumeG.skills.css.detail);
        $('#cssExperience').html(resumeG.skills.css.experience);
    }

    function JascGreek() {
        $('#jsName').html(resumeG.skills.javascript.name);
        $('#jsDetail').html(resumeG.skills.javascript.detail);
        $('#jsExperience').html(resumeG.skills.javascript.experience);
    }

    function CsGreek() {
        $('#csName').html(resumeG.skills.cSharp.name);
        $('#csDetail').html(resumeG.skills.cSharp.detail);
        $('#csExperience').html(resumeG.skills.cSharp.experience);
        $('#csKnowledge').html(resumeG.skills.cSharp.knowledge);
    }

    function CplplGreek() {
        $('#cppName').html(resumeG.skills.cPP.name);
        $('#cppDetail').html(resumeG.skills.cPP.detail);
        $('#cppExperience').html(resumeG.skills.cPP.experience);
    }

}

function ProjectGreek() {
    $('#project1').html(resumeG.projects.title);
    $('#detail1').html(resumeG.projects.time);
}

function EducationGreek() {
    $('#eduName').html(resumeG.education.name);
    $('#eduGrad').html(resumeG.education.level);
    $('#eduGradDate').html(resumeG.education.expected);
}

function AwardsGreek() {

    $('#award1').html(resumeG.awards[0]);
    $('#award2').html(resumeG.awards[1]);
}

function displayFromJsonGreek() {
    ContactGreek();
    SkillsGreek();
    ProjectGreek();
    EducationGreek();
    AwardsGreek();
}
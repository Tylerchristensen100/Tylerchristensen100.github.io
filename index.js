function ready() {
    $(document).ready(function() {

        $.getJSON('resume.json', function (resumeData) {
            resume = resumeData;
            displayFromJson();
        });


        $('#toggleSkills').click(toggleSkills);
        $('#toggleEducation').click(toggleEducation);
        $('#toggleWork').click(toggleWork);
        $('#toggleAwards').click(toggleAwards);
    });
}

ready();

var showSkills = false;
var showWork = false;
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


function toggleWork() {
    showWork = !showWork;
    if (showWork === true) {
        $('#workHandler').css('display','block');
    } else {
        $('#workHandler').css('display','none');
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
    $('#cs').html(resume.degree);
    $('#tel').html(resume.contact.phone);
    $('#mail').html(resume.contact.email);
    $('#link').html(resume.contact.github);  
};

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

};

function Work() {
    $('#position').html(resume.work.title);
    $('#workExperience').html(resume.work.time);
};

function Education() {
    $('#eduName').html(resume.education.name);
    $('#eduGrad').html(resume.education.level);
    $('#eduGradDate').html(resume.education.expected);
}

function Awards() {

    $('#award1').html(resume.awards[0]);
    $('#award2').html(resume.awards[1]);
};

function displayFromJson() {
      
    Contact();
    Skills();
    Work();
    Education();
    Awards();
   
};
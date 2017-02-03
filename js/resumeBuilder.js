var bio = {
    "name": "SUPRINA KAUR",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+91-8191900148",
        "email": "suprinaofficial@gmail.com",
        "github": 'https://github.com/suprinakaur',
        "location": "uttarakhand"
    },
    "welcomeMessage": "Great things take time Don't give up!",
    "skills": ["Software Engineering", "HTML", "CSS", "JavaScript", "Python", "C/C++"],
    "biopic": "images/biopic.jpg"
};
var education = {
    "schools": [{
        "name": "Montfort senior secondary School",
        "location": "haridwar road,belda",
        "degree": "High School",
        "majors": ["PCM"],
        "dates": "2014",
        "url": "http://www.montfortroorkee.com/"
    }, {
        "name": "Chitkara University",
        "location": "Chitkara University, Village Jhansla, Patiala, Punjab",
        "degree": "B.E",
        "majors": ["Computer Science"],
        "dates": "2015-2019",
        "url": "http://www.chitkara.edu.in/"
    }],
    "onlineCourses": [{
            "title": "1. Intro to Programming Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        },
        {
            "title": "2. Intro to Html and Css",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Movie Website",
            "dates": "2016",
            "description": "I have made this movie website using Python",
            "images": ["images/movie.png"]
        },

        {
            "title": " kitten portfolio",
            "dates": "2016",
            "description": "I have made a responsive portfolio page using bootstrap.",
            "images": ["images/portfolio.png"]
        },

        {
            "title": "animal card",
            "dates": "2016",
            "description": "I have made an animal card using html and css",
            "images": ["images/animalcard.png"]
        }
    ]
};

var work = {
    'jobs': [{
        "employer": "Chitkara University",
        "title": "Student",
        "dates": "2015 - Present",
        "location": "Chitkara university, Village Jhansla, Patiala, Punjab",
        "description": "I am pursuing my Bachelor degree here."
    }]
};
bio.display = function() {
    $("#header").prepend(HTMLbioPic.replace('%data%', bio.biopic));
    $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
    $("#header").prepend(HTMLheaderName.replace('%data%', bio.name));




    $("#header").append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    $("#header").append(HTMLskillsStart.replace('%data%', bio.skillsstart));

    for (var i = 0; i < bio.skills.length; i++) {
        $('#skills').prepend(HTMLskills.replace('%data%', bio.skills[i]));

    }
};
bio.display();

var email = HTMLemail.replace('%data%', bio.contacts.email);
var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var github = HTMLgithub.replace('%data%', bio.contacts.github);
var location_home = HTMLlocation.replace('%data%', bio.contacts.location);

var contactsArray = [email, mobile, github, location_home];

for (var i = 0; i < contactsArray.length; i++) {
    $("#topContacts").append(contactsArray[i]);
    $("#footerContacts").append(contactsArray[i]);
}


work.display=function(){
$('#workExperience').append(HTMLjobstart);
for (var i = 0; i < work.jobs.length; i++) {

    var mywork = HTMLworkEmployer.replace('%data%', work.jobs[i].employer) + HTMLworkTitle.replace('%data%', work.jobs[i].title);
    $('.work-entry').append(mywork);
    $('.work-entry').append(HTMLworkDates.replace('%data%', work.jobs[i].dates));
    $('.work-entry').append(HTMLworkLocation.replace('%data%', work.jobs[i].location));
    $('.work-entry').append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
}
};
work.display();


projects.display=function()
{
    $('#projects').append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {
        $('.project-entry').append(HTMLprojectTitle.replace('%data%', projects.projects[i].title));
        $('.project-entry').append(HTMLprojectDates.replace('%data%', projects.projects[i].dates));
        $('.project-entry').append(HTMLprojectDescription.replace('%data%', projects.projects[i].description));
        $('.project-entry').append(HTMLprojectImage.replace('%data%', projects.projects[i].images));
    }
};
projects.display();


education.display=function()
{
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {

        $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree), HTMLschoolDates.replace("%data%", education.schools[i].dates), HTMLschoolLocation.replace("%data%", education.schools[i].location), HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }

    $(".education-entry").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {

        $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school), HTMLonlineDates.replace("%data%", education.onlineCourses[i].date), HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url));
    }
};
education.display();

$('#mapDiv').append(googleMap);
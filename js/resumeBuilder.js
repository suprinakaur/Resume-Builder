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
        "majors": "PCM",
        "dates": "2014",
        "url": "http://www.montfortroorkee.com/"
    }, {
        "name": "Chitkara University",
        "location": "Chitkara University, Village Jhansla, Patiala, Punjab",
        "degree": "B.E",
        "majors": "Computer Science",
        "dates": "2015-2019",
        "url": "http://www.chitkara.edu.in/"
    }],
    "onlineCourses": [{
        "title": "1. Intro to Programming Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    },
    {
        "title": "2. Intro to Html and Css",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }]
};

var projects = {
    "projects": [
    {
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
    'works': [{
        "employer": "Chitkara University",
        "title": "Student",
        "dates": "2015 - Present",
        "location": "Chitkara university, Village Jhansla, Patiala, Punjab",
        "description": "I am pursuing my Bachelor degree here."
    }]
};

$("#header").prepend(HTMLbioPic.replace('%data%',bio.biopic));
$("#header").prepend(HTMLheaderRole.replace('%data%',bio.role));
$("#header").prepend(HTMLheaderName.replace('%data%', bio.name));




$("#header").append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage));
$("#header").append(HTMLskillsStart.replace('%data%',bio.skillsstart));

for(var i in bio.skills)
{
$('#skills').prepend(HTMLskills.replace('%data%',bio.skills[i]));


}


var email=HTMLemail.replace('%data%',bio.contacts.email);
var mobile=HTMLmobile.replace('%data%',bio.contacts.mobile);
var github=HTMLgithub.replace('%data%',bio.contacts.github);
var location_home=HTMLlocation.replace('%data%',bio.contacts.location);

var contactsArray = [email,mobile,github,location_home];

for(var i in contactsArray) {
  $("#topContacts").append(contactsArray[i]);
  $("#footerContacts").append(contactsArray[i]);
}



$('#workExperience').append(HTMLworkStart);
for(var i in work.works){

var mywork =HTMLworkEmployer.replace('%data%',work.works[i].employer) + HTMLworkTitle.replace('%data%',work.works[i].title);
$('.work-entry').append(mywork);
$('.work-entry').append(HTMLworkDates.replace('%data%',work.works[i].dates));
$('.work-entry').append(HTMLworkLocation.replace('%data%',work.works[i].location));
$('.work-entry').append(HTMLworkDescription.replace('%data%',work.works[i].description));
}

$('#projects').append(HTMLprojectStart);
for(var i in projects.projects){
$('.project-entry').append(HTMLprojectTitle.replace('%data%',projects.projects[i].title));
$('.project-entry').append(HTMLprojectDates.replace('%data%',projects.projects[i].dates));
$('.project-entry').append(HTMLprojectDescription.replace('%data%',projects.projects[i].description));
$('.project-entry').append(HTMLprojectImage.replace('%data%',projects.projects[i].images));
}

$("#education").append(HTMLschoolStart);
for (var i in education.schools)
{

       $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree), HTMLschoolDates.replace("%data%", education.schools[i].dates), HTMLschoolLocation.replace("%data%", education.schools[i].location), HTMLschoolMajor.replace("%data%", education.schools[i].majors));
   }

   $(".education-entry").append(HTMLonlineClasses);
   for (var i in education.onlineCourses)
    {

       $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school), HTMLonlineDates.replace("%data%", education.onlineCourses[i].date), HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url));
   }

   $('#mapDiv').append(googleMap);

var bio = {
    "name":"Ankit Kapoor",
    "role":"",
    "contacts":{
	"mobile": "9810508889",
	"email":"ankkapoor87@gmail.com",
	"twitter": "@aceKapoor",
 	"github": "ankkapoor87",
	"location": "Gurgaon"
    },
    "bioPic":"http://i.imgur.com/M9PJ6zf.jpg",
    "welcomeMsg":"Thanks for checking my page. Please send me an email for more information.",
    "skills":["Marketing strategy","Financial analysis","Programming","Teaching"],
    "locationsLived":["Jalandhar","Mysore"],
    display:function() {
	var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedGitHub=HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);

	var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedBioPic=HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomemessage=HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
	$("#header").append(formattedWelcomemessage);

	var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);

	var formattedName=HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);

	if (bio.skills.length > 0){
	    $("#header").append(HTMLskillsStart);
	    for(i in bio.skills)
	    {
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
	    }
	}


    }
};

var work = {
    "jobs":[
	{
	    "employer":"Microsoft India",
	    "title":"Product Marketing Manager",
	    "location":"Gurgaon",
	    "dates":"June 2014 - present",
	    "description":"Windows Business Group"
	},
	{
	    "employer":"GlaxoSmithKline Consumer Healthcare",
	    "title":"Summer Intern",
	    "location":"Gurgaon",
	    "dates":"April 2013 - June 2013",
	    "description":"Designed a new program to build medical practitioners as a distribution channel in rural markets by analyzing the current implementation of the rural health project and by conducting market research across 21 key markets in 2 states"
	},
	{
	    "employer":"Infosys",
	    "title":"System Engineer",
	    "location":"Pune",
	    "dates":"June 2010 - June 2012",
	    "description":"Development of a web based solution to be used by a multinational bank for internal processes <br> Responsible for liaisoning between client's technology teams, and internal technology team for application maintenance and support <br> Underwent extensive training in multiple technologies such as - Java, .NET, SQL"
	}
    ],
    display:function (){
	for(i in work.jobs)
	{
	    $("#workExperience").append(HTMLworkStart);
	    
	    var formattedJob=HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
	    var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[i].title);
	    $(".work-entry:last").append(formattedJob+formattedTitle);
	    
	    var formattedDates=HTMLworkDates.replace("%data%",work.jobs[i].dates);
	    var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[i].location);
	    var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[i].description);
	    
	    $(".work-entry:last").append(formattedDates);
	    $(".work-entry:last").append(formattedLocation);
	    $(".work-entry:last").append(formattedDescription);
	}
    }
};

var education = {
    "schools": [
	{
	    "name":"XLRI Jamshedpur",
	    "location":"Jamshedpur",
	    "degree":"MBA",
	    "major":["Marketing"," Finance"],
	    "grade":"5.45/8",
	    "dates":"2012 - 2014",
	    "url":"http://www.xlri.ac.in/"
	},
	{
	    "name":"A.B. Freeman School of Business",
	    "location":"New Orleans",
	    "degree":"MBA Exchange Student",
	    "major":["Finance"],
	    "grade":"",
	    "dates":"August 2013 - December 2013",
	    "url":"http://www.freeman.tulane.edu/"
	},
	{
	    "name":"Institute of Engineering & Technology, DAVV",
	    "location":"Indore",
	    "degree":"Bachelor of Engineering",
	    "major":["Computer Science"],
	    "grade":"71.08%",
	    "dates":"2010",
	    "url":"http://www.iet.dauniv.ac.in/departments/computer-engineering"
	},
	{
	    "name":"Guru Harkrishan Public School",
	    "location":"Indore",
	    "degree":"Higher Secondary",
	    "major":["Science"],
	    "grade":"81.4%",
	    "dates":"2006"
	},
	{
	    "name":"Guru Harkrishan Public School",
	    "location":"Indore",
	    "degree":"Senior Secondary",
	    "major":[],
	    "grade":"81.8%",
	    "dates":"2004"
	}
    ],
    display:function(){
	for(i in education.schools){
	    $("#education").append(HTMLschoolStart);
	    var formattedSchool=HTMLschoolName.replace("%data%",education.schools[i].name).replace("#",education.schools[i].url);
	    
	    var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[i].degree);
	    $(".education-entry:last").append(formattedSchool+formattedDegree);

	    var formattedDates=HTMLschoolDates.replace("%data%",education.schools[i].dates);
	    $(".education-entry:last").append(formattedDates);

	    var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[i].location);
	    $(".education-entry:last").append(formattedLocation);

	    if (education.schools[i].major.length > 0) {
	    var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[i].major);
		$(".education-entry:last").append(formattedMajor);
	    }
	    else {
		$(".education-entry:last").append("<br>");
	    }
	}
    }
    
}

var projects = {
    "project": [
	{
	    "title":"Equity Analysis - Tulane University",
	    "dates":"August 2013 - December 2013",
	    "description":"Published an investment research report for Carbo Ceramics (NYSE/CRR) with a team of 4 as part of 'Burkenroad reports', a highly acclaimed equity analysis course <br> Responsible for forecasting cash flows and estimating the company value by interviewing top management, visiting company sites, and conducting extensive industry analysis",
	    "url":""
	},
	{
	    "title":"Freelance webpage development",
	    "dates":"January 2015",
	    "description":"Built a website to be used as an invitation for a wedding <br> Technologies used - HTML, CSS, Javascript, AWS, Heroku",
	    "url":"http://www.poojamayank.com/"
	},
    ],
    display:function(){
	for(i in projects.project){
	    $("#projects").append(HTMLprojectStart);

	    var formattedTitle=HTMLprojectTitle.replace("%data%",projects.project[i].title);
	    $(".project-entry:last").append(formattedTitle);

	    var formattedDates=HTMLprojectDates.replace("%data%",projects.project[i].dates);
	    $(".project-entry:last").append(formattedDates);

	    var formattedDescription=HTMLprojectDescription.replace("%data%",projects.project[i].description);
	    $(".project-entry:last").append(formattedDescription);

	    var formattedUrl=HTMLprojectUrl.replace("%data%",projects.project[i].url);
	    if (projects.project[i].url.length>0){
		formattedUrl=formattedUrl.replace("#",projects.project[i].url);
	    }
	    $(".project-entry:last").append(formattedUrl);
	}
    }    
}

var activities = {
    "activity": [
	{
	    "title":"Member - Social Initiatives group at XLRI",
	    "description":"SIGMA is a student run group which works on socially relevant projects in and around Jamshedpur <br> Responsible for were conducting the Joy of Giving Week, organizing blood donation camps, and fund raising for relevant causes",
	    "dates":"2012 - 2014"
	},
	{
	    "title":"Student Mentor at Akanksha Foundation",
	    "description":"Mentor for students of class X at a school run and supported by the NGO",
	    "dates":"2011"
	},
	{
	    "title":"Kickboxing",
	    "description":"Awarded Blue belt by the Indian Association of Kickboxing Organizations",
	    "dates":"2011"
	}
    ],
    display:function() {
	for (i in activities.activity) {
	    $("#activities").append(HTMLactivityStart);

	    var formattedTitle=HTMLactivityTitle.replace("%data%",activities.activity[i].title);
	    $(".activities-entry:last").append(formattedTitle);

	    var formattedDates=HTMLactivityDates.replace("%data%",activities.activity[i].dates);
	    $(".activities-entry:last").append(formattedDates);

	    var formattedDescription=HTMLactivityDescription.replace("%data%",activities.activity[i].description);
	    $(".activities-entry:last").append(formattedDescription);
	}
    }
}

var mapDisplay={
  display:function(){
	$("#mapDiv").append(googleMap);
  }
}

var getClicks={
    clicks:function(){
	$(document).click(function(loc) {
	    var x=loc.pageX;
	    var y=loc.pageY;
	    logClicks(x,y);
	});
    }
}

bio.display();
work.display();
projects.display();
education.display();
activities.display();
mapDisplay.display();
getClicks.clicks();

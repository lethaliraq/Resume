var work = {
	"jobs": [
		{
			"employer": "Smart App's",
			"title": "Software analyest ,UI Designer",
			"location": "Amman, Jordan",
			"dates": "2013-2015",
			"description": "Collaborated with developers, participated in teams through the full Agile software development life cycle:"
			             + "1) read requirements, wrote test plans and designed test cases; 2) set up test environments;"
                         + "3) executed manual testing, posted and tracked bugs; 4) created and ran automated test scripts;"
                         + "5) fiished test reports."
		},
		{
			"employer": "From icons freelance team",
			"title": "Graduate Assistant",
			"location": "Houston, TX, USA",
			"dates": "2013-2016",
			"description": "Developed an algorithm to reduce social network connectivity with effient cuts in MATLAB language."
			             + "Two measures were defied to evaluate the algorithm: average inverse shortest path length (AIPL) and rumor saturation rate (RSR)."
                         + "The algorithm can be used to slow down rumor spreading."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Java Catering Application 1",
			"dates": "2013",
			"description": "Team project to develop a custom Java application for a wedding catering company."
			             + "Documented requirements, created use-case diagrams and descriptions,"
			             + " designed a Swing GUI and implemented functions.",
			"images": ["images/fry.jpg"]
		},
		{
			"title": "Principles of Computer Networks",
			"dates": "2014",
			"description": "Gained experience in the Open Systems Interconnection (OSI) model,"
			             + " created an animation with Java to imitate encoding, decoding and modulation approaches,"
			             + "error detection and correction techniques, shortest path routing mechanism using Dijkstra algorithm.",
			"images": ["images/fry.jpg"]
		}
	]
};

var bio = {
	"name": "Firas Al samaree",
	"role": "Web Designer",
	"welcomeMsg": "Welcome to my website ",
	"contacts": {
		"mobile": "224-578-9536",
		"email": "fmsamaraie@gmail.com ",
		"github": "myGithub",
		"linkedIn": "myLinkedIn",
		"location": "TX"
	},
	"skills": ["java","javaScript","programming","Photoshop"],
	"bioPic": "images/fry.jpg"
};

var education = {
	"schools": [
		{
			"name": "MSS",
			"location": "Jordan",
			"degree": "H.S.",
			"major": "Science",
			"dates": "2007-2009",
			"url": "http://www.mss.edu.jo/"
		},
		{
			"name": "ASU",
			"location": "Jordan",
			"degree": "B.S.",
			"major": "Software Eng",
			"dates": "2010-2014",
			"url": "http://www.asu.edu.jo/"
		}
		],
		"onlineCourses": [
		{
			"title": "Udacity Front-End Engineer Nanodegree",
			"school": "Udacity",
			"dates": 2016,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

//bio
bio.display = function() {
	//name,role
	var formatedName = HTMLheaderName.replace("%data%",bio.name);
	var formatedRole = HTMLheaderRole.replace("%data%",bio.role);

	$("#header").prepend(formatedRole);
	$("#header").prepend(formatedName);

	//contacts
	var formatedEmail = HTMLemail.replace("%data",bio.contacts.email);
	var formatedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formatedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formatedLinkedIn = HTMLblog.replace("%data%",bio.contacts.linkedIn);
	var formatedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

	$("#topContacts").append(formatedMobile);
	$("#topContacts").append(formatedEmail);
	$("#topContacts").append(formatedGithub);
	$("#topContacts").append(formatedLinkedIn);
	$("#topContacts").append(formatedLocation);

	//biopic, welcomeMessage, skills
	var formatedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
	var formatedWelcomeMsg = HTMLwelcomeMsg.replace("%data",bio.welcomeMsg);
	$("#header").append(formatedBioPic);
	$("#header").append(formatedWelcomeMsg);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for(skill in bio.skills) {
			var formatedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formatedSkills);
		}
	}
}

//work
work.display = function() {
	for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formatedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formatedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formatedEmployerTitle = formatedEmployer + formatedTitle;
	var formatedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	var formatedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	var formatedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

	$(".work-entry:last").append(formatedEmployerTitle);
	$(".work-entry:last").append(formatedDates);
	$(".work-entry:last").append(formatedLocation);
	$(".work-entry:last").append(formatedDescription);
}
}

//projects
projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formatedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formatedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formatedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);

		$(".project-entry:last").append(formatedTitle);
		$(".project-entry:last").append(formatedDates);
		$(".project-entry:last").append(formatedDescription);

		if(projects.projects[project].images.length > 0) {
			for(img in projects.projects[project].images) {
				var formatedImages = HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
				$(".project-entry:last").append(formatedImages);
			}
		}
	}
}

//education
education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formatedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formatedSchoolDegree = HTMLschoolName.replace("%data%",education.schools[school].degree);
		var formatedSchoolDates = HTMLschoolName.replace("%data%",education.schools[school].dates);
		var formatedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formatedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);

		$(".education-entry:last").append(formatedSchoolName);
		$(".education-entry:last").append(formatedSchoolDegree);
		$(".education-entry:last").append(formatedSchoolDates);
		$(".education-entry:last").append(formatedSchoolLocation);
		$(".education-entry:last").append(formatedSchoolMajor);
	}

	for(onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);

		var formatedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
		var formatedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
		var formatedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
		var formatedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);

		$(".education-entry:last").append(formatedTitle);
		$(".education-entry:last").append(formatedonlineSchool);
		$(".education-entry:last").append(formatedOnlineDates);
		$(".education-entry:last").append(formatedOnlineURL);
	}
}

//call functions
bio.display();
work.display();
projects.display();
education.display();

//add map
$("#mapDiv").append(googleMap);

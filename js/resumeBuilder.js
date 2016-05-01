/*
This is empty on purpose! Your code to build the resume will go here.
 */


var HTMLnavBar = {
    'bar' : '<nav><hr><ul class="nav nav-pills pull-xs-right"><li class="nav-item"><a class="nav-link" href="#">Projects <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="https://github.com/trhubwork">MyCode</a></li><li class="nav-item"> <a class="nav-link" href="#">EmailMe</a></li><li class="nav-item"> <a class="nav-link" href="#">MyMusic</a></li><li class="nav-item"> <a class="nav-link" href="#">UpWork</a></li><li class="nav-item"> <a class="nav-link" href="#">LinkedIn</a></li></nav>'
  };



//////////////////////
// bio section     //
////////////////////

var bio = {

	"name": "Ted Riss",
	"role": "Web Developer",

	"contacts": {
		"mobile": "203-867-5309",
		"email": "ted@example.com",
		"github": "trhubwork",
		"twitter": "@trexample",
		"blog": "trblogyglob",
		"location": "Denver, CO",
		"upwork": "Excel"
	},

	"welcomeMessage": "A computer programmer, with a focus in JavaScript and Python, looking for independent contracting work.",

  "skills": ["JavaScript ", "Python ", "Excel ", "SEO ", "WordPress"],
  "biopic": "images/ted.jpg",

  "partySkills": [{
		"skill": "JavaScript",
		"description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
	}, {
		"skill": "Python",
		"description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
	}, {
		"skill": "Excel",
		"description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
	}, {
		"skill": "SEO",
		"description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
	}, {
		"skill": "WordPress",
		"description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
	}],




"display" : function() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  $("#header").prepend(formattedName);
  $("#role").append(formattedRole);
  $("#bioinfo").prepend(HTMLcontactGeneric);

  $("#skillaag").append(HTMLskillsStart);
  $("#bioinfo").prepend(HTMLnavBar.bar);



  var len = bio.skills.length;
  for (var skill = 0; skill < len; skill++) {

    var formattedSkill = HTMLskill.replace("%data%", bio.partySkills[skill].skill);
    $("#skillaag").append(formattedSkill);

    var formattedSkillDescrption = HTMLskillDescription.replace("%data%", bio.partySkills[skill].description);
    $("#skillaag").append(formattedSkillDescrption);

  }

  var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#bioinfo").prepend(formattedbioPic);

  var formattedSkillsGlance = HTMLSkillsGlance.replace("%data%", bio.skills);
  $("#bioinfo").prepend(formattedSkillsGlance);


  var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#bioinfo").prepend(formattedwelcomeMsg);


 // iterate through contacts
    //var len = bio.contacts.length;
    //for (var contact = 0; contact < bio.contacts.length; contact++) {

    console.log(bio.contacts);


      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      $("#topContacts").append(formattedMobile);

      var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
      $("#topContacts").append(formattedemail);

      var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
      $("#topContacts").append(formattedlocation);

      var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
      $("#topContacts").append(formattedgithub);

      var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      $("#topContacts").append(formattedtwitter);

      var formattedupwork = HTMLupwork.replace("%data%", bio.contacts.upwork);
      $("#topContacts").append(formattedupwork);


      $("#footerContacts").append(formattedMobile);
      $("#footerContacts").append(formattedemail);
      $("#footerContacts").append(formattedlocation);
      $("#footerContacts").append(formattedgithub);
      $("#footerContacts").append(formattedtwitter);

//}
}
};

bio.display();

/////////////////////
// Education       //
////////////////////

var education = {
  "schools" : [
  {
      "name" : "University of Kansas Graduate School of Business",
      "location" : "Lawrence, KS",
      "degree" : "Masters",
      "majors" : ["Masters of Business Administration"],
      "dates" : "August 2003 - May 2005",
      "url" : "www.business.ku.edu",
    },
  {
    "name" : "University of Kansas",
    "location" : "Lawrence, KS",
    "degree" : "Bachelor of Arts",
    "majors" : ["Political Science"],
    "dates" : "August 1996 - December 2000",
    "url" : "www.ku.edu",
    }
  ],

  "onlineCourses" : [
    {
    "title" : "Front-End Web Developer Nanomajors",
    "school" : "Udacity",
    "date" : "Expected Completion May, 2016",
    "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
    "title" : "JavaScript Basics",
    "school" : "Udacity",
    "date" : "April, 2016",
    "url" : "https://www.udacity.com/course/javascript-basics--ud804"
  },
  {
    "title" : "Linux Command Line Basics",
    "school" : "Udacity",
    "date" : "March, 2016",
    "url" : "https://www.udacity.com/course/linux-command-line-basics--ud595"
  }
],

  "display" : function() {
    var len = education.schools.length;
      for (var school = 0; school < len;  school++) {
      console.log(education.schools[school]);
      $("#education").append(HTMLschoolStart);

      var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
      $(".education-entry:last").append(formattedschoolName);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedschoolDegree);
      var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedschoolDates);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-text:last").append(formattedschoolLocation);
      var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      $(".education-entry:last").append(formattedschoolMajor);
    }
    $("#education").append(HTMLonlineClasses);

    for (var online = 0; online < len; online++) {
      console.log(education.onlineCourses[online]);


      var formattedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title).replace("#", education.onlineCourses[online].url);
      $(".online-education-entry:last").append(formattedtitle);
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
      $(".online-education-entry:last").append(formattedonlineSchool);
      var formattedsonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
      $(".online-education-entry:last").append(formattedsonlineDates);
      var formattedUrl = HTMLonlineURL.replace("#", education.onlineCourses[online].url).replace("%data%", education.onlineCourses[online].url);
      $(".online-education-entry:last").append(formattedUrl);

    }
  }
};

  education.display();

  /////////////////////
  // Work History  ///
  ////////////////////


var work = {
  "jobs": [
    {
      "employer": "Breckline Capital",
      "title": "Managing Director",
      "location": "Denver, CO",
      "dates": "Setptember 2012 - Present",
      "description": "Oversees equity research and portfolio advisory businesses."
    },
    {
      "employer": "ZKC",
      "title": "Equity Analyst",
      "location": "Old Greenwich, CT",
      "dates": "January 2011 - August 2012",
      "description": "Provided equity research on companies in the energy, mining, real estate, resort and transportation industries."
    },
    {
      "employer": "John F. Dillon & Co",
      "title": "Projects / Chartering",
      "location": "Stamford, CT",
      "dates": "December 2008 - November 2010",
      "description": "Oversaw the development of the investment strategy and made recommendations to upper management on how to launch fund.  Developed and implemented marketing plan for the competitive Panamax-Supramax trading desk."
    },
    {
      "employer": "Global Capital Finance",
      "title": "Associate",
      "location": "New York, NY",
      "dates": "July 2005 - January 2008",
      "description": "Sourced transaction opportunities, analyzed markets and competitive landscape.  Was involved in over $300 million in maritime transactions.  Led valuation process for over two billion worth of maritime and real estate invetment opportunities."
    }
  ],

  "display" : function () {
    var len = work.jobs.length;
    for (var job = 0; job < len; job++) {
      console.log(work.jobs[job]);
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      $("#workExperience").append(formattedEmployer);

      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      $("#workExperience").append(formattedTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $("#workExperience").append(formattedDates);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $("#workExperience").append(formattedLocation);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $("#workExperience").append(formattedDescription);
    }
  }
};

work.display();

////////////////////
// Projects      ///
////////////////////


var projects = {
  "projects" : [
    {
      "title" : "Mountains",
      "dates" : "March 2016",
      "description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "images" : ["images/mountains.jpg"]
    },
    {
      "title" : "The Beach",
      "dates" : "March 2016",
      "description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "images" : ["images/slopes.jpg"]
    },
    {
      "title" : "Orange River",
      "dates" : "December 2014",
      "description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "images" : ["images/nicemt.jpg"]
    }
  ],

  "display" : function () {

  var len = projects.projects.length;
  for (var proj = 0; proj < len; proj++) {
    console.log(work.jobs[proj]);
    //$(".project-entrys").append(HTMLprojectStart);
    var formattedProjectsTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
    $(".project-entry").append(formattedProjectsTitle);

    var formattedProjectsDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
    $(".project-entry").append(formattedProjectsDates);

    var formattedProjectsDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
    $(".project-entry").append(formattedProjectsDescription);

    var formattedProjectsImages = HTMLprojectImage.replace("%data%", projects.projects[proj].images);
    $(".project-entry").append(formattedProjectsImages);

    }
  }
};

projects.display();

////////////////////////
///   Map            //
///////////////////////

$("#mapDiv").append(googleMap);

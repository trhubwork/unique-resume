/*
This is empty on purpose! Your code to build the resume will go here.
 */


$("body").css({"backgroundColor" : "#ffffff" , "font-family" : "Arial",});
$("#header").css({"backgroundColor" : "#ffffff" , "font-family" : "Arial"});

$("#role").css("color", "gray");

$("#welcomeMessage").css({marginTop : "10px", paddingBottom : "10px", paddingTop : "10px"});

$("#bioinfo").css({"max-width" : "350px", "backgroundColor" : "#ebebeb", "padding" : "10px"});
$("#topContacts").css({"padding" : "0px", "margin" : "0px", fontSize : "20px"});
$("#skillaag").css({padding: "10px 0px 10px 15px"});

var HTMLnavBar = {
    'bar' : '<nav><hr><ul class="nav nav-pills pull-xs-right"><li class="nav-item"><a class="nav-link" href="#">Projects <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="https://github.com/trhubwork">MyCode</a></li><li class="nav-item"> <a class="nav-link" href="#">EmailMe</a></li><li class="nav-item"> <a class="nav-link" href="#">MyMusic</a></li><li class="nav-item"> <a class="nav-link" href="#">UpWork</a></li><li class="nav-item"> <a class="nav-link" href="#">LinkedIn</a></li></nav>'
  }



//////////////////////
// bio section     //
////////////////////

var bio = {
 "name" : "Ted Riss",
 "role" : "Web Developer",

 "contacts": [
   {
     "mobile" : "203-867-5309",
     "email" : "ted@example.com",
     "github" : "trhubwork",
     "twitter" : "@trexample",
     "blog" : "trblogyglob",
     "location" : "Denver, CO",
     "upwork" : "Excel",
}],

"welcomeMessage" : "A computer programmer, with a focus in JavaScript and Python, looking for independent contracting work.",
"skills" : [{
    "skill" : "JavaScript",
    "description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
    "skill" : "Python",
    "description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt." ,
    },
    {
    "skill" : "Excel",
    "description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
    "skill" : "SEO",
    "description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
    "skill" : "WordPress",
    "description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    }],

"bioPic": "images/ted.jpg",


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

    var formattedSkill = HTMLskill.replace("%data%", bio.skills[skill].skill);
    $("#skillaag").append(formattedSkill);

    var formattedSkillDescrption = HTMLskillDescription.replace("%data%", bio.skills[skill].description);
    $("#skillaag").append(formattedSkillDescrption);

  }

  var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#bioinfo").prepend(formattedbioPic);

  var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#bioinfo").prepend(formattedwelcomeMsg);

 // iterate through contacts
    var len = bio.contacts.length;
    for (var contact = 0; contact < len; contact++) {

    console.log(bio.contacts[contact]);

      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
      $("#topContacts").append(formattedMobile);

      var formattedemail = HTMLemail.replace("%data%", bio.contacts[contact].email);
      $("#topContacts").append(formattedemail);

      var formattedlocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
      $("#topContacts").append(formattedlocation);

      var formattedgithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
      $("#topContacts").append(formattedgithub);

      var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
      $("#topContacts").append(formattedtwitter);

      var formattedupwork = HTMLupwork.replace("%data%", bio.contacts[contact].upwork);
      $("#topContacts").append(formattedupwork);

}
}
};

bio.display();

/////////////////////
// Education       //
////////////////////

var education = {
  "schools" : [
  {
      "schoolname" : "University of Kansas Graduate School of Business",
      "degree" : "Masters",
      "dates" : "August 2003 - May 2005",
      "location" : "Lawrence, KS",
      "major" : ["Masters of Business Administration"],
      "url" : "www.business.ku.edu",
    },
  {
    "schoolname" : "University of Kansas",
    "degree" : "Bachelor of Arts",
    "dates" : "August 1996 - December 2000",
    "location" : "Lawrence, KS",
    "major" : "Political Science",
    "url" : "www.ku.edu",
    }
  ],

  "onlineCourses" : [
    {
    "title" : "Front-End Web Developer Nanodegree",
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
    for (var edu = 0; edu < len;  edu++) {
      console.log(education.schools[edu]);
      $("#education").append(HTMLschoolStart);

      var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[edu].schoolname).replace("#", education.schools[edu].url);
      $(".education-entry:last").append(formattedschoolName);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
      $(".education-entry:last").append(formattedschoolDegree);
      var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
      $(".education-entry:last").append(formattedschoolDates);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
      $(".location-text:last").append(formattedschoolLocation);
      var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
      $(".education-entry:last").append(formattedschoolMajor);

    }
    $(".education-entry:last").append(HTMLonlineClasses);
    var len = education.onlineCourses.length;
    for (var online = 0; online < len; online++) {
      console.log(education.onlineCourses[online]);


      var formattedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title).replace("#", education.onlineCourses[online].url);;
      $(".education-entry:last").append(formattedtitle);
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
      $(".education-entry:last").append(formattedonlineSchool);
      var formattedsonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
      $(".education-entry:last").append(formattedsonlineDates);

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
      "location": "New York, NY.",
      "dates": "July 2005 - January 2008",
      "description": "Sourced transaction opportunities, analyzed markets and competitive landscape.  Was involved in over $300 million in maritime transactions.  Led valuation process for over two billion worth of maritime and real estate invetment opportunities."
    }
  ],

  "display" : function () {
    var len = work.jobs.length;
    for (var jobber = 0; jobber < len; jobber++) {
      console.log(work.jobs[jobber]);
      $("#workExperience").append(HTMLworkStart)

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobber].employer);
      $("#workExperience").append(formattedEmployer);

      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobber].title);
      $("#workExperience").append(formattedTitle);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobber].dates);
      $("#workExperience").append(formattedDates);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobber].location);
      $("#workExperience").append(formattedLocation);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobber].description);
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
      "images" : "images/mountains.jpg"
    },
    {
      "title" : "The Beach",
      "dates" : "March 2016",
      "description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "images" : "images/slopes.jpg"
    },
    {
      "title" : "Orange River",
      "dates" : "December 2014",
      "description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "images" : "images/nicemt.jpg"
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
    $(".projpic").css({"width" : "300px", "height" : "200px"});
    $(".bluesteel").css({"font-size" : "25px" });
  }
};

projects.display();

////////////////////////
///   Map            //
///////////////////////

$("#mapDiv").append(googleMap);

var resume = {
    "name": "SHANMUGAM R",
    "title": "Full Stack Developer",
    "contact": {
      "email": "shanmugamrskfamily@gmail.com",
      "phone": "+91 7845991892",
      "address": "338/10, Mettu Street, Madharpakkam",
      "pin":"Pin-601 202."
    },
    "education": [
      {
        "institution": "University of Madras",
        "degree": "Bachelor of Science",
        "major": "Computer Science",
        "graduationYear": 2017
      },
      {
        "institution": "University of Madras",
        "degree": "Master Degree",
        "major": "Information Technology",
        "graduationYear": 2019
      }
    ],
    "experience": [
      {
        "company": "ABC Inc.",
        "position": "Software Engineer",
        "duration": "2022 - Present",
        "responsibilities": [
          "Developing and maintaining web applications",
          "Collaborating with cross-functional teams",
          "Troubleshooting and debugging code"
        ]
      },
      {
        "company": "XYZ Corp.",
        "position": "Junior Developer",
        "duration": "2020 - 2022",
        "responsibilities": [
          "Assisted senior developers in project development",
          "Performed code reviews and testing",
          "Participated in team meetings and brainstorming sessions"
        ]
      }
    ],
    "skills": [
      "JavaScript",
      "HTML/CSS",
      "React",
      "Node.js",
      "SQL",
      "Git"
    ]
  };
  

  console.log("Name: " + resume.name);
  console.log("Title: " + resume.title);
  console.log("Contact Email: " + resume.contact.email);
  console.log("Contact Phone: " + resume.contact.phone);
  console.log("Contact Address: " + resume.contact.address);
  console.log("                " + resume.contact.pin)
  
  console.log("Education:");
  for (var i = 0; i < resume.education.length; i++) 
  {
    var education = resume.education[i];
    console.log("- " + education.degree + " in " + education.major + ", " + education.institution + ", " + education.graduationYear);
  }
  
  console.log("Experience:");
  for (var i = 0; i < resume.experience.length; i++) 
  {
    var experience = resume.experience[i];
    console.log("- " + experience.position + " at " + experience.company + ", " + experience.duration);
    console.log("  Responsibilities:");
    for (var j = 0; j < experience.responsibilities.length; j++) {
      console.log("  - " + experience.responsibilities[j]);
    }
  }
  
  console.log("Skills: " + resume.skills.join(", "));
  
'use strict'

// variables for adding course to the courses_api
let addCoursebtn = document.getElementById("addCourse");
let codeInput = document.getElementById("courseCode");
let nameInput = document.getElementById("courseName");
let progressionInput = document.getElementById("progression");
let syllabusInput = document.getElementById("courseSyllabus");

// eventlistener when the addCoursbtn is clicked
addCoursebtn.addEventListener('click', addCourse);

// function adding a course from the values in the form
function addCourse() {
    let courseCode = codeInput.value;
    let courseName = nameInput.value;
    let progression = progressionInput.value;
    let courseSyllabus = syllabusInput.value;

    let course = { 'courseCode': courseCode, 'courseName': courseName, 'progression': progression, 'courseSyllabus': courseSyllabus };

    // using fetch and the method POST 
    fetch('https://www.frida360.se/courses-api/api', {
        method: 'POST',
        body: JSON.stringify(course),
    }) 
        .then(response => response.json())
        .then(data => {
            getCourses();
        })
        .catch(error => {
            console.log('Error:', error);
        })
}

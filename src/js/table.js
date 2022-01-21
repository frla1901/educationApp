'use strict'

// variables for the fetching of table content (courses_api)
let coursesEl = document.getElementById("courses");

// eventlistener when the page loads
window.addEventListener('load', getCourses);

// function fetching the courses 
function getCourses() {
    coursesEl.innerHTML = '';

    fetch('https://www.frida360.se/courses-api/api')
        .then(response => response.json())
        .then(data => {
            data.forEach(course => {
                coursesEl.innerHTML += `<tr>
            <td>${course.courseName}</td>  
            <td>${course.courseCode}</td>
            <td>${course.progression}</td>
            <td><a href ="${course.courseSyllabus}"> Länk </a></td>
            <td><button class="update" id="${course.id}" onClick="updateCourse(${course.id})">Uppdatera kursen
            </button></td>
            <td><button class="delete" id="${course.id}" onClick="deleteCourse(${course.id})">Radera kursen
            </button></td>
            </tr>`;
            });
        })
}

// function deleting a course
function deleteCourse(id) {
    fetch('https://www.frida360.se/courses-api/api?id=' + id, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            getCourses();
        })
        .catch(error => {
            console.log('Error:', error);
        })
}


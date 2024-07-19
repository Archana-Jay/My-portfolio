var tablinks = document.getElementsByClassName("tab-links");
var tabcontents =  document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}

const name = "Archana Jayaraman";
let index = 0;
function typeEffect() {
    if (index < name.length) {
        document.getElementById("name").innerHTML += name.charAt(index);
        index++;
        setTimeout(typeEffect, 200); // Adjust the speed here
    }
}

window.onload = typeEffect;

document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.getElementById('see-more-btn');
    const hiddenProjects = document.querySelectorAll('.work.hidden');

    seeMoreBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Toggle the 'hidden' class on the last two projects
        hiddenProjects.forEach(function(project) {
            project.classList.toggle('hidden');
        });

        // Change button text based on visibility state
        if (seeMoreBtn.textContent === 'See More') {
            seeMoreBtn.textContent = 'See Less';
        } else {
            seeMoreBtn.textContent = 'See More';
        }
    });
});



var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right= "0";
}

function closemenu() {
    sidemenu.style.right= "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxJgFJdtKuYfvdwjBOk_tBhpj3Om6gs3kQdpZe9RWs2aox71HZvdsl6J_QJk52tEdo/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.text())
        .then(data => {
            console.log('Success!', data);
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('Error submitting the form. Please try again.');
        });
});

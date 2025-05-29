window.addEventListener('scroll', () => {
            const scrollUpButton = document.querySelector('.scroll-up');
            if (window.pageYOffset > 300) {
                scrollUpButton.style.display = 'block';
            } else {
                scrollUpButton.style.display = 'none';
            }
        });
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }


         function navigateToCV(language) {
    let url = '';

    // Set the URL based on the selected language
    if (language === 'fr') {
        url = 'Downloads/CV_SAUFI_ANAS.pdf'; // French CV URL
    } else if (language === 'en') {
        url = 'Download/CV-English.pdf'; // English CV URL
    }

    // Open the URL in a new tab
    if (url) {
        window.open(url, '_blank');
    }
}
       const itemsData = [
       {
  title: "Autonomous Fire Detection System – Assistant Developer",
  description: "Contributed to the development of an autonomous fire detection system by implementing intervention mechanisms, integrating real-time detection data into a database, and creating a responsive web application for alert visualization. This project combined embedded systems and full-stack web development to deliver an effective monitoring solution.",
  skills: ["JavaScript", "Node.js", "HTML5", "CSS", "MongoDB", "IoT", "Real-time Systems"],
  image: "image/um6p.png"
}
,
{
  title: "Secure Real Estate Web Platform – Web Developer",
  description: "Developed a secure real estate web platform using Express.js and MongoDB. Implemented CRUD operations, user role and session management, route protection, and authentication. Conducted testing to ensure stability and usability. The project enhanced my expertise in backend security and web infrastructure.",
  skills: ["Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS", "Authentication", "Unit Testing"],
  image: "image/crud.png"
}
,
{
  title: "Distributed Monitoring System – Software Development Engineer Intern",
  description: "Currently developing a distributed system for centralized log and trace management using OpenTelemetry, Jaeger, and OpenSearch. Responsible for system prototyping, performance optimization, and visualization workflow enhancement. Collaborating with distributed systems and infrastructure teams to ensure scalable cloud-native solutions.",
  skills: ["OpenTelemetry", "Jaeger", "OpenSearch", "Docker", "Distributed Systems", "Cloud Infrastructure", "Data Visualization"],
  image: "image/ds.png"
}

];

const items = document.querySelectorAll('.item'),
    controls = document.querySelectorAll('.control'),
    slideshowItems = document.querySelectorAll('.item'),
    activeDelay = .76,
    interval = 5000;

var current = 0;
const slider = {
    init: () => {

        controls.forEach((control, index) => {
            control.addEventListener('click', () => {
                slider.clickedControl(index);
            });
        });
        controls[current].classList.add('active');

        items[current].classList.add('active');
    },
    nextSlide: () => {
        slider.reset();
        current = (current + 1) % items.length;
        controls[current].classList.add('active');
        items[current].classList.add('active');
    },
    reset: () => {
        items.forEach(item => item.classList.remove('active'));
        controls.forEach(control => control.classList.remove('active'));
    },
    clickedControl: (index) => {
        slider.reset();
        current = index;
        controls[current].classList.add('active');
        items[current].classList.add('active');
    },
    getCurrentIndex: function() {
        return current;
    }

};


    slideshowItems.forEach(slideshowItem => {
    slideshowItem.addEventListener('click', () => {
        const currentIndex = slider.getCurrentIndex();
        openModal1(itemsData[currentIndex] )
    });
});
slider.init();
setInterval(slider.nextSlide, interval);

function openModal(modalId) {
document.getElementById(modalId).style.display = 'flex'; // Change display to flex for modal visibility
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

    document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        const textArray = ["Software Engineer", "Full-Stack Developer", "Cloud & Distributed Systems Specialist"];
        let typingDelay = 100;
        let erasingDelay = 50;
        let newTextDelay = 1000; // Delay between current and next text
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                document.querySelector(".writing-effect").textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                document.querySelector(".writing-effect").textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex = (textArrayIndex + 1) % textArray.length;
                setTimeout(type, typingDelay + 1100);
            }
        }

        document.addEventListener("DOMContentLoaded", function() { // On DOM load initiate the effect
            setTimeout(type, newTextDelay + 250);
        });
        function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}


      function openModal1(item) {
    // Set the modal's title, description, and image
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalImage').src = item.image;

    // Display the modal
    document.getElementById('itemModal').style.display = "flex";

    // Select the skills container and clear previous skills
    const skillsContainer = document.getElementById('modalSkills');
    skillsContainer.innerHTML = ''; // Clear previous skills

    // Add each skill as a span element
    item.skills.forEach(skill => {
        const skillItem = document.createElement('span');
        skillItem.className = 'skill-item';
        skillItem.innerText = skill;
        skillsContainer.appendChild(skillItem);
    });
}

        function closeModal1() {
  document.getElementById('itemModal').style.display = "none";
}

// Add event listener to close button
document.querySelector('.close').addEventListener('click', closeModal1);

// Close modal if clicked outside of modal content
window.onclick = function(event) {
  if (event.target == document.getElementById('itemModal')) {
    closeModal1();
  }
}
 function closeBanner() {
        document.getElementById('cookieBanner').style.display = 'none';
    }

    function acceptCookies() {
        document.getElementById('cookieBanner').style.display = 'none';
    }
    
    // JavaScript to handle the Shop link click
document.addEventListener('DOMContentLoaded', () => {
    const shopLink = document.getElementById('shopLink');

    shopLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        window.open('https://easylifetoday.com', '_blank'); // Open the shop link in a new tab
    });
});

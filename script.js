// ============================================================
// Site config
// ============================================================
// Set to false to temporarily hide the "Curriculum Vitae" menu item
// (e.g. while you don't want visitors downloading your CV). Set back
// to true whenever you want it visible again.
const CV_DOWNLOAD_ENABLED = false;

document.addEventListener("DOMContentLoaded", () => {
  if (!CV_DOWNLOAD_ENABLED) {
    const cvMenuItem = document.getElementById("cvMenuItem");
    if (cvMenuItem) cvMenuItem.style.display = "none";
  }
});

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
        url = 'Downloads/CV_SAUFI_ANAS_fr.pdf'; // French CV URL
    } else if (language === 'en') {
        url = 'Downloads/CV_SAUFI_ANAS_eng.pdf'; // English CV URL
    }

    // Open the URL in a new tab
    if (url) {
        window.open(url, '_blank');
    }
}

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
        const textArray = ["Software & Automation Engineer", "Industrial Automation Specialist", "Full-Stack Developer"];
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
document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("projectText");
  const btn = document.getElementById("toggleBtn");

  btn.addEventListener("click", () => {
    text.classList.toggle("expanded");
    btn.textContent = text.classList.contains("expanded")
      ? "Read less..."
      : "Read more...";
  });
});

// Experience timeline — reveal each entry as it scrolls into view
document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");
  if (!timelineItems.length) return;

  if (!("IntersectionObserver" in window)) {
    timelineItems.forEach(item => item.classList.add("in-view"));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -60px 0px" });

  timelineItems.forEach(item => revealObserver.observe(item));
});

// GitHub Activity — pulled live from the GitHub API (no third-party widget,
// so it no longer depends on an external image service being up)
document.addEventListener("DOMContentLoaded", () => {
  const statsEl = document.getElementById("githubStats");
  const langEl = document.getElementById("githubLanguages");
  if (!statsEl) return;

  const GH_USER = "asaufi";
  const setStat = (key, value) => {
    const el = statsEl.querySelector(`[data-stat="${key}"]`);
    if (el) el.textContent = value;
  };

  fetch(`https://api.github.com/users/${GH_USER}`)
    .then(res => {
      if (!res.ok) throw new Error("profile fetch failed");
      return res.json();
    })
    .then(user => {
      setStat("repos", user.public_repos);
      setStat("followers", user.followers);
      setStat("since", new Date(user.created_at).getFullYear());
      return fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100`);
    })
    .then(res => {
      if (!res.ok) throw new Error("repos fetch failed");
      return res.json();
    })
    .then(repos => {
      const counts = {};
      repos.forEach(repo => {
        if (repo.language) counts[repo.language] = (counts[repo.language] || 0) + 1;
      });
      const topLanguages = Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([lang]) => lang);
      if (langEl && topLanguages.length) {
        langEl.innerHTML = topLanguages.map(lang => `<span>${lang}</span>`).join("");
      }
    })
    .catch(() => {
      statsEl.innerHTML = '<p class="github-fallback">Live stats are unavailable right now — see the profile directly.</p>';
    });
});

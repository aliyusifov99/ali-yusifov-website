// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for rotating job titles
document.addEventListener('DOMContentLoaded', function() {
    const titles = ["Machine Learning Engineer", "Data Scientist", "AI Enthusiast"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const jobTitleElement = document.getElementById('job-title');
    const typingSpeed = 100; // Speed of typing
    const deletingSpeed = 50; // Speed of deleting
    const delayBetweenTitles = 2000; // Delay between titles after one is fully typed

    function type() {
        if (charIndex < titles[index].length && !isDeleting) {
            // Add next character
            jobTitleElement.textContent += titles[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (charIndex === titles[index].length && !isDeleting) {
            // Pause before deleting
            isDeleting = true;
            setTimeout(type, delayBetweenTitles);
        } else if (charIndex > 0 && isDeleting) {
            // Remove character
            jobTitleElement.textContent = titles[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, deletingSpeed);
        } else if (charIndex === 0 && isDeleting) {
            // Move to the next title
            isDeleting = false;
            index = (index + 1) % titles.length;
            setTimeout(type, typingSpeed);
        }
    }

    // Start the typing effect
    type();
});


function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error including HTML:', error));
}

// Include header and footer
document.addEventListener('DOMContentLoaded', () => {
    includeHTML('includes/header.html', 'header-placeholder');
    includeHTML('includes/footer.html', 'footer-placeholder');
});


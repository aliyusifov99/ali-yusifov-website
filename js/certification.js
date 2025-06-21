document.addEventListener('DOMContentLoaded', function() {
    // Example certification data
    const certifications = [
        {
            title: "Microsoft Certified: Azure Data Fundamentals",
            link: "https://learn.microsoft.com/api/credentials/share/en-us/AliYusifov-9282/74F23950AAAC0058?sharingId=74B69B8F4F89B4EF",
            logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" // Logo URL for Microsoft
        },
        {
            title: "Microsoft Certified: Azure AI Fundamentals",
            link: "https://learn.microsoft.com/en-us/users/aliyusifov-9282/credentials/3fb0633324d5b928?ref=https%3A%2F%2Fwww.linkedin.com%2F",
            logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" // Logo URL for Microsoft
        },
        {
            title: "Google Data Analytics Professional Certificate",
            link: "https://www.coursera.org/account/accomplishments/professional-cert/SPG3A6CAGLQN",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" // Logo URL for Google
        },
        {
            title: "IBM Data Science Professional Certificate",
            link: "https://www.credly.com/badges/f598bec2-2323-42b1-aba4-c4a9a9ab8dca?source=linked_in_profile",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" // Logo URL for IBM
        },
        {
            title: "ABB Innovation - Machine Learning & AI",
            link: "https://www.credential.net/b9fdfae9-7a7d-44af-ac14-a75a92a19299#gs.anjttn",
            logo: "https://abb-bank.az/storage/uploads/1599227225_logo-blue-bg2.jpg" 
        },

        
    ];

    const certificationsContainer = document.getElementById('certifications-container');

    certifications.forEach(cert => {
        // Create card elements
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';

        const cardInner = `
            <div class="card">
                <div class="card-body">
                    <img src="${cert.logo}" alt="${cert.title} Logo" class="logo"> <!-- Positioned as a small icon at the top -->
                    <h5 class="card-title">${cert.title}</h5>
                    <a href="${cert.link}" target="_blank" class="btn btn-credentials">View Credentials</a>
                </div>
            </div>
        `;

        card.innerHTML = cardInner;
        certificationsContainer.appendChild(card);
    });
});

// Function to include HTML (reused for consistency)
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

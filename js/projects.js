document.addEventListener('DOMContentLoaded', () => {
    includeHTML('includes/header.html', 'header-placeholder');
    includeHTML('includes/footer.html', 'footer-placeholder');
    createProjectCards(); // Generate project cards
});

const projects = [
    {
        id: "project23940832",
        name: "Youtube Trend Analysis Poland",
        image: "assets/images/youtube-trend-analysis.png",
        github: "https://github.com/aliyusifov99/youtube_trend_analysis",
        demo: "https://youtubetrendanalysis-ugyp5ndsbhhsfurieiukhw.streamlit.app/"
    },
    {
        id: "project0",
        name: "House Price Prediction Poland",
        image: "assets/images/house-price-prediction-poland.png",
        github: "https://github.com/aliyusifov99/poland_house_price_prediction",
        demo: "https://streamlit-frontend-2vop66ad7a-uc.a.run.app/"
    },
    {
        id: "project1",
        name: "Petrobot",
        image: "assets/images/petrobot.png",
        github: "https://github.com/aliyusifov99/petrobot",
        demo: "https://petrobot.streamlit.app/"
    },
    {
        id: "project2",
        name: "Laptop Price Predictor",
        image: "assets/images/laptop-price-predictor.png",
        github: "https://github.com/aliyusifov99/laptop_price_predictor",
        demo: "https://laptop-price-ml.streamlit.app/"
    },
    {
        id: "project3",
        name: "Loan Default Probability for Banking Sector",
        image: "assets/images/loan-default-probability.png",
        github: "https://github.com/aliyusifov99/loan-default-probability"
    },
    {
        id: "project4",
        name: "Calculating Back Allocation using Machine Learning",
        image: "assets/images/back-allocation.png",
        github: "https://github.com/aliyusifov99/back-allocation-using-machine-learning"
    },
    {
        id: "project5",
        name: "Sentiment Analysis of Fashion Product Reviews",
        image: "assets/images/sentiment-analysis-fashion-product.png",
        github: "https://github.com/aliyusifov99/analyze-fashion-product-reviews"
    },
    {
        id: "project6",
        name: "Analysis of Uber Transportation Patterns using Python",
        image: "assets/images/uber-mec-ds.png",
        github: "https://github.com/aliyusifov99/mec-ds-competition"
    },
    {
        id: "project7",
        name: "Hollywood Theatrical Market Analysis (1995-2021)",
        image: "assets/images/hollywood-theater-analysis.png",
        github: "https://github.com/aliyusifov99/hollywood-theatrical-market-synopsis-1995-to-2021"
    },
    {
        id: "project8",
        name: "Job Board Data Scraping Project using BeatifulSoup",
        image: "assets/images/web-scraping-job-portal.png",
        github: "https://github.com/aliyusifov99/job-board-data-scraping"
    },
    {
        id: "project9",
        name: "Well Log Data Analysis using Python",
        image: "assets/images/well-log-analysis.png",
        github: "https://github.com/aliyusifov99/well-log-data-analysis"
    }
];

// Function to create project cards
function createProjectCards() {
    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        // Create card elements
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';

        const cardInner = `
            <div class="card h-100">
                <img src="${project.image}" class="card-img-top" alt="${project.name}">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <a href="project-details.html?id=${project.id}" target="_blank" class="btn btn-read mt-2">Learn More</a>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <a href="${project.github}" target="_blank" class="btn btn-read ">GitHub</a>
                    ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-project-demo">Demo</a>` : ''}
                </div>
            </div>
        `;

        card.innerHTML = cardInner;
        projectsContainer.appendChild(card);
    });
}

// Function to include HTML (reuse from the main script)
function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error including HTML:', error));
}

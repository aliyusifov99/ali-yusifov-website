// Example project data (same as in your main script)
const projects = [
    {
        id: "project23940832",
        name: "Youtube Trend Analysis Poland",
        image: "assets/images/youtube-trend-analysis.png",
        github: "https://github.com/aliyusifov99/youtube_trend_analysis",
        demo: "https://youtubetrendanalysis-ugyp5ndsbhhsfurieiukhw.streamlit.app/",
        description: "An end-to-end data engineering project that builds an automated pipeline to ingest, process, and visualize daily trending YouTube video data for the Polish region.",
        techStack: ["Spark", "Azure Databricks", "Github Actions", "Azure Data Lake Storage Gen 2", "Streamlit"]
    },    
    {
        id: "project0",
        name: "House Price Prediction Poland",
        image: "assets\\images\\house-price-prediction-poland.png",
        github: "https://github.com/aliyusifov99/poland_house_price_prediction",
        demo: "https://streamlit-frontend-2vop66ad7a-uc.a.run.app/",
        description: "This project is a comprehensive application for predicting house and rent prices in Poland using various machine learning models. The application is built with FastAPI for the backend API and Streamlit for the frontend UI. The project includes data preprocessing, data versioning, model training, and deployment on Google Cloud Platform (GCP).",
        techStack: ["FastAPI", "MLflow", "Streamlit", "Requests", "DVC", "Docker", "Google Cloud","Pandas", "Scikit-learn", "Joblib", "CatBoost", "XGBoost", "LightGBM"]
    },
    {
        id: "project1",
        name: "Petrobot",
        image: "assets\\images\\petrobot.png",
        github: "https://github.com/aliyusifov99/petrobot",
        demo: "https://petrobot.streamlit.app/",
        description: "PetroBot is a chatbot tailored for the petroleum industry, combining the power of machine learning with detailed industry-specific insights. This project utilizes OpenAI's cutting-edge technology to transform the way professionals access information, making user interaction with complex manuals as simple as asking a question",
        techStack: ["Python", "Streamlit",  "Exploratory Data Analysis (EDA)", "Pandas", "OpenAI", "Tiktoken", "Scipy"]
    },
    {
        id: "project2",
        name: "Laptop Price Predictor",
        image: "assets\\images\\laptop-price-predictor.png",
        github: "https://github.com/aliyusifov99/laptop_price_predictor",
        description: "Laptop Price Predictor is an innovative tool designed to estimate the market value of laptops. This project leverages machine learning techniques to analyze various features of laptops, providing users with accurate price predictions.",
        demo: "https://laptop-price-ml.streamlit.app/",
        techStack: [,
            "Pandas",
            "NumPy",
            "Seaborn",
            "Exploratory Data Analysis (EDA)",
            "Matplotlib",
            "Scikit-Learn",
            "Machine Learning Models"]
    },
    {
        id: "project3",
        name: "Loan Default Probability",
        image: "assets\\images\\loan-default-probability.png",
        github: "https://github.com/aliyusifov99/loan-default-probability",
        description: "This project aims to predict the likelihood of loan defaults using machine learning techniques.",
        techStack: ['Ensemble methods',  "Exploratory Data Analysis (EDA)",'scikit-learn', 'matplotlit', 'pandas','numpy', 'catboost']
    },
    {
        id: "project4",
        name: "Calculating Back Allocation using Machine Learning",
        image: "assets\\images\\back-allocation.png",
        github: "https://github.com/aliyusifov99/back-allocation-using-machine-learning",
        description: "This project focuses on calculating back allocation in oil and gas wells through advanced machine learning techniques. This process involves analyzing production data from multiple wells to determine their individual contributions to the overall production.",
        techStack: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-Learn",
            "XGBoost",
            "LightGBM",
            "Plotly",
            "Matplotlib",
            "Hyperparameter Tuning (GridSearchCV)"
        ]
    },
    {
        id: "project5",
        name: "Sentiment Analysis of Fasion Product Reviews",
        image: "assets\\images\\sentiment-analysis-fashion-product.png",
        github: "https://github.com/aliyusifov99/analyze-fashion-product-reviews",
        description: "This project is centered around analyzing fashion product reviews to predict ratings and recommendations. Utilizing deep learning techniques, the project delves into the nuances of customer feedback to derive meaningful insights.",
        techStack: [
            "Python",
            "Pandas",
            "NumPy",
            "Seaborn",
            "Matplotlib",
            "Descriptive Statistics",
            "Exploratory Data Analysis (EDA)",
            "Scikit-Learn",
            "XGBoost",
            "LightGBM",
            "Plotly",
            "Hyperparameter Tuning (GridSearchCV)",
]
    },
    {
        id: "project6",
        name: "Analysis of Uber Transportation Patterns using Python",
        image: "assets\\images\\uber-mec-ds.png",
        github: "https://github.com/aliyusifov99/mec-ds-competition",
        description: "The objective was to leverage data science and machine learning techniques to analyze energy usage patterns, specifically in the context of urban mobility. By processing and interpreting data from Uber and optimising the route of goods delivery, we aimed to propose solutions for more energy-efficient urban transportation systems .",
        techStack: [
            "Python",
            "Pandas",
            "GeoPandas",
            "NumPy",
            "Seaborn",
            "Matplotlib",
            "Requests",
            "JSON",
            "Scikit-Learn",
            "Machine Learning Models",
            "Principal Component Analysis (PCA)",
        ]
    },
    {
        id: "project7",
        name: "​Hollywood Theatrical Market Analysis (1995-2021)",
        image: "assets\\images\\hollywood-theater-analysis.png",
        github: "https://github.com/aliyusifov99/hollywood-theatrical-market-synopsis-1995-to-2021",
        description: "This project provides a comprehensive analysis of the Hollywood theatrical market from 1995 to 2021. Using various datasets, it explores annual ticket sales, highest grossers, popular creative types, top distributors, genres, ratings, sources, production methods, and the count of wide releases.",
        techStack: ['PLotly', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
    },
    {
        id: "project8",
        name: "Job Board Data Scraping Project ",
        image: "assets\\images\\web-scraping-job-portal.png",
        github: "https://github.com/aliyusifov99/job-board-data-scraping",
        description: "This project involves scraping job board websites to extract relevant job postings. By automating the data collection process, the project aims to provide users with up-to-date job listings.",
        techStack: ['Python', 'BeautifulSoup', 'Pandas', 'Requests']
    },
    {
        id: "project9",
        name: "Well Log Data Analysis using Python ",
        image: "assets\\images\\well-log-analysis.png",
        github: "https://github.com/aliyusifov99/well-log-data-analysis",
        description: "Well Log Data Analysis is a project focused on analyzing well log data in the oil and gas industry. This analysis is crucial for understanding the geological properties of drilling sites. The project utilizes the Log LAS format, a common data format for well logs, and demonstrates techniques for loading, exploring, and visualizing this data. ",
        techStack: ['lasio', 'matplotlib', 'missingno', 'numpy', 'pandas']
    }]

// Function to get URL parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to load project details
function loadProjectDetails() {
    const projectId = getQueryParam('id');
    const project = projects.find(p => p.id === projectId);

    if (project) {
        document.getElementById('project-title').textContent = project.name;
        // document.getElementById('project-image').src = project.image;
        document.getElementById('project-description').textContent = project.description;

        const projectLinks = document.getElementById('project-links');
        projectLinks.innerHTML = `
            <a href="${project.github}" target="_blank" class="btn btn-read mr-2">GitHub</a>
            ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-project-demo">Demo</a>` : ''}
        `;

        // Generate tech stack badges
        const techStackContainer = document.getElementById('tech-stack-container');
        techStackContainer.innerHTML = ''; // Clear existing badges
        project.techStack.forEach(tech => {
            const badge = document.createElement('div');
            badge.className = 'tech-badge';
            badge.textContent = tech;
            techStackContainer.appendChild(badge);
        });
    } else {
        document.getElementById('project-title').textContent = "Project Not Found";
        document.getElementById('project-description').textContent = "The project you're looking for doesn't exist.";
    }
}

// Include header and footer and load project details
document.addEventListener('DOMContentLoaded', () => {
    includeHTML('includes/header.html', 'header-placeholder');
    includeHTML('includes/footer.html', 'footer-placeholder');
    loadProjectDetails(); // Load the project details
});

// Function to include HTML (same as in your main script)
function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error including HTML:', error));
}

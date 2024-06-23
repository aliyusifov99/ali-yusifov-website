// Example blog data
const blogs = [
    {
        title: "İlk Microsoft sertifikatımı (AI-900) necə qazandım?",
        image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*dDRxCgOqWjoQmpMfjlcWew.jpeg",
        date: "June 19, 2024",
        mediumLink: "https://medium.com/@ali.yusifli0011/i%CC%87lk-microsoft-sertifikat%C4%B1n%C4%B1-ai900-nec%C9%99-qazand%C4%B1m-717e1f7e060e"
    },
    // Add more blog entries as needed
];

// Function to create blog list
function createBlogList() {
    const blogsContainer = document.getElementById('blogs-container');

    blogs.forEach(blog => {
        // Create blog item elements
        const blogItem = document.createElement('div');
        blogItem.className = 'blog-item';

        const blogImage = document.createElement('img');
        blogImage.src = blog.image;
        blogImage.alt = blog.title;
        blogImage.className = 'blog-image';

        const blogContent = document.createElement('div');
        blogContent.className = 'blog-content';

        const blogTitle = document.createElement('h5');
        blogTitle.className = 'blog-title';
        blogTitle.textContent = blog.title;

        const blogDate = document.createElement('p');
        blogDate.className = 'blog-date';
        blogDate.textContent = blog.date;

        const blogDescription = document.createElement('p');
        blogDescription.className = 'blog-description';
        blogDescription.textContent = blog.description;

        const readButton = document.createElement('a');
        readButton.className = 'btn btn-read';
        readButton.href = blog.mediumLink;
        readButton.target = '_blank';
        readButton.textContent = 'Read on Medium';

        // Append elements to the blog content
        blogContent.appendChild(blogTitle);
        blogContent.appendChild(blogDate);
        blogContent.appendChild(blogDescription);
        blogContent.appendChild(readButton);

        // Append image and content to the blog item
        blogItem.appendChild(blogImage);
        blogItem.appendChild(blogContent);

        // Append the blog item to the container
        blogsContainer.appendChild(blogItem);
    });
}

// Include header, footer and create blog list
document.addEventListener('DOMContentLoaded', () => {
    includeHTML('includes/header.html', 'header-placeholder');
    includeHTML('includes/footer.html', 'footer-placeholder');
    createBlogList(); // Generate blog list
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

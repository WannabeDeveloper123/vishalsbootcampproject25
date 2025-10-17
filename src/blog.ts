type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    slug: string;
};

// Blog Data
const blogs: Blog[] = [
    {
        title: "Visiting Marina Bay (again)",
        date: "October 10, 2025",
        description: "Singapore, if you haven't known, is a tiny island country located on the peninsular tip of Malaysia. In fact, Singapore is so small that you'd have to look at the world map through a microscope to find where it's located. It's a country where you could get from one end to the other while watching a Coldplay concert (yikes!)... unless you end up behind a truck doing 40 on the passing lane. Putting my witty metaphors aside, I'll admit, it does get pretty hot out there. Anyway, here's a pic of the famous Marina Bay Sands Hotel, which I've taken about a thousand times considering Singapore's my home for the past 12 years. (I love elderly women screaming at me for taking a seat on the bus!)",
        image: "./mbs1.JPG",
        slug: "Visiting Marina Bay (again)",
    },
];

// DOM work
const blogContainer = document.getElementById('blog-container');
if (blogContainer) {
    blogs.forEach(blog => {
    
        const blogLink = document.createElement('a');
        
        blogLink.href = `./blogs/${blog.slug}.html`; 
        blogLink.className = 'blog-post-link';

        const blogPostDiv = document.createElement('div');
        blogPostDiv.className = 'floating-tile'; 

        const image = document.createElement('img');
        image.src = blog.image;
        image.className = 'tile-image';

        const textWrapperDiv = document.createElement('div');
        textWrapperDiv.className = 'tile-text';

        const title = document.createElement('h2');
        title.textContent = blog.title;

        const date = document.createElement('p');
        date.textContent = blog.date;
        date.className = 'blog-date';

        const description = document.createElement('p');
        description.textContent = blog.description;
        description.className = 'blog-description';

        textWrapperDiv.appendChild(title);
        textWrapperDiv.appendChild(date);
        textWrapperDiv.appendChild(description);
       
        blogPostDiv.appendChild(textWrapperDiv);
        blogPostDiv.appendChild(image);

        blogLink.appendChild(blogPostDiv);
        blogContainer.appendChild(blogLink);
    });
}
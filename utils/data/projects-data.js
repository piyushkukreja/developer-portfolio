import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Movie Recommendation System',
        description: 'I have designed and developed a full fledged movie recommedation system using python. I created the UI using Flask, Bootstrap and MUI. The recommendation system also works without the user having to log in at all. The system is developed using both item based filtering and collaborative filtering methods and used MongoDB for all data specific tasks',
        tools: ['Python', 'Bootstrap', "MongoDB", "Flask"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 2,
        name: 'Digital Asset based E-Commerce Website',
        description: "My team and I developed a ecommerce webiste to demonstrate the possible practical usages of digital assets like bitcoin, ethereum and other crypto-currencies. This ecommerce platform lets users to browse through the inventory of items, add them to cart and buy items using ethereum. As a front-end developer in this project, I worked on creating the components like landing page, items list, item details and checkout pages.",
        tools: ['Laravel', 'PHP', 'Bootstrap', 'JS', "MySQL", "MetaMask"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Front End Developer',
    },
    {
        id: 3,
        name: 'Laravel Studio Booking',
        description: "I have developed this laravel studio booking website by using the basics of laravel. This studio booking is a feature to be used by photographers for shoots, videographers for small advertisements, content creaters for freelancing their work and more. Basic features like no overlapping slots for the same studio, etc are implemented logically in this project",
        tools: ['Laravel', 'PHP'],
        role: 'Front End and Back End Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 4,
        name: 'Chatbot',
        description: 'This chatbot was built using python and natural language processing (NLP). It is provided with a verbose dataset about a college / university. We used NLP and this dataset to make this chatbot answer relevant questions related to the college / university',
        tools: ['Python', 'Jupyter Notebook', 'Python-NLTK'],
        code: '',
        role: 'Back End Developer',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
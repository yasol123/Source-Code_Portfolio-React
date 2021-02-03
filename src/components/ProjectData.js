import image1 from "./images/Python.jpg";
import image2 from "./images/JavaScript.jpg";
import image3 from "./images/React.jpg";
import image4 from "./images/HTML.jpg";
export const ProjectData=[
    {
        key:1,
        path:'../pages/project1',
        title:'Nutritional Facts (Data Science - Python)',
        description:'Wrote a Python program by Jupyter Notebook using Beautiful Soup, Pandas data frame, Numpy, Request and JSON to identify nutritional facts querying to Nutritionix API. I added some YELP Urls (Menu Section) to do a webscrpaing and made a query list of items to find nutritional facts on the API.After all, they are stored in three separate data frames and merged into data frame 3 which contains the menu name and price from data frame 1 (menu name and price) and the query output of nutritional facts from the data frame 2 (nutritional facts output based on a list of query from df 1 made). This analysis will be helpful for diet, fitness personal trainers and fitness customers, and other health professional, and diabete patients.',
        image:image1,
    },
    {
        key:2,
        path:'../pages/Project2.js',
        title:'To-do List with a Clock and Weather (JavaScript)',
        description: 'Created a to-do list web application in JavaScript which contains the current time and current weather. Also, you can add to-do list items and remove. Even though you close, the local storage still remembers what you wrote. If you do not like the background video, you can pause anytime by clicking "Pause" box.',
        image:image2,
    },
    {
        key:3,
        path:'/',
        title:"Yasol's Personal Portfolio Website",
        description: 'The current website is built by using HTML, CSS, JavaScript (React). The source code is available on my git-hub',
        image:image3
    },
    {
        key:4,
        path:'http://jcfsystem.com/',
        title:'Ecommerce Project for JC Food System, INC',
        description: 'Update: 01/25/2021. Work in Progress and exptected to be completed and released by March 31st, 2021 for my current employer, JC Food System, INC. I will be building an E-commerce website to increase the online order sales amount. I will be responsible for front-end development, and if available, I will be learning the back-end side and applying to this website.',
        image:image4,
    }
]


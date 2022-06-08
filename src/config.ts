interface NavLink {
    name: string,
    url: string
};

interface Config {
    email: string,
    skills: string[],
    navLinks: NavLink[]
};

const config: Config = {
    email: "kierandansey80@gmail.com",

    skills: [
        "HTML", 
        "JavaScript (ES6+)", 
        "CSS/SASS", 
        "React", 
        "Gatsby", 
        "Node.js/Express", 
        "Python/Django", 
        "Linux/Bash", 
        "MongoDB", 
        "GraphQL", 
        "Git", 
        "SVG/Inkscape"
    ],

    navLinks: [
        {
            name: "About",
            url:"/#about"
        },
        {
            name: "My Projects",
            url:"/#projects"
        },
        {
            name: "Contact Me",
            url:"/#contact"
        }
    ]
}

module.exports = config;
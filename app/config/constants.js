"use strict";
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());
Constants.JOBS = [
    {
        id: 1, company: 'PNI Digital Media', title: 'Front-End Developer',
        description: "I've been working at PNI Digital Media since March 2015. I started off as a web designer within our creative department.\n     I've since moved to our Development department, where I now work as a front end engineer on our Apollo Platform. I primarily \n     work with Angular 1.5, React, Redux, Typescript, SCSS, ES6 javaScript on a node server.\n     ",
        url: 'https://pnimedia.com',
        state: 'void'
    },
    {
        id: 2, company: 'Central 1', title: 'Software Specialist 2',
        description: "I worked as a Software Specialist in Central 1 credit union from 2014 to 2015. In this role I was tasked with maintaining and adding\n    new features to the online banking systems of Credit Unions in Ontario and BC. Within this role I developed tools using javaScript and Java\n    on Linux machines with MSSQL server dbs. I became familiar with Apache Cordova, swift and C#, from our development of iOS and Andriod apps\n    ",
        url: 'https://central1.com',
        state: 'void'
    },
    {
        id: 3, company: 'Pramerica', title: 'Full Stack Developer',
        description: "I started my career as a software developer in Pramerica, a subsidiary of Prudential Financial. Working as a back end developer\n    focusing mainly on maintining our third party CMS tool. After my first year I moved towards more of a full-stack developer role in\n    which I worked mainly with Spring, MS SQL server, JSP, javaScript/jQuery on windows servers.    \n     ",
        url: 'https://pramerica.ie',
        state: 'void'
    },
    {
        id: 4, company: 'Freelance', title: 'Front-End Developer',
        description: "I've worked on various projects for freelance clients over the years. The most recent being fuud.ca, a local Vancouver startup focusing\n            on fresh farm to table produce, and a weekly meal service. The project itself was purely front end development, focusing on HTML, SCSS, javaScript\n            and jQuery, on a Platform by another local company: Lemonstand.            \n        ",
        url: 'https://fuud.ca',
        state: 'void'
    }
];
Constants.aboutMe = "\n    Hi, my name is John Harden. I'm a front end developer living in Vancouver, British Columbia. I've been here since 2014, and have just recieved\n    Permanent Residency status. I like to keep myself occupied by exploring this beautiful country, as well as the rest of the pacific north west.\n    I very much enjoy running, swimming, hiking and exploring. In my spare time I like to learn about the coolest new things in tech. \n    I'm originially from the north west of Ireland, I've travelled around the world and decided to settle in Vancouver.  :D    \n    ";
Constants.title = 'John Harden';
Constants.DEMOS = [
    {
        title: 'Tile Animation',
        description: 'Staggering various tile animations using transforms, javaScript controlled css animations',
        url: 'http://johnmharden.com/tiles.html',
        githubUrl: 'https://github.com/JHarden/tile-slide-poc',
    },
    {
        title: 'Instagram Clone',
        description: 'Instagram clone using javaScript canvas and localStorage to manipulate / save image',
        url: 'http://johnmharden.com/filtergram.html',
        githubUrl: 'https://github.com/JHarden/filtergram',
    }
];
Constants.NAVIGATION = [
    {
        name: 'about',
        anchor: '#about'
    },
    {
        name: 'demos',
        anchor: '#demos'
    },
    {
        name: 'work',
        anchor: '#work'
    },
];
exports.Constants = Constants;
;
//# sourceMappingURL=constants.js.map
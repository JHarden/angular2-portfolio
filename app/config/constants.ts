import { Job } from '../Job';

export class Constants {

    public static JOBS: Job[] = [
        {
            id: 1, company: 'PNI Digital Media', title: 'Front End Developer',
            description:
            `I've been working at PNI Digital Media since March 2015. I started off as a web designer within our creative department.
     I've since moved to our Development department, where I now work as a front end engineer on our Apollo Platform. I primarily 
     work with Angular 1.5, Typescript, SCSS, ES6 javaScript on a node server.
     `,
            url: 'https://pnimedia.com'
        },
        {
            id: 2, company: 'Central 1', title: 'Software Specialist 2',
            description:
            `I worked as a Software Specialist in Central 1 credit union from 2014 to 2015. In this role I was tasked with maintaining and adding
    new features to the online banking systems of Credit Unions in Ontario and BC. Within this role I developed tools using javaScript and Java
    on Linux machines with MSSQL server dbs. I became familiar with Apache Cordova, swift and C#, from our development of iOS and Andriod apps
    ` ,
            url: 'https://central1.com'
        },
        {
            id: 3, company: 'Pramerica', title: 'Java Developer',
            description:
            `I started my career as a software developer in Pramerica, in a small town in rural Ireland. I stated off as a back end Java developer
    focusing mainly on maintining our third party CMS tool. After my first year I moved towards more of a full-stack developer role in
    which I worked mainly with Spring, MS SQL server, JSP, javaScript/jQuery on windows servers.    
     `,
            url: 'https://pramerica.ie'
        },
        {
            id: 4, company: 'Freelance', title: 'Freelance development',
            description:
            `I've worked on various projects for freelance clients over the years. The most recent being fuud.ca, a local Vancouver startup focusing
            on fresh farm to table produce, and a weekly meal service. The project itself was purely front end development, focusing on HTML, SCSS, javaScript
            and jQuery, on a Platform by another local company: Lemonstand.            
        `, url: 'https://fuud.ca'
        }
    ];

    public static aboutMe: string =
    `
    Hi, my name is John Harden. I'm a front end developer living in Vancouver, British Columbia. I've been here since 2014, and have just recieved
    Permanent Residency status (YAY!). I like to keep myself occupied by exploring this beautiful country, as well as the rest of the pacific north west.
    I very much enjoy running, swimming, hiking and all that jazz. In my extra spare time I like to learn about the coolest new things in tech. God knows
    how many times I've rewritten this page using different technologies!.
    I'm originially from the north west of Ireland, I've travelled around the world and decided to settle in Vancouver. It is a lovely place. :D    
    `
};

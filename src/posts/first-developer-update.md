---
  title: "Dev Update: First Version of the Site"
  date: "2023-02-08"
  excerpt:
    "Welcome to the maiden blog post of the NeutralStack.io site! The goal of this site is to provide a polling platform for people to engage with"
  img: "posts/half-open-laptop.jpg"
  alt: "Laptop with a half open lid. Photo by Ales Nesetril on Unsplash"
---

![Laptop with a half open lid](/images/posts/half-open-laptop.jpg)

Welcome to the maiden blog post of the NeutralStack.io site! The goal of this site is to provide a polling platform for people to engage with a professional tier 2 DotA team as well as make a case for higher wages for teir 2 DotA teams. As the first version of this site begins to take shape, I want to talk about some of the technologies that are used and why they were decided on.

## Front-end

The frontend section you are interacting with now is built with [Next.js](https://nextjs.org/) and served using [netlify](https://www.netlify.com/).

Next.js allows writing [React.js](https://reactjs.org/) with a simple and intuitive routing system already in place for the pages. It was nice not to have to mess around with [React Router](https://reactrouter.com/en/main) which, from my experience, can give a lot of headaches as a project grows in scope. The simple way that pages are organized within the `/pages` directory made the organization of the site a breeze and encourages you to seperate layouts from components. Nett.js' ability to serve both static and dynamic pages through the use of getStaticProps and getServerSideProps makes it's speed almost unmatched.

Netlify claims to be "The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web." I have no choice but to agree with that statement. The ease of use of this tool is incredible and in just a few steps, my site was ready:

1. Create a Github repository
2. Pushed up code
3. Connect Netlify account to Github

From there, Netlify was able to recognize my repository and it knew that it was a Next.js project just from scanning the files. It then built the site and was up and running within minutes. I purchased the domain from NeutralStack.io from google but I was able to manage my create simple A entries in the DNS and point them to netlify who handled the rest of the routing. Thank you Netlify!

## Server

The server is written in [Node.js](https://nodejs.org/en/) which worked well for me because writing JavaScript on the front-end and server made this a lot easier. I used [Express.js](https://expressjs.com/) to handle the routing of the application as I find its' unopinionated nature great to work with. While it is only single-threaded, it is setup in a docker container which can be horizontally scaled if there is ever a performance drop. For authentication we use JWTs (JSON Web Tokens) which are a next generation authentication and authorization paradigm. Our ORM is squelize which connects us to a MYSQL server and helps to manage our models. All of this is wrapped up inside two docker containers and served through an nginx reverse proxy server. CI/CD for the server includes a hook to auto-deploy when it senses changes to the main branch in the repository.

On first draft of the site, user accounts originally authenticated with a username and password which we encrypted and stored in the database. On further reflection, it felt unnecessary for such an application and presented extra security risks for no reason. Instead, a simple login code is sent to a user when they want to sign up or log in. This leverages a user's email security in order to authenticate, reduces our attack vectors, and in essence outsources our authentication security. This change ended up being a great addition to the application and one part that I am proud of so far.

## Conclusion

This website uses some cutting edge technologies to deliver a great experience to users and I hope to only improve on what I have made so far. Things are far from perfect right now and its an ever evolving project.

Check back in often or sign up for the [newsletter](https://neutralstack.io/#newsletter) to get notified of future updates! Thank you for taking the time to browse the site and read this post! It means the world to me that I can create a project that will hopefully be used to change lives and help people while growing a game that I know and love.

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navSec = document.querySelectorAll('a');
navSec[0].textContent = "Services";
navSec[1].textContent = "Product"; 
navSec[2].textContent = "Vision"; 
navSec[3].textContent = "Features";
navSec[4].textContent = "About"; 
navSec[5].textContent = "Contact";   

const heading = document.querySelector('h1');
heading.textContent = "DOM is Awesome!"

const midImg = document.querySelector('#cta-img');
midImg.src = "img/header-img.png";

const midButton = document.querySelector('button');
midButton.textContent = "Get Started!";

const secondImg = document.querySelector('.middle-img');
secondImg.src = "img/mid-page-accent.jpg";

const midHeads = document.querySelectorAll('h4');
midHeads[0].textContent = "Features";
midHeads[1].textContent = "About";
midHeads[2].textContent = "Services";
midHeads[3].textContent = "Product";
midHeads[4].textContent = "Vision";
midHeads[5].textContent = "Contact";

const paragraphs = document.querySelectorAll('p');

paragraphs[0].textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, maximus eget venenatis vel, mollis sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sodales volutpat dolor. Etiam placerat aliquam sodales.";
paragraphs[1].textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, maximus eget venenatis vel, mollis sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sodales volutpat dolor. Etiam placerat aliquam sodales.";
paragraphs[2].textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, maximus eget venenatis vel, mollis sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sodales volutpat dolor. Etiam placerat aliquam sodales.";
paragraphs[3].textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, maximus eget venenatis vel, mollis sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sodales volutpat dolor. Etiam placerat aliquam sodales.";
paragraphs[4].textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin purus erat, maximus eget venenatis vel, mollis sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sodales volutpat dolor. Etiam placerat aliquam sodales.";
paragraphs[5].textContent = "123 Way 456 Street Somewhere, USA";
paragraphs[6].textContent = "1(888) 888-8888";
paragraphs[7].textContent = "sales@greatidea.co";
paragraphs[8].textContent = "Copyright Great Idea! 2018"

paragraphs[5].innerHTML = siteContent.contact.address.split('t S').join('t<br>S');

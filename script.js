//menu
let menuToggle = document.querySelector(".hamburger__container");
let menu = document.querySelector(".navbar__menu");
let menuItems = document.querySelectorAll(".navbar__menu__item");
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

let navBar = document.querySelector(".navbar");
let navbarContainer = document.querySelector(".navbar__container");

let container = document.querySelector(".container");
let containerWidth = getContentWidth(container);

navBar.style.width = `${containerWidth}px`;

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > navbarContainer.offsetHeight) {
    navbarContainer.classList.add("fixed");
  } else {
    navbarContainer.classList.remove("fixed");
  }
});

function getContentWidth(element) {
  var styles = getComputedStyle(element);

  return (
    element.clientWidth -
    parseFloat(styles.paddingLeft) -
    parseFloat(styles.paddingRight)
  );
}

//Projects
const projects = [
  {
    name: "Chat app",
    time: "December 2021 - August 2022",
    description: `A chat app created in Angular. Responsive layout for desktop, mobile, tablet. </br>Integrated with firebase: firestore, authentication
      Login with Google </br>
      Sign up with Email </br>
      Send chat messages </br>
      Update profile info </br>

      </br>This project helped me gain deep understanding of observables`,
    img: "assets/images/chat.svg",
  },
  {
    name: "Weather Information",
    time: "Sep 2022 - September 2022",
    description: `Weather information, fetching data from API</br>
    Allow user to temperature, wind speed, humidity and search for weather information of a specific city.
    </br>
      Features: HTML, CSS, JavaScript
      `,
    img: "assets/imgs/personalPorfolio.png",
  },

  {
    name: "Countdown Timer",
    time: "Aug 2022 - Aug 2022",
    description: `Countdown Timer created by pure HTML, CSS and JavaScript </br>
      Function: set time, start, pause, reset countdown, notification sound when time reach 0 </br>

      Features: HTML, CSS, JavaScript
      `,
    img: "assets/imgs/personalPorfolio.png",
  },
  {
    name: "Update invoice by RPA",
    time: "Jun 2022 - Jul 2022",
    description:
      "Created an RPA bot that updated almost 60,000 invoices by UIPath (government requirements). Save more than 6 working-months for accounting staffs. Help the company to save more than 200 VND mil comparing to outsource. </br> This project helped me to gain a lot of knowledge about RPA (a very helpful tool). Which i can later on utilize to do my daily tasks for me. </br> There are also many sides project of RPA but this project help company save money the most.",
    img: "https://einvoice.vn/Content/img/logoktxt.png",
  },
  {
    name: "SAP SuccessFactors maintenance",
    time: "March 2021 - August 2022",
    description:
      "Maintain SAP SuccessFactors & Integration between SAP SuccessFactors and HRMs in Honda. Create and report to managers for any incidents. Support and create system guidelines for users. </br> Directly fix and support any issues relating to SuccessFactors.",
    img: "data:image/png;base64,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",
  },
  {
    name: "Implements SAP SuccessFactors for Honda VietNam",
    time: "Jul 2020 - Feb 2021",
    description:
      "Implement SAP SuccessFactors EC, PMGM and integration between SAP SuccessFactors and HRMs in Honda VietNam. Analyze customer requirements and map with system configurations. </br> Create workbook to capture customer requirements. </br> Create testcase to test the system and directly test the system. </br> The project helped me learn about project management, time management, system implementation methodology of a project and how a standard system designed.",
    img: "data:image/png;base64,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",
  },
  {
    name: "Implements HRMs for TAC",
    time: "Jul 2020 - Feb 2021",
    description: `Implement HRMs for TAC - <span class="text-muted">A Cambodian apparel company</span> </br> Analyze customer requirements and map with system configurations. </br> Create workbook to capture customer requirements. </br> Create testcase to test the system and directly test the system. </br> The project helped me learn about project management, time management and system implementation methodology of a project. Also helped me get familiar with SQL, which is used oftenly in implementing onm-premises software.`,
    img: "https://play-lh.googleusercontent.com/98d9glHPjD_66XLTDQ9kY5c4w9rL8C_uG3WJ_Dra1XR7VSQUHrB--xzQ9M0hFZQvvVQ",
  },
];

let toolsContainer = document.querySelector(".tools__container");
revealElementOnScroll();

// Reveal Element on Scroll with classes: .animated-reveal.active
function revealElementOnScroll() {
  var revealElements = document.querySelectorAll(".animated-reveal");
  let windowHeight = window.innerHeight;
  let elementVisible =
    windowHeight /
    15; /*Used for add active class to element when element is visible on x px on screen*/

  window.addEventListener("scroll", () => {
    revealElements.forEach((element) => {
      let elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  });
}

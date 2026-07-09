/* ===================================
   NOVAAI JAVASCRIPT
=================================== */


/* ===============================
MOBILE MENU
=============================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ===============================
NAVBAR SCROLL EFFECT
=============================== */

const header = document.querySelector("header");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.background =
        "rgba(5,8,22,0.9)";

    }else{

        header.style.background =
        "rgba(10,15,40,0.55)";

    }

});


/* ===============================
NUMBER COUNTER ANIMATION
=============================== */


const counters = document.querySelectorAll(".counter");


counters.forEach(counter=>{


    counter.innerText="0";


    const updateCounter=()=>{


        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;


        const increment = target / 100;


        if(current < target){


            counter.innerText =
            Math.ceil(current + increment);


            setTimeout(updateCounter,20);


        }else{


            counter.innerText = target + "+";


        }


    };


    updateCounter();


});



/* ===============================
SCROLL REVEAL ANIMATION
=============================== */


const revealElements = document.querySelectorAll(
".feature-card, .price-card, .stat-box, .dashboard"
);



function reveal(){


    revealElements.forEach(element=>{


        const position =
        element.getBoundingClientRect().top;


        const screen =
        window.innerHeight;


        if(position < screen - 100){


            element.style.opacity="1";

            element.style.transform=
            "translateY(0)";


        }


    });


}


window.addEventListener("scroll",reveal);



reveal();



/* ===============================
INITIAL ANIMATION SETTINGS
=============================== */


revealElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform=
    "translateY(50px)";

    element.style.transition=
    "all .8s ease";


});



/* ===============================
BUTTON RIPPLE EFFECT
=============================== */


const buttons =
document.querySelectorAll(
".primary-btn, .secondary-btn, button"
);



buttons.forEach(button=>{


    button.addEventListener("click",(e)=>{


        let ripple =
        document.createElement("span");


        ripple.classList.add("ripple");


        button.appendChild(ripple);



        setTimeout(()=>{

            ripple.remove();

        },600);


    });


});



/* ===============================
TYPING EFFECT
=============================== */


const title =
document.querySelector(".hero-left h1");


const text =
title.innerHTML;


title.innerHTML="";


let index=0;


function typing(){


    if(index < text.length){


        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,40);


    }


}


window.addEventListener("load",()=>{

    typing();

});
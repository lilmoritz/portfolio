let button = document.getElementById("myBtn");
let icon = document.getElementById("icon");
const emailhover = document.getElementById("email");
const linkedinhover = document.getElementById("linkedin");
const twitterhover = document.getElementById("twitter");
const ighover = document.getElementById("ig");

let leftDiv = document.getElementById("leftDiv");
let rightDiv = document.getElementById("rightDiv");
let leftDiv2 = document.getElementById("leftListDiv");
let rightDiv2 = document.getElementById("rightListDiv");
let leftDiv3 = document.getElementById("contactdiv");
let rightDiv3 = document.getElementById("mediv");


let lefth1 = document.getElementById("lefth1");
let secondlefth1 = document.getElementById("leftcvh1");
let thirdlefth1 = document.getElementById("contacth1");

let righth1 = document.getElementById("righth1");
let secondrighth1 = document.getElementById("rightcvh1");
let thirdrighth1 = document.getElementById("meh1");

let left1;
let left2;
let left3;
let left4;
let left5;
let left6;
let left7;


let fullLefts = [
    left1 = document.getElementById("firstpleft"),
    left2 = document.getElementById("secondpleft"),
    left3 = document.getElementById("pythonicon"),
    left4 = document.getElementById("pythonh"),
    left5 = document.getElementById("pythonDesc"),
    left6 = document.getElementById("leftlist"),
    left7 = document.getElementById("socialmedialeft"),
]

let right1;
let right2;
let right3;
let right4;
let right5;
let right6;
let right7;

let fullRights = [
    right1 = document.getElementById("firstpright"),
    right2 = document.getElementById("secondpright"),
    right3 = document.getElementById("jsicon"),
    right4 = document.getElementById("jsh1"),
    right5 = document.getElementById("jstext"),
    right6 = document.getElementById("rightlist"),
    right7 = document.getElementById("socialmediaright"),
]


let lefth1s = [lefth1, secondlefth1, thirdlefth1];
let righth1s = [righth1, secondrighth1, thirdrighth1];
let leftDivs = [leftDiv, leftDiv2, leftDiv3];
let rightDivs = [rightDiv, rightDiv2, rightDiv3];

let email;
let linkedin;
let twitter;
let ig;

let iconsLeft = [
    email = document.getElementById("email"),
    linkedin = document.getElementById("linkedin"),
]

let iconsRight = [
    twitter = document.getElementById("twitter"),
    ig = document.getElementById("ig"),
]

let light = true

button.onclick = () => {
    if (light) {
        for (let i = 0; i < leftDivs.length; i++) {
            leftDivs[i].style.backgroundColor = "#3F4E4F";
        }
        for (let i = 0; i < rightDivs.length; i++) {
            rightDivs[i].style.backgroundColor = "#2C3639";
        }
        for (let i = 0; i < lefth1s.length; i++) {
            lefth1s[i].style.color = "#2C3639";
        }
        for (let i = 0; i < righth1s.length; i++) {
            righth1s[i].style.color = "#3F4E4F";
        }
        for (let i = 0; i < fullLefts.length; i++) {
            fullLefts[i].style.color = "#2c3639";
        }
        for (let i = 0; i < fullRights.length; i++) {
            fullRights[i].style.color = "#3f4e4f";
        }
        for (let i = 0; i < iconsLeft.length; i++) {
            iconsLeft[i].style.color = "#2c3639";
        }
        for (let i = 0; i < iconsRight.length; i++) {
            iconsRight[i].style.color = "#3f4e4f";
        }

        button.style.color = "#DCD7C9";
        button.style.backgroundColor = "#2c3639";
    }
    else {
        for (let i = 0; i < leftDivs.length; i++) {
            leftDivs[i].style.backgroundColor = "#A27B5C";
        }
        for (let i = 0; i < rightDivs.length; i++) {
            rightDivs[i].style.backgroundColor = "#DCD7C9";
        }
        for (let i = 0; i < lefth1s.length; i++) {
            lefth1s[i].style.color = "#dcd7c9";
        }
        for (let i = 0; i < righth1s.length; i++) {
            righth1s[i].style.color = "#a27b5c";
        }
        for (let i = 0; i < fullLefts.length; i++) {
            fullLefts[i].style.color = "#dcd7c9";
        }
        for (let i = 0; i < fullRights.length; i++) {
            fullRights[i].style.color = "#a27b5c";
        }
        for (let i = 0; i < iconsLeft.length; i++) {
            iconsLeft[i].style.color = "#dcd7c9";
        }
        for (let i = 0; i < iconsRight.length; i++) {
            iconsRight[i].style.color = "#a27b5c";
        }

        button.style.color = "#3f4e4f";
        button.style.backgroundColor = "#dcd7c9";
    }

    light = !light;
};


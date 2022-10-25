async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

function handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const dataJson = Object.fromEntries(data.entries());
    const result =document.querySelector(".showUserInput pre");
    const welcomeMsg = document.querySelector(".showUserInput p")
    const  showEmoji = document.querySelector(".showEmoji")
    postData("https://bacit.info/", dataJson).then((data) => {
        welcomeMsg.innerText = "Ohh!! Cool. Welcome to the team!";
        showEmoji.innerHTML = "&#128540";
    result.innerText =JSON.stringify(data, null , 2)
    })
}
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

var earlyBirdSlider = document.getElementById("earlyBird");
var output = document.getElementById("earlyBirdOutput");
output.innerHTML = earlyBirdSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
earlyBirdSlider.oninput = function() {
    output.innerHTML = this.value;
}
var workOnTogetherSlider= document.getElementById("workOnTogether");
var workOnTogetherOutput = document.getElementById("workOnTogetherOutput");
workOnTogetherOutput.innerHTML = workOnTogetherSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
workOnTogetherSlider.oninput = function() {
    workOnTogetherOutput.innerHTML = this.value;
}
var tellMeStorySlider= document.getElementById("tellMeStorySlider");
var tellMeStoryOutput = document.getElementById("tellMeStoryOutput");
tellMeStoryOutput.innerHTML = tellMeStorySlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
tellMeStorySlider.oninput = function() {
    tellMeStoryOutput.innerHTML = this.value;
}
var processorSlider= document.getElementById("processorSlider");
var processorOutput = document.getElementById("processorOutput");
processorOutput.innerHTML = processorSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
processorSlider.oninput = function() {
    processorOutput.innerHTML = this.value;
}
var scheduleSlider= document.getElementById("scheduleSlider");
var scheduleOutput = document.getElementById("scheduleOutput");
scheduleOutput.innerHTML = scheduleSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
scheduleSlider.oninput = function() {
    scheduleOutput.innerHTML = this.value;
}
var videoChatSlider= document.getElementById("videoChatSlider");
var videoChatOutput= document.getElementById("videoChatOutput");
videoChatOutput.innerHTML = videoChatSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
videoChatSlider.oninput = function() {
    videoChatOutput.innerHTML = this.value;
}
var noSetScheduleSlider= document.getElementById("noSetScheduleSlider");
var noSetScheduleOutput= document.getElementById("noSetScheduleOutput");
noSetScheduleOutput.innerHTML = noSetScheduleSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
noSetScheduleSlider.oninput = function() {
    noSetScheduleOutput.innerHTML = this.value;
}

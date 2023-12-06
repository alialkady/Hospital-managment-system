var dynamicBox = document.createElement("div");

dynamicBox.style.width = "400px";
dynamicBox.style.height = "100px";
dynamicBox.style.border = "2px solid black";
dynamicBox.style.borderRadius = "15px";
dynamicBox.style.background = "purple";
dynamicBox.style.color = "white";
dynamicBox.style.textAlign = "center";
dynamicBox.style.padding = "30px";
dynamicBox.style.position = "fixed";
dynamicBox.style.top = "40%";
dynamicBox.style.left = "50%";
dynamicBox.style.transform = "translate(-50%, -50%)";
dynamicBox.style.display = "none";





document.body.appendChild(dynamicBox);

function display() {
    if (window.clinic.value == "eye" && window.appointment.value == "7") {
        dynamicBox.innerHTML = "You have Glaucoma, your medicine is paracetamol, your bills are 20 egp";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 8000);
    }
    if (window.clinic.value == "eye" && window.appointment.value == "8"){
        dynamicBox.innerHTML = "You have cataracts, your medicine is Can-C, your bills are 24 egp because you are above 60";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 8000);
    }
    if (window.clinic.value == "eye" && window.appointment.value == "9"){
        dynamicBox.innerHTML = "you have headache, your medicine is cometrix, your bills are 10 egp because you have health insurance ";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 8000);
    }
    if (window.clinic.value == "heart" && window.appointment.value == "7"){
        dynamicBox.innerHTML = "you have heartattack, your medicine is cetyl pure, your bills are 126 egp because you are above 60 and have health insurance ";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 8000);
    }
    if (window.clinic.value == "heart" && window.appointment.value == "8"){
        dynamicBox.innerHTML = "You have cataracts, your medicine is Can-C, your bills are 14.25 egp because you are regular patient";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 8000);
    }
    if (window.clinic.value == "heart" && window.appointment.value == "9"){
        dynamicBox.innerHTML = "You have cataracts, your medicine is Can-C, your bills are 22.5 egp because you are regular patient and above 60";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 8000);
    }
    if (window.clinic.value == "bones" && window.appointment.value == "8"){
        dynamicBox.innerHTML = "You have bones problem, your medicine is cetyl pure, your bills are 105 egp because you are regular patient and above 60 having medical insurance";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 8000);
    }
    if (window.clinic.value == "bones" && window.appointment.value == "9"){
        dynamicBox.innerHTML = "You have  flexiblity in bones, your medicine is cla core, your bills are 18 egp because you are regular patient and  medical insurance";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 8000);
    }
    
    }


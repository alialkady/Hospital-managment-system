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
        dynamicBox.innerHTML = "You have Glaucoma, your medicine is Beta-adrenergic antagonists, your bills are 20 egp";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "eye" && window.appointment.value == "8"){
        dynamicBox.innerHTML = "You have cataracts, your medicine is paracetamol, your bills are 30 egp";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "eye" && window.appointment.value == "9"){
        dynamicBox.innerHTML = "You reservation is done but you didn't come, try get another appointment    ";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "heart" && window.appointment.value == "7"){
        dynamicBox.innerHTML = "You reservation is done but you didn't come, try get another appointment.. we want notice that you have discount because it's not first time coming to us    ";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 8000);
    }
    if (window.clinic.value == "heart" && window.appointment.value == "8"){
        dynamicBox.innerHTML = "You have cataracts, your medicine is paracetamol, your bills are 15 egp";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "heart" && window.appointment.value == "9"){
        dynamicBox.innerHTML = "You have cataracts, your medicine is paracetamol, your bills are 30 egp";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    }


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
        dynamicBox.innerHTML = "You have Glaucoma, your medicine is Beta-adrenergic";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "eye" && window.appointment.value == "8"){
        dynamicBox.innerHTML = "You have cataracts, your medicine is paracetamol";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "eye" && window.appointment.value == "9"){
        dynamicBox.innerHTML = "The patient didn't come";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "heart" && window.appointment.value == "7"){
        dynamicBox.innerHTML = "the patient didn't come";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "heart" && window.appointment.value == "8"){
        dynamicBox.innerHTML = "You have cataracts, your medicine is paracetamol";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "heart" && window.appointment.value == "9"){
        dynamicBox.innerHTML = "You have cataracts, your medicine is paracetamol";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    }


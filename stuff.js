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
        dynamicBox.innerHTML = "patient name: Ahmed, ID:1234";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "eye" && window.appointment.value == "8"){
        dynamicBox.innerHTML = "Patient name: Mohamed, ID:12345";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "eye" && window.appointment.value == "9"){
        dynamicBox.innerHTML = "patient name Mahmoud, ID: 22";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "heart" && window.appointment.value == "7"){
        dynamicBox.innerHTML = "patient name: Mostafa, ID: 25";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 8000);
    }
    if (window.clinic.value == "heart" && window.appointment.value == "8"){
        dynamicBox.innerHTML = "patient name:   Hassan, ID:30";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
   
    if (window.clinic.value == "heart" && window.appointment.value == "9"){
        dynamicBox.innerHTML = "patient name: Kareem, ID: 30 ";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "bones" && window.appointment.value == "8"){
        dynamicBox.innerHTML = "patient name: ali, ID:35";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
    if (window.clinic.value == "bones" && window.appointment.value == "9"){
        dynamicBox.innerHTML = "patient name: omar, ID:40";
        dynamicBox.style.display = "block";
        setTimeout(function() {
            dynamicBox.style.display = "none";
        }, 5000);
    }
}

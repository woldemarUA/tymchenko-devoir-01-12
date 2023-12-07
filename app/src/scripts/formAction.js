let myForm = document.getElementById("myForm");

function removeElement(id) {
    try {
        let el = document.getElementById(id);
        el.remove()
    } catch (err) {
        console.log(err)
    }

}

function addElement(hobby) {
    let textArea = document.createElement("input");
    textArea.name = "hobby";
    textArea.id = "hobbyAutre";
    let formGroup = document.getElementById("hob");
    formGroup.appendChild(textArea);
}


const submitForm = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(formData);
}

myForm.addEventListener("submit", submitForm);

// ecoute les 
document.querySelector("#hobby").addEventListener("change", function () {
    if (this.value == "autre") {
        addElement(this.value);
    } else {
        removeElement("hobbyAutre");
    }
});




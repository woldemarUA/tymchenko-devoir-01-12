let myForm = document.getElementById("myForm");


function addElement(hobby) {
    console.log(hobby)
}


const submitForm = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    console.log(formData)
}

myForm.addEventListener("submit", submitForm);

// 
document.querySelector("#hobby").addEventListener("change", function () {
    if (this.value == "autre") {
        addElement(this.value);
    } else {
        console.log(this.value);
    }
});


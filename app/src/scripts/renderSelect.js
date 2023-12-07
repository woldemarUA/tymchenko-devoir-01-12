
// CREER SELECT OPTIONS
function renderSelect(id, data) {
    console.log(`render select\n ${id}\ndata ${data}`)
    let selectEl = document.getElementById(id);

    data.forEach(sel => {
        let select = document.createElement("option");
        select.value = sel;
        select.innerText = sel;
        selectEl.appendChild(select);
    })

}

async function getData() {
    const response = await fetch("./src/data/selectData.json");
    const data = await response.json()
    Object.keys(data).forEach(key => {
        // console.log(data[key])
    })

    renderSelect("hobby", data["hobby"])


}

getData()



// option group



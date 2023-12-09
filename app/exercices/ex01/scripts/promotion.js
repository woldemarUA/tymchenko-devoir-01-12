let body = document.getElementsByTagName("body")[0];

const promotions = {
    "Réductions": ["Coupons", "Ventes Flash", "Remises en argent", "Offres groupées"],
    "Programmes de fidélité": ["Points de récompense", "Avantages VIP", "Niveaux de fidélité", "Programmes de parrainage"],
    "Événements spéciaux": ["Soldes saisonniers", "Journées spéciales", "Lancement de produit", "Anniversaires"]
};

const civilite = {
    "Choissisez": "Choissisez",
    "Monsieur": "Monsieur",
    "Madame": "Madame"
}

// function pour convertir tableaux à objet

function arrObj(obj) {
    let subTypes = {}
    Object.keys(obj).forEach(key => {
        subTypes[obj[key]] = obj[key]
    })
    return subTypes;

}

// function render options pour select element

function renderSelect(id, data) {

    let selectEl = document.getElementById(id);
    let keysS = Object.keys(data)
    keysS.forEach(key => {

        let select = document.createElement("option");
        // if (key === "Choissisez") {
        //     select.disabled = true;
        //     select.selected = true;
        // } else 
        if (keysS.indexOf(key) === 0) {
            select.selected = true;
        }
        select.value = select.innerText = key;
        selectEl.appendChild(select);
    })
}

//  Render options pour civilite select element
body.onload = renderSelect("civilite", civilite)
//  Render options pour promotions  select element (premiere select) 
body.onload = renderSelect("promotionType", promotions);

//  Render options pour promotions  select element (deuxieme select) 
body.onload = renderSelect("promotionSubtype", arrObj(promotions["Réductions"]));

document.getElementById("promotionType").addEventListener("change", e => {

    let subTypes = arrObj(promotions[e.target.value]);

    renderSelect("promotionSubtype", subTypes)
})
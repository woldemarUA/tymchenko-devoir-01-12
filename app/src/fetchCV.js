var xhr = new XMLHttpRequest();


// generer data pour  remplir des éléments HTML

function getVariables(xmlData) {
    const header = {
        nom: xmlData.querySelector("nom").textContent.trim(),
        prenom: xmlData.querySelector('prenom').textContent.trim(),
        age: xmlData.querySelector('age').textContent.trim()
    };
    var headingH1 = document.createElement("h1")
    headingH1.innerHTML = `${header.nom} ${header.prenom}`
    heading.appendChild(headingH1)

    // generer photo de profile
    var profPhoto = document.createElement('div');
    profPhoto.className = "photo";
    profPhoto.appendChild(renderImage(xmlData.querySelector('photo').textContent.trim(), "img"));
    contactsContainer.appendChild(profPhoto);

    // render contacts heading
    var contactsHead = document.createElement('h2');
    contactsHead.innerText = xmlData.querySelector('contact>h2').textContent.trim();
    contactsContainer.appendChild(contactsHead)

    const address = {
        img: nodesToArray(xmlData.querySelector('adresse').childNodes)[0],
        p: nodesToArray(xmlData.querySelector('adresse').childNodes).slice(1),
    };
    contactsContainer.appendChild(renderElement(address, "mailbox", true))


    const telephone = {
        img: xmlData.querySelector('telephone>icon').textContent.trim(),
        p: xmlData.querySelector('telephone>content').textContent.trim(),

    };
    contactsContainer.appendChild(renderElement(telephone, "mailbox", 2))


    const whatsApp = {
        img: xmlData.querySelector('whatsapp>icon').textContent.trim(),
        p: xmlData.querySelector('whatsapp>content').textContent.trim(),
    };

    contactsContainer.appendChild(renderElement(whatsApp, "mailbox", 1))



    const emailP = {
        img: xmlData.querySelector('email>icon').textContent.trim(),
        a: xmlData.querySelector('personnel').textContent.trim(),
    };
    contactsContainer.appendChild(renderElement(emailP, "mailbox"))


    const emailF = {
        img: xmlData.querySelector('email>icon').textContent.trim(),
        a: xmlData.querySelector('formation').textContent.trim(),
    };
    contactsContainer.appendChild(renderElement(emailF, "mailbox"))



    const linked = {
        img: xmlData.querySelector('linkedin>icon').textContent.trim(),
        a: xmlData.querySelector('linkedin>content').textContent.trim(),
    };
    contactsContainer.appendChild(renderElement(linked, "mailbox"))


    const gitHub = {
        img: xmlData.querySelector('github>icon').textContent.trim(),
        a: xmlData.querySelector('github>content').textContent.trim(),

    };
    contactsContainer.appendChild(renderElement(gitHub, "mailbox"))


    const web = {
        img: xmlData.querySelector('web>icon').textContent.trim(),
        a: xmlData.querySelector('web>content').textContent.trim(),

    };
    contactsContainer.appendChild(renderElement(web, "mailbox"))


    const nivComp = {
        p: nodesToArray(xmlData.querySelector('nivcometent').childNodes)[0],
        li: nodesToArray(xmlData.querySelector('nivcometent').childNodes).slice(1),
    }

    var competenceHead = document.createElement("h2")
    competenceHead.innerHTML = xmlData.querySelector('competence>h2').textContent.trim()
    competenceContainer.appendChild(competenceHead)
    competenceContainer.appendChild(renderElement(nivComp))


    const nivInt = {
        p: nodesToArray(xmlData.querySelector('nivintemediaire').childNodes)[0],
        li: nodesToArray(xmlData.querySelector('nivintemediaire').childNodes).slice(1),
    }
    competenceContainer.appendChild(renderElement(nivInt))
    const nivComplement = {
        p: nodesToArray(xmlData.querySelector('skills').childNodes)[0],
        li: nodesToArray(xmlData.querySelector('skills').childNodes).slice(1),
    }
    competenceContainer.appendChild(renderElement(nivComplement))


    const profile = {
        h2: xmlData.querySelector('profile>h2').textContent.trim(),
        p: xmlData.querySelector('profile>description').textContent.trim().replace(/^\s+/gm, '').split('\n')
    }
    main.appendChild(renderElement(profile))


    const exp = {

    }

    nodesToArray(xmlData.querySelector('exp').childNodes).slice(1).forEach((poste, index) => {
        poste = poste.replace(/^\s+/gm, '')
        exp[index] = {
            h3: poste.split('\n')[0],
            p: poste.split('\n').slice(1),
        }

    })

    const expHeading = document.createElement("h2")
    expHeading.innerHTML = xmlData.querySelector('exp>h2').textContent.trim()
    main.appendChild(expHeading)


    Object.keys(exp).forEach(key => {
        main.appendChild(renderElement(exp[key], "innerSection"))
    })

    const langues =
    {
        p: nodesToArray(xmlData.querySelector('langues').childNodes).slice(1).join(', '),
    }
    const langHeading = document.createElement("h2")
    langHeading.innerHTML = xmlData.querySelector('langues>h2').textContent.trim()
    main.appendChild(langHeading)
    main.appendChild(renderElement(langues, "innerSection"))

    const formation = {
    }

    nodesToArray(xmlData.querySelector('formations').childNodes).slice(1).forEach((el, index) => {
        el = el.replace(/^\s+/gm, '')
        formation[index] = {
            h3: el.split('\n')[0],
            p: el.split('\n').slice(1),

        }
    })

    const formHeading = document.createElement("h2");
    formHeading.innerHTML = xmlData.querySelector('formations>h2').textContent.trim()
    main.appendChild(formHeading)


    Object.keys(formation).forEach(key => {
        main.appendChild(renderElement(formation[key], "innerSection"))
    })


    const permis = {
        p: nodesToArray(xmlData.querySelector('permis').childNodes).slice(1),
    }

    const permisHeading = document.createElement("h2")
    permisHeading.innerHTML = xmlData.querySelector('permis>h2').textContent.trim()
    main.appendChild(permisHeading)
    main.appendChild(renderElement(permis, "innerSection"))


}

xhr.open('GET', "./src/cv.xml", true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var xmlDocument = xhr.responseXML;
        data = xmlDocument.documentElement;
        getVariables(data)
    }
}

xhr.send()


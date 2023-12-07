// filter the link

function extractDomainFromUrl(url) {
    var domain = url.split('/')[2]; // Split by '/' and get the 3rd part (index 2)

    // Check if 'www.' is present and remove it
    if (domain.startsWith('www.')) {
        domain = domain.substring(4);
    }

    // Remove the TLD (e.g., .com, .org, .net, etc.)
    domain = domain.split('.').slice(0, -1).join('.');

    return domain;
}

// Generer teableau de la liste de noeds
function nodesToArray(nodeList) {
    let arr = [];

    for (let i = 0; i < nodeList.length; i++) {
        var node = nodeList[i];
        if (node.nodeType === Node.ELEMENT_NODE) {
            arr.push(node.textContent.trim())
        }
    }
    return arr;
}

// render a element

function renderLink(elementObj, key) {
    let innerEl = document.createElement(key);
    innerEl.setAttribute("class", "reseaux")
    if (elementObj[key].indexOf('@') !== -1) {
        innerEl.setAttribute('href', `mailto:${elementObj[key]}`);
        innerEl.innerHTML = elementObj[key];
        return innerEl;
    } else {
        innerEl.setAttribute("href", elementObj[key])
        innerEl.setAttribute("class", "reseaux")
        innerEl.innerHTML = extractDomainFromUrl(elementObj[key]);
        return innerEl;
    }
}

// render img element

function renderImage(elementObj, key, width = "0") {
    var innerEl = document.createElement(key);
    innerEl.setAttribute('src', elementObj);
    if (width === "0") {
        return innerEl;
    } else {
        innerEl.setAttribute('width', width);
        innerEl.setAttribute('height', width);
        return innerEl;

    }
}



// generer element HTML

function renderElement(elementObj, className, adresse = false) {
    let container = document.createElement("div");
    container.className = className;

    Object.keys(elementObj).forEach(key => {
        let innerEl;
        if (key === "a") {
            innerEl = document.createElement(key)
            if (elementObj[key].indexOf('@') !== -1) {
                container.appendChild(renderLink(elementObj, key))
            } else {
                container.appendChild(renderLink(elementObj, key))
            }
        } else if (Array.isArray(elementObj[key])) {
            if (key === "li") {
                let ul = document.createElement("ul")
                ul.setAttribute("class", "detail")
                elementObj[key].forEach(el => {
                    innerEl = document.createElement(key)
                    innerEl.innerHTML = el;
                    ul.appendChild(innerEl)
                })
                container.appendChild(ul)
            } else {
                let adressCont = document.createElement('div');
                elementObj[key].forEach(el => {
                    innerEl = document.createElement(key);
                    if (adresse) {
                        innerEl.setAttribute("class", "reseaux");
                        innerEl.innerHTML = el;
                        adressCont.appendChild(innerEl)
                        container.appendChild(adressCont);
                    } else {
                        innerEl.innerHTML = el;
                        container.appendChild(innerEl);

                    }


                })
            }
        } else if (key === "img") {
            container.appendChild(renderImage(elementObj[key], key, "25"))
        }
        else {
            innerEl = document.createElement(key)
            innerEl.innerHTML = elementObj[key]
            if (adresse) {
                innerEl.setAttribute("class", "reseaux");
            }

            container.appendChild(innerEl)

        }
    }
    )
    return container

}


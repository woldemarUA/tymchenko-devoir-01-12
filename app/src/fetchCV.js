var xhr = new XMLHttpRequest();




// Faire les requet pour get xml donnes

xhr.open('GET', "./src/cv.xml", true);



xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var xmlDocument = xhr.responseXML;
        data = xmlDocument.documentElement;
        getVariables(data)
    }
}

xhr.send()


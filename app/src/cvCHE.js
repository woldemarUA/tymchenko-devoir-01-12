


for (let i = 0; i < contactsData.length; i++) {
    if (contactsData[i].nodeType === 1) {
        var contactContainer = document.createElement('div');
        contactContainer.className = "mailbox";
        console.log(contactsData[i])

        contacts.appendChild(contactContainer);
    }
}
let arrayOfContacts = [];

window.onload = function() {
  getContacts()
}

const getContacts = () => {
  fetch('https://randomuser.me/api/?results=10')
        .then(function (res) {return res.json()})
        .then(contacts => arrayOfContacts = contacts)
}

const consoleContacts = () => {
  console.log(arrayOfContacts)
}

const displayContacts = function() {
  const allContacts = document.getElementById('all-contacts');
  arrayOfContacts.results.map(function(element) {
    const li = document.createElement('li')
    const text = document.createTextNode(`Title: ${element.name.title}.  ${element.name.first} ${element.name.last} 
                                          Address: ${element.location.street.number} ${element.location.street.name}  
                                          ${element.location.city}, ${element.location.state} ${element.location.postcode} 
                                          Email: ${element.email} 
                                          Phone: ${element.phone}`);
    li.appendChild(text)
    allContacts.append(li)

    //Logs an object. Need to loop through the results (array) attribute 
    //console.log(arrayOfContacts);
  })
}
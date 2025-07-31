
let contacts = [];

function addContact(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const contact = {
    id: Date.now(), 
    name,
    email,
    phone,
  };

  contacts.push(contact);

  document.getElementById('contactForm').reset();

  renderContacts();
}

function deleteContact(id) {
 
  contacts = contacts.filter((contact) => contact.id !== id);

  renderContacts();
}

function renderContacts() {
  const contactList = document.getElementById('contactList');
  contactList.innerHTML = ''; 

  contacts.forEach((contact) => {
   
    const listItem = document.createElement('li');
    listItem.className = 'contact-item';

    listItem.innerHTML = `
      <div>
        <strong>${contact.name}</strong><br>
        ${contact.email}<br>
        ${contact.phone}
      </div>
      <div class="actions">
        <button onclick="deleteContact(${contact.id})">Delete</button>
      </div>
    `;
    contactList.appendChild(listItem);
  });
}

document.getElementById('contactForm').addEventListener('submit', addContact);
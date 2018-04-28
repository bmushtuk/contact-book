
// Buttons
var addBtn = document.getElementById("add-contact");
var addGroupBtn = document.getElementById("add-group");
var createBtn = document.getElementById("create-contact");

// Form Fields
var fullname = document.getElementById('full-name');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var form = document.getElementById("form");
var groupList = document.getElementById("group-list");
var newGroup = document.getElementById("group-add");

// Divs etc.
var addBookDiv = document.querySelector('.addbook');
// List
let ul = document.querySelectorAll(".contact-names")[0];
// Objects
var contacts = [
    {
        name: "Alex",
        phone: "+3805463",
        email: "alex@gmail.com",
        group: "friends"
    },
    {
        name: "Dan",
        phone: "+3805463",
        email: "dan@gmail.com",
        group: "family"
    },
    {
        name: "John",
        phone: "+3805486563",
        email: "john@gmail.com",
        group: "work"
    },
]
var fullName = document.getElementById("full-name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var group = document.getElementById("group");
// Events
createBtn.addEventListener('click', function() {
    let infos = document.getElementById("infos");

    if (fullName.value.length === 0 ){
        fullName.nextElementSibling.classList.remove("d-none");
    } 
    if (email.value.length === 0) {
        email.nextElementSibling.classList.remove("d-none");
    }
    if (phone.value.length <= 4) {
        phone.nextElementSibling.classList.remove("d-none");
    }
    else {
        let li = document.createElement('li');
        li.className = "clickable";
        li.textContent = fullname.value;
        li.dataset.email = email.value;
        ul.appendChild(li);
        attachListItemBtns(li);
        infos.classList.remove("d-none");
        let contactName = document.getElementById("contact-name");
        let contactEmail = document.getElementById("contact-email");
        let contactPhone = document.getElementById("contact-phone");
        contactEmail.textContent = email.value;
        contactName.textContent = fullName.value;
        contactPhone.textContent = phone.value;
        contacts.push({
            name: fullName.value,
            phone: phone.value,
            email: email.value,
            group: group.value
        });
    }
  });

function hideErrorMessage() {
    fullName.nextElementSibling.classList.add("d-none");
    email.nextElementSibling.classList.add("d-none");
    phone.nextElementSibling.classList.add("d-none");
}

function renderContacts() {
    contacts.forEach(function(contact){
        let li = document.createElement('li');
        li.className = "clickable";
        li.textContent = contact.name;
        li.dataset.email = contact.email;
        ul.appendChild(li);
        attachListItemBtns(li);
    })
    
}
renderContacts();

function attachListItemBtns(li) {
    let transfer = document.createElement("button");
    transfer.className = "ml-2 transfer";
    transfer.textContent = ""
    li.appendChild(transfer);
    let remove = document.createElement("button");
    remove.className = "ml-2 remove";
    remove.textContent = ""
    li.appendChild(remove);
    let edit  = document.createElement("button");
    edit.className = "ml-2 edit";
    edit.textContent = ""
    li.appendChild(edit);
    form.classList.add("d-none");
}

$('body').on('click', '.remove', function(e) {
    $(this).closest('li').remove();
});

$('body').on('click', '.edit', function(e) {
    const li = e.target.parentNode;
    const index = contacts.findIndex(contact => contact.email === li.dataset.email);
    const contact = contacts[index];
    form.classList.remove("d-none");
    hideErrorMessage();
    fullname.value = contact.name; 
    email.value = contact.email;
    phone.value = contact.phone;
    group.value = contact.group;
    infos.classList.add("d-none");
});
$('body').on('click', 'li', function(e) {
    const li = e.target;
    const index = contacts.findIndex(contact => contact.email === li.dataset.email);
    const contact = contacts[index];
    let contactName = document.getElementById("contact-name");
    let contactPhone = document.getElementById("contact-phone");
    let contactEmail = document.getElementById("contact-email");
    infos.classList.remove("d-none");
    contactName.textContent = "Name: " + contact.name;
    contactPhone.textContent = "Phone: " + contact.phone;
    contactEmail.textContent = "Email: " + contact.email;

});

addBtn.addEventListener('click', function() {
    form.classList.remove("d-none");
    hideErrorMessage();
    fullname.value = "";
    email.value = "";
    phone.value = "";
    infos.classList.add("d-none");
})
addGroupBtn.addEventListener("click", function(){
    let groupEl = document.createElement("option");
    let groupLi = document.createElement("li");
    if(newGroup.value === "") return false;
    else{
    groupEl.textContent = newGroup.value;
    groupLi.textContent = newGroup.value;
    group.appendChild(groupEl);
    groupList.appendChild(groupLi);
    newGroup.value = "";
    }
})



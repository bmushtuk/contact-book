// Buttons
var addBtn = document.getElementById('add-contact');
var addGroupBtn = document.getElementById('add-group');
var createBtn = document.getElementById('create-contact');
let infos = document.getElementById('infos');

// Form Fields
var fullname = document.getElementById('full-name');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var form = document.getElementById('form');
var groupList = document.getElementById('group-list');
var newGroup = document.getElementById('group-add');
var searchName = document.getElementById('search-by-name');
// Divs etc.
// List
let ul = document.querySelectorAll('.contact-names')[0];
// Objects
var contacts = [
    {
        name: 'Alex',
        phone: '+3805463',
        email: 'alex@gmail.com',
        group: 'friends'
    },
    {
        name: 'Dan',
        phone: '+3805463',
        email: 'dan@gmail.com',
        group: 'family'
    },
    {
        name: 'John',
        phone: '+3805486563',
        email: 'john@gmail.com',
        group: 'work'
    },
];
const groupsArr = [
    'family',
    'work',
    'school',
    'engish'
];

var fullName = document.getElementById('full-name');
var group = document.getElementById('group-filter');
// Events
createBtn.addEventListener('click', function() {
    

    if (fullName.value.length === 0 || fullName.value === contacts.name ){
        fullName.nextElementSibling.classList.remove('d-none');
        
    } 
    if (email.value.length === 0) {
        email.nextElementSibling.classList.remove('d-none');
    }
    if (phone.value.length <= 4) {
        phone.nextElementSibling.classList.remove('d-none');
    }
    else {
        let li = document.createElement('li');
        li.className = 'clickable contact-list-item';
        li.textContent = fullname.value;
        li.dataset.email = email.value;
        li.dataset.group = group.value;
        ul.appendChild(li);
        attachListItemBtns(li);
        infos.classList.remove('d-none');
        let contactName = document.getElementById('contact-name');
        let contactEmail = document.getElementById('contact-email');
        let contactPhone = document.getElementById('contact-phone');
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
    fullName.nextElementSibling.classList.add('d-none');
    email.nextElementSibling.classList.add('d-none');
    phone.nextElementSibling.classList.add('d-none');
}

function renderContacts() {
    contacts.forEach(function(contact){
        let li = document.createElement('li');
        li.className = 'clickable contact-list-item';
        li.textContent = contact.name;
        li.dataset.email = contact.email;
        li.dataset.group = contact.group;
        ul.appendChild(li);
        attachListItemBtns(li);
    });
    
}
renderContacts();

function attachListItemBtns(li) {
    let transfer = document.createElement('button');
    transfer.className = 'ml-2 transfer';
    transfer.textContent = '';
    li.appendChild(transfer);
    let remove = document.createElement('button');
    remove.className = 'ml-2 remove';
    remove.textContent = '';
    li.appendChild(remove);
    form.classList.add('d-none');
}

$('body').on('click', '.remove', function() {
    $(this).closest('li').remove();
});

$('body').on('click', 'li.contact-list-item', function(e) {
    
    const li = e.currentTarget;
    const index = contacts.findIndex(contact => contact.email === li.dataset.email);
    const contact = contacts[index];
    let contactName = document.getElementById('contact-name');
    let contactPhone = document.getElementById('contact-phone');
    let contactEmail = document.getElementById('contact-email');
    infos.classList.remove('d-none');
    contactName.textContent = 'Name: ' + contact.name;
    contactPhone.textContent = 'Phone: ' + contact.phone;
    contactEmail.textContent = 'Email: ' + contact.email;

});

addBtn.addEventListener('click', function() {
    form.classList.remove('d-none');
    hideErrorMessage();
    fullname.value = '';
    email.value = '';
    phone.value = '';
    infos.classList.add('d-none');
});
addGroupBtn.addEventListener('click', function(){
    if(newGroup.value === '') return false;
    groupsArr.push(newGroup.value);
    renderGroupOptions();
});


// Search functionality//

function searchFunction() {
    // Declare variables
    var searchName = document.getElementById('search-by-name');
    var listContainer = document.getElementById('names-list');
    var filter = searchName.value;
    var listItems = listContainer.getElementsByTagName('li');
    
    // Loop through all list items, and hide those that don't match the search query
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].innerHTML.indexOf(filter) > -1) {
            listItems[i].classList.remove('search-neg');
            listItems[i].classList.add('search-pos');
        } else {
            listItems[i].classList.remove('search-pos');
            listItems[i].classList.add('search-neg');
        }
    }
}
searchName.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
    // code for enter
    }
    searchFunction();
});

// Filtering by a group name//

var groupFilter = function(){
    var lists = ul.getElementsByClassName('contact-list-item');
    var chosenGroup = document.getElementById('group-list').value;
    for(var i=0; i<lists.length; i++){
        if(chosenGroup === lists[i].dataset.group){
            lists[i].classList.add('found-name');
            lists[i].classList.remove('not-found-name');
        }
        else {
            lists[i].classList.add('not-found-name');
            lists[i].classList.remove('found-name');
        }
    }
};
groupList.addEventListener('change', function() {
    groupFilter();
});


// Modal//
const transferModal = $('#change-group-modal');
const modalBtn = document.getElementById('group-modal-btn');
const groupModalSelect = document.getElementById('group-transfer-select');
let lastTransferItemClicked = null;

modalBtn.addEventListener('click', function(){
    transferModal.modal('hide');
    lastTransferItemClicked.dataset.group = groupModalSelect.value;
});

$('body').on('click', '.transfer', function(e) {
    transferModal.modal('toggle');
    lastTransferItemClicked = e.currentTarget.parentNode;
            
});
function renderGroupOptions() {
    const output = groupsArr.map(group => '<option>' + group + '</option>').join('');
    $('#group-transfer-select, #group-filter, #group-list').html(output);
}
renderGroupOptions();



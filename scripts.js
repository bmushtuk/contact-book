
// Buttons
var addBtn = document.getElementById("add-contact");
var addGroupBtn = document.getElementById("add-group");
var createBtn = document.getElementById("create-contact");
var groupFilter = document.getElementById("groups");

// Form Fields
var fullname = document.getElementById('full-name');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var form = document.getElementById("form");
var groupList = document.getElementById("group-list");
var newGroup = document.getElementById("group-add");
var searchName = document.getElementById("search-by-name");
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

    if (fullName.value.length === 0 || fullName.value === contacts.name ){
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
        li.className = "clickable contact-list-item";
        li.textContent = fullname.value;
        li.dataset.email = email.value;
        li.dataset.group = group.value;
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
        li.className = "clickable contact-list-item";
        li.textContent = contact.name;
        li.dataset.email = contact.email;
        li.dataset.group = contact.group;
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
$('body').on('click', 'li.contact-list-item', function(e) {
    
    const li = e.currentTarget;
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
    let groupLi = document.createElement("option");
    if(newGroup.value === "") return false;
    else{
    groupEl.textContent = newGroup.value;
    groupLi.textContent = newGroup.value;
    group.appendChild(groupEl);
    groupList.appendChild(groupLi);
    newGroup.value = "";
    }
})

function searchFunction() {
    // Declare variables
    var searchName, filter, listContainer, listItems, i;
    var searchName = document.getElementById("search-by-name");
    var listContainer = document.getElementById("names-list");
    filter = searchName.value;
    listItems = listContainer.getElementsByTagName('li');
    
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < listItems.length; i++) {
        if (listItems[i].innerHTML.indexOf(filter) > -1) {
            listItems[i].style.display = "";
        } else {
            listItems[i].style.display = "none";
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
// $('#groups').on('click', function(e) {
//         // let familyGroup = document.getElementById("family-dropdown");
//         // let workGroup = document.getElementById("work-dropdown");
//         // let schoolGroup = document.getElementById("school-dropdown");
//         // let englishGroup = document.getElementById("english-dropdown");
//         var lis = ul.children;
//         console.log(ul.children);
//         for(var i=0; i<lis.length; i++) {
//             if(lis[i].dataset.group === "family") {
//                 console.log(lis[i].dataset.group);
//                 lis[i].innerHTML = lis[i].innerHTML + " is your family";
//     }
//             else if(lis[i].dataset.group === "work") {
//                 lis[i].innerHTML = lis[i].innerHTML + " is your collegue";
//     }
//             else if(lis[i].dataset.group === "school") {
//                 lis[i].innerHTML = lis[i].innerHTML + " is your school mate";
//     }
//             else if(lis[i].dataset.group === "english") {
//                 lis[i].innerHTML = lis[i].innerHTML + " is your class mate";
//     }
// }
//     return;
// } )
function dropdownFunc(){
    var lists = ul.children;
    var chosenGroup = document.getElementById("group-list").value;
    console.log(chosenGroup);
    for(var i=0; i<lists.length; i++){
        if(chosenGroup === lists[i].dataset.group){
            lists[i].style.color = "green";
            lists[i].style.fontWeight = "bold";
    }
        else {
            lists[i].style.color = "black";
            lists[i].style.fontWeight = "normal";
        }
    }
}   

$('body').on('click', '.transfer', function(e) {
    
    var modal = document.getElementById('myModal');
    var groupChoice = document.getElementById("groupTransfer");
    var modalBtn = document.getElementById("modal-btn");
    
    var span = document.getElementsByClassName("close")[0];
    
        modal.style.display = "block";
        $("#group-list").clone().appendTo("#groupTransfer");
        span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

        }
    }
    modalBtn.onclick = function() {
        var lists = ul.children;
        var newChosenGroup = document.getElementById("group-list").value;
        console.log(newChosenGroup);
        for(var i=0; i<lists.length; i++){
            lists[i].dataset.group === newChosenGroup;
            modal.style.display = "none";
        }
    }
});

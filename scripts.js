
// Buttons
var addBtn = document.getElementById("add-contact");
var addGroupBtn = document.getElementById("add-group");
var createBtn = document.getElementById("create-contact");


// Form Fields
var fullname = document.getElementById('full-name');
var phone = document.getElementById('phone');
var email = document.getElementById('email');

// Divs etc.
var addBookDiv = document.querySelector('.addbook');

// Objects




var fullName = document.getElementById("full-name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var group = document.getElementById("group").value;

// Events

createBtn.addEventListener('click', () => {
    let ul = document.querySelectorAll(".contact-names")[0];
    let li = document.createElement('li');
	if (fullname.length === null, email.length === null, phone.length === null){
		alert("All blank fields must be filled. Please try again!");
	} else {
	li.textContent = fullname.value;
    ul.appendChild(li);
    attachListItemBtns(li);
	fullname.value = "";
	}
  });


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
}

$('body').on('click', '.remove', function(e) {
    $(this).closest('li').remove();
});



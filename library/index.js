const add_button = document.querySelector(".add-button");
const rem_button = document.querySelector(".remove-button");
const inp_book_details_dialog = document.querySelector(".input-book-details");
const ok_button = document.querySelector(".ok-button");
const cancel_button = document.querySelector(".cancel-button");
const dialog = document.querySelector("dialog");
add_button.addEventListener("click",()=>   {  
    inp_book_details_dialog.showModal();
    

});
cancel_button.addEventListener("click",()=> {
    inp_book_details_dialog.close();
    // no need as form method = dialog is applied 
})


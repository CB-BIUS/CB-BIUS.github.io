function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function submitForm(form) {
    window.open("mailto:cambaffuto@gmail.com?subject=Dinner%20Suggestion&body=Hi%20my%20name%20is%20" + form.name.value + "%0D%0A" + "%20My%20dinner%20suggestion%20is%20" + form.comment.value);
    return false;
}

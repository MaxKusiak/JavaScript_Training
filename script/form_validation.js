let users = [];
function validateForm(){
    let form = document.forms["form"];
    if(!/.{2,}/.test(form["firstName"].value) || !/.{2,}/.test(form["lastName"].value) || !/(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@gmail.com)/.test(form["email"].value) || !/(\+38((050|066|095|099|039|067|096|097|098|063|073|091|092|094|070|080|090|093)\d{7}))/.test(form["phone"].value) || !/((?=.*[0-9])(?=.*[!@#$%^&*-.])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*-.]{8,16})/.test(form["password"].value) || (/.{1,}/.test(form["description"].value) && !/.{10,}/.test(form["description"].value))){
        alert("Ви ввели щось не правильно!");
        return false;
    }
    users.push({
        firstName: form["firstName"].value,
        lastName: form["lastName"].value,
        email: form["email"].value,
        phone: form["phone"].value,
        description: form["description"].value,
        password: form["password"].value
    });
    // form["firstName"].value = "";
    // form["lastName"].value = "";
    // form["email"].value = "";
    // form["phone"].value = "";
    // form["description"].value = "";
    // form["password"].valu = "";
}

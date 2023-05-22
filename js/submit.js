onload = () => {

}

function validateForm() {
    let input = document.getElementsByTagName('input');
    let submit = true;
    let formContents = [];

    for (let i = 0; i < input.length; i++) {
        let inputText = input[i].value;
        formContents.push(inputText);

        if (inputText == "") {
            submit = false;
            alert('All fields are required!');
            break;
        } 
    }

    if (submit == true) {
        submitForm(formContents);
    }
}

function submitForm(formContents) {
    let emailAddress = 'wghilton@pm.me';

    $.ajax({
        url: `https://formsubmit.co/ajax/${emailAddress}`,
        method: "POST",
        data: {
            Name: formContents[0] + ' ' + formContents[1],
            Phone: formContents[2],
            Email: formContents[3],
        },
        dataType: "json",
        success: function() {
            alert('Your message has been sent!');
        },
        error: function() {
            alert('An error occured!');
        }
    });
}
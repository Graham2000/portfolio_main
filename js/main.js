function showContact() {
    let cover = document.getElementById('dynamicContent');
    cover.innerHTML = "<a href='https://www.linkedin.com/in/william-hilton-78528922a'>LinkedIn</a></br></br><a href='mailto:wghilton@pm.me'>Email</a></br></br><a href='https://github.com/Graham2000'>GitHub</a><br></br>";
}


function showBio() {
    let cover = document.getElementById('dynamicContent');
    cover.innerHTML = "<p>I am a web developer with over 3 years of experience in HTML, CSS, JavaScript, and PHP. Proficient in all aspects of web development, from front-end design to back-end development. I additionally have experience in working with databases and user interfaces. I am a highly motivated and results-oriented individual with a strong work ethic. I am always looking for new challenges and opportunities to learn and grow.</p>";
}

function submitForm(msg) {
    let emailAddress = 'wghilton@pm.me';

    $.ajax({
        url: `https://formsubmit.co/ajax/${emailAddress}`,
        method: "POST",
        data: {
            message: msg,
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

function validateData(msg) {
    if (msg) {
        submitForm(msg);
    } else {
        alert('Please provide a message');
    }
}
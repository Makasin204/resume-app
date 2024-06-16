function Submit() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let message = document.getElementById("input-message").value;
    console.log('Name: ', name)
    console.log('Email: ', email)
    console.log('Message: ', message)
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "fromthehell204@gmail.com",
      Password : "2A584D41FC7858DE9AE27DCAEC5AE5B247F4",
      To : 'mail4school.rek@gmail.com',
      From : "fromthehell204@gmail.com",
      Subject : "Mail from website!",
      Body : `Name: ${name}, Email: ${email}, Message: ${message}`
    }).then(
      message => alert(message)
    );
}






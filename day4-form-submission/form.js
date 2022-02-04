function showData() {
    // DOM mengambil Nilai
    let name = document.getElementById("input-name").value 
    let email = document.getElementById("input-email").value 
    let phone = document.getElementById("input-phone").value 
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value 

    // Dom Mengirim Nilai
    document.getElementById("input-name").value 

    //validation
    if (name == "") {
        alert('Name input must not be empty')
    }
    if (email == "") {
        alert('Email input must not be empty')
    }
    if (phone == "") {
        alert('Email input must not be empty')
    }
    if (subject == "") {
        alert('Email input must not be empty')
    }
    if (message == "") {
        alert('Email input must not be empty')
    }

    // Email Process
    // DOM mengambil Nilai
    let emailreceiver = 'alifmustiko8@gmail.com'


} 
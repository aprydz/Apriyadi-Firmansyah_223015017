function submitForm() {
    var form = document.getElementById('registerForm');
    var formData = new FormData(form);
    var data = {};
    formData.forEach((value, key) => data[key] = value);

    alert(`Registration successful!\nNIK: ${data.nik}\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nAddress: ${data.address}\nTicket Type: ${data.ticketType}`);
}

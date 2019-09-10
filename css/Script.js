


$('#cForm').on("click", function(e){
    e.preventDefault
    fname = $('#fname').val()
    lname = $('#lname').val()
    service = $('#service').val()
    phone = $('#phone').val()
    email = $('#email').val()

    msg = {
        fname: fname,
        lname: lname,
        service: service,
        phone: phone,
        email: email
    }
console.log(msg.fname)

    fetch('https://ptemailserver.herokuapp.com/pcpmail', {
   method: 'post',
   headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
   body: JSON.stringify(msg)
 }).then(function(response) {
   return response.json();
 })

})



$("#register_iv_form").on('submit', function (e) {
    e.preventDefault();
  
    $('.statusMsg').html('');
    //var post_url = $(this).attr("action"); 
    //var request_method = $(this).attr("method"); 
    var form_data = $(this).serialize(); 
    var myForm = document.getElementById('register_iv_form');
    formData = new FormData(myForm);
    $.ajax({
        type: 'POST',
        url: 'send_mail.php',
        data:formData,
        processData: false,
        contentType: false,
        success: function (msg) {
            let message=JSON.parse(msg);
            $('.statusMsg').html('');
            $('#register_iv_form')[0].reset();
            if (message.code ===1000) {
                $('#register_iv_form')[0].reset();
                $('.statusMsg').html('<span style="font-size:18px;color:green">Registered Successfully.</span>');
            } else {
                $('.statusMsg').html('<span style="font-size:18px;color:#EA4335">Some problem occurred, please try again.</span>');
            }
        }
    });

});
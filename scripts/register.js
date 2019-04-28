function validatePasswordsMatch() {
    if ($('#inputPassword').val() === $('#inputConfirmPassword').val()) {
        $('#inputPassword').css('color', 'green');
        $('#inputConfirmPassword').css('color', 'green');
        $("#register-btn").removeAttr("disabled");
    } else {
        $("#register-btn").attr("disabled", "disabled");
        $('#inputPassword').css('color', 'red');
        $('#inputConfirmPassword').css('color', 'red');        
    }
}

$('#inputPassword').on('keyup', validatePasswordsMatch);
$('#inputConfirmPassword').on('keyup', validatePasswordsMatch);

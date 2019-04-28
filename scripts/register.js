function validatePasswordsMatch() {
    if ($('#inputPassword').val() === $('#inputConfirmPassword').val()) {
        $('#inputPassword').css('color', 'green');
        $('#inputConfirmPassword').css('color', 'green');
    } else {
        $('#inputPassword').css('color', 'red');
        $('#inputConfirmPassword').css('color', 'red');        
    }
}

$('#inputPassword').on('keyup', validatePasswordsMatch);
$('#inputConfirmPassword').on('keyup', validatePasswordsMatch);

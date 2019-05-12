requiredFields = [];
confirmPasswordFields = [];

btnSelector = "#submit-btn";

function validateAll() {
    let valid = true;

    for (let selector of requiredFields) {
        if (!$(selector).val()) {
            valid = false;
            break;
        }
    }

    for (let passwords of confirmPasswordFields) {
        let passwordSelector = passwords[0];
        let confirmPasswordSelector = passwords[1];

        if ($(passwordSelector).val() === $(confirmPasswordSelector).val()) {
            $(passwordSelector).css('color', '');
            $(confirmPasswordSelector).css('color', '');
        } else {
            $(passwordSelector).css('color', 'red');
            $(confirmPasswordSelector).css('color', 'red');
            valid = false;
        }
    }

    if (valid) {
        $(btnSelector).removeAttr("disabled");
    } else {
        $(btnSelector).attr("disabled", "disabled");
    }
}

function validateNotEmpty(selector) {
    requiredFields.push(selector);

    $(selector).on('keyup', validateAll);
}

function validatePasswordsMatch(passwordSelector, confirmPasswordSelector) {
    confirmPasswordFields.push([passwordSelector, confirmPasswordSelector]);
    console.log(confirmPasswordFields);

    $(passwordSelector).on('keyup', validateAll);
    $(confirmPasswordSelector).on('keyup', validateAll);
}


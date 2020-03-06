function isValid(data){
    let errors = {};
    if (!String(data.firstName).trim()){
        errors.firstName = "Name must not be blank.";
    }
    if (!String(data.lastName).trim()){
        errors.lastName = "Last name must not be blank.";
    }
    if (!(/^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/).test(String(data.email))){
        errors.email = 'Email is not valid.';
    }
    if (!String(data.phone).trim()){
        errors.phone = "Phone must not be blank.";
    }
    if (!String(data.language).trim()){
        errors.language = "Language must not be blank.";
    }
    if (!String(data.country).trim()){
        errors.country = "Country must not be blank.";
    }
    if (!String(data.firstBillingAddress).trim()){
        errors.firstBillingAddress = "Address 1 must not be blank.";
    }
    if (!String(data.secondBillingAddress).trim()){
        errors.secondBillingAddress = "Address 2 must not be blank.";
    }
    if (!String(data.billingCity).trim()){
        errors.billingCity = "City must not be blank.";
    }
    if (!String(data.billingState).trim()){
        errors.billingState = "State must not be blank.";
    }
    if (!String(data.billingZipCode).trim()){
        errors.billingZipCode = "Zip Code must not be blank.";
    }
    if (!String(data.firstShippingAddress).trim()){
        errors.firstShippingAddress = "Address 1 must not be blank.";
    }
    if (!String(data.secondShippingAddress).trim()){
        errors.secondShippingAddress = "Address 2 must not be blank.";
    }
    if (!String(data.shippingCity).trim()){
        errors.shippingCity = "City must not be blank.";
    }
    if (!String(data.shippingState).trim()){
        errors.shippingState = "State must not be blank.";
    }
    if (!String(data.shippingZipCode).trim()){
        errors.shippingZipCode = "Zip Code must not be blank.";
    }

    return errors;
}

export default isValid;
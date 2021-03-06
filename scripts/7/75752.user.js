// ==UserScript==
// @name           Redeem Quick - Autofiller BY PULKIT
// @namespace      pulkitmadan
// @description     This script will autofill the form fields in the redeem page
// @include        *ptzplace.lockerz.com*
// @include        *lockerztest.pulkitmadan.com/redeem.html*
// @version        	1.0
// @author         	Pulkit
// ==/UserScript==

var country = "India";
var countryCode = "IN";

var phoneOne = "9450225951"
var phoneWhole = "telefon";

var firstName = "Pulkit";
var lastName = "Madan";

var address1 = "Address here";
var address2 = "";

var city = "Lucknow";
var state = "UP";
var zip = "266010";

document.getElementById("_state; state").value = state;
document.getElementById("statesClicker").getElementsByTagName("SPAN")[0].innerHTML = state;
document.getElementById("_stateDetails; stateDetails").value = state;

document.getElementById("_country; country").value = country;
document.getElementById("countryClicker").getElementsByTagName("SPAN")[0].innerHTML = country;
document.getElementById("_countryDetails; countryDetails").value = country;
window.location= "javascript: manipulateForm('"+countryCode+"');";

document.getElementById("_phoneOne; phoneOne").value = phoneOne;

document.getElementById("_firstName; firstName").value = firstName;
document.getElementById("_lastName; lastName").value = lastName;

document.getElementById("_address1; address1").value = address1;
document.getElementById("_address2; address2").value = address2;

document.getElementById("_city; city").value = city;
document.getElementById("_state; state").value = state;
document.getElementById("_zip; zip").value = zip;

document.getElementById('recaptcha_response_field' ).focus();
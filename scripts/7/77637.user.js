// ==UserScript==
// @name           Sprite code sender A series
// @namespace     Mangal
// @description  send contest sms A
// @include        http://*freesms8.com/quickSMS.aspx
// @include        http://*freesms8.com/QuickSent.aspx
// @include        http://*freesms8.com/*
// ==/UserScript==

if(document.location=="http://www.freesms8.com/quickSMS.aspx"||document.location=="http://www.freesms8.com/QuickSMS.aspx")
{
document.getElementById('ctl00_BodyPlaceHolder_MobileNumber').value=09870888888;
document.getElementById('ctl00_BodyPlaceHolder_SMSText').value='SPRITE A12'+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10);
void(0);
document.getElementById('ctl00_BodyPlaceHolder_SendButton').click();
}

if(document.location=="http://www.freesms8.com/QuickSent.aspx")
{
setTimeout('document.location="http://www.freesms8.com/quickSMS.aspx"',30000);
}
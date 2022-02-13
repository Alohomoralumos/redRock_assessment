let sign = 0;
password_login.onclick=()=>{
    SMSlogin_page.style.display = 'none';
    password_login_page.style.display = 'block';
    SMSlogin.style.color='grey';
    SMSlogin.style.fontWeight='400';
    SMSlogin.style.borderBottom='1px solid grey';
    password_login.style.color='black';
    password_login.style.fontWeight='700';
    password_login.style.borderBottom='3px solid black';
    sign = 1;
}
SMSlogin.onclick=()=>{
    password_login_page.style.display = 'none';
    SMSlogin_page.style.display = 'block';
    password_login.style.color='grey';
    password_login.style.fontWeight='400';
    password_login.style.borderBottom='1px solid grey';
    SMSlogin.style.color='black';
    SMSlogin.style.fontWeight='700';
    SMSlogin.style.borderBottom='3px solid black';
    sign = 0;
}
QRcode.onclick=()=>{
    QRcode.style.display='none';
    Computer.style.display='block';
    SMSlogin.style.display = 'none';
    password_login.style.display = 'none';
    if(sign) password_login_page.style.display = 'none';
    if(!sign) SMSlogin_page.style.display = 'none';
    QRcode_login_page.style.display = 'block';
    let third = document.querySelector('.third_party_login');
    third.style.display = 'none';
}
Computer.onclick=()=>{
    QRcode.style.display='block';
    Computer.style.display='none';
    SMSlogin.style.display = 'block';
    password_login.style.display = 'block';
    if(sign) password_login_page.style.display = 'block';
    if(!sign) SMSlogin_page.style.display = 'block';
    QRcode_login_page.style.display = 'none';
    let third = document.querySelector('.third_party_login');
    third.style.display = 'block';
}
       

    


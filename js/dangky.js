//kiemtraUserName
var txtuser = $("#username");
    var errUser = $("#errUsername");
    function kiemtraUser(){
        var re =/[A-Za-z0-9]{5}/;
        if(txtuser.val() == ""){
            errUser.html("*Không được bỏ trống");
            return false;
        }
        if(!re.test(txtuser.val())){
            errUser.html("Tên đăng nhập tối đa 5 ký tự");
            return false;
        }
        errUser.html("*");
        return true;
    }
    txtuser.blur(kiemtraUser);
//kiemtraEmail
var txtemail = $("#email");
    var erremail = $("#errEmail");
    function kiemtraEmail(){
        var re =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(txtemail.val() == ""){
            erremail.html("*Không được bỏ trống");
            return false;
        }
        if(!re.test(txtemail.val())){
            erremail.html("Vui lòng nhập đúng định dạng xxx@email.com");
            return false;
        }
        erremail.html("*");
        return true;
    }
    txtemail.blur(kiemtraEmail);
//kiemtraSodienthoai
var txtsdt = $("#sdt");
    var errsdt = $("#errSdt");
    function kiemtraSdt(){
        var re =/^[0-9\-\+]{10}$/;
        if(txtsdt.val() == ""){
            errsdt.html("*Không được bỏ trống");
            return false;
        }
        if(!re.test(txtsdt.val())){
            errsdt.html("Số điện thoại tối đa 10 số");
            return false;
        }
        errsdt.html("*");
        return true;
    }
    txtsdt.blur(kiemtraSdt);
//kiemtraEmail
var txtpass = $("#pass");
    var errpass = $("#errPass");
    function kiemtraPass(){
        var re =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if(txtpass.val() == ""){
            errpass.html("*Không được bỏ trống");
            return false;
        }
        if(!re.test(txtpass.val())){
            errpass.html("Mật khẩu tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt");
            return false;
        }
        errpass.html("*");
        return true;
    }
    txtpass.blur(kiemtraPass);
var txtpass2 = $("#pass2");
var errpass2 =$("#errPass2");
function kiemtraPass2(){

    if(txtpass2.val() == ""){
        errpass2.html("*Không được bỏ trống");
        return false;
    }
    if(txtpass2 != txtpass){
        errpass2.html("Mật khẩu không trùng khớp");
        return false;
    }
    errpass2.html("*");
    return true;
}
txtpass2.blur(kiemtraPass2);

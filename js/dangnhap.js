//testUser
var txtma = $("#uSer");
    var errMa = $("#errUser");
    function kiemtramabenh(){
        var re ="admin";
        if(txtma.val() == ""){
            errMa.html("*Không được bỏ trống");
            return false;
        }
        if(!re.test(txtma.val())){
            errMa.html("Sai tên đăng nhập hoặc mật khẩu");
            return false;
        }
        errMa.html("*");
        return true;
    }
    txtma.blur(kiemtramabenh);
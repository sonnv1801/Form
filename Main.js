function submit() {
    var user = document.getElementById("username").value;
    var Phone = document.getElementById("Phone").value;
    var Email = document.getElementById("Email").value;
    var passWord = document.getElementById("passWord").value;
    var passWordR = document.getElementById("passWordR").value;
    // var t1 = document.getElementById("check").value;
    var email = document.getElementById('Email');
    var phone = document.getElementById('Phone');
    var password = document.getElementById('passWord');
    
       
     if(user == "" || passWord == ""|| passWordR == "" || Phone == "" || Email== "" ){
                    alert('Vui lòng nhập đầy đủ thông tin!');
                return ;
                    } 
        else{

                if(user.length<6){
                    alert("Tên Của Bạn Không Đúng\n Ví dụ: Văn Sơn")
                return;
                    }
        
        else{
                if (isNaN(Phone)){
                    alert("Bạn không được nhập chữ và kí tự!")
                return;
                    }

        else{

            var phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                if(!phoneNumber.test(phone.value)){
                    alert('Số điện thoại không hợp lệ');
                return ;
                    }

        else{

            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{3,4})+$/;
            if (!filter.test(email.value)) {
                alert('Địa chỉ Email không hợp lệ\n ví dụ: Vanson123@gmail.com');
                email.focus;
             return false;
                    }

        else{

            var pass = /^[A-Za-z]\w{7,14}$/;
                if(!pass.test(password.value)){
                    alert('Mật khẩu không hợp lệ');
                return ;
                    }

        else{
                    if(passWord != passWordR){
                        alert("Mật khẩu không trùng khớp")
                    return;
                    }

                }
            }
        }
    }    
    
    var submit = confirm('XÁC NHẬN THÔNG TIN CỦA BẠN\n'
        +'Tên: '+user+"\n"
        + 'Số Điện Thoại: '+Phone+"\n"
        +'Gmail: '+Email+"\n"
        +'Mật Khẩu: '+passWord+"\n"
        +'Xác nhận Mật Khẩu: '+passWordR)
        if(submit == 1){
            alert('ĐĂNG KÍ THÀNH CÔNG')
        }else{
            alert('Nhập Lại Thông Tin')
        }
     }
   }
}


function Check(){
    var x = document.getElementById('Phone').value;
    if(isNaN(x)){
        document.getElementById('Phone').style.borderColor = "red";
    }else{
        document.getElementById('Phone').style.borderColor = "green";
    }
}
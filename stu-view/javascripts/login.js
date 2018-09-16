if($.cookie('remember')== "true" && $.cookie('loginName')){
    // 在登录前判断，已经记录过同时勾选的记住我，直接为登录名赋值
    $('#loginName').val($.cookie('loginName'));
}
$('#btnLogin').click(function(ev){
    ev.preventDefault();
    var loginName = $.trim($('#loginName').val());
    var password = $.trim($('#password').val());
  
    if (!loginName || !password) {
        $('#myModal .modal-body').text('账号或密码不能为空！');
        $('#myModal').modal();
        return;
    }
 
    var type = $('#type').val();
    var remember = $('#remember').prop('checked');

    $.post(`${apiHost}/users/login`, { loginName,password,type,remember}, function(data){
        if (data.code != 200) {
            $('#myModal .modal-body').text(data.message);
            $('#myModal').modal();
            return;
        }
        $.cookie('remember', remember);
        $.cookie('loginName',loginName);

        // console.log("登陆成功");
        location.href = "index.html";
    })
})
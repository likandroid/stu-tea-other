$('#logout').on('click', function() {
    $.post(`${apiHost}/users/logout`, function(data){
        if(data.code != 200) {
            $('#myModal .modal-body').text('注销出现异常！');
            $('#myModal').modal();
            return;
        }
        $.removeCookie('remember');
        $.removeCookie('loginName');
        location.href = "login.html";
    })
})
if(!$.cookie('loginName')){
    location.href = 'login.html';
}
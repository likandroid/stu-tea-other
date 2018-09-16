$(function(){
    $.get(`${apiHost}/students/add`, function (data) {
        if (data.code != 200) {
            if (data.code == 10000) {
                parent.location.href = "../../login.html";
                return;
            }
            parent.$('#myModal .modal-body').text(data.message);
            parent.$('#myModal').modal();
            return;
        }

        $("#add").html(template('tpl-add', { 
            departs: data.departs,
            beforeDepartId: -1,
            majors: [],
            classes: []
        }));
    })

    $('#add').on('change', '#departId', function(){
        var that = this;
        var departId = $(that).val() - 0;
        $.get(`${apiHost}/students/getByDepartId?departId=${departId}`,function (data) {  
            if(data.code!=200){
                parent.$('#myModal .modal-body').text(data.message);
                parent.$('#myModal').modal();
                return;
            }

            $('#add').html(template('tpl-add', {
                departs: data.departs,
                beforeDepartId: departId,
                majors: data.majors,
                classes: data.classes
            }))
        })
    })




})
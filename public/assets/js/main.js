$(function(){
    // $("#spinner-down").on('click', function(){
    //     var s = $("#form-select").attr('size')== 1 ? 4 : 1
    //     $("#form-select").attr('size', s);
    // });
    // $("#form-select option").on({
    //     click: function() {
    //         $("#form-select").attr('size', 1);
    //     }
    // });
    const spinner = document.querySelector('.date-day input');
    const spinner_btn_up = document.querySelector('#spinner-up');
    const spinner_btn_down = document.querySelector('#spinner-down');

    spinner_btn_up.addEventListener("click", function() {
        date_day_up();
    });

    spinner_btn_down.addEventListener("click", function() {
        date_day_down();
    });

    function date_day_up() {
        var value = parseInt(spinner.value, 10);
        value = isNaN(value) ? 0 : value;
        if(value >= 31 ) {
            value = 31
        } else {
            value++;
        }
        spinner.value = value;
    };

    function date_day_down() {
        var value = parseInt(spinner.value, 10);
        value = isNaN(value) ? 0 : value;
        if(value <= 1) {
            value = 1
        } else {
            value--;
        }
        spinner.value = value;
    };
});
 
 
 
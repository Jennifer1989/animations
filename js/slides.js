let buttons = document.querySelector('slide-buttons'),
    slides = document.getElementById('slides'),
    move = function(num) {
    	
    };
buttons.addEventListener('click', function(event) {

    var data_id = event.target['data-id'];
    move(data_id);
})
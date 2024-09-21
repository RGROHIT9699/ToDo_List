
$('input').keypress(function(e){
    // console.log((e.which));
    if(e.which===13){
        const todo = $(this).val();
        // console.log((todo));
        $('#lis').append(  `<li><span>x</span> ${todo} </li>`)
        $(this).val('');
        
    }
    
});

// delete li
$('ul').on('click','span',function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(600,function(){
        $(this).remove();
    });
})

// mark completed
$('ul').on('click','li',function(e){
    $(this).toggleClass('completed');
})

$('#plus').click(function() {
    $('input').fadeToggle();
})
$('#collapse-navbar').on('show.bs.collapse',function(){ //jQuery tipo js
    $('.banner').css('transform','translate(-50%,10%)')//modifica o css

});

$('#collapse-navbar').on('hide.bs.collapse',function(){ //jQuery tipo js
    $('.banner').css('transform','translate(-50%,-50%)')//modifica o css

});
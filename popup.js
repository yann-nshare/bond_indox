$(function(){ 
    $('#get_value').keyup(function(){
        stored$('#success').text('test ' + $('#get_value').val()) 
    })
})
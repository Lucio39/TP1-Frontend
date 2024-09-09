
$(document).ready(function() {  
    $('#menu-toggle').click(function() {  
        console.log("Menu del boton clicked.");  
        $('#sidebar').toggleClass('open');  
    });  

    $('#close-btn').click(function() {  
        $('#sidebar').removeClass('open');  
    });  
}); 


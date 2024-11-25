$(document).ready(function(){
    $('h1').mouseenter(function(){
        alert("Enter..!!!")
    })
    
    $('h1').click(function(){
        alert("clickedd")
    })
    
    $('h1').mouseleave(function(){
        alert("Left..!!!")
    })

 }

)

$(document).ready(function(){
    $('.output').html("changed")
    $('.output').css("background-color","gray")
    $('.output').css("color","red")

   let a =  $('#output2')
   a.html("Checking codes")
   a.css({
    "color":"gold",
    "background-color": "skyblue",
    "padding":"10px",
    "text-shadow":"2px 0px 2px black"
   })
})

$('#btn').click(function(){
    $('#para').slideUp(2000)
}
)
$('#btn1').click(function(){
    $('#para').slideDown(2000)
}
)
$('#btn2').click(function(){
    $('#para').slideToggle(1000)
})

$('#btn3').click(function(){
    $('#para').fadeOut(1000)
})
$('#btn4').click(function(){
    $('#para').fadeIn(1000)
})
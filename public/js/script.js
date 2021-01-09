$(document).ready(function(){
    $(".devour-form").on("submit", function(event){
    var burger_id = $(this).children(".burger_id").val()
    $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
    }).then(function(data){
        console.log(data)
        location.reload()
    })
  })
})
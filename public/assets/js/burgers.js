$(".devourButton").on("click", function(event) {
    
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
        type: "PUT"
    }).then(function(){
        console.log("devoured")

        location.reload(true);
    })
})

console.log("js loaded")
$(function () {
  $(".changetoDevour").on("click", function () {
    var id = $(this).data("id");
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      function (response) {
        console.log("changed burger to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function () {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    }; 

    $.ajax("/api/burgers", {
      type: "POST", 
      data: newBurger
    }).then(
      function(){
        console.log("created a new burger"); 
        location.reload(); 
      }
    ); 
  }); 
});
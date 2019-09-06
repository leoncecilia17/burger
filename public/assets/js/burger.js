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

  $(".create-burger").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
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
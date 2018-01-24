

  var list = JSON.parse(localStorage.getItem("todolist"));

  // Checks to see if the todolist exists in localStorage and is an array currently
  // If not, set a local list variable to an empty array
  // Otherwise list is our current list of todos
  if (!Array.isArray(list)) {
    list = [];
  }

  function putOnPage() {

    $("#todo-list").empty(); // empties out the html

    var insideList = JSON.parse(localStorage.getItem("todolist"));

    // Checks to see if we have any todos in localStorage
    // If we do, set the local insideList variable to our todos
    // Otherwise set the local insideList variable to an empty array
    if (!Array.isArray(insideList)) {
      insideList = [];
    }

    // render our insideList todos to the page
    for (var i = 0; i < insideList.length; i++) {
      var p = $("<p>").text(insideList[i]);
      var b = $("<button class='delete'>").text("x").attr("data-index", i);
      p.prepend(b);
      $("#todo-list").prepend(p);
    }
  }

  // render our todos on page load
  putOnPage();

  $(document).on("click", "button.delete", function() {
    var todolist = JSON.parse(localStorage.getItem("todolist"));
    var currentIndex = $(this).attr("data-index");

    // Deletes the item marked for deletion
    todolist.splice(currentIndex, 1);
    list = todolist;

    localStorage.setItem("todolist", JSON.stringify(todolist));

    putOnPage();
  });

  $("input[type='submit']").on("click", function(event) {
    event.preventDefault();
    // Setting the input value to a variable and then clearing the input
    var val = $("input[type='text']").val();
    $("input[type='text']").val("");

    // Adding our new todo to our local list variable and adding it to local storage
    list.push(val);
    localStorage.setItem("todolist", JSON.stringify(list));

    putOnPage();
  });
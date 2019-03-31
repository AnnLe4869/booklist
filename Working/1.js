// import "jquery";
$(document).ready(function() {
  // Add new book
  $("#add-book").on("submit", function(e) {
    // Prevent default action pf submiting a form, which is reload the page
    e.preventDefault();
    let bookName = $(`input[type='text']`, this).val();
    // Check if input contain any letter beside space
    if (!bookName.match(/\w/)) {
      return false;
    }
    // Add new element to book-list
    let liTag = $(`<li></li>`)
      .append(`<span class='name'>${bookName}</span>`)
      .append(`<span class='delete'>delete</span>`);
    $(`#book-list ul`).append(liTag);

    // Clear the input field
    $(this).trigger("reset");
  });

  // Delete book
  $(`#book-list ul`).on("click", ".delete", function() {
    $(this)
      .parent()
      .remove();
  });

  // Hide book
  $(`#add-book input[type='checkbox']`).on("input", function() {
    if ($(this).is(`:checked`)) {
      $(`#book-list ul li`).css({ display: "none" });
    } else {
      $(`#book-list ul li`).css({ display: "block" });
    }
  });

  // Search book
  $(`#search-books input`).on("input", function() {
    let bookName = $(this)
      .val()
      .toLowerCase();
    $(`#book-list .name`).each(function() {
      if (
        $(this)
          .text()
          .toLowerCase()
          .indexOf(bookName) === -1
      ) {
        $(this)
          .parent()
          .css({ display: "none" });
      } else {
        $(this)
          .parent()
          .css({ display: "block" });
      }
    });
  });

  // Toggle panel
  $(`.tabs`).on("click", function(e) {
    $(`.panel`).each(function() {
      if ($(e.target).data("target") === "#" + $(this).prop("id")) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
});

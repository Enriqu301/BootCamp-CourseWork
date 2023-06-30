// CRUD - Create, Read, Update, Delete

let dataArray = [
  {id: 1, description: 'Go to Loch Ness', isComplete: false}, 
  {id: 2, description: 'Hunt Bigfoot', isComplete: false}, 
  {id: 3, description: 'Live on Mars', isComplete: false}
]

// Read - from index.html
// READ
$(document).ready(function () {
  $("ul").empty();
  dataArray.forEach(function (bucketItem) {
    let completedClass = bucketItem.isComplete ? "completed" : "";
    $("ul").append(
      `
      <li 
          data-id="${bucketItem.id}" 
          class="${completedClass}"
       >${bucketItem.description}
          <span>
            <i class="fa fa-trash-alt"></i>
          </span>
      </li>
      `
    );
  });
});

// Update
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Delete
$("ul").on("click", "span", function (e) {
  e.stopPropagation();
  $(this).parent().remove();
});

// Create
$("input").keypress(function (event) {
  if (event.which === 13 && $(this).val().trim()) {
    let item = $(this).val();
    $("ul").append(
      `<li>${item}<span><i class="fa fa-trash-alt"></i></span></li>`
    );
    $("input").val("");
  }
});

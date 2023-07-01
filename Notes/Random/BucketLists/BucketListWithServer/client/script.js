// CRUD - Create, Read, Update, Delete
let baseUrl = "http://localhost:3000";

// READ
$(document).ready(function () {
  let route = "bucket";
  let endpoint = `${baseUrl}/${route}`;
  // make our http call to API
  fetch(endpoint)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw Error("Issues with data from server");
    })
    .then(function (dataArray) {
      $("ul").empty();
      dataArray.forEach(function (bucketItem) {
        $("ul").append(
          `<li>${bucketItem.description}<span><i class="fa fa-trash-alt"></i></span></li>`
        );
      });
    })
    .catch(function (error) {
      console.log("Error getting data from server: ", error);
    });
});

// Update
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Delete
$("ul").on("click", "span", function () {
  $(this).parent().remove();
});

// Create
$("input").keypress(function (event) {
  console.log(this)
  if (event.which === 13 && $(this).val().trim()) {
    let route = "bucket";
    let endpoint = `${baseUrl}/${route}`;
    let self = this
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({ description: $(this).val() }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw Error("Issue posting data to server");
      })
      .then(function (data) {
        $("ul").append(
          `<li>${data.description}<span><i class="fa fa-trash-alt"></i></span></li>`
        );
        $("input").val("");
      })
      .catch(function (error) {
        console.log("Error posting data", error);
      });
  }
});

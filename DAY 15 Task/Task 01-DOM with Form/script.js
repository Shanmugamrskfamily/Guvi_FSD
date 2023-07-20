      const form = document.getElementById("form");
      const dataTable = document.getElementById("dataTable");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;
        const gender = document.querySelector(
          'input[name="gender"]:checked',
        ).value;

        const selectedFoodOptions = document.querySelectorAll(
          'input[name="food"]:checked',
        );
        const food = Array.from(selectedFoodOptions)
          .map((option) => option.value)
          .join(", ");

        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value;

        // Create a new table row and add data
        const newRow = dataTable.insertRow();
        newRow.innerHTML = `<td>${firstName}</td>
                          <td>${lastName}</td>
                          <td>${address}</td>
                          <td>${pincode}</td>
                          <td>${gender}</td>
                          <td>${food}</td>
                          <td>${state}</td>
                          <td>${country}</td>`;

        // Clear the form fields after updating the table
        form.reset();
      });
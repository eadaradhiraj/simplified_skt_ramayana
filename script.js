var tableRows = document.querySelectorAll("tr");

// Add a click event listener to each table row
tableRows.forEach(function(sel_row) {
  sel_row.addEventListener("click", function() {
    tableRows.forEach(function(un_sel_row) {
      un_sel_row.style.color = "black";
    });
    this.style.color = "red";
  });
});
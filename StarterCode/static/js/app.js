// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// Loop Through `data` and console.log each UFO sighting object
data.forEach(function(ufosighting) {
    console.log(ufosighting);
});

// Use d3 to append one table row `tr` for each UFO sighting object
data.forEach(function(ufosighting) {
  console.log(ufosighting);
  var row = tbody.append("tr");
});

// Use `Object.entries` to console.log each UFO sighting value
data.forEach(function(ufosighting) {
  console.log(ufosighting);
  var row = tbody.append("tr");

  Object.entries(ufosighting).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// Use d3 to append 1 cell per UFO sighting value (date, city, state, country, shape, duration, comments)
data.forEach(function(ufosighting) {
  console.log(ufosighting);
  var row = tbody.append("tr");

  Object.entries(ufosighting).forEach(function([key, value]) {
    console.log(key, value);

  });
});

// Use d3 to update each cell's text with UFO sightings values (date, city, state, country, shape, duration, comments)
data.forEach(function(ufosighting) {
  console.log(ufosighting);
    var row = tbody.append("tr");
  Object.entries(ufosighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value in the UFO sightings object
    var cell = row.append("td");
    cell.text(value);
  });
});


// // Filtering data
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers for clicking the button or pressing the enter key
button.on("click",runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputValue);
}


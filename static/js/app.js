// from data.js
var tableData = data;

// YOUR CODE HERE!su

var tbody = d3.select("tbody");



data.forEach(function(UFO) {
    console.log(UFO);
    var row = tbody.append("tr");
    
    Object.entries(UFO).forEach(function([key, value]) {
        console.log(value);
        var cell = row.append("td");
        cell.text(value);
    });
});

data.forEach(function(UFO) {
    console.log(UFO);
});

//  Selecting filter to parse table

var submit = d3.select("#submit");

submit.on("click", function() {

    console.log("button clicked")

    // preventing page from refreshing

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(tableData);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
     
    console.log(filteredData);
        
    d3.select("tbody").html("");

    // #create Tbody and Trow iteration 
    filteredData.forEach(function(UFO) {
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(function([key, value]) {
        console.log(value);
        var cell = row.append("td");
        cell.text(value);
        }
        )   

    // .append("li").text(`Mean: ${mean}`)
    // .append("li").text(`Median: ${median}`)
    // .append("li").text(`Mode: ${mode}`)
    // .append("li").text(`Variance: ${variance}`)
    // .append("li").text(`Standard Deviation: ${standardDeviation}`);;
});

});

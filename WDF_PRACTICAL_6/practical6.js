/* PRACTICAL 6 */


/* Variables */

var allData = [];

var currentType = "";

var currentPage = 1;

var recordsPerPage = 5;


/* Load JSON */

function loadData(fileName, type) {

    currentType = type;

    currentPage = 1;

    document.getElementById("loading").innerHTML =
        "Loading data...";

    document.getElementById("error").innerHTML = "";

    document.getElementById("dataContainer").innerHTML = "";


    fetch(fileName)

        .then(function(response) {

            if (!response.ok) {

                throw new Error(
                    "Data could not be loaded."
                );

            }

            return response.json();

        })

        .then(function(data) {

            allData = data;

            document.getElementById("loading").innerHTML = "";

            createFilterOptions();

            showData();

        })

        .catch(function(error) {

            document.getElementById("loading").innerHTML = "";

            document.getElementById("error").innerHTML =
                "Unable to load data. Please try again.";

        });

}


/* Filter Options */

function createFilterOptions() {

    var filter =
        document.getElementById("filter");


    filter.innerHTML = "";


    var allOption =
        document.createElement("option");

    allOption.value = "All";

    allOption.innerHTML = "All";

    filter.appendChild(allOption);


    var categories = [];


    for (var i = 0; i < allData.length; i++) {

        var category = "";


        if (currentType == "events") {

            category = allData[i].category;

        }

        else if (currentType == "students") {

            category = allData[i].course;

        }

        else if (currentType == "faqs") {

            category = allData[i].category;

        }


        if (categories.indexOf(category) == -1) {

            categories.push(category);

        }

    }


    for (var i = 0; i < categories.length; i++) {

        var option =
            document.createElement("option");

        option.value = categories[i];

        option.innerHTML = categories[i];

        filter.appendChild(option);

    }

}


/* Show Data */

function showData() {

    if (allData.length == 0) {

        return;

    }


    var searchText =
        document.getElementById("search")
            .value
            .toLowerCase();


    var selectedFilter =
        document.getElementById("filter").value;


    var selectedSort =
        document.getElementById("sort").value;


    /* Search */

    var filteredData =
        allData.filter(function(item) {

            var text =
                JSON.stringify(item).toLowerCase();

            return text.indexOf(searchText) != -1;

        });


    /* Filter */

    if (selectedFilter != "All") {

        filteredData =
            filteredData.filter(function(item) {

                if (currentType == "students") {

                    return item.course ==
                        selectedFilter;

                }

                else {

                    return item.category ==
                        selectedFilter;

                }

            });

    }


    /* Sort */

    if (selectedSort == "name") {

        filteredData.sort(function(a, b) {

            return a.name.localeCompare(b.name);

        });

    }

    else if (selectedSort == "nameReverse") {

        filteredData.sort(function(a, b) {

            return b.name.localeCompare(a.name);

        });

    }


    /* Pages */

    var start =
        (currentPage - 1) * recordsPerPage;


    var end =
        start + recordsPerPage;


    var pageData =
        filteredData.slice(start, end);


    displayCards(pageData);


    updatePageNumber(filteredData.length);

}


/* Display Cards */

function displayCards(data) {

    var container =
        document.getElementById("dataContainer");


    container.innerHTML = "";


    if (data.length == 0) {

        container.innerHTML =
            "<p>No data found.</p>";

        return;

    }


    for (var i = 0; i < data.length; i++) {

        var card =
            document.createElement("div");


        card.className = "data-card";


        /* Events */

        if (currentType == "events") {

            card.innerHTML =
                "<h3>" +
                data[i].name +
                "</h3>" +

                "<p><b>Date:</b> " +
                data[i].date +
                "</p>" +

                "<p><b>Venue:</b> " +
                data[i].venue +
                "</p>" +

                "<p><b>Category:</b> " +
                data[i].category +
                "</p>";

        }


        /* Students */

        else if (currentType == "students") {

            card.innerHTML =
                "<h3>" +
                data[i].name +
                "</h3>" +

                "<p><b>Roll No:</b> " +
                data[i].rollNo +
                "</p>" +

                "<p><b>Course:</b> " +
                data[i].course +
                "</p>" +

                "<p><b>Year:</b> " +
                data[i].year +
                "</p>" +

                "<p><b>Email:</b> " +
                data[i].email +
                "</p>";

        }


        /* FAQs */

        else if (currentType == "faqs") {

            card.innerHTML =
                "<h3>" +
                data[i].name +
                "</h3>" +

                "<p><b>Question:</b> " +
                data[i].question +
                "</p>" +

                "<p><b>Answer:</b> " +
                data[i].answer +
                "</p>" +

                "<p><b>Category:</b> " +
                data[i].category +
                "</p>";

        }


        container.appendChild(card);

    }

}


/* Page Number */

function updatePageNumber(totalRecords) {

    var totalPages =
        Math.ceil(
            totalRecords / recordsPerPage
        );


    if (totalPages == 0) {

        totalPages = 1;

    }


    if (currentPage > totalPages) {

        currentPage = totalPages;

    }


    document.getElementById("pageNumber")
        .innerHTML =
        "Page " +
        currentPage +
        " of " +
        totalPages;

}


/* Next Page */

function nextPage() {

    var searchText =
        document.getElementById("search")
            .value
            .toLowerCase();


    var selectedFilter =
        document.getElementById("filter").value;


    var filteredData =
        allData.filter(function(item) {

            var text =
                JSON.stringify(item).toLowerCase();

            return text.indexOf(searchText) != -1;

        });


    if (selectedFilter != "All") {

        filteredData =
            filteredData.filter(function(item) {

                if (currentType == "students") {

                    return item.course ==
                        selectedFilter;

                }

                else {

                    return item.category ==
                        selectedFilter;

                }

            });

    }


    var totalPages =
        Math.ceil(
            filteredData.length /
            recordsPerPage
        );


    if (currentPage < totalPages) {

        currentPage++;

        showData();

    }

}


/* Previous Page */

function previousPage() {

    if (currentPage > 1) {

        currentPage--;

        showData();

    }

}


/* Start with Events */

loadData("events.json", "events");
var client = new Keen({
    projectId: "54bfa3fd59949a34ff83ae43",
    readKey: "59bfbde1185891b39a944d3c67e59bc27864dd56c5955fa5d159cd0cac393cba718b0b9e513c201480186f61e45e3f6e562a1081ad8bef2a1c92927de3a02a0815f215083ec27578c0e1c58531651a17e04d5aa25e610c02053ddba168650a43d9820a3745117aee26e0e15c5a486c45"
});
Keen.ready(function () {
    var query = new Keen.Query("count", {
        eventCollection: "events",
        timeframe: "previous_30_days",
        interval: "daily",
        filters: [{"property_name":"event","operator":"eq","property_value":"startup"}]
    });
    client.draw(query, document.getElementById("startup"), {
        chartType: "columnchart",
        title: "Startup",
        colors: ["#49c5b1"]
    });
});
Keen.ready(function () {
    var query = new Keen.Query("count", {
        eventCollection: "events",
        filters: [{"property_name":"event","operator":"eq","property_value":"startup"}]
    });
    client.draw(query, document.getElementById("startupCount"), {
        chartType: "metric",
        title: "Startup",
        colors: ["#49c5b1"]
    });
});
Keen.ready(function () {
    var query = new Keen.Query("count", {
        eventCollection: "events",
        timeframe: "this_7_days",
        filters: [{"property_name":"event","operator":"eq","property_value":"startup"}]
    });
    client.draw(query, document.getElementById("startupCount-week"), {
        chartType: "metric",
        title: "Startup",
        colors: ["#fe6672"]
    });
});
Keen.ready(function () {
    var query = new Keen.Query("count", {
        eventCollection: "events",
        timeframe: "this_day",
        filters: [{"property_name":"event","operator":"eq","property_value":"startup"}]
    });
    client.draw(query, document.getElementById("startupCount-day"), {
        chartType: "metric",
        title: "Startup",
        colors: ["#8a8ad6"]
    });
});

Keen.ready(function () {
    var query = new Keen.Query("count", {
        eventCollection: "events",
        filters: [{"property_name":"event","operator":"eq","property_value":"share"}]
    });
    client.draw(query, document.getElementById("shareCount"), {
        chartType: "metric",
        title: "Share Count",
        colors: ["#49c5b1"]
    });
});
Keen.ready(function () {
    var query = new Keen.Query("count", {
        eventCollection: "events",
        timeframe: "this_7_days",
        filters: [{"property_name":"event","operator":"eq","property_value":"share"}]
    });
    client.draw(query, document.getElementById("shareCount-week"), {
        chartType: "metric",
        title: "Share Count",
        colors: ["#fe6672"]
    });
});
Keen.ready(function () {
    var query = new Keen.Query("count", {
        eventCollection: "events",
        timeframe: "this_day",
        filters: [{"property_name":"event","operator":"eq","property_value":"share"}]
    });
    client.draw(query, document.getElementById("shareCount-day"), {
        chartType: "metric",
        title: "Share Count",
        colors: ["#8a8ad6"]
    });
});

var searchCount = function (timeframeSelector)
{
    Keen.ready(function () {
        var query = new Keen.Query("count", {
            eventCollection: "events",
            timeframe: timeframeSelector
        });
        client.draw(query, document.getElementById("searchCount"), {
            chartType: "metric",
            title: "Search Count",
            colors: ["#ff855c"]
        });
    });
}

var searchAuthor = function (timeframeSelector)
{
    Keen.ready(function () {
        var query = new Keen.Query("count", {
            eventCollection: "events",
            groupBy: "data.author",
            filters: [{"property_name": "event","operator":"eq","property_value":"search"},
                      {"property_name": "data.author", "operator": "ne", "property_value": ""}, 
                      {"property_name": "data.author", "operator": "exists", "property_value": true},
                      {"property_name": "data.deviceUUID","operator":"ne","property_value":"testclient"}],
            timeframe: timeframeSelector
        });
        client.draw(query, document.getElementById("searchAuthor"), {
            chartType: "piechart",
            title: "Author Search",
            sliceVisibilityThreshold: 10 / 720
        });
    });
}

var searchTag = function (timeframeSelector)
{
    Keen.ready(function () {
        var query = new Keen.Query("count", {
            eventCollection: "events",
            groupBy: "data.tag",
            filters: [{"property_name": "event","operator":"eq","property_value":"search"},
                      {"property_name": "data.tag", "operator": "ne", "property_value": ""}, 
                      {"property_name": "data.tag", "operator": "exists", "property_value": true},
                      {"property_name": "data.deviceUUID","operator":"ne","property_value":"testclient"}],
            timeframe: timeframeSelector
        });
        client.draw(query, document.getElementById("searchTag"), {
            chartType: "piechart",
            title: "Tag Search",
            sliceVisibilityThreshold: 10 / 720
        });
    });
}

var searchText = function (timeframeSelector)
{
    Keen.ready(function () {
        var query = new Keen.Query("count", {
            eventCollection: "events",
            groupBy: "data.search",
            filters: [{"property_name": "event","operator":"eq","property_value":"search"},
                      {"property_name": "data.search", "operator": "ne", "property_value": ""}, 
                      {"property_name": "data.search", "operator": "exists", "property_value": true},
                      {"property_name": "data.deviceUUID","operator":"ne","property_value":"testclient"}],
            timeframe: timeframeSelector
        });
        client.draw(query, document.getElementById("searchText"), {
            chartType: "piechart",
            title: "Text Search",
            sliceVisibilityThreshold: 10 / 720
        });
    });
}

var searchTextTable = function (timeframeSelector)
{

    Keen.ready(function () {
        var query = new Keen.Query("count", {
            eventCollection: "events",
            groupBy: "data.search",
            filters: [{"property_name": "event","operator":"eq","property_value":"search"},
                      {"property_name": "data.search", "operator": "ne", "property_value": ""}, 
                      {"property_name": "data.search", "operator": "exists", "property_value": true},
                      {"property_name": "data.deviceUUID","operator":"ne","property_value":"testclient"}],
            timeframe: timeframeSelector
        });
        client.draw(query, document.getElementById("searchTextTable"), {
            chartType: "table",
            title: "Text Search",
            showRowNumber: true,
            sort: "enable",
            sortAscending: false,
            sortColumn: 1,
            page: "enable",
            pageSize: 10
        });
    });
}

var searchAuthorTable = function (timeframeSelector)
{
    Keen.ready(function () {
        var query = new Keen.Query("count", {
            eventCollection: "events",
            groupBy: "data.author",
            filters: [{"property_name": "event","operator":"eq","property_value":"search"},
                      {"property_name": "data.author", "operator": "ne", "property_value": ""}, 
                      {"property_name": "data.author", "operator": "exists", "property_value": true},
                      {"property_name": "data.deviceUUID","operator":"ne","property_value":"testclient"}],
            timeframe: timeframeSelector
        });
        client.draw(query, document.getElementById("searchAuthorTable"), {
            chartType: "table",
            title: "Author Search",
            showRowNumber: true,
            sort: "enable",
            sortAscending: false,
            sortColumn: 1,
            page: "enable",
            pageSize: 10
        });
    });
}

var searchTagTable = function (timeframeSelector)
{
    Keen.ready(function () {
        var query = new Keen.Query("count", {
            eventCollection: "events",
            groupBy: "data.tag",
            filters: [{"property_name": "event","operator":"eq","property_value":"search"},
                      {"property_name": "data.tag", "operator": "ne", "property_value": ""}, 
                      {"property_name": "data.tag", "operator": "exists", "property_value": true},
                      {"property_name": "data.deviceUUID","operator":"ne","property_value":"testclient"}],
            timeframe: timeframeSelector
        });
        client.draw(query, document.getElementById("searchTagTable"), {
            chartType: "table",
            title: "Tag Search",
            showRowNumber: true,
            sort: "enable",
            sortAscending: false,
            sortColumn: 1,
            page: "enable",
            pageSize: 10
        });
    });
}

var noResultTextTable = function (timeframeSelector)
{

    Keen.ready(function () {
        var query = new Keen.Query("count", {
            eventCollection: "events",
            groupBy: "data.search",
            filters: [{"property_name": "event","operator":"eq","property_value":"search"},
                      {"property_name": "data.search", "operator": "ne", "property_value": ""}, 
                      {"property_name": "data.search", "operator": "exists", "property_value": true},
                      {"property_name": "data.deviceUUID","operator":"ne","property_value":"testclient"},
                      {"property_name":"data.nresults","operator":"eq","property_value":0}],
            timeframe: timeframeSelector
        });
        client.draw(query, document.getElementById("noResultTextTable"), {
            chartType: "table",
            title: "Text Search",
            showRowNumber: true,
            sort: "enable",
            sortAscending: false,
            sortColumn: 1,
            page: "enable",
            pageSize: 10
        });
    });
}

var noResultAuthorTable = function (timeframeSelector)
{
    Keen.ready(function () {
        var query = new Keen.Query("count", {
            eventCollection: "events",
            groupBy: "data.author",
            filters: [{"property_name": "event","operator":"eq","property_value":"search"},
                      {"property_name": "data.author", "operator": "ne", "property_value": ""}, 
                      {"property_name": "data.author", "operator": "exists", "property_value": true},
                      {"property_name": "data.deviceUUID","operator":"ne","property_value":"testclient"},
                      {"property_name":"data.nresults","operator":"eq","property_value":0}],
            timeframe: timeframeSelector
        });
        client.draw(query, document.getElementById("noResultAuthorTable"), {
            chartType: "table",
            title: "Author Search",
            showRowNumber: true,
            sort: "enable",
            sortAscending: false,
            sortColumn: 1,
            page: "enable",
            pageSize: 10
        });
    });
}

var noResultTagTable = function (timeframeSelector)
{
    Keen.ready(function () {
        var query = new Keen.Query("count", {
            eventCollection: "events",
            groupBy: "data.tag",
            filters: [{"property_name": "event","operator":"eq","property_value":"search"},
                      {"property_name": "data.tag", "operator": "ne", "property_value": ""}, 
                      {"property_name": "data.tag", "operator": "exists", "property_value": true},
                      {"property_name": "data.deviceUUID","operator":"ne","property_value":"testclient"},
                      {"property_name":"data.nresults","operator":"eq","property_value":0}],
            timeframe: timeframeSelector
        });
        client.draw(query, document.getElementById("noResultTagTable"), {
            chartType: "table",
            title: "Tag Search",
            showRowNumber: true,
            sort: "enable",
            sortAscending: false,
            sortColumn: 1,
            page: "enable",
            pageSize: 10
        });
    });
}

var refreshGraph = function(timeSelector){
searchAuthor(timeSelector);
searchAuthorTable(timeSelector);
noResultAuthorTable(timeSelector);
searchCount(timeSelector);
searchTag(timeSelector);
searchTagTable(timeSelector);
noResultTagTable(timeSelector);
searchText(timeSelector);
searchTextTable(timeSelector);
noResultTextTable(timeSelector);
}


$('#searchTextSelector').on('change', function () {
    if ($(this).val()=="all")
        refreshGraph(null);
    else
        refreshGraph($(this).val());
});

refreshGraph("today");





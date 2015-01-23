var client = new Keen({
    projectId: "54bfa3fd59949a34ff83ae43",
    readKey: "59bfbde1185891b39a944d3c67e59bc27864dd56c5955fa5d159cd0cac393cba718b0b9e513c201480186f61e45e3f6e562a1081ad8bef2a1c92927de3a02a0815f215083ec27578c0e1c58531651a17e04d5aa25e610c02053ddba168650a43d9820a3745117aee26e0e15c5a486c45"
});
Keen.ready(function () {
    var query = new Keen.Query("count", {
        eventCollection: "share"
    });
    client.draw(query, document.getElementById("shareCount"), {
        chartType: "metric",
        title: "Share Count",
        colors: ["#49c5b1"]
    });
});
Keen.ready(function () {
    var query = new Keen.Query("count", {
        eventCollection: "search"
    });
    client.draw(query, document.getElementById("searchCount"), {
        chartType: "metric",
        title: "Search Count",
        colors: ["#ff855c"]
    });
});
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "search",
    groupBy: "author",
    filters: [{"property_name":"author","operator":"ne","property_value":""},{"property_name":"author","operator":"exists","property_value":true}]
  });
  client.draw(query, document.getElementById("searchAuthor"), {
        chartType: "piechart",
        title: "Author Search",
        sliceVisibilityThreshold: 10/720
    });
});
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "search",
    groupBy: "tag",
    filters: [{"property_name":"tag","operator":"ne","property_value":""},{"property_name":"tag","operator":"exists","property_value":true}]
  });
  client.draw(query, document.getElementById("searchTag"), {
        chartType: "piechart",
        title: "Tag Search",
        sliceVisibilityThreshold: 10/720
    });
});
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "search",
    groupBy: "search",
    filters: [{"property_name":"search","operator":"ne","property_value":""},{"property_name":"search","operator":"exists","property_value":true}]
  });
  client.draw(query, document.getElementById("searchText"), {
        chartType: "piechart",
        title: "Text Search",
        sliceVisibilityThreshold: 10/720
    });
});
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "search",
    groupBy: "search",
    filters: [{"property_name":"search","operator":"ne","property_value":""},{"property_name":"search","operator":"exists","property_value":true}]
  });
  client.draw(query, document.getElementById("searchTextTable"), {
        chartType: "table",
        title: "Text Search",
        showRowNumber:true,
        sort:"enable",
        sortAscending:false,
        sortColumn: 1,
        page: "enable",
        pageSize: 10
    });
});
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "search",
    groupBy: "author",
    filters: [{"property_name":"author","operator":"ne","property_value":""},{"property_name":"author","operator":"exists","property_value":true}]
  });
  client.draw(query, document.getElementById("searchAuthorTable"), {
        chartType: "table",
        title: "Author Search",
        showRowNumber:true,
        sort:"enable",
        sortAscending:false,
        sortColumn: 1,
        page: "enable",
        pageSize: 10
    });
});
Keen.ready(function(){
  var query = new Keen.Query("count", {
    eventCollection: "search",
    groupBy: "tag",
    filters: [{"property_name":"tag","operator":"ne","property_value":""},{"property_name":"tag","operator":"exists","property_value":true}]
  });
  client.draw(query, document.getElementById("searchTagTable"), {
        chartType: "table",
        title: "Tag Search",
        showRowNumber:true,
        sort:"enable",
        sortAscending:false,
        sortColumn: 1,
        page: "enable",
        pageSize: 10
    });
});



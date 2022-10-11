var choropleth = "js/choropleth.json";
vegaEmbed('#choropleth', choropleth, { "actions": false }).then(function(result) { })
	.catch(console.error);

var linechart = "js/linechart.json";
vegaEmbed('#linechart', linechart, { "actions": false }).then(function(result) { })
	.catch(console.error);

var areachart = "js/areachart.json";
vegaEmbed('#areachart', areachart, { "actions": false }).then(function(result) { })
	.catch(console.error);
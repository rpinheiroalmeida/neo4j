define(function(){return function(vars){ with(vars||{}) { return "<div class=\"sidebar\"><h1 class=\"pad\">Neo4j web administration</h1><ul class=\"info_list\"><li><h3>Server url</h3><p>" + 
server.url + 
"</p></li><li><h3>Kernel version</h3><p>" + 
server.version + 
"</p></li></ul><p class=\"pad\">For more information, help and examples, please visit <a href=\"http://neo4j.org\">the Neo4j community site</a>.</p><div class=\"foldout\"><h2><a href=\"#\" class=\"foldout_trigger\">More about Charts</a></h2><div class=\"foldout_content pad\"><p>To the right are charts that show the total number of primitive entities in the database over time.</p><p>You can select the timespan to show with the links in the top right corner of the chart.</p><p>To get specific info of some point in any chart, simply hover the mouse over the chart line.</p><p>The charts are automatically updated every three seconds.</p></div></div><div class=\"foldout\"><h2><a href=\"#\" class=\"foldout_trigger\">More about KPIs</a></h2><div class=\"foldout_content pad\"><p>Above the charts are one to three boxes showing different sets of KPIs. These are updated every three seconds.</p><p>Depending on what neo4j distribution you are running, the number of KPIs available will differ.</p><h3>A note on primitive counts</h3><p>he number of nodes, properties and relations are estimates based on file sizes. Actually counting the nodes is not done for performance reasons. These are usually very accurate, but in certain cases if you have experienced a database crash and subsequent recovery, they may be very wrong.</p><p>How wrong the numbers are is entirely based on the operations you were doing right before the crash. There is currently no automated way to remedy this problem.</p><h3>A note on disk size</h3><p>These KPIs are only available in neo4j enterprise edition.</p><p>Because of the way neo4j stores data, the different storage files (nodestore, relationshipstore etc.) will sometimes be very small before the server has recieved any requests.</p><p>It may be surprising to see the storage files grow rapidly when server first recieves requests, but the measurements will actually be correctly reflecting the disk size of the storage files.</p><p>This is only occurs if you are working on a relatively small graph.</p></div></div></div><div class=\"workarea with-sidebar\"><div id=\"dashboard-info\"></div><div class=\"break\"></div><div id=\"dashboard-charts\"></div></div>";}}; });
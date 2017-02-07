$(document).ready(function(){
  
  window.updateTree = function(treeObjFromJson){
  
    $("#visualtree").empty();

    // ************** Generate the tree diagram  *****************
    var margin = {top: 40, right: 120, bottom: 20, left: 120},
      width = 1500 - margin.right - margin.left,
      height = 1100 - margin.top - margin.bottom;
      
    var i = 0;

    var tree = d3.layout.tree()
      .size([height, width]);

    var diagonal = d3.svg.diagonal()
      .projection(function(d) { return [d.x, d.y]; });

    var svg = d3.select("#visualtree").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //returns an array
    var convertJsonToD3Tree = function(jsonTree){
      if(Object.keys(jsonTree).length == 0) return null
      var tree = [], i = 0;
      for(var node in jsonTree){

        var children = convertJsonToD3Tree(jsonTree[node])
        tree[i] = {
          "name": node,
          "children": children
        }
        i += 1;
      }
      return tree;
    }

    var treeD3 = [];
    treeD3[0] = {
      "name":"root",
      "children": convertJsonToD3Tree(treeObjFromJson)
    }


  var updateRoot = function(root) {
    svg.selectAll("g.node").remove();

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
      links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 100; });

    // Declare the nodes…
    var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter the nodes.
    var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { 
        return "translate(" + d.x + "," + d.y + ")"; });

    nodeEnter.append("circle")
      .attr("r", 10)
      .style("fill", "#fff");

    nodeEnter.append("text")
      .attr("y", function(d) { 
        return d.children || d._children ? -18 : 18; })
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1);

    // Declare the links…
    var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

    // Enter the links.
    link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", diagonal);

  }

  updateRoot(treeD3[0])

  }


});

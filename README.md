Visual Tree Search
=============================

A simple tool, that lets you search for a node in an N-ary tree. You may modify the tree and visualize it before your search. The search method uses a [Tree Lookup API](https://prakhar-goel.github.io/treesearch/static/index.e629c34edf.beautify.js). API details given further below.

Demo
------------
- [Try out the Visual Search Here](https://prakhar-goel.github.io/treesearch/)
- [Further details](https://prakhar-goel.github.io/treesearch/question.html)

Screenshots
---------------
- Visual Tree
![Tree View](/static/tree_view.png)

- Edit Tree
![Json View](/static/json_view.png)

TreeLookup API Documentation
-------

An instance of TreeLookup can be used to fetch the child nodes of the node at a particular path. It performs this lookup asynchronously and exposes the functionality through 2 similar methods.

**getChildrenAsCallback(path, cb)**

- **path** `type: String` The path to the node to fetch.
- **cb** `type: Function` The function to be called after the lookup is completed.
The callback should accept **err** `type: Error` and **nodes** `type: Array` as parameters.

**getChildrenAsPromise(path)**

- **path** `type: String` The path to the node to fetch.
The returned Promise should resolve with a **nodes** `type: Array` parameter and reject with an **err** `type: Error` parameter.

**Example**
```Javascript
var lookup = new TreeLookup();
lookup.getChildrenAsCallback('/', function (err, nodesFromCb) {
  lookup.getChildrenAsPromise('/' + nodesFromCb[0])
  .then(function (nodesFromPromise) {
    console.log(nodesFromPromise);
  });
});
```

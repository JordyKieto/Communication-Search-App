const BinarySearchTree = require('binary-search-tree').BinarySearchTree;
const Graph = require("graph-data-structure");
const readline = require('readline');
const queryParser = require('./queryParser');
const binarySearch = require('./binarySearch');
const graphTraversal = require('./graphTraversal');

rl = readline.createInterface(process.stdin, process.stdout);

let graph = Graph();
let bst = new BinarySearchTree();

(function () {
    const ocean = require('./ocean.json')
    ocean.forEach((e)=>{
        bst.insert(e.dp, {source: e.source, target: e.target})
    })
    ocean.forEach((e)=>{
        graph.addEdge(e.source, e.target, e.dp)
    })
})();

rl.setPrompt('Enter your query to the Dissent Probability database: ');
rl.prompt();

rl.on('line', function(line) {
    let {searchType, relationship, comparison, value, target, depth} = queryParser(line);

    if (searchType == 'binarySearch') binarySearch(bst, relationship, comparison, value)
    else { graphTraversal(graph, relationship, comparison, value, target, depth)}

    rl.prompt();
}).on('close', function() {
    console.log('Exiting database');
    process.exit(0);
});
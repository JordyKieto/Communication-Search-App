module.exports = function (graph, relationship, comparison, value, target, depth){
    let results = [];
    let compare;
    if (comparison == '$gt') compare =(weight, node)=>{if(weight > value) results.push(node)}
    else if (comparison == '$lt') compare =(weight, node)=>{if(weight < value) results.push(node)}

    const helper = (target, currentDepth)=>{
        if (currentDepth != depth){
            graph.adjacent(target).forEach((node)=>{
                    compare(graph.getEdgeWeight(target, node), node)
                    helper(node, currentDepth+1)
            })
        }
    }
    helper(target, 0);
    console.log(results);
}
/* Roger Cooperman
AIT Interview Problem
14.5.2021 */


function findReachable(node) {
class Graph{
  constructor(){
    this.nodes = new Map()
  }
  addNode(node){
    this.nodes.set(node,[])
  }
  addEdge(source,destination){
    this.nodes.get(source).push(destination)
    this.nodes.get(destination).push(source)
  }
  removeNode(node) {
    let neighbors = this.nodes.get(node);

    for (let neighbor of neighbors) {
            let adjacencyListOfNeighbor = this.nodes.get(neighbor);
            this.getIndexAndRemoveItem(node, adjacencyListOfNeighbor);
        }

        this.nodes.delete(node);
    }
  removeEdge(source, destination) {
        let adjacencyListOfSource = this.nodes.get(source);
        let adjacencyListOfDestination = this.nodes.get(destination);

        this.getIndexAndRemoveItem(source, adjacencyListOfDestination);
        this.getIndexAndRemoveItem(destination, adjacencyListOfSource);
    }

    getIndexAndRemoveItem(item, list) {
        const index = list.indexOf(item);
        list.splice(index, 1);
    }

    depthFirstSearch(startingNode) {
        let visitedNode = [];
        this.dfsRecursion(startingNode, visitedNode);
    }
    dfsRecursion(currentNode, visitedNode) {
        visitedNode[currentNode] = true;

        console.log(currentNode);

        let adjacencyListOfCurrentNode = this.nodes.get(currentNode);

        for (var node of adjacencyListOfCurrentNode) {
            if (!visitedNode[node]) this.dfsRecursion(node, visitedNode);
        }
    }
    breadthFirstSearch(startingNode) {
     let visitedNode = [];
     let queue = [];

     visitedNode[startingNode] = true;
     queue.push(startingNode);

     while (queue.length > 0) {
         const currentNode = queue.shift();

         console.log(currentNode);

         const adjacencyListOfCurrentNode = this.nodes.get(currentNode);

         for (let node of adjacencyListOfCurrentNode) {
             if (!visitedNode[node]) {
                 visitedNode[node] = true;
                 queue.push(node);
             }
         }
     }
 }
    display() {
        for (let [node, adjacencyList] of this.nodes) {
            console.log(`${node}: ${adjacencyList}`);
        }
    }
}

let graph = new Graph()


graph.addNode("1")
graph.addNode("2")
graph.addNode("3")
graph.addNode("4")
graph.addNode("5")
graph.addNode("6")
graph.addNode("7")
graph.display()


graph.addEdge("1","2")
graph.addEdge("2","4")
graph.addEdge("4","3")
graph.addEdge("3","1")
graph.addEdge("3","4")
graph.addEdge("1","3")
graph.addEdge("7","4")
graph.addEdge("6","5")
graph.addEdge("6","7")
graph.display()



// depth-first-search
console.log(" Reachable Nodes from depth-first-search")
graph.depthFirstSearch(node)
// breadth-first-search
console.log("Reachable Nodes from breadth-first-search")
graph.breadthFirstSearch(node)
}

function test_findReachable_alternative_implementation(node) {
 
class Queue
{
	 
	constructor()
	{
		this.items = [];
	}
				
	 
enqueue(element)
{	
	 
	this.items.push(element);
}

	 
dequeue()
{
	 
	if(this.isEmpty())
		return "Underflow";
	return this.items.shift();
}
 
front()
{
	 
	if(this.isEmpty())
		return "No elements in Queue";
	return this.items[0];
}

	 
isEmpty()
{
	 
	return this.items.length == 0;
}

printQueue()
{
	var str = "";
	for(var i = 0; i < this.items.length; i++)
		str += this.items[i] +" ";
	return str;
}

}



class Graph {
	
	constructor(noOfVertices)
	{
		this.noOfVertices = noOfVertices;
		this.AdjList = new Map();
	}

	
    addVertex(v)
    {
	
	this.AdjList.set(v, []);
    }

	
    addEdge(v, w)
   {
	
	this.AdjList.get(v).push(w);


	this.AdjList.get(w).push(v);
  }

    printGraph()
   {
	
	var get_keys = this.AdjList.keys();

	
	for (var i of get_keys)
    {
		
		var get_values = this.AdjList.get(i);
		var conc = "";

		
		for (var j of get_values)
			conc += j + " ";

		
		console.log(i + " -> " + conc);
	}
   }


	
bfs(startingNode)
{

	// create a visited object
	var visited = {};

	
	var q = new Queue();

	
	visited[startingNode] = true;
	q.enqueue(startingNode);

	
	while (!q.isEmpty()) {
		
		var getQueueElement = q.dequeue();

		
		console.log(getQueueElement);

		
		var get_List = this.AdjList.get(getQueueElement);

		
		for (var i in get_List) {
			var neigh = get_List[i];

			if (!visited[neigh]) {
				visited[neigh] = true;
				q.enqueue(neigh);
				
			}
		}
	}
    
	
}

	
dfs(startingNode)
{

	var visited = {};

	this.DFSUtil(startingNode, visited);
}


DFSUtil(vert, visited)
{
	visited[vert] = true;
	console.log(vert);

	var get_neighbours = this.AdjList.get(vert);

	for (var i in get_neighbours) {
		var get_elem = get_neighbours[i];
		if (!visited[get_elem])
			this.DFSUtil(get_elem, visited);
	}
}

}


var g = new Graph(7);
var nodes = [ '1', '2', '3', '4', '5', '6', '7' ];


for (var i = 0; i < nodes.length; i++) {
	g.addVertex(nodes[i]);
}


g.addEdge('1', '2');
g.addEdge('2', '4');
g.addEdge('4', '3');
g.addEdge('3', '1');
g.addEdge('3', '4');
g.addEdge('1', '3');
g.addEdge('7', '4');
g.addEdge('6', '5');
g.addEdge('6', '7');



console.log("Test print all vertex and its adjacency list and compare ");
g.printGraph();



console.log("Test: Display Reachable nodes using BFS");
g.bfs(node);

console.log("Test: Display Reachable nodes using DFS");
g.dfs(node);
}

function test_remove_node_and_edges_display_reachable(node,node1,node2) {
class Graph{
  constructor(){
    this.nodes = new Map()
  }
  addNode(node){
    this.nodes.set(node,[])
  }
  addEdge(source,destination){
    this.nodes.get(source).push(destination)
    this.nodes.get(destination).push(source)
  }
  removeNode(node) {
    let neighbors = this.nodes.get(node);

    for (let neighbor of neighbors) {
            let adjacencyListOfNeighbor = this.nodes.get(neighbor);
            this.getIndexAndRemoveItem(node, adjacencyListOfNeighbor);
        }

        this.nodes.delete(node);
    }
  removeEdge(source, destination) {
        let adjacencyListOfSource = this.nodes.get(source);
        let adjacencyListOfDestination = this.nodes.get(destination);

        this.getIndexAndRemoveItem(source, adjacencyListOfDestination);
        this.getIndexAndRemoveItem(destination, adjacencyListOfSource);
    }

    getIndexAndRemoveItem(item, list) {
        const index = list.indexOf(item);
        list.splice(index, 1);
    }

    depthFirstSearch(startingNode) {
        let visitedNode = [];
        this.dfsRecursion(startingNode, visitedNode);
    }
    dfsRecursion(currentNode, visitedNode) {
        visitedNode[currentNode] = true;

        console.log(currentNode);

        let adjacencyListOfCurrentNode = this.nodes.get(currentNode);

        for (var node of adjacencyListOfCurrentNode) {
            if (!visitedNode[node]) this.dfsRecursion(node, visitedNode);
        }
    }
    breadthFirstSearch(startingNode) {
     let visitedNode = [];
     let queue = [];

     visitedNode[startingNode] = true;
     queue.push(startingNode);

     while (queue.length > 0) {
         const currentNode = queue.shift();

         console.log(currentNode);

         const adjacencyListOfCurrentNode = this.nodes.get(currentNode);

         for (let node of adjacencyListOfCurrentNode) {
             if (!visitedNode[node]) {
                 visitedNode[node] = true;
                 queue.push(node);
             }
         }
     }
 }
    display() {
        for (let [node, adjacencyList] of this.nodes) {
            console.log(`${node}: ${adjacencyList}`);
        }
    }
}

let graph = new Graph()

console.log("test_remove_node_and_edges_display_reachable")
graph.addNode("1")
graph.addNode("2")
graph.addNode("3")
graph.addNode("4")
graph.addNode("5")
graph.addNode("6")
graph.addNode("7")
//graph.display()


graph.addEdge("1","2")
graph.addEdge("2","4")
graph.addEdge("4","3")
graph.addEdge("3","1")
graph.addEdge("3","4")
graph.addEdge("1","3")
graph.addEdge("7","4")
graph.addEdge("6","5")
graph.addEdge("6","7")
graph.display()


graph.display()
console.log("remove node")
graph.removeNode(node2)
graph.display()


graph.display()
console.log("test removing edge")
graph.removeEdge(node,node1)
graph.display()


console.log(" Reachable Nodes from depth-first-search")
graph.depthFirstSearch(node)

console.log("Reachable Nodes from breadth-first-search")
graph.breadthFirstSearch(node)
}


/* 
 ASCII representation of graph: 
 (1) ----> (2) (6) ----> (5) 
 ^ | | 
 | | | 
 v v v 
 (3) <---> (4) <---- (7) 
*/ 
const graph = { 
 "nodes": [ 
 {"id": 1}, 
 {"id": 2}, 
 {"id": 3}, 
 {"id": 4}, 
 {"id": 5}, 
 {"id": 6}, 
 {"id": 7} 
 ], 
 "edges": [ 
 {  
 "from": 1, 
 "to": 2 
 }, 
 {  
 "from": 2, 
 "to": 4 
 }, 
 {  
 "from": 4, 
 "to": 3 
 }, 
 {  
 "from": 3, 
 "to": 1 
 }, 
 {  
 "from": 3, 
 "to": 4 
 }, 
 {  
 "from": 1, 
 "to": 3

 }, 
 
 {  
 "from": 7, 
 "to": 4 
 }, 
 {  
 "from": 6, 
 "to": 5 
 }, 
 {  
 "from": 6, 
 "to": 7 
 }  
 ]  
}; 

node = "2"
const reached = findReachable(node);
node = '2'
const reached_test = test_findReachable_alternative_implementation(node);
node = "2"
node1 = "4"
node2 = "3"
const remove_node_reached_test = test_remove_node_and_edges_display_reachable(node,node1,node2);









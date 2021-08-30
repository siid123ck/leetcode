// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val){
//         let newNode = new Node(val)
//         if(!this.head){
//             this.head= newNode;
//             this.tail= this.head;
//         } else {
//             this.tail.next=newNode;
//             this.tail = newNode;
//         }
//         this.length++; 
//         return this;
//     }

//     pop(){
//         if(!this.head)   return undefined;
//         let currentNode = this.head; 
//         let tailNode = currentNode.next;
//         while(currentNode.next){
//             tailNode = currentNode;
//             currentNode = currentNode.next;
//         }
//         this.tail = tailNode;
//         tailNode.next = null;
//         this.length--;
//         if(this.length===0){
//             this.head = null;
//             this.tail = null;
//         }
//         return currentNode
//     }

//     shift(){
//         if(!this.head) return undefined;
//         var currentHead = this.head;
//         this.head= currentHead.next;
//         this.length--;
//         if(this.length ===0){
//             this.head = null;
//             this.tail= null;
//         }
//         return currentHead;
//     }

//     unshift(val){
//         var newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         let currentNode = this.head;
//         this.head = newNode;
//         newNode.next = currentNode;
    
//         this.length ++;
//         return this;
//     }

//     get(index){
//         if(index<0 || index >= this.length) return null;
//         let currentNode = this.head;
//         for (let i = 0; i < index; i++) {
//             currentNode = currentNode.next;
//         }
//         return currentNode;
//     }

//     set(index, val){
//         let foundNode = this.get(index); 
//         if(foundNode){
//             foundNode.val=val; 
//             return true; 
//         }
//         return false;
//     }

//     insert(index, val){
//         if(index<0 || index > this.length) return false;
//         if(index===this.length) return !!this.push(val);
//         if(index===0) return  !!this.unshift(val);
//         let newNode = new Node(val); 
//         let prevNode = this.get(index-1); 
//         let tempNode = prevNode.next;  //copy to assign for newNode.next
//         prevNode.next=newNode;
//         newNode.next = tempNode;
//         this.length++;
//         return true;
//     }

//     remove(index){  // hi i am siid //
//         if(index<0 || index > this.length) return false;
//         if(index===this.length) return this.pop();
//         if(index===0) return  this.shift();

//         let prevNode = this.get(index-1); 
//         let removeNode = prevNode.next
//         prevNode.next = removeNode.next
//         this.length--;
//         return removeNode;
//     }

//     reverse(){ // i am coe siid > am i coe siid > coe i coe siid> siid coe am i
//         let headNode= this.head;
//         let tailNode = headNode.next;
//         for (let i = 1; i < this.length; i++) {
//             headNode = tailNode; 
//             tailNode= headNode 
//         }
//     }

//     print(){
//         let arr=[];
//         let current = this.head;
//         while(current){
//             arr.push(current.val);
//             current= current.next;
//         }
//         return arr;
//     }
// }


// let list = new SinglyList();
// list.push(4)
// list.push(6)
// list.push(8)
// list.push(14)
// list.push(16)
// list.push(18)

// class Node{
//     constructor(val){
//         this.val = val;
//         this.prev = null;
//         this.next= null;
//     }
// }

// class DoublyList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val){
//         let newNode = new Node(val)
//         if(!this.head) {
//             this.head= newNode;
//             this.tail=this.head;
//         }
//         this.tail.next=newNode;
//         newNode.prev=this.tail;
//         this.tail=newNode;
//         this.length++;
//         return this;
//     }

//     pop(){
//         if(!this.head) return undefined;
//         if(this.length == 1) {
//             this.head = null;
//             this.tail = null;
//         }
//         let temp = this.tail;
//         this.tail= temp.prev;
//         this.tail.next=null;
//         this.length--;
//         return temp;
//     }

//     shift(){
//         if(!this.head) return undefined;
//         if(this.length == 1) {
//             this.head = null;
//             this.tail = null;
//         } 
//         let temp= this.head;
//         this.head=temp.next;
//         this.head.prev=null;
//         this.length--;
//         return temp;
//     }

//     unshift(val){
//         let newNode = new Node(val)
//         if(!this.head) {
//             this.head= newNode;
//             this.tail=this.head;
//         }
        
//         this.head.prev=newNode;
//         newNode.next=this.head;
//         this.head=newNode;
//         this.length++;
//         return this;
//     }

//     get(index){
//         if(index<0 || index > this.length) return null;
//         if (index <= this.length/2) {
//             let current = this.head;
//             let count = 0;
//             while(count !==index){
//                 current= current.next;
//                 count ++;
//             }
//             return current;

//         } else {
//             let current = this.tail;
//             let count = this.length-1;
//             while(count !==index){
//                 current= current.prev;
//                 count --;
//             }
//             return current;
//         }
//     }

//     set(index, val){
//         let foundNode = this.get(index); 
//         if(foundNode){
//             foundNode.val=val;
//             return true
//         }
//         return false;
//     }

//     insert(index, val){
//         if(index > this.length || index <0) return false;
//         if(index ===0) return !! this.unshift(val);
//         if(index === this.length) !!this.push(val);

//         let newNode = new Node(val);
//         let beforeNode = this.get(index-1); 
//         let afterNode = beforeNode.next;
//         beforeNode.next= newNode;
//         newNode.prev= beforeNode;
//         afterNode.prev = newNode;
//         newNode.next = afterNode;
//         this.length++; 
//         return true;
//     }

//     remove(index){ //[4, 5, 7, 23]
//         if(index > this.length || index <0) return false;
//         if(index ===0) return  this.shift();
//         if(index === this.length) return this.pop();

//         var remove = this.get(index);
//         remove.prev.next = remove.next;
//         remove.next.prev = remove.prev;
//         remove.next = null;
//         remove.prev = null;
//         this.length--;
//         return remove;
//     }
// }

// const list = new DoublyList(); 

// class Node{
//     constructor(val){
//         this.val=val;
//         this.next=null;
//     }
// }

// class Stack{
//     constructor(){
//         this.first= null;
//         this.last=null;
//         this.length=0;
//     }

//     push(val){
//         let newNode = new Node(val)
//         if (!this.first) {
//             this.first = newNode;
//             this.last=this.first;
//         } else {
//             let temp = this.first;
//             this.first = newNode;
//             newNode.next = temp;
//         }
//         this.length++;
//         return this.length;
//     }

//     pop(){
//         if(this.length ===0) return undefined;
//         if(this.length===1){
//             this.first = null;
//             this.last = null;
//         }
//         let current = this.first;
//         this.first = current.next; 
//         this.length--;
//         return current;
//     }
// }

// let list = new Stack();

// class Node{
//     constructor(val){
//         this.val= val;
//         this.next =null; 
//     }
// }

// class Queue{
//     constructor(){
//         this.first=null;
//         this.last = null;
//         this.length = 0;
//     }

//     enqueue(val){
//         let newNode = new Node(val);
//         console.log(this.first)
//         if(!this.first){
//             this.first=newNode;
//             this.last=newNode;
//         }
//         let lastNode = this.last;
//         lastNode.next = newNode;
//         this.last = newNode;
//         this.length++;
//         return this.length;
//     }

//     dequeue(){
//         if(this.length ===0) return undefined;
//         if(this.first===1){
//             this.last = null;
//         }
//         let remove = this.first;
//         this.first=remove.next;
//         this.length--;
//         return remove;
//     }
// }

// let list = new Queue();
// list.enqueue('first');
// list.enqueue('second');
// list.enqueue('third');
// console.log(list)

// class Node{
//     constructor(val){
//         this.val=val;
//         this.left=null;
//         this.right=null;
//     }
// }

// class BST{
//     constructor(){
//         this.root = null;
//     }

//     insert(val){                        //      4
//         let newNode = new Node(val);    //  2          8
//         if(this.root===null){           // 1    3    6     9
//             this.root = newNode; 
//             return this;
//         } 
//             let current = this.root; 
//             while(true){
//                 if(val > current.val){
//                     if(current.right===null){
//                         current.right=newNode; 
//                         return this;
//                     } 
//                      current = current.right;
                    
//                 }

//                 else if(val< current.val){
//                     if(current.left===null){
//                         current.left=newNode;
//                         return this;
//                     } 
//                      current = current.left;
                    
//                 } else{
//                     current.count = ++current.count || 2;
//                     return this;
//                 }
//             }
        
//     }
   
//                                //      4
//                                //  2          8
//                                // 1    3    6     9
//     find(val){
//         let current = this.root;
//         while(current){
//             if(current.val===val) return current;
//             if(val>current.val){
//                 if(current.right===null) return undefined;
//                 current = current.right;
//             }
//             if(val<current.val){
//                 if(current.left===null) return undefined;
//                 current= current.left;
//             }
//         }
//     }

//     //binary search tree
//     breadthST(){
//         let node = this.root, queue=[], data=[];
//         queue.push(node)

//         while(queue.length){
//             node = queue.shift(); 
//             data.push(node.val);
//             if(node.left) queue.push(node.left);
//             if(node.right) queue.push(node.right);
//         }

//         return data;
//     }

//     // depth first search preorder

//     dfsPre(){
//       let data=[]; 

//       function traverse(node){
//             data.push(node.val);
//             if(node.left) traverse(node.left)
//             if(node.right) traverse(node.right)
//         }

//         traverse(this.root)
//         return data;
//     }


//     // depth first search preorder

//     dfsPost(){
//       let data=[]; 

//       function traverse(node){
//           if(node.left) traverse(node.left)
//           if(node.right) traverse(node.right)
//           data.push(node.val);
//         }

//         traverse(this.root)
//         return data;
//     }

//     //depth first search inordr

//     dfsInorder(){
//         let data = [];

//         function traverse(node){
//             if(node.left) traverse(node.left);
//             data.push(node.val);
//             if(node.right) traverse(node.right);
//         }

//         traverse(this.root); 
        
//         return data;
//     }
// }

// const bst =new BST(); 
// bst.insert(4); 
// bst.insert(7)
// bst.insert(2)
// bst.insert(9)
// bst.insert(23); 
// bst.insert(17)
// bst.insert(21)
// bst.insert(14)
// console.log(bst)

// class HashTable{
//     constructor(size=10){
//         this.keyMap = new Array(size)
//     }

//     _hash(key) {
//         let total = 0;
//         let WEIRD_PRIME = 31;
//         for (let i = 0; i < Math.min(key.length, 100); i++) {
//           let char = key[i];
//           let value = char.charCodeAt(0) - 96
//           total = (total * WEIRD_PRIME + value) % this.keyMap.length;
//         }
//         return total;
//       }

//       set(key, val){
//           let index = this._hash(key); 
//           if(!this.keyMap[index]) this.keyMap[index] = [];
//           this.keyMap[index].push([key, val])
//           return this;
//       }

//       get(key){
//           let index = this._hash(key); 
//           if(!this.keyMap[index]) return undefined;
//           for (let i = 0; i < this.keyMap[index].length; i++) {     
//               if(this.keyMap[index][i][0]===key)   return this.keyMap[index][i][1]      
//           }
//       }

//       keys(){
//           let result = []; 
//           for (let i  of this.keyMap) {
//               if(i) {
//                  result= result.concat(i)
//               }             
//           }
//           return result.map(val=>val[0]);
//       }

//       values(){
//         let result = []; 
//         for (let i  of this.keyMap) {
//             if(i) {
//                result= result.concat(i)
//             }             
//         }
//         return result.map(val=>val[1]);
//     }

// }

// let hash = new HashTable(10); 
// hash.set("name", "siid")
// hash.set("age", "21")
// hash.set("town", "parramatta")
// hash.set("state", "nsw")
// console.log(hash)

// class MaxHeap{
//     constructor(){
//         this.values = []
//     }

//     insert(val){
//         this.values.push(val);
//         this.bubbleUp();
//         return this.values;
//     }

//     bubbleUp(){
//         let idx = this.values.length-1;
        
//         while(idx>0){
//             let parentIdx = Math.floor((idx-1)/2); 
//             if(this.values[idx] <= this.values[parentIdx]) break;
//             let newELement = this.values[idx];
//             let parent = this.values[parentIdx]
//             this.values[parentIdx] = newELement;
//             this.values[idx] = parent;
//             idx = parentIdx;
//         }
//     }

//     extract(){
//         let parentIdx = 0;
//         let removeElement = this.values[parentIdx];
//         let parent = this.values.pop();
//         this.values[0] = parent; 
        
              
//         while(true){
//             let leftIdx = 2*parentIdx + 1;
//             let rightIdx = 2*parentIdx + 2;
//             let leftChild = leftIdx < this.values.length ? this.values[leftIdx]: 0;
//             let rightChild= rightIdx < this.values.length ? this.values[rightIdx]: 0; 


//             if(this.values[parentIdx] > leftChild && this.values[parentIdx]  > rightChild) break;
//             if(this.values[parentIdx]  < leftChild || this.values[parentIdx]  < rightChild) {
//                 if(leftChild > rightChild) {
//                 swap(this.values, parentIdx, leftIdx)
//                 parentIdx=leftIdx;
//                 }
//                 if(leftChild < rightChild) {
//                    swap(this.values, parentIdx, rightIdx)
//                    parentIdx=rightIdx;
//                  }
//             }
            
//         }
//        function swap(arr, i, j){
//            let temp = arr[i];
//            arr[i] = arr[j]; 
//            arr[j] = temp
//         }
//        return removeElement;
//     }
// }

// let list = new MaxHeap(); 
// list.insert(28)
// list.insert(17)
// list.insert(21)
// list.insert(12)
// list.insert(8)
// list.insert(6)
// list.insert(13)
// console.log(list)

// class Node{
//     constructor(val, priority){
//         this.val=val;
//         this.priority=priority;
//     }
// }
// class PrioeityQueue{
//     constructor(){
//         this.values= [];
//     }

//     enquue(val, key){
//         let newNode = new Node(val, key)
//         this.values.push(newNode)
//         this.bubbleUp();
//         return this;
//     }

//     bubbleUp(){
//         let idx = this.values.length-1; 
//         while(idx>0){
//             let parentIdx = Math.floor((idx-1)/2); 
//             if(this.values[parentIdx].priority <= this.values[idx].priority) break;
//             let temp = this.values[idx];
//             this.values[idx] = this.values[parentIdx]; 
//             this.values[parentIdx] = temp;
//             idx = parentIdx;
//         }
//     }

//     dequeue(){
//         let removeNode = this.values[0]; 
//         let parent = this.values.pop()
//         this.values[0] = parent;
//         let parentIdx = 0; 
        
//         this.values.length === 0 && undefined;
//         if(this.values.length===1){
//             this.values=[];
//             return removeNode;
//         }
//         while(true){
//             let leftIdx = parentIdx*2+1;
//             let rightIdx = parentIdx*2+2;
//             let leftPriority = leftIdx<this.values.length? this.values[leftIdx].priority:Infinity;
//             let rightPriority= rightIdx<this.values.length? this.values[rightIdx].priority:Infinity;
//             let parentPriority = this.values[parentIdx].priority
           
//             if(parentPriority < leftPriority && parentPriority < rightPriority) break;
//             if(leftPriority < rightPriority){
//                 swap(this.values, parentIdx, leftIdx); 
//                 parentIdx = leftIdx;
//             }
//             if(leftPriority > rightPriority){
//                 swap(this.values, parentIdx, rightIdx); 
//                 parentIdx = rightIdx;
//             }
//         }

//         function swap(arr, i, j){
//                        let temp = arr[i];
//                        arr[i] = arr[j]; 
//                        arr[j] = temp
//          }

//          return removeNode;

//     }
// }

// let list = new PrioeityQueue();
// list.enquue('sum', 4)

// console.log(list)

// class Graph{
//     constructor(){
//         this.adjacent = {};
//     }

//     addVertex(val){
//        if(!this.adjacent[val]) this.adjacent[val] = [];
//     }

//     addEdge(v1, v2){
//         this.adjacent[v1].push(v2);
//         this.adjacent[v2].push(v1);
//     }

//     removeEdge(v1, v2){
//        this.adjacent[v1] = this.adjacent[v1].filter(el=>el !== v2)
//        this.adjacent[v2] = this.adjacent[v2].filter(el=>el !== v1)
//     }

//     removeVertex(val){
//         while(this.adjacent[val].length){
//             var adjanctVertex = this.adjacent[val].pop();
//             this.removeEdge(val, adjanctVertex);
//         }
//         delete this.adjacent[val];
//     }

//     traverseRecursive(start){
//         let visited = {}; 
//         let result = []; 
//         let adjacentList = this.adjacent;
        
//        function helper(vertex){
//            if(!vertex) return null;
//            visited[vertex] = true; 
//            result.push(vertex)
//            adjacentList[vertex].forEach(neighbor => {   
//                if(!visited[neighbor]) return helper(neighbor)        
//            });
//        }
//        helper(start);
//        return result;
//     }

//     traverseIteratively(start){
//         let stack = [start]; 
//         let visited = {}; 
//         let result =[]; 
//         visited[start]=true; 
        
//         while(stack.length){
//             let vertex = stack.pop()
//             result.push(vertex); 

//             this.adjacent[vertex].forEach(neighbor=>{
//                 if(!visited[neighbor]){
//                     stack.push(neighbor);
//                     visited[neighbor] =true;
//                 }
//             })
//         }

//         return result;
//     }

//     traverseDFS(start){
//         let result =[]; 
//         let visited = {}; 
//         let queue = [start]; 
//         visited[start] = true; 

//         while(queue.length){
//             let vertex = queue.shift(); 
//             result.push(vertex); 
//             this.adjacent[vertex].forEach(neighbor=>{
//                 if(!visited[neighbor]){
//                     queue.push(neighbor);
//                     visited[neighbor] = true;
//                 }
//             })
//         }

//         return result;
//     }
// }

// let graph = new Graph();
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")
// graph.addVertex("F")
// graph.addEdge("A", "B")
// graph.addEdge("A", "C")
// graph.addEdge("B", "D")
// graph.addEdge("C", "E")
// graph.addEdge("D", "E")
// graph.addEdge("D", "F")
// console.log(graph);


// class Priority{
//     constructor(){
//         this.values = [];
//     }
//     enqueue(value, priority){      
//         this.values.push({value, priority});
//         this.sort();
//     }
//     deQueue(){
//         return this.values.shift();
//     }
//     sort(){
//         this.values.sort((a,b) => {
//           return  a.priority - b.priority;
//         })
//     }
// }


// class Dijkstra{
//     constructor(){
//         this.adjacencyList = {};
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[];
//     }
//     addEdges(vertex1, vertex2,weight){
//         this.adjacencyList[vertex1].push({node:vertex2, weight});
//         this.adjacencyList[vertex2].push({node:vertex1, weight});
//     }

//     dijkstra(start, end){
//         let nodes = new Priority();
//         let previous = {};
//         let distances = {};
//         let smallest;

//         for(let vertex in this.adjacencyList){
//             if(vertex===start){
//                 distances[vertex] = 0;
//                 nodes.enqueue(vertex, 0)
//             } else {
//                 distances[vertex] = Infinity
//                 nodes.enqueue(vertex, Infinity)
//             }
//             previous[vertex] = null;
//         }
//       while(nodes.values.length){
//           smallest = nodes.deQueue();
//           console.log(smallest.value)
//       }

//     }


// }   

// let list = new Dijkstra();
// list.addVertex("A");
// list.addVertex("B");
// list.addVertex("C");
// list.addVertex("D");
// list.addVertex("E");
// list.addEdges("A","B", 4);
// list.addEdges("A","C", 2);
// list.addEdges("C","B", 1);
// list.addEdges("C","D", 5);
// list.addEdges("D","E", 9); 
// console.log(list)

var getDigit= (num,digit)=> Math.floor((num/Math.pow(10,digit))%10);
console.log(getDigit(43591, 5))
console.log(Math.pow(10, 0))
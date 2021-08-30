// //singly list

// class Node{
//     constructor(val){
//         this.val = val; 
//         this.next=null;
//     }
// }

// class SinglyList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0
//     }

//     push(val){
//         const newNode = new Node(val);

//         if( ! this.head){
//             this.head= newNode; 
//             this.tail = newNode;
//             this.length++;
//             return this;
//         }
      
//         this.tail.next = newNode;
//         this.tail= newNode;
//         this.length++;
//         return this;
//     }

//     pop(){
//         if(this.length ===0) return undefined;
//         if(this.length ===1){
//             this.length--;
//             return this.head;
//         } 

//         let currentNode = this.head;
//         let prevNode;
//         while(currentNode.next){
//             prevNode = currentNode;
//             currentNode=currentNode.next;
//         }
//         prevNode.next = null; 
//         this.tail = prevNode;
//         this.length--;
//         return currentNode;
//     }

//     unshift(val){
//         const newNode = new Node(val);

//         if( ! this.head){
//             this.head= newNode; 
//             this.tail = newNode;
//         }

//         let currentNode = this.head;
//         this.head = newNode; 
//         newNode.next = currentNode;
//         this.length++;
//         return this;
//     }

//     shift(){
//         if(this.length ===0) return undefined;
//         if(this.length ===1){
//             this.length--;
//             return this.head;
//         }

//         let removeNode = this.head;
//         this.head = this.head.next;
//         this.length--;
//         return removeNode;    
//     }

//     // access 
//     get(index){
//         if(index < 0 || index >= this.length) return undefined;
//         let count = 0; 
//         let currentNode = this.head;

//         while(count !== index){
//             currentNode= currentNode.next;
//             count++;
//         }

//         return currentNode;
//     }

//     set(index, val){
//         if(index < 0 || index >= this.length) return false;
//         let newNode = this.get(index); 
//         newNode.val = val;
//         return true;
//     }

//     insert(index, val){
//         if(index ===0) return this.unshift(val); 
//         if(index ===this.length) return this.push(val);
//         let newNode = new Node(val);
//         let prevNode = this.get(index-1); 
//         let nextNode = prevNode.next;
//         prevNode.next = newNode;
//         newNode.next = nextNode;
//         this.length++;
//         return true;
//     }

//     remove(index){
//         if(index < 0 || index >=this.length) return undefined;
//         if(index ===0) return this.shift(); 
//         if(index===this.length-1) return this.pop();

//         let prevNode = this.get(index-1)
//         let removeNode = prevNode.next;
//         let nextNode = removeNode.next; 
//         prevNode.next=nextNode;
//         this.length--;
//         return removeNode;
//     }

//     reverse(){
//      let currentNode = this.head; 
//     //  this.head = this.tail;
//     //  this.tail = currentNode;
//      let prevNode = null; 
//      let nextNode = null; 
//      for(let i =0; i <1; i++){
//          nextNode = currentNode.next; 
//          currentNode.next=prevNode;
//          prevNode=currentNode; 
//          currentNode=nextNode;
//          console.log(currentNode)
//      }
//      return this;
//     }

// }

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//         this.prev=null;
//     }
// }

// class DLL{
//     constructor(){
//         this.head = null;
//         this.tail=null;
//         this.length = 0;
//     }

//     push(val){
//         let newNode = new Node(val)
//         if(this.length===0){
//             this.head=newNode; 
//             this.tail=newNode;
//         } else{
//             let tailNode = this.tail;
//             this.tail.next = newNode;
//             newNode.prev=tailNode;
//             this.tail = newNode;
//         }
      
//         this.length++;
//         return this;
//     }

//     pop(){
//         if(this.length===0) return undefined;
//         if(this.length===1){
//             this.length--;
//             return this.head; 
//         } 

//         let removeNode=this.tail;
//         let prevNode = this.tail.prev;
//         removeNode.prev=null;
//         this.tail=prevNode;
//         this.tail.next=null;
//         this.length--;
//         return removeNode;
//     }

//     unshift(val){
//         let newNode = new Node(val)
//         if(this.length===0){
//             this.head=newNode; 
//             this.tail=newNode;
//         } else{
//             let headNode = this.head;
//             this.head.prev = newNode;
//             newNode.next=headNode;
//             this.head = newNode;
//         }
      
//         this.length++;
//         return this;
//     }

//     shift(){
//         if(this.length===0) return undefined;
//         if(this.length===1){
//             this.length--;
//             return this.head; 
//         } 

//         let removeNode=this.head;
//         let nextNode = this.head.next;
//         removeNode.next=null;
//         this.head = nextNode; 
//         this.head.pre=null;
//         this.length--;
//         return removeNode;
//     }

//     get(index){
//        let removeNode = this.head;
//        let count = 0; 
//        while(count !== index){
//            removeNode = removeNode.next;
//            count++;
//        }
//        return removeNode;
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
//         let newNode = new Node(val); 
        
//         let prevNode = this.get(index-1); 
//         let nextNode= prevNode.next; 
//         prevNode.next = newNode;
//         newNode.next = nextNode;
//         this.length++;
//         return true; 
//     }

//     remove(index){
//         let removeNode= this.get(index); 
//         let prevNode = removeNode.prev; 
//         let nextNode = removeNode.next;
//         prevNode.next = nextNode; 
//         nextNode.pre = prevNode;
//         this.length--;
//         return removeNode;
//     }
// }

// 

// class MaxtHeap{
//     constructor(){
//         this.values=[]; 
//     }

//     insert(val){
//         this.values.push(val); 
//         this.bubbleUp();
//         return this;
//     }
//     bubbleUp(){
//         let idx = this.values.length - 1; 
//         while(idx > 0){
//             let parentIdx = Math.floor((idx-1)/2); 
            
//             if(this.values[parentIdx] < this.values[idx]){
//                 let temp = this.values[parentIdx]; 
//                 this.values[parentIdx] = this.values[idx];
//                 this.values[idx] = temp;
//                 idx = parentIdx;
//             } else break;
//         }
//     }

//     extract(){
//         let parentIdx = 0; 
//         let removeElement = this.values[0]; 
//         this.values[0] = this.values.pop();

//         while(true){
//             let leftIdx = parentIdx*2+1;
//             let rightIdx = parentIdx*2+2;
//             let leftChild = this.values.length > leftIdx ? this.values[leftIdx]:0;
//             let rightChild = this.values.length > rightIdx ? this.values[rightIdx]:0;
//             if(this.values[parentIdx] > leftIdx && this.values[parentIdx]>rightChild) break;
//             if(leftChild> rightChild){
//                 swap(this.values, leftIdx, parentIdx)
//                 parentIdx = leftIdx;
//             } else {
//                 swap(this.values, rightIdx, parentIdx)
//                 parentIdx = rightIdx;
//             }
//         }

//         function swap(arr, i, j){
//             let temp = arr[i];
//             arr[i] = arr[j]; 
//             arr[j] = temp
//          }

//         return removeElement;
//     }

// }

// let list = new MaxtHeap(); 
// list.insert(15)
// list.insert(8)
// list.insert(11)
// list.insert(4)
// list.insert(10)
// list.insert(9)

// console.log(list)

class Graph{
    constructor(){
        this.adjacent = {};
    }

    addVertex(val){
       if(!this.adjacent[val]) this.adjacent[val] = [];
    }

    addEdge(v1, v2){
        this.adjacent[v1].push(v2);
        this.adjacent[v2].push(v1);
    }

    removeEdge(v1, v2){
       this.adjacent[v1] = this.adjacent[v1].filter(el=>el !== v2)
       this.adjacent[v2] = this.adjacent[v2].filter(el=>el !== v1)
    }

    removeVertex(val){
        while(this.adjacent[val].length){
            var adjanctVertex = this.adjacent[val].pop();
            this.removeEdge(val, adjanctVertex);
        }
        delete this.adjacent[val];
    }

    traverseRecursive(start){
        let visited = {}; 
        let result = []; 
        let adjacentList = this.adjacent;
        
       function helper(vertex){
           if(!vertex) return null;
           visited[vertex] = true; 
           result.push(vertex)
           adjacentList[vertex].forEach(neighbor => {   
               if(!visited[neighbor]) return helper(neighbor)        
           });
       }
       helper(start);
       return result;
    }

    traverseIteratively(start){
        let stack = [start]; 
        let visited = {}; 
        let result =[]; 
        visited[start]=true; 
        
        while(stack.length){
            let vertex = stack.pop()
            result.push(vertex); 

            this.adjacent[vertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    stack.push(neighbor);
                    visited[neighbor] =true;
                }
            })
        }

        return result;
    }

    traverseDFS(start){
        let result =[]; 
        let visited = {}; 
        let queue = [start]; 
        visited[start] = true; 

        while(queue.length){
            let vertex = queue.shift(); 
            result.push(vertex); 
            this.adjacent[vertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            })
        }

        return result;
    }
}

let graph = new Graph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
console.log(graph);
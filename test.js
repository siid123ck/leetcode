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



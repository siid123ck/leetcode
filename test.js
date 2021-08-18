class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head= newNode;
            this.tail= this.head;
        } else {
            this.tail.next=newNode;
            this.tail = newNode;
        }
        this.length++; 
        return this;
    }

    pop(){
        if(!this.head)   return undefined;
        let currentNode = this.head; 
        let tailNode = currentNode.next;
        while(currentNode.next){
            tailNode = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = tailNode;
        tailNode.next = null;
        this.length--;
        if(this.length===0){
            this.head = null;
            this.tail = null;
        }
        return currentNode
    }

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head= currentHead.next;
        this.length--;
        if(this.length ===0){
            this.head = null;
            this.tail= null;
        }
        return currentHead;
    }

    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        let currentNode = this.head;
        this.head = newNode;
        newNode.next = currentNode;
    
        this.length ++;
        return this;
    }

    get(index){
        if(index<0 || index >= this.length) return null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    set(index, val){
        let foundNode = this.get(index); 
        if(foundNode){
            foundNode.val=val; 
            return true; 
        }
        return false;
    }

    insert(index, val){
        if(index<0 || index > this.length) return false;
        if(index===this.length) return !!this.push(val);
        if(index===0) return  !!this.unshift(val);
        let newNode = new Node(val); 
        let prevNode = this.get(index-1); 
        let tempNode = prevNode.next;  //copy to assign for newNode.next
        prevNode.next=newNode;
        newNode.next = tempNode;
        this.length++;
        return true;
    }

    remove(index){  // hi i am siid //
        if(index<0 || index > this.length) return false;
        if(index===this.length) return this.pop();
        if(index===0) return  this.shift();

        let prevNode = this.get(index-1); 
        let removeNode = prevNode.next
        prevNode.next = removeNode.next
        this.length--;
        return removeNode;
    }

    reverse(){ // i am coe siid > am i coe siid > coe i coe siid> siid coe am i
        let headNode= this.head;
        let tailNode = headNode.next;
        for (let i = 1; i < this.length; i++) {
            headNode = tailNode; 
            tailNode= headNode 
        }
    }

    print(){
        let arr=[];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current= current.next;
        }
        return arr;
    }
}

let list = new SinglyList();
list.push(4)
list.push(6)
list.push(8)
list.push(14)
list.push(16)
list.push(18)



// Implement a linked list in JavaScript. Start with pseudocode and then flesh out one method such as insert.
class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    // return the node by index
    _find(index) {
        // initially we set node to current head
        let node = this.head;
        // get the next node until we are at the index
        for(let i=0; i<index; i++) {
            node = node.next;
        }
        return node;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) {
            throw new Error('Bad index')
        }
        const newNode = {
            value: value
        }
        // if inserting at head, make newNode.next point to current head
        // and update this.head to be newNode
        if(index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            // find the element before where we are inserting
            let prevNode = this._find(index -1);
            // set newNode next value to prevNode next value making newNode take its place
            newNode.next = prevNode.next;
            // then make prevNode.next point to newNode
            prevNode.next = newNode
        }
        this.length++; // increment length
    }
}

const myLinkedList = new LinkedList()
myLinkedList.insert(0, 'I am the head')
myLinkedList.insert(1, 'Then comes me')
myLinkedList.insert(2, 'I am third')
myLinkedList.insert(3, 'I am fourth')
myLinkedList.insert(4, 'I am fifth')
myLinkedList.insert(5, 'I am sixth')
console.log(myLinkedList)



// Write an algorithm to find the middle element of a linked list
const findMidInLinkedList = (list) => {
    const midIndex = Math.floor(list.length / 2);
    const midElement = list._find(midIndex)
    return midElement
}

const middle = findMidInLinkedList(myLinkedList)
console.log(middle)
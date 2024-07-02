class Node{
    constructor(data, next = null, back = null){
        this.data = data
        this.next = next
        this.back = back
    }
}

class main{
    creation(arr){
        if(arr.length === 0) return null
        let head = new Node(arr[0])
        let prev = head

        for(let i=1;i<arr.length;i++){
            let temp = new Node(arr[i], null, prev)
            prev.next = temp
            prev = temp
        }
        return head
    }

    print(head){
        while(head != null){
            console.log(head.data)
            head = head.next
        }
    }

    length(head){
        let c =0
        while(head != null){
            c++
            head = head.next
        }
        return c
    }

    deleteHead(head){
        if(head === null || head.next === null) return null
        let prev = head
        head = head.next// head --> 2nd node
        head.back = null// Remove the backward link from the new head to the old head.
        prev.next = null// Remove the forward link from the old head to the new head.
        return head
    }

    deleteTail(head){
        if(head === null || head.next === null) return null

        let tail = head 
        while(tail.next !== null){
            tail = tail.next
        }
        let prev = tail.back//hv to store before pointing to null
        prev.next = null
        tail.back = null

        return head
    }


    deleteKthElement(head, k){
        if(head == null) return null

        let temp = head 
        let cnt = 0
        while(temp !== null){
            cnt++
            if(cnt === k) break

            temp = temp.next
        }

        let prev = temp.back
        let front = temp.next

        if(prev === null && front === null){
            return null
        }
        else if(prev === null){
            return this.deleteHead(head)
        }
        else if(front === null){
            return this.deleteTail(head)
        }  
        prev.next = front
        front.back = prev
        temp.back = temp.next = null
        

        return head
    }

    deleteNode(node){
        //node !== head
        let prev = node.back
        let front = node.next
        if(front === null){
            prev.next = null
            return head
        }

        prev.next = front
        front.back = prev
        node.back = node.next = null
        return head
    }

    insertAtHead(head, value){
        let node = new Node(value)
        if(head === null){
            return node
        }

        node.next = head
        head.back = node
        head = node

        return head
    }

    insertBeforeTail(head, value){
        if(head.next === null){
            this.insertAtHead(head, value)
        }

        let node = new Node(value)

        let temp = head
        while(temp.next !== null){
            temp =temp.next
        }
        let prev = temp.back
        node.next = temp
        node.back = prev
        prev.next = node
        temp.back = node
        return head
    }

    insertBeforeKthPosition(head, value, k){
        if (k > this.length(head) || k <= 0){
            return console.error('Enter a valid position!');
        }
        if(k === 1){
            this.insertAtHead(head, value)
        }
        let temp = head 
        let cnt = 0
        while(temp !== null){
            cnt++
            if(cnt === k) break

            temp = temp.next
        }
        let prev = temp.back

        let node = new Node(value)
        node.next = temp
        node.back = prev
        prev.next = node
        temp.back = node
        return head

    }

    insertBeforeNode(head, value, node){
        
        let prev = node.back
        if(head === node){
            let val = value
            return this.insertAtHead(head, val)
        }
        let newNode = new Node(value)
        newNode.next = node
        newNode.back = prev
        prev.next = newNode
        node.back = newNode
        return head
    }

    reverse(head){
        // Function to reverse a doubly linked list
function reverseDLL(head) {
    // Check if the list is empty
    // or has only one node
    if (head === null || head.next === null) {
        // No change is needed;
        // return the current head
        return head;
    }
    
    // Initialize a pointer to
    // the previous node
    let prev = null; 
    
    // Initialize a pointer
    // to the current node
    let current = head; 

    // Traverse the linked list
    while (current !== null) {
        // Store a reference to
        // the next node
        let next = current.next;

        // Swap the previous
        // and next pointers
        current.next = prev;
        current.prev = next;

        // Move to the next node
        // in the original list
        prev = current;
        current = next;
    }

    // The final node in the original
    // list becomes the new head after reversal
    return prev;
}

    }
}

let arr = [1, 2, 3, 4, 5]
const obj = new main()
let head = obj.creation(arr)
//obj.print(head)

//head = obj.deleteHead(head)
//obj.print(head)

//head = obj.deleteTail(head)

// head = obj.deleteKthElement(head, 2)
// obj.print(head)

// head = obj.deleteNode(head.next.next.next)
// obj.print(head)

// head = obj.insertAtHead(head, 20)
// obj.print(head)


// head = obj.insertBeforeTail(head, 20)
// obj.print(head)

// head = obj.insertBeforeKthPosition(head, 100, 0)
// obj.print(head)


// head = obj.insertBeforeNode(head, 68, head.next)
// obj.print(head)

head = obj.reverse(head)
obj.print(head)




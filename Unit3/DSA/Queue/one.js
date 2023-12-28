let arr = [];
let front = 0 ;
let rear = 0;
let count = 0;
let size = 4 ;

function enqueue (data) {
    if(count == size )
    {
        console.log("Overflow");
        return ;

    }

    arr[rear] = data ;
    count++ ;
    rear = (rear + 1) % size ;
}
function dequeue (data) {
    if(count == 0 )
    {
        console.log("Underflow");
        return ;
    }

    print(arr[front]) ;
    count--;
    front = (front + 1) % size ;
}

enqueue(4) ;

enqueue(8) ;

enqueue(16) ;

enqueue(24) ;

dequeue();
dequeue();
dequeue();
dequeue();

console.log(arr) ;
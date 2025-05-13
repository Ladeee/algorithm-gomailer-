// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

const MinStack = (() => {
    const mainStack = [];
    const minStack = [];

    function push(val) {
        mainStack.push(val);
        if (minStack.length === 0 || val <= minStack[minStack.length - 1]) {
            minStack.push(val);
        }
    }

    function pop() {
        const popped = mainStack.pop();
        if (popped === minStack[minStack.length - 1]) {
            minStack.pop();
        }
    }

    function top() {
        return mainStack[mainStack.length - 1];
    }

    function getMin() {
        return minStack[minStack.length - 1];
    }

    // Return public API
    return {
        push,
        pop,
        top,
        getMin
    };
})();

MinStack.push(-2);
MinStack.push(0);
MinStack.push(-3);
console.log(MinStack.getMin()); // ➞ -3
MinStack.pop();
console.log(MinStack.top());    // ➞ 0
console.log(MinStack.getMin()); // ➞ -2

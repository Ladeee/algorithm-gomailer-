// You are given a nested list of integers nestedList. Each element is either an integer or a list 
// whose elements may also be integers or other lists. Implement an iterator to flatten it.

// int next() Returns the next integer in the nested list.
// boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.
// Your code will be tested with the following pseudocode:

// initialize iterator with nestedList
// res = []
// while iterator.hasNext()
//     append iterator.next() to the end of res
// return res
// If res matches the expected flattened list, then your code will be judged as correct.

// NOTE: An iterator is an object that contains a countable number of values. 
// An iterator is an object that can be iterated upon, meaning that you can traverse through all the values. 
// Recursive: Something that is recursive has to do with a procedure or rule that is repeated. simply reoccurs

function createNestedList(nestedList) {
    const flatten = (list) => {
      const result = [];
      for (const item of list) {
        if (Array.isArray(item)) {
          result.push(...flatten(item));
        } else {
          result.push(item);
        }
      }
      return result;
    };
  
    const flatList = flatten(nestedList);
    let index = 0;
  
    function hasNext() {
      return index < flatList.length;
    }
  
    function next() {
      return flatList[index++];
    }
  
    return {
      hasNext,
      next,
    };
  }

  const iterator = createNestedList([1, [2, [3, 4], 5], 6]);
  const res = [];
  
  while (iterator.hasNext()) {
    res.push(iterator.next());
  }
  
  console.log(res); // Answer: [1, 2, 3, 4, 5, 6]
    
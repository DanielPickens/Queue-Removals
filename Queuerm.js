/* My algo:
 Use the input array as circular q, q top pointer needed
   time complexity: O(x*x)
    Target list - array of x integers
     Each x iteration would 
          1. find out max element ( max value would be x) and keep track of its index
          2. set -1 after the iteration for max element and add the index to the target list
          3. Reduce the elements by 1 if its positive no in one more iteration
    */


function findPositions(arr, x) {
  //   
        
 
 let result = [x];
    let qPtr = 0;
    let maxNo = 0;
    let maxIndex = -1;
    let arrLength = arr.length;
    
    for (let i = 0; i < x; i++)    {
        maxIndex = qPtr;
        maxNo = arr[qPtr];
        // Iterate for min of ( x elements and remaining arr length)
        let count = x < arrLength ? x : arrLength;
        // Get max of first x elements and reduce the element by 1
        while (count > 0)    {
            // If the item is not deleted, process the item
            if (arr[qPtr] != -1)    {
                // Check if it is max no
                if (arr[qPtr] > maxNo && maxNo < x)    {
                    maxNo = arr[qPtr];
                    maxIndex = qPtr;
                }

                // reduce it by 1
                arr[qPtr] = arr[qPtr] > 0 ? arr[qPtr] - 1 : 0;                
                count--;
            }
            
            // set q pointer to Next q element
            qPtr++;
            qPtr = qPtr % arr.length;   
        }
        
        arr[maxIndex] = -1;
        result[i] = maxIndex + 1;
        
        // With each removal of element, the arr (or Q) length reduces by 1 element
        arrLength--;
        
        // If all items are processed, no need to proceed further
        if (arrLength == 0)    {
            break;
        }
    }
    return result;
}





/* FB's test cases:

function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

var n_1 = 6
var x_1 = 5
var arr_1 = [1, 2, 2, 3, 4, 5];
var expected_1 = [5, 6, 4, 1, 2 ];
var output_1 = findPositions(arr_1, x_1);
check(expected_1, output_1);

var n_2 = 13
var x_2 = 4
var arr_2 = [2, 4, 2, 4, 3, 1, 2, 2, 3, 4, 3, 4, 4];
var expected_2 = [2, 5, 10, 13];
var output_2 = findPositions(arr_2, x_2);
check(expected_2, output_2);

// Add your own test cases here

var mergeM = function (nums1, nums2) {
    /* 1. Merge Arrays */    
    let merge = []
    let n1 = 0
    let n2 = 0
    while (n1 < nums1.length || n2 < nums2.length) {

        //Consider when the elments are smaller, don't compare undefind
        if (n1 >= nums1.length) {
            //nums1 alreayd taken, n1 = undefined, just take nums2
            while (n2 < nums2.length) {
                merge.push(nums2[n2])
                n2 += 1
            }
        } else if (n2 >= nums2.length) {
            //nums2 alreayd taken, n2 = undefined, justa take nums1
            while (n1 < nums1.length) {
                merge.push(nums1[n1])
                n1 += 1
            }
        } else {
            //Compare them
             if (nums1[n1] <= nums2[n2]) {
                merge.push(nums1[n1])
                n1 += 1
            } else {
                merge.push(nums2[n2])
                n2 += 1
            }
        }  
    }
    console.debug(`Merge Array: ${merge}`);
    /* 2. Find the median */
    //The merge arrays is method type odd or even.
    let length = merge.length
    let mid = Math.floor(length / 2)
    let median = 0
    //odd
    if (length % 2 !== 0) {
        median = merge[mid]
    }
    //even
    else {
        median = (merge[mid] + merge[mid - 1]) / 2
    }
    return median
}


/* O(log(n + m)) approach */
var findMedianSortedArrays = function (nums1, nums2) {
    //edge case
    //we consider the case who has size larger, ude to have more elements, for the median
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1)
    }


    let m = nums1.length
    let n = nums2.length

    let left = 0
    let right = m //Use binary search as counting with array who has more elements


    while (left <= right) {
        //Partition 1:
        //partition 1 plays as mid of binarySearch structure
        let partition1 = Math.floor((left + right) / 2)

        let partition2 = Math.floor((m + n + 1) / 2) - partition1
        //.              size max - elements on left1

        /* Boundaries Elements */
        let left_max_1 = (partition1 == 0) ? -Infinity : nums1[partition1 - 1]
        let right_min_1 = (partition1 == m) ? Infinity : nums1[partition1]
        let left_max_2 = (partition2 == 0) ? -Infinity : nums2[partition2 - 1]
        let right_min_2 = (partition2 == n) ? Infinity : nums2[partition2]


        /* Compare if valid partition */
        if (left_max_1 <= right_min_2 &&
            left_max_2 <= right_min_1
        ) {
            //Valid partition -> Calculate median
            //even
            if ((m + n) % 2 == 0) {
                //here i have to use 4 elements and make something
                let laregesLeft = Math.max(left_max_1, left_max_2)
                let smallerRight = Math.min(right_min_1, right_min_2)
                return (laregesLeft + smallerRight) / 2
            }
            //odd
            else {
                //maybe only two elements
                let median = Math.max(left_max_1, left_max_2)
                return median
            }
            
        } else if (left_max_1 > right_min_2){
            //invalid partition
            //Search to left
            right = partition1 - 1
        } else {
            //serach to right
            left = partition1 + 1
        }
    }
}


console.debug(mergeM([1, 2], [3, 4]));
console.debug(mergeM([1, 3], [2]));
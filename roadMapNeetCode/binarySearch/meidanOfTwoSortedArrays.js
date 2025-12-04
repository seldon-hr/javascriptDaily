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


console.debug(mergeM([1, 2], [3, 4]));
console.debug(mergeM([1, 3], [2]));
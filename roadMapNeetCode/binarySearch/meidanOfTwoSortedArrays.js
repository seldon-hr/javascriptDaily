var mergeM = function (nums1, nums2) {
    let merge = []
    let n1 = 0
    let n2 = 0
    while (n1 < nums1.length || n2 < nums2.length) {
        console.debug('entry');
        if (nums1[n1] <= nums2[n2]) {
            merge.push(nums1[n1])
            n1 += 1
        } else {
            merge.push(nums2[n2])
            n2 += 1
        }
    }
    return merge
}


console.debug(mergeM([1, 2], [3, 4]));
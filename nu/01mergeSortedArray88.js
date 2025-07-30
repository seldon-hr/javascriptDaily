/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1; //ÚLtimo valor válido de nums1.
    let j = n - 1; //ÚLtimo valor de nums2
    let HEAD = m + n - 1; //Indicador última posición de nums1.

    /* Comparamos mientras estos sean menores o iguales a cero */
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[HEAD] = nums1[i];
            i--;
        } else {
            nums1[HEAD] = nums2[j];
            j--;
        }
        //Siempre baja, por ser HEAD principal
        HEAD--
    }
    // Los valores de nums1, fueron mayores que nums2
    while (j >= 0) {
        nums1[HEAD] = nums2[j]
        j--
        HEAD--
    }
    
    console.debug(nums1);
};

nums1 = [1, 2, 3, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;



merge(nums1, m, nums2, n);
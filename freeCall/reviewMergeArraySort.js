nums1 = [7, 8, 9, 0, 0, 0];
m = 3;
nums2 = [2, 5, 6];
n = 3;


var sortedArray = function (nums1, m, nums2, n) {
    //Necesitamos apuntadores
    let i = m - 1; // me nos dice la longitud válida de nums1, pero como es array contamos desde 0, entonces descontamos uno.
    let j = n - 1; // último valor del array nums2
    let HEAD = (m + n) - 1; // última posición de nums1, donde tenemos que empezar a insertar.

    while (i >= 0 && j >= 0) {
        let element1 = nums1[i];
        let element2 = nums2[j];
        //Ordenamos por mayor, entonces preguntamos de los dos quiene es mayor.
        if (element1 > element2) {
            nums1[HEAD] = element1;
            i--
        } else {
            nums1[HEAD] = element2
            j--
        }
        HEAD--
    }
    //Hay valores aún dentro de array nums2, todos nums1, son mayores.
    while (j >= 0) {
        let element = nums2[j]
        nums1[HEAD] = element;
        j--
        HEAD--
    }
    console.debug(nums1);
}

sortedArray(nums1, m, nums2, n);

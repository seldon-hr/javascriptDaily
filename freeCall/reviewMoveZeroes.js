/* Free Call by Reviewing zeroes */

- i = 0, k = 0
- Mientras que i < nums.length: 
    --Si nums[i] !== 0:
        --- nums[k] = nums[i]
        --- k++
    --i++ 
- Cierre de mientras
    
- Mientras que k < nums.length:
    --nums[k] = 0
    --k++ 
- Cierre segundo while
-left = 0, right = nums.length -1, maxleft=nums[left], maxRight=nums[right] total= 0 
 -Mientras left < right: 
-- si nums[left] <= nums[right]

--- area = min(maxLeft, maxRight) - nums[left]
--- total += area
--- maxLeft = max(maxLeft, nums[left])
--- left += 1
-- Sino:

--- area = min(maxLeft, maxRight) - nums[right]
--- total += area
---maxRight = max(maxRight, nums[right]
--- right -= 1
-Cierre de mientras.
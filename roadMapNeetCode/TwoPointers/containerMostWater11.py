""" Versión con el uso de min, max, todo esto para un uso más legible """
class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) -1
        area = 0
        while left < right:
            altura = min(height[left], height[right])
            base = right - left
            bArea = altura * base
            area = max(area, bArea)

            if height[left] < height[right]:
                left+= 1
            else:
                right-= 1

        return area
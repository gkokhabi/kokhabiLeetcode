#Leetcode number: 17

#Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

#A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


class Solution:
    dict_nums = {
        '2': ['a', 'b', 'c'], '3': ['d', 'e', 'f'], '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'], '6': ['m', 'n', 'o'], '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'], '9': ['w', 'x', 'y', 'z']
    }
    
    def letterCombinations(self, digits: str) -> List[str]:
        each = []
        for i in digits:
            each.append(i)
        if '1' in each:
            print('Error. Forbidden characters')
        else:
            digit_length = len(digits)

            if digit_length == 0 or digits == '0' or digits =='1':
                return []

            if digit_length == 1:
                return self.one(digits)

            elif digit_length == 2:
                return self.two(each)

            elif digit_length == 3:
                return self.three(each)

            elif digit_length == 4:
                return self.four(each)

            else:
                print('Error')


    def one(self, num):
        return self.dict_nums[num]

    def two(self, each):
        chars = []
        for i in self.dict_nums[each[0]]:
            for j in self.dict_nums[each[1]]:
                chars.append(i+j)
        return chars

    def three(self, each):
        chars = []
        for i in self.dict_nums[each[0]]:
            for j in self.dict_nums[each[1]]:
                for k in self.dict_nums[each[2]]:
                    chars.append(i + j + k)
        return chars

    def four(self, each):
        chars = []
        for i in self.dict_nums[each[0]]:
            for j in self.dict_nums[each[1]]:
                for k in self.dict_nums[each[2]]:
                    for l in self.dict_nums[each[3]]:
                        chars.append(i + j + k + l)
        return chars
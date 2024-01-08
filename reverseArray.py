# Instruction 

# Convert number to reversed array of digits
# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


# ANSWER

def digitize(n):
    num = str(n)[::-1]
    res = list(map(int, str(num)))
    return res
# Instructions 

# Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
# Answer

def myFunc(e):
    return len(e)

def sort_by_length(list):

    list.sort(key=myFunc)
    return list
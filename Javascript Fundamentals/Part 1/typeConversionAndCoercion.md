Number() built in function to convert a string to a number
String() to convert a number to a string

The plus operator will convert numbers to strings
for example: console.log('I am' + 23 + 'years old) --> 'I am 23 years old'
if js didn't have auto type coeircion we would need to do console.log('I am' + String(23) + 'years old)

The minus operator will convert string to numbers in this case:
for example: console.log('23' - '10' - 3) --> 10
for example: console.log('23' + '10' + 3) --> 23103
for example: console.log('23' * '2') --> 46 
for example: console.log('23' / '2') --> 11.5 
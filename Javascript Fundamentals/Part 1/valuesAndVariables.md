In JavaScript, a variable is a container for storing data values. Variables can be used to store data such as numbers, strings, objects, and more. You can declare a variable using the var, let, or const keywords. Here are some

var is function-scoped and can be re-declared and updated.
let is block-scoped and can be updated but not re-declared within the same scope.
const is block-scoped and cannot be updated or re-declared; it must be initialized at the time of declaration.

if you dont declare a vriable, it will create a property in the global object myName = "Milder", this is a bad practice

Data types

Every value is either an object or primitive, a value is a primitive when is not an object.

Primitives:

Number: for integers and decimals
String: usted for texts
Boolean: for logical values TRUE or FALSE 
undefined: a variable thats not yet defined, declared without asigning a value;
null: empty value
symbol: a value that is unique and canonot be changed
bigInt: Larger intergers that the Number type can hold

Dinamic typing: we do not have to manually define the data type of the value stored in a variable. Instead data types are determined automatically.
In Javascript the value has a type not the variable, variable just store value that have a type
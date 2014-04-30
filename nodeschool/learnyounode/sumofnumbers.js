//Parse only numbers entered for calculation and convert them to numbers
var num_args = process.argv.slice(2).map(Number);

var sum = 0;

//Nice for loop
num_args.forEach(function(num) {
  sum += num;
});

console.log(sum);

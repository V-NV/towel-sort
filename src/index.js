module.exports = function towelSort (matrix) {
line = [];
 if (!matrix) {return []}
 matrix.forEach((element, index) => {
if (index % 2 !== 0) {
element.reverse()
 }
element.forEach((a) => {line.push(a)
})
})
console.log(line)
return line;
}

function multiplicationTable(n) {
  var table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${n} X ${i} = ${n * i}` + "\n";
  }
  return table;
}
function printAllTablesFromOneToN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(multiplicationTable(i));
  }
}
printAllTablesFromOneToN(4);

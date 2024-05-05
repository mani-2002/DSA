let data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";
var rows = data.split('\n');
var result = [];
for(let i = 0; i < rows.length; i++){
    var columns = rows[i].split(';');
    result.push(columns);
}
console.log(result);
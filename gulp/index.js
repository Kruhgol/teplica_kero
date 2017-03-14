var fs = require('fs');
var tasks = fs.readdirSync('./gulp/tasks/');

require('./config');

tasks.forEach(function(task){
    require('./tasks/' + task);
})



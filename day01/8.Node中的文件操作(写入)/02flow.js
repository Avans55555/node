
let fs = require('fs');

let ws=fs.createWriteStream(__dirname+'/demo2.txt')

ws.on('open',function () {
  console.log('流打开了')
})

ws.on('close',function (){
  console.log('流关闭了')
})

ws.write('hello \n');
ws.write('avans \n');
ws.write('you are very handsome');
ws.close(); //ws.end()也行
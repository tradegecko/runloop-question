/*
  I want a run loop that allows me to enqueue a handler, and
  it should flush the queue on every tick.
*/
let loop = new RunLoop();
loop.schedule(function(){
  console.log('run#1')
});
loop.start();
loop.schedule(function(){
  console.log('run#2')
});
loop.schedule(function(){
  console.log('run#3')
});
loop.end();
loop.schedule(function(){
  console.log('run#4')
});
// expected output
//run#1
//run#2
//run#3

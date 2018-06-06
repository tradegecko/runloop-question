/*
  I want a run loop that supports multiple queues. Each queue is given a priority.
  hanlders for a higher priority run before a handler on a lower priority queue.
*/
let loop = new RunLoop();
loop.schedule('sync', function(){
  console.log('sync#1')
});
loop.schedule('render', function(){
  console.log('render#1')
  loop.schedule('sync', function(){
    console.log('sync#3')
  })
});
loop.schedule('render', function(){
  console.log('render#2')
});
loop.schedule('sync', function(){
  console.log('sync#2')
});
loop.start();
loop.end();
loop.schedule('sync', function(){
  console.log('i never ran')
});
// expected output
// sync#1
// sync#2
// render#1
// sync#3
// render#2

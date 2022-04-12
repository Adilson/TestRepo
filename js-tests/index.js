var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

const r = x => Math.floor(Math.random()*x);
const arr = Array.from(Array(100000).keys()).map(x=>r(10000));
const getS = () => arr[r(arr.length)] + arr[r(arr.length)];

var map = new Map(arr.map((x,i)=> [x,i.toString()]));


var sortedArr = [...arr];
sortedArr.sort((a,b)=>(a-b));

// add tests
suite.add('nested loops', () => {
    var s = getS();
    for (var i0=0; i0 < arr.length; i0++)
        for (var i1 = i0; i1 < arr.length; i1++)
            if (arr[i0]+arr[i1] == s)
                return [i0,i1];
})
.add('set', () => {
    var s = getS();
    for (var i0=0; i0 < arr.length; i0++)
    {
        var c = s - arr[i0];
        if (map.has(c))
            return [i0, +map.get[c]];
    }

})
.add('sort', () => {
    var s = getS();
    const findIndex = (v) => {
        var l = 0, u = sortedArr.length-1;
        while (true)
        {
            p = Math.floor((u+l)/2);
            if (sortedArr[p] == v)
                return p;

            if (sortedArr[p] < v && p < u)
                l = p;
            else if (sortedArr[p] < v && p == u)
                return u;
            else if (sortedArr[p] > v && p > l)
                u = p
            else
                return undefined;
        }
    
    };

    var pivot = findIndex(Math.ceil(s/2));
    var i0 = pivot;
    var i1 = pivot;

    while (true)
    {
        var total = sortedArr[i0] + sortedArr[i1];
        if (total == s)
            return [i0,i1];
        else if (total < s)
            i1++;
        else if (total > s)
            i0--;

        if (i0 < 0 || i1 > sortedArr.length)
            return undefined;
    }
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true  });
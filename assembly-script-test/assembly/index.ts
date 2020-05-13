// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}
export interface Range {
    a: i32;
    b: i32;
}

export function testRanges(ranges: Range[], over: Range) : Range[]
{
  return ranges.filter(x=> x.b >= over.a && x.a <= over.b);
}
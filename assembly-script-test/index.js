const fs = require("fs");
const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"));
const imports = {
  env: {
    abort(_msg, _file, line, column) {
       console.error("abort called at index.ts:" + line + ":" + column);
    }
  }
};
Object.defineProperty(module, "exports", {
  get: () => new WebAssembly.Instance(compiled, imports).exports
});

//tests
console.log(module.exports.add(1,2));
var ranges = [{a: 0, b: 5}, {a: 3, b: 5}, {a: 2, b: 7}];
var testing = v => console.log('testing', v, module.exports.testRange(ranges, v));

testing({a:1, b:7});
testing({a:1, b:3});
testing({a:6, b:7});
testing({a:8, b:10});

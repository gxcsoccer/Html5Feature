function fibonacci(n) {
  return (function(n) {
    if (n == 1 || n == 2)
      return 1;
    return arguments.callee(n - 1) + arguments.callee(n - 2);
  })(n);
}

self.onmessage = function(e) {
  var data = e.data;
  self.postMessage(fibonacci(data.input));
};
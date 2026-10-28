function delayBlocking() {
  const start = Date.now();

  while (Date.now() - start < 2000) {
    // Wuxuu sugayaa 2 ilbiriqsi
  }

  return "Blocking delay completed!";
}
// Non-Blocking

console.log("Start blocking delay...");
console.log(delayBlocking());
console.log("This message appears after the delay.");

function delayNonBlocking(callback) {
  setTimeout(() => {
    callback("Non-blocking delay completed!");
  }, 2000);
}

console.log("Start non-blocking delay...");

delayNonBlocking((message) => {
  console.log(message);
});

console.log("This message appears immediately.");
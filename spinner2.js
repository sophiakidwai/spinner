const spinnerMoves = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|']

let delay = 0;
for (let spins of spinnerMoves) {
  delay += 100
  setTimeout(() => {
    process.stdout.write(spins);
  }, delay);
}
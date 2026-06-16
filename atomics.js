// Atomics

// 1. Setup: SharedArrayBuffer + TypedArray
let sharedBuffer = new SharedArrayBuffer(4); // 4 bytes
const sharedArray = new Int32Array(sharedBuffer); // 32-bit integer view
let sharedArray = new Int32Array(sharedBuffer); // 32-bit integer view

// 2. Atomics.store (write atomically)
Atomics.store(sharedArray, 0, 123);
console.log(sharedArray[0]); // 123

// 3. Atomics.load (read atomically)
let value = Atomics.load(sharedArray, 0);
console.log(value); // 123

// 4. Atomics.add / sub
Atomics.add(sharedArray, 0, 10); // Add 10
console.log(sharedArray[0]); // 133
Atomics.sub(sharedArray, 0, 3); // Subtract 3
console.log(sharedArray[0]); // 130

// 5. Atomics.and / or / xor
Atomics.and(sharedArray, 0, 0b1110); // Bitwise AND
Atomics.or(sharedArray, 0, 0b0001); // Bitwise OR
Atomics.xor(sharedArray, 0, 0b0011); // Bitwise XOR

// 6. Atomics.exchange (swap values)
let oldValue = Atomics.exchange(sharedArray, 0, 200);
console.log(oldValue); // previous value
console.log(sharedArray[0]); // 200

// 7. Atomics.compareExchange
// Replace only if current value matches expected
let result = Atomics.compareExchange(sharedArray, 0, 200, 300);
console.log(result); // 200 (old value)
console.log(sharedArray[0]); // 300 (new value)

// 8. Atomics.wait / notify (synchronization)
// Only works on Int32Array
// Wait until value changes (blocking; allowed in worker threads only)
// Memory ordering: Atomics operations are sequentially consistent — perform Atomics.store(sharedArray, idx, value)
// before Atomics.notify(sharedArray, idx) so the updated value is visible to waiting agents; non-atomic views
// are not ordered by Atomics and require explicit synchronization if used concurrently.
Atomics.store(sharedArray, 0, 0);
setTimeout(() => {
  Atomics.store(sharedArray, 0, 1);
  Atomics.notify(sharedArray, 0, 1); // Wake up one waiter
}, 1000);

// In worker thread: Atomics.wait(sharedArray, 0, 0);

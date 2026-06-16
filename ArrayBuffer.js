// ArrayBuffer

// 1. Creating an ArrayBuffer
const buffer = new ArrayBuffer(16); // 16 bytes
console.log(buffer.byteLength); // 16

// 2. Views on ArrayBuffer
// ArrayBuffer itself just holds raw bytes.
// You need a "view" (TypedArray or DataView) to read/write.

const int32View = new Int32Array(buffer); // 4 bytes per element
int32View[0] = 42;
console.log(int32View[0]); // 42

const uint8View = new Uint8Array(buffer); // 1 byte per element
// The observed byte value depends on platform endianness; on little-endian systems this will be 42 (lowest byte of 32-bit integer),
// but on big-endian systems it will be the high byte — use DataView with an explicit endianness if you need deterministic results.
// 3. DataView (flexible view)
// Use a separate buffer to avoid overlapping writes that would corrupt other views
let dataBuffer = new ArrayBuffer(16);
let dataView = new DataView(dataBuffer);
// Write 16-bit unsigned int at byte offset 1, explicitly big-endian (false).
// Use setUint16/getUint16 because the value is non-negative.
dataView.setUint16(1, 256, false);
console.log(dataView.getUint16(1, false)); // 256
dataView.setInt16(1, 256); // Write 16-bit int at byte offset 1
console.log(dataView.getInt16(1)); // 256

// 4. Typed Arrays
// Common types: Int8Array, Uint8Array, Int16Array, Uint16Array,
// Int32Array, Uint32Array, Float32Array, Float64Array

const floatArray = new Float32Array(4); // 4 floats
floatArray[0] = 3.14;
console.log(floatArray[0]); // 3.14

// 5. Converting Between Buffers and Strings
// Example: encode string to UTF-8 bytes
const encoder = new TextEncoder();
const encoded = encoder.encode("Hello"); // Uint8Array
console.log(encoded); // [72,101,108,108,111]

// Decode back to string
const decoder = new TextDecoder();
// 6. Copying and Slicing
// Use a zero-copy TypedArray view instead of ArrayBuffer.slice which copies bytes
const sliceView = new Uint8Array(buffer, 0, 8); // view into same buffer (no copy)
console.log(sliceView.byteLength); // 8
const slice = buffer.slice(0, 8); // New ArrayBuffer with first 8 bytes
console.log(slice.byteLength); // 8

// 7. Use Cases
// - Binary file manipulation
// - WebSockets or network protocols
// - Working with images, audio, video data
// - Interfacing with WebGL or Canvas

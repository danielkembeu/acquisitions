// Dummy test suite

console.log("Running tests...");

function testSum() {
  const a = 2;
  const b = 3;
  const expected = 5;
  const result = a + b;

  if (result !== expected) {
    throw new Error(`testSum failed: expected ${expected}, got ${result}`);
  }

  console.log("testSum passed");
}

function testSubtraction() {
  const a = 5;
  const b = 3;
  const expected = 2;
  const result = a - b;

  if (result !== expected) {
    throw new Error(
      `testSubtraction failed: expected ${expected}, got ${result}`,
    );
  }

  console.log("testSubtraction passed");
}

try {
  testSum();
  testSubtraction();
  console.log("All dummy tests passed!");
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

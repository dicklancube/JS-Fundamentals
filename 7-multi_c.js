#!/usr/bin/env node

// 7-multi_c.js

let count = parseInt(process.argv[2]);

if (!process.argv[2] || isNaN(count)) {
  console.log("Missing number of occurrences");
} else if (count > 0) {
  for (let i = 0; i < count; i++) {
    console.log("C is fun");
  }
}

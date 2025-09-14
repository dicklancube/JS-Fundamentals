#!/usr/bin/env node

// 6-multi_languages_loop.js

let languages = ["C is fun", "Python is cool", "JavaScript is amazing"]
let output = ""
for (let i = 0; i < languages.length; i++) {
    output += languages[i] + (i < languages.length - 1 ? "\n" : "")
}
console.log(output)

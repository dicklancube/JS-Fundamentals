#!/usr/bin/env node


let size = parseInt(process.argv[2])

if (!process.argv[2] || isNaN(size) || size <= 0) {
    console.log("Missing size")
} else {
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size))
    }
}

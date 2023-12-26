import { readFileSync } from "fs"

function main() {
  const input = readFileSync("./days/day 6/final-input.txt", "utf-8")

  let count = 0

  for (let idx = 0; idx < input.length - 13; idx++) {
    const chars = input.substring(idx, idx + 14)

    if (is_unique(chars)) {
      count = idx + 14
      break
    }
  }

  console.log(count)
}

function is_unique(chars: string): boolean {
  const used: string[] = []

  for (const char of chars) {
    if (used.includes(char)) return false
    used.push(char)
  }

  return true
}

console.time("time")
main()
console.timeEnd("time")


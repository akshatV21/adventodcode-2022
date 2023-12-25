import { readFileSync } from "fs"

function main() {
  const input = readFileSync("./days/day 1/final-input.txt", "utf-8")
  const inventories = input.split("\r\n\r\n").map(inv => inv.split("\r\n"))

  const calories = []

  for (const inv of inventories) {
    const total = inv.reduce((prev, curr) => prev + +curr, 0)
    calories.push(total)
  }

  calories.sort((a, b) => b - a)
  console.log(calories[0] + calories[1] + calories[2])
}

main()


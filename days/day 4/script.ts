import { readFileSync } from "fs"

function main() {
  const input = readFileSync("./days/day 4/final-input.txt", "utf-8")
  const pairs = input.split("\r\n").map(pair => pair.split(",").map(range => range.split("-").map(Number)))

  let count = 0

  for (const [first, second] of pairs) {
    const [first_start, first_end] = first
    const [second_start, second_end] = second

    if (first_start >= second_start && first_start <= second_end) {
      count++
      continue
    }

    if (first_end <= second_end && first_end >= second_start) {
      count++
      continue
    }

    if (second_start >= first_start && second_start <= first_end) {
      count++
      continue
    }

    if (second_end <= first_end && second_end >= first_start) {
      count++
      continue
    }

  }

  console.log(count)
}

main()


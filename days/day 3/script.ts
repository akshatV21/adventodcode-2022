import { readFileSync } from "fs";

const lower_zero = "a".charCodeAt(0)
const upper_zero = "A".charCodeAt(0)

function main() {
  const input = readFileSync("./days/day 3/final-input.txt", "utf-8")
  const sacks = input.split("\r\n")

  let total_priority = 0

  for (let idx = 0; idx < sacks.length - 2; idx += 3) {
    const sack_one = sacks[idx]
    const sack_two = sacks[idx + 1]
    const sack_three = sacks[idx + 2]

    const common_letter = get_common_letter(sack_one, sack_two, sack_three)!
    total_priority += calc_priority(common_letter)
  }

  console.log(total_priority)
}

function get_common_letter(one: string, two: string, three: string) {
  for (const letter of one) if (two.includes(letter) && three.includes(letter)) return letter
}

function calc_priority(letter: string): number {
  const code = letter.charCodeAt(0)

  if (code >= lower_zero) return (code - lower_zero) + 1
  else return (code - upper_zero) + 27
}

console.time("time")
main()
console.timeEnd("time")


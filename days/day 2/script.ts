import { readFileSync } from "fs";

const result_map = {
  AX: 3,
  AY: 4,
  AZ: 8,
  BX: 1,
  BY: 5,
  BZ: 9,
  CX: 2,
  CY: 6,
  CZ: 7
}

function main() {
  const input = readFileSync("./days/day 2/final-input.txt", "utf-8")
  const rounds = input.split("\r\n").map(round => round.split(" "))

  let total = 0

  for (const round of rounds) {
    const [opponent, user] = round
    total += result_map[`${opponent}${user}`]
  }

  console.log(total)
}

main()


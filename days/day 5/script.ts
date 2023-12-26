import { readFileSync } from "fs"

function main() {
  const input = readFileSync("./days/day 5/final-input.txt", "utf-8")
  const [stacks_str, procedures_str] = input.split("\r\n\r\n")

  const stacks: Record<string, string[]> = {}
  const procedures: number[][] = []

  const stacks_arr = stacks_str.split("\r\n").reverse()
  const no_of_stacks = Math.floor(stacks_arr[0].length / 3)

  for (let idx = 1; idx < stacks_arr.length; idx++) {
    const crates = get_row_crates(stacks_arr[idx])
    update_stack(crates, no_of_stacks, stacks)
  }

  for (const curr_pro of procedures_str.split("\r\n")) {
    const pro: number[] = curr_pro.split(" ").filter(Number).map(Number)
    procedures.push(pro)
  }

  for (const [amt, from, to] of procedures) {
    const stack_length = stacks[from].length

    for (let idx = stack_length - amt; idx < stack_length; idx++) {
      stacks[to].push(stacks[from][idx])
      stacks[from][idx] = null
    }

    for (let idx = 0; idx < amt; idx++) {
      stacks[from].pop()
    }
  }

  const top_crates = Object.values(stacks).map(stack => stack.at(-1))
  console.log(top_crates.join(""))
}

function get_row_crates(row: string) {
  const crates = []

  for (let idx = 1; idx < row.length; idx += 4) {
    const crate = row[idx].trim()
    crates.push(crate)
  }

  return crates
}

function update_stack(crates: string[], no_of_stacks: number, stacks: Record<string, string[]>) {
  for (let idx = 1; idx <= no_of_stacks; idx++) {
    if (!stacks[idx]) stacks[idx] = []
    if (crates[idx - 1]) stacks[idx].push(crates[idx - 1])
  }
}

console.time("time")
main()
console.timeEnd("time")


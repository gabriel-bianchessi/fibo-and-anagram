import React, { useState } from "react"

export default function () {
  
  
  let [list, setList] = useState("")
  
  const calcular: React.KeyboardEventHandler<HTMLInputElement> = ev => {
    if (ev.code != "Enter") return
    let fiboUntil = parseInt(ev.currentTarget.value) ?? 0
  
    let pre = 0
    let cur = 1
    let sum = 0
    let arr = [pre, cur]
    while (fiboUntil--) {
      sum = pre + cur
      arr.push(sum)
      pre = cur
      cur = sum
    }
    let finalString = arr.join("; \n")
    ev.preventDefault()
    setList(finalString)
  }

  return <>
    <h2>Até qual número da sequência Fibonacci você quer?</h2>
    <input type="text" onKeyUp={calcular}/>
    <div>Números: {list} </div>
  </>
}
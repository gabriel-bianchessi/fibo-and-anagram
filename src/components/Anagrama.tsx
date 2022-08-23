import React, { useState } from "react"

function isAnagram(word1: string, word2: string): boolean {
  word1.toLowerCase().replace(/\s/gim, "")
  word2.toLowerCase().replace(/\s/gim, "")
  
  if(word1.length != word2.length) return false

  word1 = word1.split("").sort().join("")
  word2 = word2.split("").sort().join("")

  return( word1 == word2 )
}

export default function() {
  let [str, setStr] = useState("")

  const test: React.FormEventHandler<HTMLFormElement> = ev => {
    ev.preventDefault()
    
    // let isAnagram = isAnagram()

    console.log(ev.currentTarget.word1.value)
  }
    
  return <>
    <form action="" onSubmit={test}>
      <h2>Digite a palavra 1</h2>
      <input type="text" name="word1"/>
      <h2>Digite a palavra 2</h2>
      <input type="text" name="word2"/>
      <button>Testar</button>
    </form>
  </>
}
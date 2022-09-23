let entriesEl = document.getElementById("entries")
let valueEl = document.getElementById("entered-value")
let count = 0

function increment(){
    count += 1
    entriesEl.textContent = count
}

function saving(){
    let countStr = count + " - "
    valueEl.textContent += countStr
    entriesEl.textContent = 0
    count = 0
}
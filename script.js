let a = +prompt("Son kiriting");
while (isNaN(a) || a == 0) {
    a = +prompt("Son qaytadan kiriting")
}
box = ""
for (let i = 0; i < a; i++) {
    for (let j = 0; j < a; j++) {
        if (a % 2 == 0) {
            a--
            box += "⬛"
        } else if (i === 0 || i === a - 1 || j === 0 || j === a - 1 || i === j || j == a - 1 - i) {
            box += "⬛"
        } else {
            box += "⬜"
        }

    }
    console.log(box)
    box = ""
}
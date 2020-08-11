var char = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "+", "/", "x"]
var container = [0, 0]
var containerIndex = 0
var input = ""
var inputBack = ""
var opIndex = null
var result = 0
var lastChar = ""
var lastCharBack = ""
var bool = null
var bool2 = false
var opt

document.querySelectorAll(".num").forEach(item => {
    item.addEventListener("click", event => {
        function join() {
            input = lastChar + char[item.value]
            lastChar = input
            document.getElementById("input").innerHTML = input
            console.log(input)
            bool = true
        }

        function backJoin() {
            inputBack = lastCharBack + char[item.value]
            lastCharBack = inputBack
            container[containerIndex] = inputBack
            console.log(container[containerIndex])
        }
        if (item.value >= 0 && item.value <= 9) {
            join()
            backJoin()
        } else if (item.value == 100) {
            document.getElementById("input").innerHTML = "0"
            input = ""
            lastChar = ""
            inputBack = ""
            lastCharBack = ""
            container[0] = ""
            bool = null
            bool2 = true
        } else if (bool == true && bool2 == false) {
            console.log(container)
            opIndex = item.value - 10
            console.log(opIndex)
            containerIndex = 1
            console.log(containerIndex)
            inputBack = ""
            lastCharBack = ""
            join()
            bool = null
            bool2 = true
        } else if (container[1] != "" || item.value == 200) {

            console.log(container[0])
            console.log(container[1])
            var op = [
                minus(parseInt(container[0]), parseInt(container[1])),
                plus(parseInt(container[0]), parseInt(container[1])),
                divide(parseInt(container[0]), parseInt(container[1])),
                times(parseInt(container[0]), parseInt(container[1]))
            ]
            result = parseInt(op[opIndex])
            console.log(result)
            container[0] = result
            if (item.value == 200) {
                document.getElementById("input").innerHTML = result
            } else {
                container[1] = ""
                join()
                bool2 = false
                bool = null
            }
        }
    })
})

function plus(num1, num2) {
    return num1 + num2
}

function minus(num1, num2) {
    return num1 - num2
}

function times(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}



function bntP() {
    if (exist != "" && lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "x") {
        lastChar = "+"
        first = Number(a)
        opt = "a"
        var b = "+"
        a = exist.concat(b)
        exist = a;
        document.getElementById("input").innerHTML = a
        if (last != null) {
            tf = true
        }
    }
}

function bntM() {
    if (exist != "" && lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "x") {
        lastChar = "-"
        var b = "-"
        a = exist.concat(b)
        exist = a;
        document.getElementById("input").innerHTML = a
    }
}



function bntD() {
    if (exist != "" && lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "x") {
        lastChar = "/"
        var b = "/"
        a = exist.concat(b)
        exist = a;
        document.getElementById("input").innerHTML = a
    }
}

function bntX() {
    if (exist != "" && lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "x") {
        lastChar = "x"
        var b = "x"
        a = exist.concat(b)
        exist = a;
        document.getElementById("input").innerHTML = a
    }
}

function bntE() {

}

function cal(tf = true) {
    if (opt == "a") {
        first += last

    } else if (opt == "b") {
        first -= last
    } else if (opt == "d") {
        first / last
    } else {
        first * last
    }
    alert("a")
}
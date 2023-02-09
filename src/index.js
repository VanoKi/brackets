module.exports = function check(str, bracketsConfig) {
    let openbracket = []
        closebracket = []
        brackets = []
    for (let i of bracketsConfig) {
        openbracket.push(i[0])
        closebracket.push(i[1])
    }
    for (let i of str) {
        if (openbracket.includes(i)) {
            brackets.push(i)
        } else if (closebracket.indexOf(i) === openbracket.indexOf(brackets.length - 1)) {
            brackets.pop(brackets.length - 1)
        }
    }
    return true ? brackets.length === 0:false
}

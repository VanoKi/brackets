module.exports = function check(str, bracketsConfig) {
    let countOpen = 0
        countClose = 0

    for (let i of bracketsConfig) {
        if (str.includes(i[0])){
            countOpen += 1
        }else if (str.includes(i[1])) {
            countClose += 1
        }
    }

    if(countOpen !== countClose){
        while (str.length > 0) {
            for (let i of bracketsConfig) {
                if (str.includes(i.join(''))) {
                    str = str.replace(i.join(''), '')
                }
            }
        }
        return str.length === 0 ? true : false
    }else{
        return false
    }
}

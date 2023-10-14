const setOfWords = ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero iusto, fuga repudiandae sunt aspernatur, amet harum cum saepe veniam odio. Assumenda veritatis aliquam recusandae voluptate repudiandae sequi blanditiis ad?"]
const msg = document.getElementById('msg')
const typeWords = document.getElementById('mywords')
const btn = document.getElementById('btn')
let startTime, endTime
const playgame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length)
    msg.innerText = setOfWords[randomNumber]
    let date = new Date()
    startTime = date.getTime()
    btn.innerText = 'Done'
}

const wordCounter = (str) => {
    let response = str.split(" ").length
    return response;
}
const endPlay = () => {
    let date = new Date()
    endTime = date.getTime()
    let totalTime = ((endTime - startTime) / 1000)
    let totalStr = typeWords.value
    let wordCount = wordCounter(totalStr)
    let speed = Math.round((wordCount / totalTime) * 60)
    let finalMsg = `Your typing speed was ${speed} WPM`
    finalMsg += checkWords(msg.innerText, totalStr)
    msg.innerText = finalMsg
}
const checkWords = (str1, str2) => {
    let words1 = str1.split(" ")
    let words2 = str2.split(" ")
    let count = 0
    // arrayName then foreach then it will take whole function with value and index no. of that array
    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            count++
        }
    });
    let errorWords = (words1.length - count)
    return (`  ${count} correct out of ${words1.length} words and the total no. of error(s) is/are ${errorWords}`)
}

btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        playgame()
    } else if (this.innerText == 'Done') {
        typeWords.disabled = true;
        btn.innerText == 'Start'
        endPlay()
    }
})
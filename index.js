import { catsData } from '/data.js'

const emotionsRadios = document.getElementById("emotion-radios")
const imageButton = document.getElementById("get-image-btn")

imageButton.addEventListener('click', getMatchingCatsArray)

function getMatchingCatsArray(){
    const option = document.querySelector('input[type="radio"]:checked')
    console.log(option.value)
}

emotionsRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){
    const radioArray = document.getElementsByClassName('radio')
    for (let radio of radioArray) {
        radio.classList.remove('highlight')
    }
    e.target.parentElement.classList.add('highlight')
}

function getEmotionsArray(cats){
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionRadios(x){
    let radioItems = ``
    const emotions = getEmotionsArray(x)
    for (let emotion of emotions){
        radioItems += `
            <div class="radio">
                <label for="${emotion}">${emotion}</label>
                <input
                type = "radio"
                id = "${emotion}"
                value = "${emotion}"
                name = "emotion"
                >
            </div>
            `
    }
    emotionsRadios.innerHTML = radioItems
}

renderEmotionRadios(catsData)




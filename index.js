import { catsData } from '/data.js'

const emotionsRadios = document.getElementById("emotion-radios")

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
        radioItems += `<p>${emotion}</p>`
    }
    emotionsRadios.innerHTML = radioItems
}

renderEmotionRadios(catsData)




import { catsData } from '/data.js'

const emotionsRadios = document.getElementById("emotion-radios")

emotionsRadios.addEventListener('change', function(e){
    console.log(e.target.id)
})

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




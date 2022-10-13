const Gallery = {
    initialize : () => {
        Object.keys(imageData).map(name => {
            const columnHeight = [1,2,3].map(i => document.querySelector(`#listFrame>.column:nth-child(${i})`).scrollHeight)
            const nextColumn = columnHeight.indexOf(Math.min(...columnHeight))

            const imageObject = document.createElement('img')
            imageObject.src = `image/${name}.png`

            const itemObject = document.createElement('div')
            itemObject.imageName = name
            itemObject.className = 'item'
            itemObject.addEventListener('click', Gallery.viewImage);
            itemObject.appendChild(imageObject);

            document.querySelector(`#listFrame>.column:nth-child(${nextColumn+1})`).appendChild(itemObject)
        })
    },

    viewImage : (e) => {
        const name = e.currentTarget.imageName
        
        document.querySelector("#blurFrame").classList.add("on")
        
        document.querySelector("#popFrame>.image").innerHTML = `<img src=image/${name}.png>`
        document.querySelector("#popFrame>.date").innerHTML = imageData[name].date
        document.querySelector("#popFrame>.desc").innerHTML = imageData[name].desc
        document.querySelector("#popFrame").classList.add("on")
    },

    closeImage : () => {
        document.querySelector("#blurFrame").classList.remove("on")
        document.querySelector("#popFrame").classList.remove("on")
    }
}

window.onload = () => {
    Gallery.initialize();
}
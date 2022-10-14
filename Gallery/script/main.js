const Gallery = {
    initialize : async () => {
        const columnHeight = [0,0,0]
        const fileNames = Object.keys(imageData)

        for(let i=0; i<fileNames.length; i++){
            const imageObject = document.createElement('img')
            imageObject.src = `image/${fileNames[i]}.png`

            await new Promise(resolve => {
                imageObject.onload = () => {
                    const nextColumn = columnHeight.indexOf(Math.min(...columnHeight))
                    columnHeight[nextColumn] += imageObject.height / imageObject.width

                    const itemObject = document.createElement('div')
                    itemObject.imageName = fileNames[i]
                    itemObject.className = 'item'
                    itemObject.addEventListener('click', Gallery.viewImage);
                    itemObject.appendChild(imageObject);
        
                    document.querySelector(`#listFrame>.column:nth-child(${nextColumn+1})`).appendChild(itemObject)
                    resolve()
                }
            })
        }
    },

    viewImage : (e) => {
        const name = e.currentTarget.imageName

        document.querySelector("#blurFrame").classList.add("on")
        
        document.querySelector("#popFrame>.image").innerHTML = `<img src=image/${name}.png onclick=window.open("./image/${name}.png")></a>`
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
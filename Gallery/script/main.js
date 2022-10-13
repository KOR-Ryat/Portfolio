const Gallery = {
    initialize : () => {
        Object.keys(imageData).map(name => {
            const columnHeight = [1,2,3].map(i => document.querySelector(`#listFrame>.column:nth-child(${i})`).scrollHeight)
            const nextColumn = columnHeight.indexOf(Math.min(...columnHeight))

            const imageObject = document.createElement('img')
            imageObject.src = `image/${name}.png`

            const itemObject = document.createElement('div')
            itemObject.className = 'item'
            itemObject.appendChild(imageObject);

            document.querySelector(`#listFrame>.column:nth-child(${nextColumn+1})`).appendChild(itemObject)
        })
    }
}

window.onload = () => {
    Gallery.initialize();
}
function displayBoundingBoxes(faceLocationsArray){
    faceLocationsArray.forEach(face => {
    const imageContainer = document.querySelector('.image-container');
    const faceLocation = document.createElement('div');
    const {fromTheLeft,fromTheRight,fromTheTop,fromTheBottom} = face;
    faceLocation.style = `position:absolute; top:${fromTheTop}px;bottom:${fromTheBottom}px;
                        right:${fromTheRight}px;left:${fromTheLeft}px;border:2px solid blue`;
    imageContainer.append(faceLocation)
    });
    
}

export default displayBoundingBoxes
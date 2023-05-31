function calculateFaceLocation(data){
    //data refers to the data that is fetched from the clarifai api;
    // we will dig deep in the returned data object and get
    // to the inner objects containing infomation about where 
    // we should draw the boxs on the images.
    // And the information i am talking about are object 
    // properties like left_col, right_col, bottom_row and top_row
    const faceLocations = data.outputs[0].data.regions
    const imageToDetect = document.getElementById('image-to-detect');
    const ImageWidth = Number(imageToDetect.width);
    const imageHeight = Number(imageToDetect.height);
   
    const faceLocationsArray = []
    for(let face of faceLocations){
        const faceLocation = face.region_info.bounding_box
         //calculate where to draw face detection boxs using css positioning
        // properties (i.e position: absolute)
        const fromTheLeft = ImageWidth * faceLocation.left_col;
        const fromTheRight = ImageWidth - (ImageWidth * faceLocation.right_col);
        const fromTheTop = imageHeight * faceLocation.top_row;
        const fromTheBottom = imageHeight - (imageHeight * faceLocation.bottom_row)
        //add the calculated values of where to draw the faces to the faceLocations Array
        faceLocationsArray.push({fromTheBottom,fromTheLeft,fromTheRight,fromTheTop})
    }
    return faceLocationsArray
    
}

export default calculateFaceLocation
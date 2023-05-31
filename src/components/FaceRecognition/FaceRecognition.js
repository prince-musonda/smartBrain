import './FaceRecognition.css'

function FaceRecognition({imageUrl,boundingBoxes}){
    let detectedFaces;
    console.log('facerecog',boundingBoxes)
    if(boundingBoxes){
        detectedFaces = boundingBoxes.map((face,index)=>{
           return <div key={index} style={{
                position:'absolute',left:`${face.fromTheLeft}px`,right:`${face.fromTheRight}px`,top:`${face.fromTheTop}px`,
                bottom:`${face.fromTheBottom}px`,border:'2px solid blue',    
            }}
            ></div>
        })
    }
    
    return(
        <div className="center ma1 image-container">
            <img src={imageUrl} alt='' id="image-to-detect"
            style={{maxWidth:'500px',height:'auto'}}/>
            {console.log('detected',detectedFaces)}
        {detectedFaces}
        </div>
    )
}

export default FaceRecognition
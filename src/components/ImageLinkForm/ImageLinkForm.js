import './ImageLinkForm.css'
function ImageLinkForm(props){
    return(
        <div>
            <p className="f3">
                This magic brain will detect faces in your pictures. Give it a try.
            </p>
            <div className='center'>
                <div className='form center pa4 shadow-4 br3'>
                    <input type="text" className="w-70 pa1"
                     placeholder='image link'
                     onChange={props.onChange}/>
                    <button className=" detect-btn w-30 pa1 grow"
                    onClick={props.onSubmit} >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm
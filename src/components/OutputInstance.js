const OutputInstance = (props) => {

    return(
        <li key={props.word}>{props.word}<button type="button" className="btn btn-outline-success" onClick={(e) => props.setSavedWordsArray((prevArray)=> {return [...prevArray, props.word];})}>save</button></li>
    )
}

export default OutputInstance;
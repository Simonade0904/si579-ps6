const SavedWords = (props) => {
    const generateSavedWords = () => {
        return(props.savedWordsArray.join(', '));
    }

    
    return (
        <div className="row">
            <div className="col">Saved words: <span>{generateSavedWords()}</span></div>
        </div>
    )
}

export default SavedWords;
const OutputDescription = (props) => {


    const determineOutput = () => {
        if (props.beginSearch === false) {return '';}
        if (props.finishedLoading === false) {return 'Loading...';}
        else {
            if (Object.keys(props.resultsObject).length === 0) {
                return 'No results';
            }
            else{
                if (props.resultsType === 'r'){
                    return `Words that rhyme with ${props.currentWord}`;
                }
                if (props.resultsType === 's'){
                    return `Words with a meaning similar to ${props.currentWord}`;
                }
            }
        }
    }

    return(
        <div className="row">
            <h2 className="col" id="output_description">{determineOutput()}</h2>
        </div>
    );
}

export default OutputDescription;
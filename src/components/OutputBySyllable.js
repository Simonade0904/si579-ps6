import OutputInstance from './OutputInstance'

const OutputBySyllable = (props) => {

    
    const generateListBySyllable = () => {
        const wordListBySyllable = []
        props.resultsBySyllable.forEach((result, index) => {
            wordListBySyllable.push(
                <OutputInstance
                    key = {index}
                    word = {result['word']}
                    {...props}
                />
                );
        })

        return wordListBySyllable;
    }
    
    
    return (
        <>
        <h3>Syllables: {props.index}</h3><ul>{generateListBySyllable()}</ul>
        </>
    );
}

export default OutputBySyllable;
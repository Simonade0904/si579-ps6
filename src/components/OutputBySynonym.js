import OutputInstance from './OutputInstance';

const OutputBySynonym = (props) => {

    const generateListBySynonym = () => {
        const wordListBySynonym = []

        props.resultsBySynonym.forEach((result, index) => {
            wordListBySynonym.push(
                <OutputInstance
                    key = {index}
                    word = {result['word']}
                    {...props}
                />
                );
        })

        return wordListBySynonym;
    }

    return(
        <>
        <ul>{generateListBySynonym()}</ul>
        </>
    );
}

export default OutputBySynonym;
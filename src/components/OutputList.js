import OutputBySyllable from "./OutputBySyllable";
import OutputBySynonym from "./OutputBySynonym";

const OutputList = (props) => {

    /**
     * Returns a list of objects grouped by some property. For example:
     * groupBy([{name: 'Steve', team:'blue'}, {name: 'Jack', team: 'red'}, {name: 'Carol', team: 'blue'}], 'team')
     *
     * returns:
     * { 'blue': [{name: 'Steve', team: 'blue'}, {name: 'Carol', team: 'blue'}],
     *    'red': [{name: 'Jack', team: 'red'}]
     * }
     *
     * @param {any[]} objects: An array of objects
     * @param {string|Function} property: A property to group objects by
     * @returns  An object where the keys representing group names and the values are the items in objects that are in that group
     */
    function groupBy(objects, property) {
        // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
        // value for property (obj[property])
        if(typeof property !== 'function') {
            const propName = property;
            property = (obj) => obj[propName];
        }

        const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
        for(const object of objects) {
            const groupName = property(object);
            //Make sure that the group exists
            if(!groupedObjects.has(groupName)) {
                groupedObjects.set(groupName, []);
            }
            groupedObjects.get(groupName).push(object);
        }

        // Create an object with the results. Sort the keys so that they are in a sensible "order"
        const result = {};
        for(const key of Array.from(groupedObjects.keys()).sort()) {
            result[key] = groupedObjects.get(key);
        }

        return result;
    }

    const generateList = () => {
        const wordList = []
        
        if (props.resultsType === 'r') {
            const result = groupBy(props.resultsObject, 'numSyllables');
            
            for (const i in result){
                wordList.push(
                    <OutputBySyllable
                        key = {i}
                        index = {i}
                        resultsBySyllable = {result[i]}
                        {...props}
                    />
                );
            }
        }

        if (props.resultsType === 's') {
            const result = props.resultsObject;

            wordList.push(
                <OutputBySynonym
                    key = "one"
                    resultsBySynonym = {result}
                    {...props}
                />
            )
        }

        return wordList;
    }

    

    return(
        <div className="output row">
            <output id = "word_output" className="col">{generateList()}</output>
        </div>
    )
}

export default OutputList;
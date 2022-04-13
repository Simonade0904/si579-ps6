import {useState} from 'react';

const WordForm = (props) => {

    const [wordInput, setWordInput] = useState('');

    /**
     * Gets a URL to fetch rhymes from Datamuse
     *
     * @param {string} rel_rhy
     *   The word to be rhymed with.
     *
     * @returns {string}
     *   The Datamuse request URL.
     */
    const getDatamuseRhymeUrl = (rel_rhy) => {
        return `https://api.datamuse.com/words?${(new URLSearchParams({'rel_rhy':rel_rhy})).toString()}`;
    }

    /**
     * Gets a URL to fetch 'similar to' from Datamuse.
     *
     * @param {string} ml
     *   The word to find similar words for.
     *
     * @returns {string}
     *   The Datamuse request URL.
     */
    function getDatamuseSimilarToUrl(ml) {
        return `https://api.datamuse.com/words?${(new URLSearchParams({'ml':ml})).toString()}`;
    }

    /**
     * Makes a request to Datamuse and updates the page with the
     * results.
     *
     * Use the getDatamuseRhymeUrl()/getDatamuseSimilarToUrl() functions to make
     * calling a given endpoint easier:
     * - RHYME: `datamuseRequest(getDatamuseRhymeUrl(), () => { <your callback> })
     * - SIMILAR TO: `datamuseRequest(getDatamuseRhymeUrl(), () => { <your callback> })
     *
     * @param {String} url
     *   The URL being fetched.
     * @param {Function} callback
     *   A function that updates the page.
     */
    const datamuseRequest = (url, callback) => {
        props.setFinishedLoading(false);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // Once the data arrives, clear the loading message
                props.setFinishedLoading(true);
                // This invokes the callback that updates the page.
                callback(data);
            }, (err) => {
                console.error(err);
            });
    }

    const rhymeHandler = (e) => {
        e.preventDefault();
        datamuseRequest(getDatamuseRhymeUrl(wordInput),props.setResultsObject);
        props.setResultsType('r');
        props.setCurrentWord(wordInput);
        props.setBeginSearch(true);
    }

    const synonymHandler = (e) => {
        e.preventDefault();
        datamuseRequest(getDatamuseSimilarToUrl(wordInput), props.setResultsObject);
        props.setResultsType('s');
        props.setCurrentWord(wordInput);
        props.setBeginSearch(true);
    }

    return (
        <div className="row">
            <div className="input-group col">
                <input className="form-control" type="text" placeholder="Enter a word"
                onKeyDown={(e) =>  {
                    if (e.key === 'Enter') {rhymeHandler(e);}
                }}
                onChange={(e) => {setWordInput(e.target.value)}}
                />
                <button id="show_rhymes" type="button" className="btn btn-primary" onClick = {rhymeHandler}>Show rhyming words</button>
                <button id="show_synonyms" type="button" className="btn btn-secondary" onClick ={synonymHandler}>Show synonyms</button>
            </div>
        </div>
    )
}

export default WordForm;
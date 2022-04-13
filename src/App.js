import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import SavedWords from './components/SavedWords';
import WordForm from './components/WordForm';
import OutputDescription from './components/OutputDescription';
import OutputList from './components/OutputList';

function App() {

  const [savedWordsArray, setSavedWordsArray] = useState([]);
  const [resultsObject, setResultsObject] = useState([]);
  const [resultsType, setResultsType] = useState('');
  const [beginSearch, setBeginSearch] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [finishedLoading, setFinishedLoading] = useState(false);


  return (
    <main className="container">
        <h1 className="row">React Rhyme Finder (579 Problem Set 6)</h1>
        <a className="font-weight-bold" href = "https://github.com/Simonade0904/si579-ps6">Link to source code</a>
        <SavedWords savedWordsArray = {savedWordsArray}/>
        <WordForm
          setResultsObject = {setResultsObject}
          setResultsType = {setResultsType}
          setBeginSearch = {setBeginSearch}
          setFinishedLoading = {setFinishedLoading}
          setCurrentWord = {setCurrentWord}
        />
        <OutputDescription
          resultsObject = {resultsObject}
          resultsType = {resultsType}
          finishedLoading = {finishedLoading}
          currentWord = {currentWord}
          beginSearch = {beginSearch}
        />
        <OutputList
          resultsType = {resultsType}
          resultsObject = {resultsObject}
          setSavedWordsArray = {setSavedWordsArray}
        />
    </main>
  );
}

export default App;

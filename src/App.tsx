import axios from 'axios';
import { useState } from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results"
import './Reset.css'
import './App.css';

function App() {
  const [result, setResult] = useState<boolean>(false);
  const [word, setWord] = useState<string>('');
  const [photo, setPhoto] = useState<any[]>([]);

  const getPhotoData = (e:any) => {
    e.preventDefault();
    setResult(true);
    axios
    .get(`https://api.unsplash.com/search/photos?query=${word}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
    .then(res => {
      setPhoto(res.data.results);
    })
    .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
  }

  return (
    <section className="main">
      <div className="wrapper">
        <Title />
        <Form setWord={setWord} getPhotoData={getPhotoData} word={word} setResult={setResult} />
        <Results photo={photo} word={word} result={result} />
      </div>
    </section>
  );
}

export default App;

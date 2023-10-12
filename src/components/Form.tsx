type FormPropsType = {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  getPhotoData: (e: any) => void;
}

const Form = ({ word, setWord, getPhotoData }: FormPropsType) => {
  return (
    <form className="form">
      <input type="text" className="input" name="word" placeholder="Search Word" onChange={e => setWord(e.target.value)} value={word} />
      <button type="submit" className="button" onClick={getPhotoData}>Search Images</button>
    </form>
  );
};

export default Form;
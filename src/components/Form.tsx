import { useState } from 'react';

const Form = () => {
  const [text, setText] = useState<string>("");
  return (
    <form>
      <input type="text" name="text" placeholder="Search Text" onChange={e => setText(e.target.value)} />
      {text}
      <button type="submit">Search Images</button>
    </form>
  );
};

export default Form;
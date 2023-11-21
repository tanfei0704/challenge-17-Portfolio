import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Form() {
  const [textarea, setTextarea] = useState('');

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <p>Please conmment below:</p>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

export default Form;
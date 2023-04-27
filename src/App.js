import React from 'react'
import FetchData from './fetchData'

const options = [
  { label: 'Sport', value: 'sport' },
  { label: 'Art', value: 'kunst' },
  { label: 'Education', value: 'haridus' },
];

function App() {
  const [text, setText] = React.useState("")
  const [category, setCategory] = React.useState(options[0].value);  

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
 
  async function handleClick(){
    try {
      const completedSentence = await FetchData(category);
      setText(completedSentence);
    } catch (error) {
      console.error(error);
    }

    //const textToDisplay = "We will look for e-dictation in category: " + category
    //setText(completedSentence)
  }
  return (
    <div >
      <div>Vali kategooria</div>
      <select value={category} onChange={handleCategoryChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.value}</option>
          ))}
      </select>

      <button onClick={handleClick}>leia etteütlus</button>
      <div>{text}</div>
    </div>
  );
}

export default App;

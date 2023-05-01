import React from 'react'
import FetchData from './fetchData'

const options = [
  { label: 'Sport', value: 'sport' },
  { label: 'Art', value: 'kunst' },
  { label: 'Education', value: 'haridus' },
  { label: 'Politics', value: 'poliitika' }
];

function App() {
  const [text, setText] = React.useState([,])
  const [category, setCategory] = React.useState(options[0].value);  

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
 
  async function handleClick(){
    try {
      const completedSentence = await FetchData(category);
      const splitSentences = completedSentence.trim().split("\n")

      var filtered = splitSentences.filter(function (el) {
        return el != null && el != " " && el != "\"" && el != "";
      });
      setText(filtered);
    } catch (error) {
      console.error(error);
    }
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
      {text.map((single) => (
        <>

            <p key={single} value={single}>{single}</p>
        </>
      ))}
    </div>
  );
}

export default App;

import React from 'react'

// const categories = ["sport", "kunst", "haridus"]
// const defaultCategory = categories[0]


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
 
  function handleClick(){
    const textToDisplay = "We will look for e-dictation in category: " + category
    setText(textToDisplay)
  }
  return (
    <div >
      <div>Vali kategooria</div>
      <select value={category} onChange={handleCategoryChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
          ))}
      </select>

      <button onClick={handleClick}>leia etteütlus</button>
      <div>{text}</div>
    </div>
  );
}

export default App;

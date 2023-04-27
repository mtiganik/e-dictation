import React from 'react'

const categories = ["sport", "kunst","haridus"]

function App() {
  const [text, setText] = React.useState("")

  function handleClick(){
    setText("You pressed me")
  }
  return (
    <div className="App">
      <div>Vali kategooria</div>
      
      <button onClick={handleClick}>Push me</button>
      <div>{text}</div>
      <p value={text} />
    </div>
  );
}

export default App;

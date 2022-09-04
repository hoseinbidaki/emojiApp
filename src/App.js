import './App.css';
import React, { useState } from "react";
const emojiDictionary = {
  "😊": "لبخند",
  "😳": "تعجب",
  "😔": "ناراحت",
  "🥡": "جعبه",
  "❤️": "قلب",
  "😑": "متاسفم",
  "✔": "صحیح",
  "👏": "دست",
  "🙌": "خواهش میکنم",
  "😎": "چاکرم"
};

const emojis = Object.keys(emojiDictionary);
function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");
function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    setMeaning("");
    var find = false;
    for (var key in emojiDictionary) {
      if(emojiDictionary[key] == inputEmoji) 
      {
        setMeaning(key);
        find = true;
      }
    }
    if (find ^ 1) 
    {
      // alert("hey");
      document.getElementById("input").style.border="5px solid red";
    }
    else
    {
      document.getElementById("input").style.border="5px solid green";
    }
    if (inputEmoji == "")
    {
      document.getElementById("input").style.border="5px solid grey";
    }
}
function emojiClickHandler(inputEmoji) {
  navigator.clipboard.writeText(inputEmoji);
  alert("کپی شد");
}
return (

    <div className="App" style={{backgroundColor:"#B6D0E2",padding:50, width:400, position:"absolute", left:"30%", top:"20%"}}>
      <h1>پروژه یافتن ایموجی</h1>
      <h3 onClick={() => emojiClickHandler(meaning)}> {meaning} </h3>
      <input
        onChange={changeHandler}
        id="input"
        value={emoji}
        placeholder={"لطفا وارد کنید"}
        className="input-element"
      />
      <p>پریسا مجرائی مقدم</p>
      <p>9713114395</p>
      <h4>مباحث ویژه 1 - تابستان 1401</h4>
    </div>
  );
}
export default App;
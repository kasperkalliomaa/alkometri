import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(90);
  const [bottle, setBottle] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    const litres = bottle * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gleft = grams - burning * time;
    let res = 0;

    if (gender === "male") {
      res = gleft / (weight * 0.7);
    } else {
      res = gleft / (weight * 0.6);
    }
    if (res < 0){
      res = 0;
    }
    setResult(res);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div><h1>Alcometer</h1></div>
      <div>
        <label>weight</label>
        <input
          name="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Bottles</label>
        <select
          name="bottle"
          value={bottle}
          onChange={(e) => setBottle(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
        <label>Time</label>
        <select
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="male"
          defaultChecked
          onChange={(e) => setGender(e.target.value)}
        ></input>
        <label>male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
        ></input>
        <label>female</label>
      </div>
      <div>
        <output>{result.toFixed(1)}</output>
      </div>
      <button type="submit">calculate</button>
    </form>
  );
}

export default App;

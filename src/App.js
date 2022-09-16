import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
const [Time, setTime] = useState(0)
const [Bottles, setBottles] = useState(0)
const [Weight, setWeight] = useState(0)
const [BAL, setBAL] = useState(0)
const [gender, setGender] = useState('Male')



function calculate() {
  let litres = Bottles * 0.33
  let grams = litres * 8 * 4.5
  let burning = Weight / 10
  let gramsleft = grams - (burning * Time)
  let result5 = gramsleft / (Weight * 0.7)
  let result6 = gramsleft / (Weight * 0.6)
  if (gender === 'Male') { setBAL(result5) }
  else { setBAL(result6) }
  
}



  return (
  <div id='container'>
    <h3>Alcometer</h3>
    <form>
      <div>
      <label>Gender</label>
      <select type='number' value={gender} onChange={e => setGender(e.target.value)}>
      <option id='male'>Male</option>
      <option id='female'>Female</option>
</select>
</div>
    <div className="container">
      <label>Time</label>
      <select type='number' value={Time} onChange={e => setTime(e.target.value)} >
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
      <option>18</option>
      <option>19</option>
      <option>20</option>
      <option>21</option>
      <option>22</option>
      <option>23</option>
      <option>24</option>
      </select>
        
</div> 
      <div>
        <label>Bottles</label>
        <select type="number" value={Bottles} onChange={e => setBottles(e.target.value)} >
          <option>0</option>
        <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
      <option>13</option>
      <option>14</option>
      <option>15</option>
      <option>16</option>
      <option>17</option>
      <option>18</option>
      <option>19</option>
      <option>20</option>
      </select>
      </div>
      
      <div>
        <label>Weight</label>
        <input type="number" value={Weight} onChange={e => setWeight(e.target.value)} />
      </div>
      
      <div>
        <label>Blood alcohol level</label>
        <output>{BAL.toFixed(2)}</output>
      </div>
      <button type='button' onClick={calculate}>Calculate</button>
    </form>
  </div>
  );
}

export default App;

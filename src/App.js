import React, {useState} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import uuid from 'react-uuid';


const initialExpenses = [
  {id:uuid() , charge:"rent", amount:1600},
  {id:uuid() , charge:"car payment", amount:1800},
  {id:uuid() , charge:"rcredit card bill", amount:2600}
];

function App() {
  //************** State values ******** */
  // all expenses , add expense
  const [expenses, setExpenses] = useState(initialExpenses)
  //single expense
  const [charge, setCharge] = useState('')
  //single amount
  const [amount, setAmount] = useState('')

 //************** Functions ******** */
  const handleCharge = e =>{
    console.log('charge',e.target.value);
    setCharge(e.target.value)
  }
  const handleAmount = e =>{
    console.log('amount',e.target.value);
    setAmount(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
  // console.log(charge, amount);
    if(charge != "" && amount >0){

      const singleExpence = {id : uuid(), charge:charge, amount:amount}
      setExpenses([...expenses, singleExpence])
      setCharge('');
      setAmount('');

    }else{
      //handle Alert called 
    }
  }
  return (
    <>
      <Alert/>
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm charge={charge} amount={amount}
        handleAmount= {handleAmount} handleCharge={handleCharge}
        handleSubmit={handleSubmit}
         />
        <ExpenseList  expenses={expenses}/> 
      </main>
      <h1>
        total spending :{""}
          <span className="total">
            ${
              expenses.reduce((acc, curr) => {
                return (acc += parseInt( curr.amount));
              },0)
              }
          </span>
      </h1>
    </> 
  ) 
}
export default App;

import { useState, type FormEvent } from 'react'
import Header from './Header';
import AddExpenseForm from './components/AddExpenseForm';

function App() {

  const [name, setName] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    fetch("http://localhost:5000/hello",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: name})
    }).then((respose) => respose.json())
      .catch((error) => {
        console.log(error);
      });
  }; 

  return (
    <div className='bg-(image:--color-grad-7)'>
      <Header/>
      <div className='h-[100vh] flex items-center justify-center z-40'>
        <AddExpenseForm/>
      </div>
    </div>
  )
}

export default App

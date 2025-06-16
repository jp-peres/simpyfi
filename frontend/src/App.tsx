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
    <>
      <Header/>
      <div className='w-full h-[100vh] flex items-center justify-center z-40'>
        <AddExpenseForm/>
        {/* <form onSubmit={handleSubmit} className='bg-gray-300 flex flex-col items-center justify-center gap-5 h-[50%] w-[80%] rounded-2xl shadow-2xl border-2 border-solid border-gray-600'>
          <label htmlFor="name">Name</label>
          <input onChange={o => setName(o.target.value)} className='border-2 border-solid rounded-2xl w-40 px-2 py-2' type="text" name="name" id="name" />
          <button className='border-2 border-solid border-blue-500 hover:from-cyan-300 hover:to-cyan-900 transition-transform hover:scale-105 from-blue-300 to-blue-700 bg-gradient-to-tl w-40 p-4 rounded-2xl text-white flex justify-center items-center' value={"cenas"}  type="submit">Text</button>
        </form> */}
      </div>
    </>
  )
}

export default App

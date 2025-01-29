import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    let formElement = e.currentTarget;
    const formData = new FormData(formElement)
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(email, password)
    formElement.reset()
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form method="POST" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
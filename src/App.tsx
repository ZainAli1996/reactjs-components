import React from 'react';
import './App.css';
import NewButton from "./components/MyButton";
import MyInput from "./components/MyInput";

function App() {
  const BtnClick = () => {
    console.log("Button Is Clicked")
  };
  return (
      <main>
        <section>
          <div className="input-box">
            <MyInput></MyInput>
            <NewButton ClickMe={BtnClick} BtnName="Login" className="my-btn"></NewButton>
          </div>
        </section>
      </main>
  );
}

export default App;

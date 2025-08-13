import './App.css';
import MyButton from './MyButton';
import MyInput from './MyInput';
import MyForm from './MyForm'
import FormOhter from './FormOhterField'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <MyButton/>

        <hr/>

        <MyInput/>

        <hr/>

        <MyForm/>

        <hr/>

        <FormOhter/>
      </header>
    </div>
  );
}

export default App;

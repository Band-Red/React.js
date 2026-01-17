import './App.css';
import Header from './Header.js';
import Post from './Post.js';
import Buttons from './Buttons.js'

function App() {
  return (
    <div className="App">

      <Header/>
      
      {/* Posts & Menu Container */}
      <div id={"Container"} style>

        {/* Menu Container */}
        <div id={"Menu"}>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
          <Buttons/>
        </div>


        {/* Posts Container */}
        <div id={"Posts"}>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        {/* End Posts Container */}

      </div>
      {/* End Posts & Menu Container */}
    </div>
  );
}

export default App;

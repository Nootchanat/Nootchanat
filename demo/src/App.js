import logo from './logo.svg';
import "./App.css";
import Post from "./Post";
import { PostFunction } from "./PostFunction";
import StateInClass from "./StateInClass";

function App() {
  return (
     < div className = "root" >
        <div className="App">
         <Post content = "this is a class component " name="Tangmo" / >
         <Post content = "อิแฮ่มมันชอบบูลี่กุและคนอื่น" name="MO" />
         <StateInClass name = "Tangmo" />
         <hr />
         <h2>Function Component</h2>
         <PostFunction
           content="อิแฮ่มมึงแม่งงงงงงง"
           name="MO"
         />
         <StateInClass 
            name = "แตงโม"
         />
         <hr />
         < h2>State in Class Component </h2>

        < StateInClass name = "nootchanat" content="0" / >
          
         </div>
      <Post />
    </div>
  );
}

export default App;

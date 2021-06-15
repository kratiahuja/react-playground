import './App.css';
import MyContainer from './MyContainer';
import { makeServer } from "./server"

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}



function App() {

  return (
    <div className="App">
      <MyContainer />
    </div>
  );
}

export default App;

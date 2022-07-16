import Header from "./components/header";
import InputTask from "./components/inputTask";
import Table from "./components/table";
import './custom.css';

function App() {
  
  return <>
      <Header />
    <div className="container">
      <InputTask />
      <Table/>
    </div>
  </>
}

export default App;
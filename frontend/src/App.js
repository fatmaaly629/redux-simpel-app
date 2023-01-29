import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [isChanged, setIsChanged] = useState(false);

  // const addUser = (e) => {
  //   e.preventDefault();
  //   setIsChanged(true);
  // };
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
}

export default App;

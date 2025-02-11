//App.tsx rappresenta il root
import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  //return <div><Message></Message></div>
  //Uguale a sopra ma più conciso
  //return <div><Message /></div>;

  return (
    <div>
      <ListGroup />
    </div>
  );
}

export default App;

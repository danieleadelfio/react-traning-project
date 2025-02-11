//App.tsx rappresenta il root
import Message from "./Message";
import { Alert } from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ListGroupWithInterface from "./components/ListGroupWithInterface";
import ButtonColor from "./components/ButtonColorEnum";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false),
              console.log("HAI CHIUSO L'ALERT? RIAPRILO!!");
          }}
        >
          HAI APERTO L'ALERT? CHIUDILO!!
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );

  //return <div><Message></Message></div>
  //Uguale a sopra ma più conciso
  //return <div><Message /></div>;

  /*const items = ["NewYork", "Milan", "Paris", "Tokyo", "London", "Palermo"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroupWithInterface
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
  */

  /*
  i vari useState in react come quello presente in ListGroup.tsx sono indipendenti e mantengono il loro stato 
  anche cross classi questo significa che se aggiungessi dentro il tag div un altro <ListGroup> 
  accanto a quello già presente duplicherei il rendering di quella classe ma lo state rimarrebbe indipendente e permanente
  in concreto: se ho uno useState su un Onclick che mi segna quando un elemento della lista è clickato ed attivo
  duplicando la classe dentro App.tsx potrei avere nella stessa pagina due elementi cliccati e attivi contemporaneamente,
  indipendenti l'uno dall'altro

  */
}

export default App;

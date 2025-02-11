//import { Fragment } from "react/jsx-runtime"; invece di <> e </> si può usare fragment

function ListGroup() {
  const items = ["NewYork", "Milan", "Paris", "Tokyo", "London", "Palermo"];
  let emptyItems = [""];
  emptyItems = [];

  //Const avente un messaggio nel caso in cui la lista è vuota,
  // poco utilizzabile, meglio avere una funzione che può prendere parametri
  const emptyListMessage =
    emptyItems.length === 0 ? <p>No item found</p> : null;

  const moreConciseEmptyListMessage = emptyItems.length === 0 && (
    <p>No item found in a more concise way</p>
  );

  //Funzione con la stessa logica di sopra che però può dinamicamente cambiare il messaggio di ritorno in base a cosa passiamo
  const getEmptyListMessage = () => {
    return emptyItems.length === 0 ? <p>No item found</p> : null;
  };

  function handleClickList(itemClicked: String, index: number) {
    console.log(itemClicked + " Clicked" + " At Index " + index);
  }

  return (
    /*React non accetta che un componente abbia più elementi, come h1 e ul sotto, per ovviare al problema 
  bisogna wrappare tutto dentro un unico grande elemento. es: div ma la cosa più giusta è usare Fragment
  */
    //Questo si chiama Fragment <>
    <>
      <h1>StaticList</h1>
      <ul className="list-group">
        <li key={1} className="list-group-item">
          A first item
        </li>
        <li key={2} className="list-group-item">
          A second item
        </li>
        <li key={3} className="list-group-item">
          A third item
        </li>
        <li key={4} className="list-group-item">
          A fourth item
        </li>
        <li key={5} className="list-group-item">
          And a fifth one
        </li>
      </ul>
      <h1>StaticMixedEffectList</h1>
      <ul className="list-group">
        <li key={1} className="list-group-item active" aria-current="true">
          An active item
        </li>
        <li key={2} className="list-group-item disabled" aria-disabled="true">
          A disabled item
        </li>
        <li key={3} className="list-group-item">
          A third item
        </li>
        <li key={4} className="list-group-item">
          A fourth item
        </li>
        <li key={5} className="list-group-item">
          And a fifth one
        </li>
      </ul>
      <h1>DynamicList</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <h1>OnClickDynamicList</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => handleClickList(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <h1>EmptyList</h1>
      <ul className="list-group">{emptyListMessage}</ul>
      <h1>ConciseEmptyList</h1>
      <ul className="list-group">{moreConciseEmptyListMessage}</ul>
    </>
  );
}

export default ListGroup;

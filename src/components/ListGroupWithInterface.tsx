import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

/*creo una funzione che accetta props che è di tipo ListGroupProps che contiene 2 attributi.
il problema di richiamare l'interfaccia in questo modo è che devo sempre accedere a props e poi col . 
recuperare l'attributo che mi interessa sicuramente utile ma nel mio caso avendo solo due elementi posso 
già direttamente dove dichiaro i parametri di input della funzione ListGroupWithProps "spaccare" l'oggetto dichiarando due parametri
Es: da -> function ListGroupWithProps(props: ListGroupProps) {}
Es: a -> function ListGroupWithProps({items, heading}: ListGroupProps) {}
*/
function ListGroupWithInterface({
  items,
  heading,
  onSelectItem,
}: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupWithInterface;

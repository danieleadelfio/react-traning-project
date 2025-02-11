import React from "react";
import ButtonColor from "./ButtonColorEnum";

interface buttonProps {
  children: string;
  /*il ? serve per comunicare che quel parametro è opzionale, risolve l'errore su App.tsx se non si passa colore(ha un default sotto)
    prima color era di tipo string, questo permetteva di inserire qualsiasi stringa su App per questo componente
    quindi anche valori che di fatto non erano accettati come colore del bottone,
    in questo modo stiamo dichiarando che accettiamo solo alcune stringhe in questo modo abbiamo degli errori a compile time
    RE: ho cambiato usando una enum la vedo più bella e soprattutto più sostenibile così diventa 
    un tipo utilizzabile in tutta la code base
  */
  color?: ButtonColor;
  onClick: () => void;
}

/*
In questo componente abbiamo un bottone il cui testo è gestito come html in app, chiamando il parametro children,
un parametro colore che ci permette di cambiare il colore del bottone dinamicamente
con un default "primary" così questo componente diventa riutilizzabile in giro
e un onClick per gestire dinamicamente le azione a seguito del click sul bottone
*/
const Button = ({
  children,
  color = ButtonColor.Primary,
  onClick,
}: buttonProps) => {
  return (
    <button className={"btn btn-" + color} color={color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

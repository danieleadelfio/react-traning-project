import { ReactNode } from "react";

/*
dentro l'interfaccia qui sotto è possibile passare un parametro e chiamarlo come "children", questa in react è una parola chiave
permettendo quindi di passare il childer verso il componente che in questo caso è Alert per noi
inoltre assegnandogli il tipo ReactNonde è possibile passare del testo html all'interno del componente in App.tsx nel nostro caso
*/
interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

export const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

/*
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>*/

import { FunctionComponent } from "preact";
import { Linkedin } from "../types.ts";

interface ListadoProps {
  trabajo: Linkedin;
  onClick: (id: any) => void;
}

export const Listado: FunctionComponent<ListadoProps> = ({
  trabajo,
  onClick
}) => {
  const { title, company_name, location } = trabajo;

  return (
    <div class="listado-item">
      
      <button class="listado-button" onClick={() => onClick(trabajo.slug)}>
        <h2>{title}</h2>
        <h3>{company_name}</h3>
        <p  >{location}</p>
        <p  >Algunos contactos trabajan aqui</p>
        <p  >Promocionado · Solicitud Sencilla</p>
      </button>
    </div>
  );
};


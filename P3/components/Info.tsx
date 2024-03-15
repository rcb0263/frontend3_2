import { FunctionComponent } from "preact";
import { Linkedin } from "../types.ts";

interface InfoProps {
  company_name: string;
  title: string;
  location: string;
  description: string;
}
const redirectToPage = () => {
  window.location.href = "https://www.arbeitnow.com/jobs/companies/univativ-gmbh/werkstudent-it-m365-hamburg-101207";
};

export const Info: FunctionComponent<InfoProps> = ({
  company_name,
  title,
  location,
  description
}) => {
  return (
    <div class="info-container">
        <h2>{title}</h2>
        <h3>{company_name} · {location} · hace 2 semanas · 7 solicitudes</h3>
        <p>Hibrido · Jornada completa · Algo de responsabilidad</p>
        <p>10 000 a 50 000 empleados · Servicios y tecnología de la informacion</p>
        <p>Hibrido · Jornada completa · Algo de responsabilidad</p>
        <p>8 de 10 aptitudes coninciden con tu perfil,podrías encajar muy bien</p>

        <button class={"sollicitar"} onClick={redirectToPage}>Solicitar</button>  <button class={"guardar"}>Guardar</button>
        <p>Verifica otras verificaciones relacionadas con este anuncio de empleo </p>
        <p>Ve una comparacion con los otros solicitantes </p>
        <p><strong>Ubicación:</strong> {location}</p>
        <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

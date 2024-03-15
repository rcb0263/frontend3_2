import { FunctionComponent } from "preact";
import { Linkedin } from "../types.ts";
import { Listado } from "../components/Listado.tsx";
import { Info } from "../components/Info.tsx";
import { useState } from "preact/hooks";

interface ListProps {
  data: Linkedin[];
}

interface exist {
  existe: boolean;
  trabajo: Linkedin;
}

export const List: FunctionComponent<ListProps> = (props) => {
  const lista = props.data;
  const [selectedJob, setSelectedJob] = useState<Linkedin | null>(null);

  const handleListadoClick = (trabajo: Linkedin) => {
    setSelectedJob(trabajo);
  };

  return (
    <div class="isla-container">
      <div class="islah2">
        <div class="list-container" >
          <h3>Principales empleos que te recomendamos</h3>
          <label>{lista.length} Resultados</label>
          <div class="listado-container">
            {lista.map((c) => (
              <Listado
                key={c.slug}
                trabajo={c}
                onClick={(id) => handleListadoClick(c)}
              />
            ))}
          </div>
        </div>
        <div style={{ flex: "1" }}>
          {selectedJob && <Info {...selectedJob} />}
        </div>
      </div>
    </div>
  );
};

export default List;

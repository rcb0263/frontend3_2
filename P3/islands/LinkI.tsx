import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { Listado } from "../components/Listado.tsx";
import { Linkedin } from "../types.ts";
import { LinkArr } from "../types.ts";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";



 const LinkI: FunctionComponent<LinkArr>=(props)=> {
    const data = props.data
  return (
<>
    <div>
        {data.map((list) => (
                <Listado {...list}               
                />
            ))}
    </div>
</>
  );
}
export default LinkI;
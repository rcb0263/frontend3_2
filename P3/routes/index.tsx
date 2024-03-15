import { useSignal } from "@preact/signals";
import LinkI from "../islands/LinkI.tsx";
import { LinkArr } from "../types.ts";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import List from "../islands/List.tsx";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, LinkArr>) => {
    const response = await fetch("https://arbeitnow.com/api/job-board-api");
    const data = await response.json();
    const Lista:LinkArr =data;
    return ctx.render(
      Lista
    );
  },
};

const Home = (props:PageProps<LinkArr>) => {
  const Lista=props.data
  return (
      
    <div>
        <List data={Lista.data} />
    </div>
  );
};

export default Home;


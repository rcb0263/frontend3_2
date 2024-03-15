import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type n ={
  slug: string,
  company_name: string,
  title: string,
  description: string,
  remote: boolean,
  url: string,
  tags: [string],
  job_types: [],
  location: string,
  created_at: number
}
export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
    />
  );
}

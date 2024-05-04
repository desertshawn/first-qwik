import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

export const useVenue = routeLoader$(async () => {
  const res = await fetch('https://first-deploy-fsxwnyt-shawn-lee.globeapp.dev/');  
  return res.json() ;
});

export default component$(() => {
  const signal = useVenue() ;
  return (
    <>
      <h1>{signal.value.data}</h1>
    </>
  )
})

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

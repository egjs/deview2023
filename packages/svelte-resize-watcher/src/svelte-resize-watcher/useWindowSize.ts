import { onMount, onDestroy } from "svelte";
import { writable } from "svelte/store";

export function useWindowSize() {
  const width = writable(0);
  const height = writable(0);
  const callback = () => {
    width.set(window.innerWidth);
    height.set(window.innerHeight);
  };
  onMount(() => {
    window.addEventListener("resize", callback);
  });
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", callback);
    }
  });

  return { width, height };
}

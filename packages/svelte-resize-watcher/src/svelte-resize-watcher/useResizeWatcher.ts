import { useReactive } from "@cfcs/svelte";
import { REACTIVE } from "@egjs-deview2023/resize-watcher";

export function useResizeWatcher() {
  return useReactive(REACTIVE);
}

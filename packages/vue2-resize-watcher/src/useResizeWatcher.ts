import { REACTIVE } from "@egjs-deview2023/resize-watcher";
import { ReactiveAdapterResult, useReactive } from "@cfcs/vue2";


export type ResizeWatcherResult = ReactiveAdapterResult<typeof REACTIVE>;

export function useResizeWatcher() {
  return useReactive(REACTIVE);
}

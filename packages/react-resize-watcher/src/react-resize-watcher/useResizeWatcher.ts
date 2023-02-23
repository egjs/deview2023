import { REACTIVE } from "@egjs-deview2023/resize-watcher";
import { ReactiveAdapterResult, useReactive } from "@cfcs/react";


export type ResizeWatcherResult = ReactiveAdapterResult<typeof REACTIVE>;

export function useResizeWatcher() {
  return useReactive(REACTIVE);
}

import { reactive, ReactiveObject, ReactiveSetupAdapter } from "@cfcs/core";

export interface ResizeWatcherReactiveState {
  width: number;
  height: number;
}

export type ResizeWatcherReactiveInstance = ReactiveObject<ResizeWatcherReactiveState>;
export interface ResizeWatcherEvents {
  resize: {
    width: number;
    height: number;
  };
}

export const REACTIVE: ReactiveSetupAdapter<
  ResizeWatcherReactiveInstance,
  ResizeWatcherReactiveState,
  never,
  {},
  ResizeWatcherEvents
> = ({ onInit, onDestroy, emit, setEvents }) => {
  setEvents(["resize"]);

  const obj = reactive({ width: 0, height: 0 });
  const callback = () => {
    obj.width = window.innerWidth;
    obj.height = window.innerHeight;

    emit("resize", {
      width: obj.width,
      height: obj.height,
    });
  };
  onInit(() => {
    window.addEventListener("resize", callback);
    callback();
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", callback);
    }
  });
  return obj;
};

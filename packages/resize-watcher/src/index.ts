import { reactive, ReactiveObject, ReactiveSetupAdapter } from "@cfcs/core";

export interface ResizeWatcherReactiveState {
  width: number;
  height: number;
}

export type ResizeWatcherReactiveInstance = ReactiveObject<{
  width: number;
  height: number;
  setWidth(width: number): void;
}>;
export interface ResizeWatcherEvents {
  resize: {
    width: number;
    height: number;
  };
}

export const REACTIVE: ReactiveSetupAdapter<
  ResizeWatcherReactiveInstance,
  ResizeWatcherReactiveState,
  "setWidth",
  {},
  ResizeWatcherEvents
> = ({ onInit, onDestroy, emit, setEvents, setMethods }) => {
  setEvents(["resize"]);
  setMethods(["setWidth"]);

  const obj = reactive({
    width: 0,
    height: 0,
    setWidth(nextWidth: number) {
      obj.width = nextWidth;
    },
  });
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

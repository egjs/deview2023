import { ReactiveObject, ReactiveSetupAdapter } from "@cfcs/core";
export interface ResizeWatcherReactiveState {
    width: number;
    height: number;
}
export declare type ResizeWatcherReactiveInstance = ReactiveObject<ResizeWatcherReactiveState>;
export interface ResizeWatcherEvents {
    resize: {
        width: number;
        height: number;
    };
}
export declare const REACTIVE: ReactiveSetupAdapter<ResizeWatcherReactiveInstance, ResizeWatcherReactiveState, never, {}, ResizeWatcherEvents>;

/*
Copyright (c) 2022-present NAVER Corp.
name: @egjs-deview2023/resize-watcher
license: MIT
author: NAVER Corp.
repository: https://github.com/egjs/deview2023
version: 0.0.1
*/
import { reactive } from '@cfcs/core';

var REACTIVE = function (_a) {
  var onInit = _a.onInit,
    onDestroy = _a.onDestroy,
    emit = _a.emit,
    setEvents = _a.setEvents;
  setEvents(["resize"]);
  var obj = reactive({
    width: 0,
    height: 0
  });
  var callback = function () {
    obj.width = window.innerWidth;
    obj.height = window.innerHeight;
    emit("resize", {
      width: obj.width,
      height: obj.height
    });
  };
  onInit(function () {
    window.addEventListener("resize", callback);
    callback();
  });
  onDestroy(function () {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", callback);
    }
  });
  return obj;
};

export { REACTIVE };
//# sourceMappingURL=index.esm.js.map

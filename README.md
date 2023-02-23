# DEVIEW 2023 예제

* CFCS 모듈: https://github.com/naver/cfcs

### 테스트 방법

* install 및 core build

```sh
$ yarn
$ yarn build
```

* react
```sh
$ cd packages/react-resize-watcher
$ yarn start
```
* vue 2
```sh
$ cd packages/vue2-resize-watcher
$ yarn serve
```
* vue 3
```sh
$ cd packages/vue-resize-watcher
$ yarn serve
```
* svelte
```sh
$ cd packages/svelte-resize-watcher
$ yarn dev
```

### CFCs Reactive를 사용하기 전
* React Code:
https://github.com/egjs/deview2023/blob/main/packages/react-resize-watcher/src/react-resize-watcher/useWindowSize.ts
* Vue2 Code:
https://github.com/egjs/deview2023/blob/main/packages/vue2-resize-watcher/src/useWindowSize.ts
* Vue3 Code:
https://github.com/egjs/deview2023/blob/main/packages/vue-resize-watcher/src/vue-resize-watcher/useWindowSize.ts
* Svelte Code:
https://github.com/egjs/deview2023/blob/main/packages/svelte-resize-watcher/src/svelte-resize-watcher/useWindowSize.ts



### CFCs Reactive를 사용한 결과물



* Core Reactive Adapter:
https://github.com/egjs/deview2023/blob/main/packages/resize-watcher/index.ts
* React Code:
https://github.com/egjs/deview2023/blob/main/packages/react-resize-watcher/src/react-resize-watcher/useResizeWatcher.ts
* Vue2 Code:
https://github.com/egjs/deview2023/blob/main/packages/vue2-resize-watcher/src/useResizeWatcher.ts
* Vue3 Code:
https://github.com/egjs/deview2023/blob/main/packages/vue-resize-watcher/src/vue-resize-watcher/useResizeWatcher.ts
* Svelte Code:
https://github.com/egjs/deview2023/blob/main/packages/svelte-resize-watcher/src/svelte-resize-watcher/useResizeWatcher.ts
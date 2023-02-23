<template>
  <div class="App">
    useWindowSize: {{ width }} x {{ height }} <br />
    useResizeWatcher: {{ width2 }} x {{ height2 }} <br />
  </div>
</template>

<script lang="ts">
import { useWindowSize, useResizeWatcher } from "../src";


export default {
  name: "App",
  setup() {
    const { width, height } = useWindowSize();
    const { width: width2, height: height2, onResize } = useResizeWatcher();

    onResize(e => {
      console.log(e);
    });
    return {
      width,
      height,
      width2,
      height2,
    };
  },
};
</script>

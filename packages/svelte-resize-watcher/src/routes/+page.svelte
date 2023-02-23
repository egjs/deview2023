<script>
  import { useResizeWatcher, useWindowSize } from "../svelte-resize-watcher";

    const { width, height } = useWindowSize();
    const { width: width2, height: height2 } = useResizeWatcher();
</script>

<div class="App">
    useWindowSize: {$width} x {$height} <br/>
    useResizeWacher: {$width2} x {$height2}
</div>

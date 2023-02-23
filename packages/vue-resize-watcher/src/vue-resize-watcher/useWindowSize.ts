import { ref, onMounted, onUnmounted } from "vue";

export function useWindowSize() {
  const width = ref(0);
  const height = ref(0);
  const callback = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => {
    window.addEventListener("resize", callback);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", callback);
  });

  return { width, height };
}

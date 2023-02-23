import { onMounted, onUnmounted, ref } from "@vue/composition-api";

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

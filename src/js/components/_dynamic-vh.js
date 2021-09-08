// Dynamic VH (Fixes 100VH issue on mobile browsers)
export const setDynamicVH = () => {
  let root = document.documentElement;
  let vh = window.innerHeight;
  root.style.setProperty("--dynamic-vh", vh + "px");
};

window.addEventListener("load", setDynamicVH);
window.addEventListener("resize", setDynamicVH);

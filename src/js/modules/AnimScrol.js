const animItems = document.querySelectorAll("._anim-items");

export default function AnimScrol() {
  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScrol);
    function animOnScrol() {
      for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if (
          scrollY > animItemOffset - animItemPoint &&
          scrollY < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_anim");
        } else {
          if (!animItem.classList.contains("_anim-hiden")) {
            animItem.classList.remove("_anim");
          }
        }
      }
    }
    function offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() => {
      animOnScrol();
    }, 300);
  }
}

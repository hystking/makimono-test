import Makimono from "./makimono"

export default function index() {
  const makimono = new Makimono({
    left: 0,
    right: 0,
    top: 0,
    bottom: text.offsetHeight - frame.offsetHeight,
  })

  $(window).on("mousewheel", e => {
    makimono.addDeltaConstrantly(e.deltaX * e.deltaFactor, e.deltaY * e.deltaFactor)
  })
}

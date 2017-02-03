import Makimono from "makimono"

export default function index() {
  const makimono = new Makimono({
    left: 0,
    right: 0,
    top: 0,
    bottom: text.offsetHeight - frame.offsetHeight,
  })

  makimono.bindEvents(window)
  function update(time) {
    makimono.update(time)
    const {x, y} = makimono.getPosition()

    text.style.transform = `translate(${x}px, ${y}px)`
    requestAnimationFrame(update)
  }
  requestAnimationFrame(update)

  $(window).on("mousewheel", e => {
    makimono.addDeltaConstantly(e.deltaX * e.deltaFactor, e.deltaY * e.deltaFactor)
    e.preventDefault()
  })
}

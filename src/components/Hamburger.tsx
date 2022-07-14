import s from "../styles/Hamburger.module.css"
import { useAppContext } from "../context/AppContext"

const Hamburger = () => {
  // https://codepen.io/ainalem/pen/LJYRxz

  const { navOpen, toggleNav } = useAppContext();

  return (
    <svg className={`onlyLessXL ${s.ham} ${navOpen ? s.active : ""}`} viewBox="0 0 100 100" width="80" onClick={toggleNav}>
      <path
        className={`${s.line} ${s.top}`}
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
      <path
        className={`${s.line} ${s.middle}`}
        d="m 30,50 h 40" />
      <path
        className={`${s.line} ${s.bottom}`}
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
    </svg >
  )
}

export default Hamburger


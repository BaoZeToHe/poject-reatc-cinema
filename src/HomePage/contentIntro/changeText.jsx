import {useTypewriter , Cursor } from "react-simple-typewriter";

function ChangeTest() {
  const [text] = useTypewriter({
    words: ['Movie', 'event' ,'sport'],
    loop: {},
    typeSpeed : 120
  })
  return (
  <span>
    <span >{text}</span>
    <span><Cursor></Cursor></span>
  </span>
  )
}
export default ChangeTest;

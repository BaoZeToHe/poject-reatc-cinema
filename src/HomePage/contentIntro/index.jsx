import ChangeTest from "./changeText";

function ContentIntro() {
  return (
  <div className="w-full text-center  text-white " style={{position : "absolute" , top : "calc(50% - 42px - 30px)" , right : "0px" , zIndex : 3}}>
    <h1 class="text-7xl uppercase font-extrabold">
      <span class="block">book your</span>
      <span>tickets for </span>
      <span class=" cd-words-wrapper p-0 m-0 text-green">
        <ChangeTest></ChangeTest>
      </span>
    </h1>
    <p className="text-gray text-3xl">Safe, secure, reliable ticketing.Your ticket to live entertainment!</p>
  </div>)
}
export default ContentIntro;

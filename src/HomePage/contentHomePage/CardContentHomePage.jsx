import { Img, H5, Li, Div, CssDate, CssH6Date, CssSpanDate } from "../CsscontentHomePage";

function CardConTentHomePage(progs) {
  let contentName;
  let monthSlice;
  const { img, like, name, ...red } = progs.content;
  let newDate = new Date(progs.content.date);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  if (newDate.getMonth()) {
    monthSlice = monthNames[newDate.getMonth()].slice(0, 3)
  }
  if (progs.content.tomato) {
    contentName =
      (<ul className="flex py-5 text-[#dbe2fb] text-base">
        <Li>
          <div>
            <img src="./imgContentHomePage/tomato.png" />
          </div>
          {progs.content.tomato}%
        </Li>
        <Li>
          <div >
            <img src="./imgContentHomePage/cake.png" />
          </div>
          {progs.content.like}%
        </Li>
      </ul>)
  }
  if (!progs.content.tomato) {
    contentName =
      (<ul className="flex py-5 text-[#dbe2fb] text-base ">
        <span>{progs.content.located}</span>
        <CssDate>
          <CssH6Date>{newDate.getDate()}</CssH6Date>
          <CssSpanDate>{monthSlice}</CssSpanDate>
        </CssDate>
      </ul>);
  }
  return (
    <Div>
      <div className="overflow-hidden">
        <a>
          <Img src={progs.content.img} />
        </a>
      </div>
      <div className="px-5">
        <H5 >{progs.content.name}</H5>
        {contentName}
      </div>
    </Div>
  );
}

export default CardConTentHomePage;

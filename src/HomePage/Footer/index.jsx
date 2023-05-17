import { DivFooter, DivInputFooter, DivContentFooter, DivH5, DivH3, DivInput } from "./cssFooter"
import Button from "../../button/button"
function Footer() {
  return (
    <DivFooter>
      <DivInputFooter>
        <DivContentFooter>
          <div className="mb-10">
            <DivH5>subscribe to Boleto </DivH5>
            <DivH3>to get exclusive benifits</DivH3>
          </div>
          <from className="flex">
            <DivInput type="text" placeholder="Your Email Address" />
            <div className="absolute right-0" >
              <Button content="subscribe" backGround="-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 43%, #ff4343 100%)" type="primary" htmlType="submit"></Button>
            </div>
          </from>
        </DivContentFooter>
      </DivInputFooter>
      <div>
        <div className="w-full">
          <img src= "./imgFooter/logo.png" className="w-full"/>
        </div>
      </div>
    </DivFooter>
  )
}
export default Footer
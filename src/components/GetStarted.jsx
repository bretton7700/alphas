import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () =>   {
  return  (
  
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer ml-4`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <a href={`/communication/`} className="text-gradient">Get</a>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <a href={`/communication/`} className="text-gradient">Started</a>
      </p>
    </div>
  </div>
)};

export default GetStarted;

import { whoarewe } from "../../assets";
import styles, { layout } from "../../style";

const Ezeshas = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={whoarewe} alt="who are we" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        We Serve  <br className="sm:block hidden" /> SMEs
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Ezeshas Technologies Limited is a Cloud Software 
        Company that offers business cloud solutions.
        We are an energetic, customer focused team 
        of professionals with extensive experience in providing devops applications.
        Our goal is to build long-lasting relationships 
        with our clients by meeting their needs through partnership
         with the biggest cloud Providers like AWS.
      </p>

      
    </div>
  </section>
);

export default Ezeshas;
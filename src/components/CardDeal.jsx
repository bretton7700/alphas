import { cloud } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Move To the Cloud <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        No more Downtime. Save Costs By Moving to the Cloud Provider of your Choice.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={cloud} alt="cloud" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
import { team } from "../../constants";
import styles from "../../style";
import FeedbackCard from "./FeedbackCard";

const Team = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
     <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>Meet Our <br className="sm:block hidden" />Team</h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}> Our team of experienced developers, managers, and architects will provide you with the best infrastructure.</p>
      </div>

    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {team.map((card) => (
        <FeedbackCard key={card.id} {...card}/>
      ))}

    </div>
  </section>
)


export default Team



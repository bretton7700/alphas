import { EzeshaServices} from "../../constants";
import styles, { layout } from "../../style";
import Button from "../../components/Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== EzeshaServices.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const EzeServices = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        What Services , <br className="sm:block hidden" /> Do we Offer??
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We Offer : <br/>
      🔴 infrastructure as code (IaC) <br/>
      🔴 Microservices and containers (K8s) Architectures For Applications. <br/>
      🔴 Training For  teams on running  cloud workloads  <br/>
      🔴 Cloud strategy Development For Teams.<br/>
      🔴 Cloud FinOps <br/>
      🔴 Migration to AWS || AZURE || GCP
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {EzeshaServices.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default EzeServices;
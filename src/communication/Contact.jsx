import styles from '../style';
import { Navbar, Footer, ChatwootWidget } from '../components';
import { ContactForm } from './components';
const Contact = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Ezeshas />
      </div>
    </div> */}

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>

        <ContactForm />
        <ChatwootWidget />
        <Footer />
      </div>
    </div>

  </div>
)


export default Contact
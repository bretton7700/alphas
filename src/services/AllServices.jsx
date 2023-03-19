import styles from '../style';
import { Navbar,Footer, ChatwootWidget } from '../components';
// import { Hero } from './components';

import EzeServices from './components/EzeServices';


const AllServices = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        
        <EzeServices />
        <ChatwootWidget />
        <Footer />
      </div>
    </div>

    
  </div>
)


export default AllServices
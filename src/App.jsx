import React from 'react'
import styles from './style'
import { Navbar, Footer, Hero, About} from './components';

const App = () => (
  <div className = "bg-primary w-full overflow-hidden">
    <div className = {`${styles.paddingX} ${styles.flexCenter}`}>
      <div className = {`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className = {`bg-primary ${styles.flexStart}`}>
      <div className = {`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className = {`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className = {`${styles.boxWidth}`}>
        <About />
        <Footer />
      </div>
    </div>

  </div>
);
('${styles.padding}')
export default App

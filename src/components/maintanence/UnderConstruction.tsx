import styles from "../../styles/UnderConstruction.module.css";
import WaveConstructionPage from "../UI/WaveConstructionPage";
import { motion } from "framer-motion";
import { useRef } from "react";

const UnderConstruction = () => {
  const dragAbleAreaRef = useRef(null);

  return (
    <div className={styles.appBackground}>
      <div ref={dragAbleAreaRef} className={styles.constructionContainer}>
        <WaveConstructionPage className={styles.waveStyle} />

        <motion.div
          className={styles.rotatingBox}
          initial={{ opacity: 0.9, rotate: 0 }}
          animate={{
            rotate: 360,
          }}
          transition={{
            rotate: {
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            },
          }}
          whileTap={{ scale: 1.1 }}
          drag
          dragConstraints={dragAbleAreaRef}
          dragElastic={0.2}
        ></motion.div>

        <div className={styles.constructionMessage}>
          <h1>Under Construction</h1>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;

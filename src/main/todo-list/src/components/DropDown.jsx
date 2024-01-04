import { useEffect, useState } from "react";

import styles from "../styles/DropDown.module.css"
import { AnimatePresence, motion } from "framer-motion";

export default function DropDown({value, setValue, datas, label}) {
  const [isDrop, setIsDrop] = useState(false)

  return (
  <div>
    <label onClick={()=>setIsDrop(pre=>!pre)}>{label}</label>
    <div className={styles.dropDown} onClick={()=>setIsDrop(pre=>!pre)}>
      <div className={styles.display}>
        {value}
        <span className={`material-symbols-outlined ${styles.symbol}`}>expand_more</span>
      </div>
    </div>
    <AnimatePresence>
    {isDrop&&
    <motion.div 
      className={styles.box}
      initial={{height:"0px"}}
      animate={{height:"max-content"}}
      exit={{height:"0px"}}
    >
      {datas.map(data=>{
        return<motion.div
          key={data} 
          onClick={()=>{
            setValue(data)
            setIsDrop(false)
          }}
          initial={{
            opacity: 0,
            backgroundColor: value===data?"rgb(230, 230, 230)":"rgb(255, 255, 255)",
          }}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          whileHover={{backgroundColor: "rgb(230, 230, 230)"}}
        >
          {data}
        </motion.div>
      })}
    </motion.div>}
    </AnimatePresence>
  </div>)
}
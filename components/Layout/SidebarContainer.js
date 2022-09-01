import { motion, useWillChange } from "framer-motion";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import sidebarContainerStyles from "../../styles/sidebarContainer.styles";
import { sidebarState } from "../../atoms/sidebarState";

function SidebarContainer({ size }) {
  const { classes } = sidebarContainerStyles();
  const [show, setShow] = useRecoilState(sidebarState);
  useEffect(() => {
    if (size.width >= 1100) {
      setShow(true);
    }
  }, [size.width]);

  return (
    <motion.div
      className={`${classes.sidebarContainer}`}
      animate={{
        x: show ? 0 : -500,
        display: show ? "inline" : "none",
      }}
      style={{
        useWillChange,
      }}
      transition={{
        type: "spring",
        damping: 14,
        stiffness: 90,
        ease: "easeInOut",
      }}
    >
      <Sidebar />
    </motion.div>
  );
}
export default SidebarContainer;

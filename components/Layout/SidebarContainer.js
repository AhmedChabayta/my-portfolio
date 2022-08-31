import { motion } from "framer-motion";
import Sidebar from "./Sidebar/Sidebar";
import sidebarContainerStyles from "../../styles/sidebarContainer.styles";

function SidebarContainer({ show }) {
  const { classes } = sidebarContainerStyles();
  return (
    <motion.div
      className={`${classes.sidebarContainer} will-change-transform transform-gpu relative`}
      layout
      initial={{ y: "100%" }}
      animate={{
        y: show ? "100%" : "-100%",
      }}
      style={{
        display: show ? "block" : "none",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      {/* VERTICAL line RIGHT side of sidebar */}
      <Sidebar show={show} />
    </motion.div>
  );
}
export default SidebarContainer;

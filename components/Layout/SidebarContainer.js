import { motion } from "framer-motion";
import Sidebar from "./Sidebar/Sidebar";
import useStyles from "../../hooks/useStyles";

function SidebarContainer({ show }) {
  const { classes } = useStyles();
  return (
    <motion.div
      className={`${classes.sidebarContainer} will-change-transform transform-gpu`}
      layout
      initial={{ y: "100%" }}
      animate={{
        y: show ? "100%" : "-100%",
      }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 14,
      }}
      style={{
        display: show ? "block" : "none",
      }}
    >
      <Sidebar show={show} />
    </motion.div>
  );
}
export default SidebarContainer;

import { motion } from "framer-motion";
import Sidebar from "./Sidebar/Sidebar";
import useStyles from "../../hooks/useStyles";
import { colors } from "../../styles/colors";

function SidebarContainer({ show }) {
  const { classes } = useStyles();
  return (
    <motion.div
      className={`${classes.sidebarContainer} will-change-transform transform-gpu relative`}
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
      <hr
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          height: "100vh",
          border: `0.1px solid ${colors.cyan500}`,
        }}
      />
      <Sidebar show={show} />
    </motion.div>
  );
}
export default SidebarContainer;

import { motion } from 'framer-motion';
import Sidebar from './Sidebar/Sidebar';

const SidebarContainer = ({ show }) => {
  return (
    <motion.div
      className={`w-screen lg:w-fit will-change-transform ${
        show ? 'block' : 'hidden'
      } transform-gpu`}
      layout
      initial={{ y: '100%' }}
      animate={{
        y: show ? '100%' : '-100%',
      }}
      transition={{
        type: 'spring',
        stiffness: 90,
        damping: 14,
      }}
    >
      <Sidebar show={show} />
    </motion.div>
  );
};
export default SidebarContainer;

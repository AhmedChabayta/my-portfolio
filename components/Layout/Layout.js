import { Group, useMantineColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Sidebar from './Sidebar/Sidebar';
import { motion, useScroll } from 'framer-motion';
import { Kbd } from '@mantine/core';
import { useState } from 'react';
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
} from '@tabler/icons';
import Burger from '../Burger';
import SidebarContainer from './SidebarContainer';

const Layout = ({ children }) => {
  const [show, setShow] = useLocalStorage({
    key: 'show',
    defaultValue: '',
  });
  const [showHelpers, setShowHelpers] = useState(true); // keyboard shortcuts
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod+C', () => toggleColorScheme()]]);
  useHotkeys([['mod+V', () => handleShow()]]);

  const handleShow = () => {
    setShow((prevShow) => !prevShow);
    if (!show) {
      setShowHelpers(false);
    }
  };

  return (
    <motion.main
      layout
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Burger show={show} showHelpers={showHelpers} setShow={setShow} />

      <SidebarContainer show={show} />

      <motion.div
        layout
        style={{
          flex: 1,
          overflowY: 'scroll',
        }}  
      >
        {children}
      </motion.div>
    </motion.main>
  );
};
export default Layout;

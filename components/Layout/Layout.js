import { useMantineColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Burger from '../Burger';
import SidebarContainer from './SidebarContainer';

function Layout({ children }) {
  const [showHelpers, setShowHelpers] = useState(true);
  const [show, setShow] = useLocalStorage({
    key: 'show',
    defaultValue: '',
  });
  const handleShow = () => {
    setShow((prevShow) => !prevShow);
    if (show) {
      setShowHelpers(false);
    }
  };
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod+C', () => toggleColorScheme()]]);
  useHotkeys([['mod+V', () => handleShow()]]);

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
}
export default Layout;

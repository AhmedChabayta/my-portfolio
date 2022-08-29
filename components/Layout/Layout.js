import { Burger, Group, useMantineColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Sidebar from './Sidebar/Sidebar';
import { motion, useScroll } from 'framer-motion';
import { Kbd } from '@mantine/core';
import { useState } from 'react';
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
} from '@tabler/icons';

const Layout = ({ children }) => {
  const [show, setShow] = useLocalStorage({
    key: 'show',
    defaultValue: '',
  });
  const [showHelpers, setShowHelpers] = useState(true);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod+C', () => toggleColorScheme()]]);
  useHotkeys([['mod+V', () => handleShow()]]);

  const handleShow = () => {
    setShowHelpers(false);
    setShow((prevShow) => !prevShow);
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
      {/* //burger button */}
      <Group
        style={{
          zIndex: 100,
          position: 'fixed',
          left: 1,
          top: 1,
          cursor: 'pointer',
        }}
      >
        {show ? (
          <IconLayoutSidebarLeftCollapse
            className="opacity-[0.5] hover:opacity-[1] transition-transform ease-linear"
            color={colorScheme === 'light' ? '#000000' : '#ffffff'}
            onClick={() => setShow((prevShow) => !prevShow)}
          />
        ) : (
          <IconLayoutSidebarLeftExpand
            className="opacity-[0.5] hover:opacity-[1] transition-transform ease-linear"
            color={colorScheme === 'light' ? '#000000' : '#ffffff'}
            onClick={() => setShow((prevShow) => !prevShow)}
          />
        )}
        {showHelpers && (
          <Group className="hidden md:flex">
            <Kbd>⌘</Kbd> + <Kbd>c</Kbd> or <Kbd>⌘</Kbd> + <Kbd>v</Kbd>
          </Group>
        )}
      </Group>

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

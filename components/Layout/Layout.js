import {
  AppShell,
  ActionIcon,
  useMantineColorScheme,
  Button,
  useMantineTheme,
  Transition,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import { IconMenu, IconSun, IconMoonStars } from '@tabler/icons';
import { motion as m } from 'framer-motion';

const Layout = ({ children }) => {
  const [show, setShow] = useLocalStorage({
    key: 'show',
    defaultValue: '',
  });
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  useHotkeys([['mod+C', () => toggleColorScheme()]]);
  useHotkeys([['mod+S', () => setShow((prevShow) => !prevShow)]]);
  return (
    <m.main
      layout
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <m.ActionIcon //burger button
        initial={{ x: 0 }}
        variant="transparent"
        style={{
          zIndex: 100,
          position: 'fixed',
          left: 0,
          top: 0,
          cursor: 'pointer',
        }}
        onClick={() => setShow((prevShow) => !prevShow)}
      >
        <IconMenu />
      </m.ActionIcon>

      <m.div
        className="w-screen lg:w-fit"
        layout
        initial={{ x: 0 }}
        animate={{
          x: show ? 0 : -500,
          width: show ? '' : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        <Sidebar show={show} />
      </m.div>

      <m.div
        layout
        style={{
          flex: 1,
          height: '100vh',
          overflowY: 'scroll',
        }}
      >
        {children}
      </m.div>
    </m.main>
  );
};
export default Layout;

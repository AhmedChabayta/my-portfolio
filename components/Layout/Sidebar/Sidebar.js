/* eslint-disable @next/next/no-img-element */
import {
  Stack,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { ComputerLanguages, frameworks } from '../../../data/languages';
import TopSidebar from './TopSidebar';
import Bio from './Bio';
import { Languages, Frameworks } from './Languages';

const Sidebar = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Stack
      className="sidebar_scrollContainer"
      align="center"
      style={{
        overflowY: 'scroll',
        height: '100%',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <TopSidebar />
      <hr style={{ width: '70%', margin: '25px 0', opacity: 0.5 }} />
      <Stack style={{ width: '100%' }}>
        <Bio />
        <Languages />
        <Frameworks />
      </Stack>
    </Stack>
  );
};
export default Sidebar;

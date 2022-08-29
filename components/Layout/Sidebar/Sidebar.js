/* eslint-disable @next/next/no-img-element */
import {
  ScrollArea,
  Stack,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import TopSidebar from './TopSidebar';
import Bio from './Bio';
import { Languages, Frameworks } from './Languages';
import { colors } from '../../../styles/colors';

const Sidebar = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Stack
      align="center"
      style={{
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '100%',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        scrollBehavior: 'smooth',
      }}
    >
      <TopSidebar />
      <hr
        style={{
          width: '70%',
          margin: '25px 0',
          opacity: 1,
          border: `2px solid ${colors.cyan500}`,
          borderRadius: '20px',
        }}
      />
      <Stack style={{ width: '100%' }}>
        <Bio />
        <Languages />
        <Frameworks />
      </Stack>
    </Stack>
  );
};
export default Sidebar;

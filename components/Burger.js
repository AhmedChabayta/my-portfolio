import { Group, Kbd, useMantineColorScheme } from '@mantine/core';
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
} from '@tabler/icons';

function Burger({ show, showHelpers, setShow }) {
  const { colorScheme } = useMantineColorScheme();
  return (
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
          <Kbd>⌘</Kbd> +<Kbd>c</Kbd> or
          <Kbd>⌘</Kbd> +<Kbd>v</Kbd>
        </Group>
      )}
    </Group>
  );
}
export default Burger;

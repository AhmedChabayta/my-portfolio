import { Group, Kbd, useMantineColorScheme } from "@mantine/core";
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
} from "@tabler/icons";

function Burger({ show, showHelpers, setShow, setShowHelpers }) {
  const { colorScheme } = useMantineColorScheme();

  if (show) {
    setShowHelpers(false);
  }

  return (
    <Group
      style={{
        zIndex: 100,
        position: "fixed",
        left: 3,
        top: 3,
        cursor: "pointer",
      }}
    >
      {show ? (
        <IconLayoutSidebarLeftCollapse
          className="opacity-[0.5] hover:opacity-[1] transition-transform ease-linear"
          color={colorScheme === "light" ? "#000000" : "#ffffff"}
          onClick={() => setShow((prevShow) => !prevShow)}
        />
      ) : (
        <IconLayoutSidebarLeftExpand
          className="opacity-[0.5] hover:opacity-[1] transition-transform ease-linear"
          color={colorScheme === "light" ? "#000000" : "#ffffff"}
          onClick={() => setShow((prevShow) => !prevShow)}
        />
      )}
      {showHelpers && (
        <Group className="hidden md:flex animate-pulse delay-500">
          <Kbd>⌘</Kbd> +<Kbd>c</Kbd>
          <Kbd>⌘</Kbd> +<Kbd>v</Kbd>
        </Group>
      )}
    </Group>
  );
}
export default Burger;

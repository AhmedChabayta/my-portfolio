import { Group } from "@mantine/core";
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
} from "@tabler/icons";

function Burger({ show, setShow }) {
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
          onClick={() => setShow((prevShow) => !prevShow)}
        />
      ) : (
        <IconLayoutSidebarLeftExpand
          onClick={() => setShow((prevShow) => !prevShow)}
        />
      )}
    </Group>
  );
}
export default Burger;

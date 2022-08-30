import { Stack } from "@mantine/core";
import TopSidebar from "./TopSidebar";
import Bio from "./Bio";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import { colors } from "../../../styles/colors";

function Sidebar() {
  return (
    <Stack
      className="scrollbar-hide "
      align="center"
      style={{
        overflowY: "scroll",
        overflowX: "hidden",
        height: "100%",
        scrollBehavior: "smooth",
        minWidth: "400px",
      }}
    >
      <TopSidebar />
      <hr
        style={{
          width: "70%",
          margin: "25px 0",
          opacity: 1,
          border: `1px solid ${colors.cyan500}`,
          borderRadius: "20px",
        }}
      />
      <Stack style={{ width: "100%" }}>
        <Bio />
        <Languages />
        <Frameworks />
      </Stack>
    </Stack>
  );
}
export default Sidebar;

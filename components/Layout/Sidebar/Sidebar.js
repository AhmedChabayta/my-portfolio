import { Stack } from "@mantine/core";
import TopSidebar from "./TopSidebar";
import Bio from "./Bio";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import { colors } from "../../../styles/colors";
import sidebarStyles from "../../../styles/sidebar.styles";

function Sidebar() {
  const { classes } = sidebarStyles();
  return (
    <Stack className={`${classes.container} scrollbar-hide`} align="center">
      <TopSidebar />
      <hr
        style={{
          width: "70%",
          margin: "25px 0",
          opacity: 1,
          border: `1px solid ${colors.pink500}`,
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

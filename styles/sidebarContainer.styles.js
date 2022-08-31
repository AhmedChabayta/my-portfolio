import { createStyles } from "@mantine/core";
import { colors } from "./colors";

const sidebarContainerStyles = createStyles((theme) => ({
  sidebarContainer: {
    display: "flex",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.white,
    borderRight: `1px solid ${colors.cyan500}`,
    width: "fit-content",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100vw",
      borderRight: `0px`,
    },
  },
  hrInSidebar: {
    position: "fixed",
    right: 0,
    top: 0,
    height: "100vh",
    border: `0.1px solid ${colors.cyan500}`,
  },
}));

export default sidebarContainerStyles;

import { createStyles } from "@mantine/core";

const sidebarStyles = createStyles(() => ({
  container: {
    overflowY: "scroll",
    overflowX: "hidden",
    height: "100vh",
    scrollBehavior: "smooth",
    minWidth: "400px",
  },
}));

export default sidebarStyles;

import { createStyles } from "@mantine/core";

const sidebarContainerStyles = createStyles((theme) => ({
  sidebarContainer: {
    display: "flex",
    width: "fit-content",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100vw",
      borderRight: `0px`,
    },
  },
}));

export default sidebarContainerStyles;

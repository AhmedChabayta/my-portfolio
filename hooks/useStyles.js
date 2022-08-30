import { createStyles } from "@mantine/core";
import { colors } from "../styles/colors";

const useStyles = createStyles((theme) => ({
  sidebarContainer: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.white,
    width: "fit-content",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100vw",
    },
  },
  flexy: {
    justifyContent: "space-evenly",
    border: `1px solid ${colors.cyan500}`,
    borderRadius: "12px",
    width: "fit-content",
    maxWidth: "fit-content",
    margin: "3rem auto",
    background: theme.colorScheme === "dark" ? colors.cyan900 : colors.cyan200,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
      background: "transparent",
      border: "none",
    },
  },
  main: {
    background: "red",
  },
}));

export default useStyles;

import { createStyles } from "@mantine/core";
import { colors } from "../styles/colors";

const useStyles = createStyles((theme) => ({
  sidebarContainer: {
    display: "flex",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.white,
    width: "fit-content",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100vw",
    },
  },
  flexy: {
    justifyContent: "space-evenly",
    border:
      theme.colorScheme === "dark"
        ? `1px solid ${colors.pink100}`
        : `1px solid ${colors.pink900}`,
    borderRadius: "12px",
    width: "fit-content",
    maxWidth: "fit-content",
    margin: "3rem auto",
    background: theme.colorScheme === "dark" ? colors.pink900 : colors.pink100,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
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

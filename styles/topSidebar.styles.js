import { createStyles } from "@mantine/core";

const topSidebarStyles = createStyles(() => ({
  image: {
    cursor: "pointer",
    borderRadius: "100%",
    height: 150,
    width: 150,
  },
  spaceEvenly: {
    justifyContent: "space-evenly",
    width: "100%",
  },
}));

export default topSidebarStyles;

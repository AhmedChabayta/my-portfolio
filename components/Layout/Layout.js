import { useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { useState } from "react";
import { motion } from "framer-motion";
import Burger from "../Burger";
import SidebarContainer from "./SidebarContainer";
import FooterNav from "./Navigation/FooterNav";
import { colors } from "../../styles/colors";

function Layout({ children }) {
  const [showHelpers, setShowHelpers] = useState(false);

  const [show, setShow] = useLocalStorage({
    key: "show",
    defaultValue: "",
  });

  const theme = useMantineTheme();
  const handleShow = () => {
    setShow((prevShow) => !prevShow);
    if (show) {
      setShowHelpers(false);
    }
  };
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([["mod+C", () => toggleColorScheme()]]);
  useHotkeys([["mod+V", () => handleShow()]]);

  return (
    <motion.div
      layout
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Burger
        show={show}
        setShowHelpers={setShowHelpers}
        showHelpers={showHelpers}
        setShow={setShow}
      />

      <SidebarContainer show={show} />

      <motion.main
        layout
        style={{
          flex: 1,
          overflowY: "scroll",
          paddingBottom: 20,
        }}
      >
        {children}
      </motion.main>
      <footer
        style={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60px",
          borderTop: `1px solid ${colors.cyan500}`,
          background:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : colors.white,
        }}
      >
        <FooterNav />
      </footer>
    </motion.div>
  );
}
export default Layout;

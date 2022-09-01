import { useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import SidebarContainerWithNoSSR from "./SidebarContainer";
import Burger from "../Burger";
import { colors } from "../../styles/colors";
import GetInTouch from "../GetInTouch";
import ShortcutIndex from "./ShortcutIndex";
import useWindowSize from "../../hooks/useWindowSize";
import { sidebarState } from "../../atoms/sidebarState";
import NoSSrWrapper from "../NoSSrWrapper";

function Layout({ children }) {
  const [showHelpers, setShowHelpers] = useState(false);
  const [show, setShow] = useRecoilState(sidebarState);

  const size = useWindowSize();
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

  useEffect(() => {
    if (size.width <= 750) {
      setShow(false);
    }
  }, [size.width]);

  return (
    <NoSSrWrapper>
      <motion.div
        layout
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Burger
          show={show}
          setShowHelpers={setShowHelpers}
          showHelpers={showHelpers}
          setShow={setShow}
        />

        <SidebarContainerWithNoSSR size={size} show={show} />

        <motion.main
          layout
          transition={{
            duration: 0.2,
          }}
          style={{
            width: "100vw",
            height: "100vh",
            paddingBottom: 20,
            display: size.width < 750 && show ? "none" : "flex",
          }}
        >
          {children}
        </motion.main>
        <footer
          style={{
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bottom: 0,
            left: 0,
            right: 0,
            height: 60,
            borderTop: `1px solid ${colors.cyan500}`,
            background:
              theme.colorScheme === "dark" ? colors.gray900 : colors.white,
          }}
        >
          <GetInTouch />
          <ShortcutIndex />
        </footer>
      </motion.div>
    </NoSSrWrapper>
  );
}
export default Layout;

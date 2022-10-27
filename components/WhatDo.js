/* eslint-disable no-unused-vars */
import { ActionIcon, Card, Tabs, useMantineTheme } from "@mantine/core";
import { useRecoilState } from "recoil";
import { processState } from "../atoms/processState";
import { colors } from "../styles/colors";
import { sidebarState } from "../atoms/sidebarState";

function WhatDo({ title, Icon, data }) {
  const [whichProcess, setWhichProcess] = useRecoilState(processState);
  const [show, setShow] = useRecoilState(sidebarState);

  const theme = useMantineTheme();
  return (
    <ActionIcon
      onClick={() => setWhichProcess(data)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "10rem",
        width: "10rem",
        background:
          theme.colorScheme === "dark" ? colors.gray900 : colors.gray100,
        border:
          theme.colorScheme === "dark"
            ? `1px solid ${colors.white}`
            : `1px solid ${colors.black}`,
        color: theme.colorScheme === "dark" ? colors.white : colors.black,
      }}
    >
      <Icon
        className="relative stroke-[1px] group-hover:stroke-[1.3px] group-hover:fill-cyan-500"
        size={80}
      />
      <p className="group-hover:font-black">{title}</p>
    </ActionIcon>
  );
}
export default WhatDo;

import { Group, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { IconDeviceLaptop } from "@tabler/icons";
import { useRecoilValue } from "recoil";

import { colors } from "../styles/colors";
import { data } from "../data";
import { processState } from "../atoms/processState";
import Example from "../components/Example";
import WhatDo from "../components/WhatDo";
import useStyles from "../hooks/useStyles";
import NonSSRWrapper from "../components/NoSSrWrapper";

export default function Home() {
  const whichProcess = useRecoilValue(processState);
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Stack
      pt={50}
      pb={100}
      style={{
        height: "100%",
        width: "100%",
        overflowY: "scroll",
        flexShrink: 0,
        background:
          theme.colorScheme === "dark" ? theme.colors.dark[9] : colors.white,
      }}
    >
      <Group
        px="2rem"
        pt="2rem"
        noWrap
        style={{
          justifyContent: "space-evenly",
          width: "fit-content",
          maxWidth: "fit-content",
          margin: "1rem auto",
        }}
        className={`${classes.flexy}`}
      >
        <Stack>
          <Title sx={{ margin: 0 }} className="name_css relative text-5xl">
            <Text
              style={{
                color:
                  theme.colorScheme === "dark"
                    ? colors.cyan500
                    : colors.teal300,
              }}
              span
              className="text-cyan-500"
            >
              Frontend{" "}
            </Text>
            Developer
          </Title>
          <Text className="max-w-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            soluta placeat sequi natus odio maiores nulla aliquid illo, eos
            eligendi laborum, qui ipsa incidunt minima iure optio quas totam
            consectetur.
          </Text>
        </Stack>
        <img
          className="object-contain max-w-[300px] max-h-[300px] min-w-[300px]"
          src="/me.png"
          alt="me"
        />
      </Group>

      <hr
        style={{
          border: `1px solid ${colors.cyan500}`,
          width: "50%",
          margin: "4rem auto",
        }}
      />

      <Stack>
        <Group
          style={{ justifyContent: "space-evenly", maxWidth: "900px" }}
          align="center"
          mx="auto"
          mb={50}
        >
          <WhatDo data={data[0]} Icon={IconDeviceLaptop} title="Web Design" />
          <WhatDo data={data[1]} Icon={IconDeviceLaptop} title="Prototyping" />
          <WhatDo data={data[2]} Icon={IconDeviceLaptop} title="Per Project" />
        </Group>
      </Stack>
      <NonSSRWrapper>
        <Example whichProcess={whichProcess} />
      </NonSSRWrapper>
    </Stack>
  );
}

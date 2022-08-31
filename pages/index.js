import { Group, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { IconDeviceLaptop } from "@tabler/icons";
import { FeaturesGrid } from "../components/FeaturesGrid";
import WhatDo from "../components/WhatDo";
import useStyles from "../hooks/useStyles";
import { colors } from "../styles/colors";

export default function Home() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  console.log(theme);
  return (
    <Stack
      pt={50}
      pb={100}
      style={{
        overflow: "hidden",
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
          <WhatDo Icon={IconDeviceLaptop} title="Web Design" />
          <WhatDo Icon={IconDeviceLaptop} title="Prototyping" />
          <WhatDo Icon={IconDeviceLaptop} title="Per Page" />
          <WhatDo Icon={IconDeviceLaptop} title="Per Project" />
        </Group>

        <FeaturesGrid />
      </Stack>
    </Stack>
  );
}

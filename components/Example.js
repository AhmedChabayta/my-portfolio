import { Group, Stack, Text, useMantineTheme } from "@mantine/core";

function Example({ whichProcess }) {
  const theme = useMantineTheme();
  return (
    <Group
      sx={{
        flexDirection: "row",
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          flexDirection: "column",
        },
      }}
      p={50}
      style={{
        justifyContent: "space-between",
      }}
    >
      <Stack style={{ flex: 0.5 }}>
        <Text style={{ borderBottom: `1px solid ${whichProcess.color}` }}>
          {whichProcess?.word}
        </Text>
        <Text>{whichProcess?.words}</Text>
      </Stack>
      <Stack>
        <img src={whichProcess?.images} alt="" />
      </Stack>
    </Group>
  );
}
export default Example;

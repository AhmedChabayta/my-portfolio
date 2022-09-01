import { Group, Stack, Text } from "@mantine/core";

function Example({ whichProcess }) {
  return (
    <Group p={50} style={{ justifyContent: "space-between" }}>
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

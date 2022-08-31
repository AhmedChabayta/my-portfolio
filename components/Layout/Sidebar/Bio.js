import { Group, Stack, Text } from "@mantine/core";
import bioStyles from "../../../styles/bio.styles";

function Bio() {
  const { classes } = bioStyles();
  return (
    <Stack style={{ whiteSpace: "nowrap" }}>
      <Group className={classes.spaceBetween}>
        <Text weight={900}>Age:</Text>
        <Text>31</Text>
      </Group>
      <Group className={classes.spaceBetween}>
        <Text weight={900}>Located In:</Text>
        <Text>Lebanon</Text>
      </Group>
      <Group className={classes.spaceBetween}>
        <Text weight={900}>Position:</Text>
        <Text>Any</Text>
      </Group>
    </Stack>
  );
}
export default Bio;

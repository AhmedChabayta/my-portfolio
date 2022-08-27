import { Group, Text } from '@mantine/core';

const Bio = () => {
  return (
    <>
      <Group style={{ justifyContent: 'space-between', padding: '0 50px' }}>
        <Text weight={900}>Age:</Text>
        <Text>31</Text>
      </Group>
      <Group style={{ justifyContent: 'space-between', padding: '0 50px' }}>
        <Text weight={900}>Located In:</Text>
        <Text>Lebanon</Text>
      </Group>
      <Group style={{ justifyContent: 'space-between', padding: '0 50px' }}>
        <Text weight={900}>Position:</Text>
        <Text>Any</Text>
      </Group>
    </>
  );
};
export default Bio;

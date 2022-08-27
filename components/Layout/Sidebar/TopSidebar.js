/* eslint-disable @next/next/no-img-element */
import {
  ActionIcon,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import {
  IconSun,
  IconMoonStars,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons';

const TopSidebar = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div>
      <Stack align="center" justify="center" mt={50}>
        <img
          onClick={() => toggleColorScheme()}
          style={{
            cursor: 'pointer',
            border:
              colorScheme === 'light' ? '5px solid black' : '5px solid gray',
            borderRadius: '100%',
            height: 150,
            width: 150,
          }}
          alt=""
          src="/fractalhat.jpg"
          size="xl"
        />

        <Text size="xl" weight={800}>
          Ahmed Chabayta
        </Text>
        <Text color="dimmed" size="md">
          Front-End Developer
        </Text>
        <Group
          my={25}
          style={{ justifyContent: 'space-evenly', width: '100%' }}
        >
          <ActionIcon component="a">
            <IconBrandFacebook />
          </ActionIcon>
          <ActionIcon component="a">
            <IconBrandInstagram />
          </ActionIcon>
          <ActionIcon component="a">
            <IconBrandLinkedin />
          </ActionIcon>
          <ActionIcon component="a">
            <IconBrandTwitter />
          </ActionIcon>
        </Group>
      </Stack>
    </div>
  );
};
export default TopSidebar;

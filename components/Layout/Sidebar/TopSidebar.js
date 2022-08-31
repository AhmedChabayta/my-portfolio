/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  ActionIcon,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";
import topSidebarStyles from "../../../styles/topSidebar.styles";

function TopSidebar() {
  const { toggleColorScheme } = useMantineColorScheme();
  const { classes } = topSidebarStyles();

  return (
    <Stack align="center" justify="center" mt={50}>
      <Image
        onClick={() => toggleColorScheme()}
        className={classes.image}
        alt=""
        height={150}
        width={150}
        src="/fractalhat.jpg"
      />

      <Text size="xl" weight={800}>
        Ahmed Chabayta
      </Text>
      <Text color="dimmed" size="md">
        Frontend Developer
      </Text>
      <Text size="xs">Primarily focused on React & Nextjs</Text>
      <Group my={25} className={classes.spaceEvenly}>
        <Link href="/somewhere">
          <ActionIcon component="a">
            <IconBrandFacebook />
          </ActionIcon>
        </Link>
        <Link href="/">
          <ActionIcon component="a">
            <IconBrandInstagram />
          </ActionIcon>
        </Link>
        <ActionIcon component="a">
          <IconBrandLinkedin />
        </ActionIcon>
        <ActionIcon component="a">
          <IconBrandTwitter />
        </ActionIcon>
      </Group>
    </Stack>
  );
}
export default TopSidebar;

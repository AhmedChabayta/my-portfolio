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
import Link from "next/link";
import { colors } from "../../../styles/colors";

function TopSidebar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Stack align="center" justify="center" mt={50}>
      <img
        onClick={() => toggleColorScheme()}
        style={{
          cursor: "pointer",
          border: colorScheme === "dark" ? `5px solid ${colors.cyan500}` : "",
          borderRadius: "100%",
          height: 150,
          width: 150,
        }}
        alt=""
        src="/fractalhat.jpg"
      />

      <Text size="xl" weight={800}>
        Ahmed Chabayta
      </Text>
      <Text color="dimmed" size="md">
        Frontend Developer
      </Text>
      <Text size="xs">Primarily focused on React & Nextjs</Text>
      <Group my={25} style={{ justifyContent: "space-evenly", width: "100%" }}>
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

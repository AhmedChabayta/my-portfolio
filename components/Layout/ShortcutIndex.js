import { useState } from "react";
import { Modal, Button, Group, Kbd, Text, Stack } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";

export default function ShortcutIndex() {
  const [opened, setOpened] = useState(false);

  useHotkeys([["mod+§", () => setOpened((prevOpen) => !prevOpen)]]);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Contact">
        <Stack>
          <Group>
            <Kbd>CMD + C</Kbd>
            <Text>Color Scheme</Text>
          </Group>
          <Group>
            <Kbd>CMD + V</Kbd>
            <Text>Toggle Sidebar</Text>
          </Group>
          <Group>
            <Kbd>CMD + z</Kbd>
            <Text>Toggle Contact</Text>
          </Group>
          <Group>
            <Kbd>CMD + §</Kbd>
            <Text>Toggle Shortcuts</Text>
          </Group>
        </Stack>
      </Modal>

      <Group position="center">
        <Button
          style={{
            background: "transparent",
            border: "none",
          }}
          variant="default"
          onClick={() => setOpened(true)}
        >
          Shortcuts
        </Button>
      </Group>
    </>
  );
}

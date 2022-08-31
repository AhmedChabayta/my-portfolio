import { useState } from "react";
import { Modal, Button, Group, Input, Textarea } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";

export default function GetInTouch() {
  const [opened, setOpened] = useState(false);

  useHotkeys([["mod+z", () => setOpened((prevOpen) => !prevOpen)]]);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Contact">
        <Input m={10} placeholder="e-mail" />
        <Textarea m={10} placeholder="your message" />
      </Modal>

      <Group>
        <Button color="dark" onClick={() => setOpened(true)}>
          Get in Touch
        </Button>
      </Group>
    </>
  );
}

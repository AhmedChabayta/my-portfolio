import { Group, Stack, Text, Title } from '@mantine/core';
import { IconDeviceLaptop } from '@tabler/icons';
import WhatDo from '../components/WhatDo';

export default function Home() {
  return (
    <Stack style={{ overflow: 'hidden', flexShrink: 0 }}>
      <Group
        noWrap
        className="flex-col md:flex-row justify-between mx-10 pt-8 rounded"
      >
        <Stack>
          <Title className="text-5xl">Ahmed Chabayta</Title>
          <Title className="text-5xl">
            <Text span className="text-cyan-500">
              Frontend
            </Text>{' '}
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
      <Group position="center" align="center">
        <WhatDo Icon={IconDeviceLaptop} title="Web Design" />
        <WhatDo Icon={IconDeviceLaptop} title="Prototyping" />
        <WhatDo Icon={IconDeviceLaptop} title="Per Page" />
        <WhatDo Icon={IconDeviceLaptop} title="Per Project" />
        <WhatDo Icon={IconDeviceLaptop} title="Per Project" />
      </Group>
    </Stack>
  );
}

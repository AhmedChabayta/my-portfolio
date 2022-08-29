/* eslint-disable @next/next/no-img-element */
import { Grid, Group, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import WhatDo from '../components/WhatDo';
import profileImage from '../public/me.png';
import { IconDeviceLaptop } from '@tabler/icons';
import { motion } from 'framer-motion';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Stack style={{ overflow: 'hidden', flexShrink: 0 }}>
      <Group
        noWrap
        className="flex flex-col md:flex-row justify-evenly mx-10 pt-8 rounded"
      >
        <Stack>
          <Title className="text-5xl">Ahmed Chabayta</Title>
          <Title className="text-5xl">
            <span className="text-cyan-500">Frontend</span> Developer
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

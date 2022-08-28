import { Card } from '@mantine/core';

const WhatDo = ({ title, Icon }) => {
  return (
    <Card
      withBorder
      className="group flex flex-col items-center justify-center w-44 h-44 hover:border-cyan-500 hover:border-4 hover:text-cyan-500 cursor-pointer active:scale-90 transition-transform ease-linear"
    >
      <Icon className="relative" size={80} />
      <p className="group-hover:font-black">{title}</p>
    </Card>
  );
};
export default WhatDo;

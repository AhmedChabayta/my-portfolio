import { Card } from "@mantine/core";

const style =
  "group flex flex-col items-center justify-center w-44 h-44 hover:border-cyan-500 hover:border-4 hover:text-cyan-500 cursor-pointer active:scale-[0.96] transition-transform ease-linear duration-75 focus:border-2 focus:border-cyan-500";

function WhatDo({ title, Icon }) {
  return (
    <Card withBorder component="button" className={style}>
      <Icon
        className="relative stroke-[1px] group-hover:stroke-[1.3px] group-hover:fill-cyan-500"
        size={80}
      />
      <p className="group-hover:font-black">{title}</p>
    </Card>
  );
}
export default WhatDo;

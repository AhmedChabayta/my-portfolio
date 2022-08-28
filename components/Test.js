import { useWindowScroll } from '@mantine/hooks';
import { useScroll, motion } from 'framer-motion';

const Test = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          height: '10px',
          backgroundColor: 'cyan',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
        }}
      />
    </div>
  );
};
export default Test;

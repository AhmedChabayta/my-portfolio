import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
} from "@mantine/core";
import {
  IconGauge,
  IconCookie,
  IconUser,
  IconMessage2,
  IconLock,
} from "@tabler/icons";
import { motion } from "framer-motion";

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: "Extreme performance",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
  },
  {
    icon: IconUser,
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
  },
  {
    icon: IconCookie,
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
  },
  {
    icon: IconLock,
    title: "Secure by default",
    description:
      "Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right",
  },
  {
    icon: IconMessage2,
    title: "24/7 Support",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail",
  },
  {
    icon: IconMessage2,
    title: "24/2 Support",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail",
  },
];

export function Feature({ icon: Icon, title, description }) {
  const theme = useMantineTheme();
  return (
    <motion.div
      layout
      style={{
        padding: "15px",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[1],
        borderRadius: "10px",
      }}
    >
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={20} stroke={1.5} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
        {title}
      </Text>
      <Text size="sm" color="dimmed">
        {description}
      </Text>
    </motion.div>
  );
}

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
}));

export function FeaturesGrid({ title, description, data = MOCKDATA }) {
  const { classes, theme } = useStyles();
  const features = data.map((feature) => (
    <Feature {...feature} key={feature.title} />
  ));

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}

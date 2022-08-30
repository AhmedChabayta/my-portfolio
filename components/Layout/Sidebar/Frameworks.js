import { Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { frameworks } from "../../../data/languages";

export default function Frameworks() {
  return (
    <Stack justify="center" p={50}>
      <Text className="whitespace-nowrap" size="xl" weight="900" my={20}>
        Frameworks & Libraries
      </Text>
      {frameworks.map((language) => (
        <div
          style={{ margin: "15px 0", whiteSpace: "nowrap" }}
          key={language.title}
        >
          <Text>{language.title}</Text>
          <div
            style={{
              margin: "15px 0",
              minWidth: "100%",
            }}
            className="custom_range whitespace-nowrap"
          >
            <motion.div
              className="absolute top-0 left-0 bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-500 rounded"
              initial={{ width: 0 }}
              whileInView={{
                width: language.rating,
                height: "100%",
                zIndex: 50,
              }}
              transition={{
                duration: 1,
              }}
            />
          </div>
        </div>
      ))}
    </Stack>
  );
}

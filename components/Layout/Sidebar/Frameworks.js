import { Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { frameworks } from "../../../data/languages";

export default function Frameworks() {
  return (
    <Stack justify="center" p={50} mb={50}>
      <Text className="whitespace-nowrap" size="xl" weight="900" my={20}>
        Computer Languages
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
              className="bg-gradient-to-r from-pink-400 to-fuchsia-700 rounded"
              style={{ display: "absolute", top: 0, left: 0 }}
              initial={{ width: 0, height: "100%" }}
              whileInView={{
                width: language.rating,
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

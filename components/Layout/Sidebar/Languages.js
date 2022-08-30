import { Stack, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { ComputerLanguages } from "../../../data/languages";

export default function Languages() {
  return (
    <Stack justify="center" p={50}>
      <Text className="whitespace-nowrap" size="xl" weight="900" my={20}>
        Computer Languages
      </Text>

      {ComputerLanguages.map((language) => (
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
              className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-500 rounded"
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

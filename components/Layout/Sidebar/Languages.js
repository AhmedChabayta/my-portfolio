import { Stack, Text } from '@mantine/core';
import { ComputerLanguages, frameworks } from '../../../data/languages';
import { colors } from '../../../styles/colors';
export const Languages = () => {
  return (
    <>
      <Stack justify="center" p={50}>
        <Text className="whitespace-nowrap" size="xl" weight="900" my={20}>
          Computer Languages
        </Text>

        {ComputerLanguages.map((language) => (
          <div
            style={{ margin: '15px 0', whiteSpace: 'nowrap' }}
            key={language.title}
          >
            <Text>{language.title}</Text>
            <div
              style={{
                margin: '15px 0',
                minWidth: '100%',
              }}
              className="custom_range whitespace-nowrap"
            >
              <div
                className="absolute top-0 left-0 bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-500 rounded"
                style={{
                  width: language.rating,
                  height: '100%',
                  zIndex: 50,
                }}
              />
            </div>
          </div>
        ))}
      </Stack>
    </>
  );
};
export const Frameworks = () => {
  return (
    <Stack justify="center" p={50}>
      <Text className="whitespace-nowrap" size="xl" weight="900" my={20}>
        Frameworks & Libraries
      </Text>
      {frameworks.map((language) => (
        <div
          style={{ margin: '15px 0', whiteSpace: 'nowrap' }}
          key={language.title}
        >
          <Text>{language.title}</Text>
          <div
            style={{
              margin: '15px 0',
              minWidth: '100%',
            }}
            className="custom_range whitespace-nowrap"
          >
            <div
              className="absolute top-0 left-0 bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-500 rounded"
              style={{
                width: language.rating,
                height: '100%',
                zIndex: 50,
              }}
            />
          </div>
        </div>
      ))}
    </Stack>
  );
};

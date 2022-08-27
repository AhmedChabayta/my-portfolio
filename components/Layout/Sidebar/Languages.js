import { Stack, Text } from '@mantine/core';
import { ComputerLanguages, frameworks } from '../../../data/languages';

export const Languages = () => {
  return (
    <>
      <Stack justify="center" p={50}>
        <Text size="xl" weight="900" my={20}>
          Computer Languages
        </Text>

        {ComputerLanguages.map((language) => (
          <div style={{ margin: '15px 0' }} key={language.title}>
            <Text>{language.title}</Text>
            <div
              style={{ background: 'cyan', margin: '15px 0' }}
              className="custom_range"
            >
              <div
                style={{
                  position: 'absolute',
                  content: '',
                  top: 0,
                  left: 0,
                  backgroundColor: 'teal',
                  width: language.rating,
                  height: '100px',
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
      <Text size="xl" weight="900" my={20}>
        Frameworks & Libraries
      </Text>
      {frameworks.map((language) => (
        <div style={{ margin: '15px 0' }} key={language.title}>
          <Text>{language.title}</Text>
          <div
            style={{ background: 'cyan', margin: '15px 0' }}
            className="custom_range"
          >
            <div
              style={{
                position: 'absolute',
                content: '',
                top: 0,
                left: 0,
                backgroundColor: 'teal',
                width: language.rating,
                height: '100px',
                zIndex: 50,
              }}
            />
          </div>
        </div>
      ))}
    </Stack>
  );
};

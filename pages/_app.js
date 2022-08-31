/* eslint-disable react/destructuring-assignment */
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { getCookie, setCookie } from "cookies-next";
import { useState } from "react";
import { Layout } from "../components/Layout";
import RouterTransition from "../components/RouterTransition";
import "../styles/globals.css";

export default function App(props) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState(props.colorScheme);

  const toggleColorScheme = (value) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          breakpoints: {
            xs: 500,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
          colors: {
            dark: [
              "#f9fafb",
              "#f3f4f6",
              "#e5e7eb",
              "#d1d5db",
              "#9ca3af",
              "#6b7280",
              "#4b5563",
              "#374151",
              "#1f2937",
              "#111827",
            ],
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>

        <RouterTransition />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

App.getInitialProps = ({ ctx }) => ({
  // get color scheme from cookie
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

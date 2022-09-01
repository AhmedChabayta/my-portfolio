/* eslint-disable react/destructuring-assignment */
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { getCookie, setCookie } from "cookies-next";
import dynamic from "next/dynamic";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import { Layout } from "../components/Layout";

import "../styles/globals.css";

const RouterTransition = dynamic(
  () => import("../components/RouterTransition"),
  {
    ssr: false,
  }
);

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
              "#111827",
              "#1f2937",
              "#111827",
            ],
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <RecoilRoot>
          <Layout>
            <RouterTransition />
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

App.getInitialProps = ({ ctx }) => ({
  // get color scheme from cookie
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

/* eslint-disable react/destructuring-assignment */
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { getCookie, setCookie } from "cookies-next";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { RecoilRoot } from "recoil";
import { Layout } from "../components/Layout";
import { siteConfig } from "../config/siteConfig";
import { colors } from "../styles/colors";

import "../styles/globals.css";

const RouterTransition = dynamic(
  () => import("../components/RouterTransition"),
  {
    ssr: false,
  }
);

const DEFAULT_COLOR_SCHEME =
  siteConfig.defaultColorScheme === "dark" ? "dark" : "light";

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

  const mantineTheme = useMemo(
    () => ({
      colorScheme,
      primaryColor: siteConfig.primaryColor,
      breakpoints: {
        xs: 500,
        sm: 800,
        md: 1000,
        lg: 1200,
        xl: 1400,
      },
      colors: {
        dark: [
          colors.gray50,
          "#f3f4f6",
          "#e5e7eb",
          "#d1d5db",
          "#9ca3af",
          colors.blue500,
          "#4b5563",
          colors.black,
          colors.gray900,
          colors.black, // background
        ],
      },
    }),
    [colorScheme]
  );

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={mantineTheme}
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
  colorScheme: getCookie("mantine-color-scheme", ctx) || DEFAULT_COLOR_SCHEME,
});

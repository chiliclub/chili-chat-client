import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@styles/globalStyle";
import { theme } from "@styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import cookies from "next-cookies";
import { CookiesProvider } from "react-cookie";
import { NextPageContext } from "next";
import { setCookie } from "@utils/cookies";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <CookiesProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>chili-chat</title>
      </Head>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </CookiesProvider>
  );
};

// TODO: implement access control using token
// export const getInitialProps = (ctx: NextPageContext) => {
//   // const { token } = cookies(ctx);
//   // if (!token || token === "") {
//   //   if (ctx.req && ctx.res) {
//   //     ctx.res.writeHead(302, { Location: "/signin" });
//   //     ctx.res.end();
//   //   } else {
//   //     router.push("/signin");
//   //   }
//   // }
//   // return { token };
// };

// export const getServerSideProps = async (appContext: AppContext) => {
//   const appProps = await getServerSideProps(appContext);

//   const { ctx } = appContext;
//   const allCookies = cookies(ctx);
//   const accessTokenByCookie = allCookies["accessToken"];
//   if (accessTokenByCookie !== undefined) {
//     const refreshTokenByCookie = allCookies["refreshToken"] || "";
//     setCookie();
//   }
// };

export default MyApp;

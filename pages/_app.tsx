import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import clsx from "clsx";
import { satoshi, inter } from "@/styles/fonts";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <main className={clsx(satoshi.variable, inter.variable)}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </SessionProvider>
  );
}

export default MyApp;

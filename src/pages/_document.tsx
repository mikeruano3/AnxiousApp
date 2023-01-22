import * as React from "react";
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from "next/document"
import createEmotionServer, { EmotionCriticalToChunks } from "@emotion/server/create-instance"
import createEmotionCache from "@/utils/createEmotionCache"
import { ReactElement } from "react";


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & { emotionStyleTags: any }> {
    const originalRenderPage = ctx.renderPage
   
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) =>
          function EnhanceApp(props: any) {
            return <App emotionCache={cache} {...props} />;
          },
      });
   
    const initialProps = await Document.getInitialProps(ctx);
   
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));
   
    return {
      ...initialProps,
      emotionStyleTags,
    }
   }

  render(): ReactElement {
    const { emotionStyleTags } = this.props as any
    return (
      <Html lang="en">
        <Head>
          {emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
 }

 export default MyDocument
import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charset="utf-8"></meta>
          <meta http-equiv="Content-type" content="text/html; charset=utf-8"></meta>
          <meta http-equiv="x-ua-compatible" content="ie=edge"></meta>
          <meta http-equiv="Content-Style-Type" content="text/css"></meta>
          <meta http-equiv="Content-Script-Type" content="text/javascript"></meta>
          <meta name="format-detection" content="telephone=yes"></meta>
          <meta name="HandheldFriendly" content="true"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"></meta>
          <meta name="author" content=""></meta>
          <meta name="designer" content=""></meta>
          <meta name="publisher" content=""></meta>
          <meta name="keywords" content=""></meta>
          <meta name="description" content=""></meta>
          <meta name="robots" content="index,follow"></meta>
          <meta name="distribution" content="web"></meta>
          <meta name="robots" content="noodp"></meta>
          <title>The Giving Pool | WhitePaper</title>

          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&amp;family=Poppins:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw==" crossorigin="anonymous" referrerpolicy="no-referrer"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer"></link>
          <link rel="stylesheet" href="../css/app.css"></link>
        </Head> 
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

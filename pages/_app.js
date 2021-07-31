import "../sass/style.scss";
import Layout from "../components/Layout";
const isCI = require("is-ci");

if (isCI) {
  console.log("The code is running on a CI server");
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

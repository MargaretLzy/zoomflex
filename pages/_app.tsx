import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/globals.css"
import "antd/dist/reset.css"

import { AuthContextProvider } from "../context/auth"
import { Layout } from "antd"
import Nav from "../components/nav"

const { Header, Content } = Layout

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>Zoomflex</Head>
      <AuthContextProvider>
        <Layout className="layout" style={{ height: "100vh" }}>
          <Header>
            <Nav />
          </Header>
          <Content style={{ padding: "48px", color: "black" }}>
            <div className="site-layout-content">
              <Component {...pageProps} />
            </div>
          </Content>
        </Layout>
      </AuthContextProvider>
    </>
  )
}

export default App

import * as React from "react"
import Wrapper from "../components/wrapper/wrapper";
import App from "../components/app/app";
import Navigation from "../components/navigation/navigation";
import Content from "../components/content/content";
import Hero from "../components/hero/hero";

const IndexPage = () => {
  return (
    <App>
      <Wrapper>
        <Navigation />
        <Hero />
        <Content />
      </Wrapper>
    </App>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

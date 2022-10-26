//pages/index.js
import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Hero, Persuade, TestimonyCollection } from "../ui-components";
import Layout from "../components/Layout";
function index() {
  return (
    <Layout handleClick={() => {}} authText="Sign Up" username="none">
      <View marginBottom="135px">
        <Hero handleClick={() => {}} />
      </View>
      <View>
        <TestimonyCollection />
      </View>
      <Flex justifyContent={"center"}>
        <Persuade banner="https://i.imgur.com/MxbD3N4.png" />
      </Flex>
      <View marginTop="50px" marginBottom="50px">
        <Footer />
      </View>
    </Layout>
  );
}
export default index;
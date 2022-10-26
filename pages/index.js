//pages/index.js
import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Hero } from "../ui-components";
import Layout from "../components/Layout";
function index() {
  return (
    <Layout handleClick={() => {}} authText="Sign Up" username="none">
      <View marginBottom="135px">
        <Hero handleClick={() => {}} />
      </View>
    </Layout>
  );
}
export default index;
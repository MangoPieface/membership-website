//pages/index.js
import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Hero, Persuade, TestimonyCollection } from "../ui-components";
import { useRouter } from 'next/router';

import Layout from "../components/Layout";
import { loadStripe } from "@stripe/stripe-js";


function index() {
  const router = useRouter();


  async function handleClick() {
    const stripe = await loadStripe(
      "pk_test_51Lx5vwClXIqxvniISvX4dzTSOcWdxEmW38CqFZEjzy1BvNjTMleB4gbqnN8d0CvmtNAaxMvlIZiOCRbrf3OJV7Zc007dP7958U"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1LxSYvClXIqxvniI2gLQjWc4", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }
  return (
    <Layout handleClick={() => {router.push('/post')}} authText="Sign Up" username="none">
      <View marginBottom="135px">
        <Hero handleClick={handleClick} />

        
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




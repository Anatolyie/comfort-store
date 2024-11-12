import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import { type LoaderFunction } from "react-router-dom";
import { customFetch, type ProductsResponse } from "@/utils";

const url = "/products?featured=true";

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};

function Landing() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

export default Landing;

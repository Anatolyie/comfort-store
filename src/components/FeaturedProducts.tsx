import SectionTitle from "@/components/SectionTitle";
import ProductsGrid from "@/components/ProductsGrid";

function FeaturedProducts() {
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </section>
  );
}
export default FeaturedProducts;

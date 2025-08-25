import ProductList from "@/components/shared/product/product";
import { getLatestProduct } from "@/lib/actions/product.action";

//  const dealy =(ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export default async function Page() {
  const latestProducts = await getLatestProduct();
  // await dealy(3000)
  console.log(latestProducts);
  return (
    <>
    <ProductList data={latestProducts} title="Best Sellers" />
    </>
  )
}

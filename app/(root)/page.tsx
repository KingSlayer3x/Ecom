import ProductList from '@/components/shared/header/product/product-list';
// import sampleData from '../../db/sample-data';
import { getLatestProducts } from '@/lib/actions/products.actions';

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return ( <>
    <ProductList data = {latestProducts} title='Newest Arrivals' limit={4} />
  </> );
}
 
export default Homepage;
import { getOrder } from "../services/apiRestaurant";


export default async function OrderLoader({params}) {
  console.log(params);
  const order = await getOrder(params.orderId);
  return order;
}

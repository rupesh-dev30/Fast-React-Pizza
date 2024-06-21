import { getMenu } from "../services/apiRestaurant";

export default async function MenuLoader() {
  const menu = await getMenu();
  return menu;
}

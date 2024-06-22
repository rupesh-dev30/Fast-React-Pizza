import { useLoaderData } from "react-router-dom";

import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return <ul className="space-y-2 divide-y divide-stone-200 px-2">
    {menu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id}/>)}
  </ul>
}



export default Menu;

import { useState } from "react";
import { data } from './data';
import Shop from "./Shop";
import Buttons from './Buttons';

function Home() {
   const [shopItem, setShopItem] = useState(data);

   const filterBad = (searchTerm) => {
      const newBad = data.filter(element => element.searchTerm === searchTerm);
      setShopItem(newBad);
   }

   return (
      <div className="wrapper">
         <div className="container">
            <div className="cont">
               <h2 className="header">
                  Sports supplements for gaining weight, losing weight and keeping fit and healthy.
               </h2>
            </div>
            <Buttons filterBad={filterBad} />
            <Shop shopItem={shopItem} />
         </div>
      </div>
   )
}
export default Home;
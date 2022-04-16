function Shop({ shopItem }) {
   return (
      <div className="products">
         {shopItem.map(element => {
            const { id, price, name, searchTerm, flavor, image } = element;
            return (
               <div key={id} className="product-card">
                  <h4 className="search-term">{searchTerm}</h4>
                  <div className="img">
                     <img src={image} alt="cover" width='250px' />
                  </div>
                  <div className="bad-info">
                     <h2>{name}</h2>
                     <h3>$ {price}</h3>
                     <h4>{flavor}</h4>
                     <button className="add-button">+ADD</button>
                  </div>
               </div>
            )
         })}
      </div>
   )
}
export default Shop;

function Buttons({ filterBad }) {
   return (
      <div className="cont">
         <button className="filter-btn" onClick={() => filterBad("protein")}>WHEY</button>
         <button className="filter-btn" onClick={() => filterBad("gainer")}>Gainer</button>
         <button className="filter-btn" onClick={() => filterBad("creatine")}>Creatine</button>
         {/* <button className="change" onClick={() => filterBad("")}>BAD</button> */}
         {/* <button className="change" onClick={() => filterBad("")}>BAD</button> */}
      </div>
   )
}

export default Buttons;
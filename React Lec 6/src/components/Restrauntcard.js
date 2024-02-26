



export const ResturantCard=({name,cuisines,avgRating,cloudinaryImageId})=>{
  
    //console.log(props);
    return(
      <div className="card"> 
  
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
      {/* <h2>{propertiess.info?.name}</h2>
      <h3>{propertiess.info?.cuisines}</h3>
      <h3>{propertiess.info?.avgRating}</h3> */}
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h3>{avgRating}</h3>
  
    </div>
  
    )
    
    
  }
  
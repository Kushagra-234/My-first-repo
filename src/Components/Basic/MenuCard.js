import React from 'react'

const MenuCard = ({menuData}) => {
  return (

    <>
    <section className="main-card--cointainer">
    {menuData.map((curelem)=>{
        return(
            <>
            <div className="card-container" key={curelem.id}>
      <div className="card">
        <div className="card-body">
          <span className="card-number card-circle subtle">{curelem.id}</span>
          <span className="card-author subtle">{curelem.name}</span>
          <h2 className="card-title">{curelem.name}</h2>
          <span className="card-description subtle">
            {curelem.description}
          </span>
          <div className="class-read">read</div> 
          <img src={curelem.image} alt="images" className="card-media"/>
          <span className="card-tag subtle">order Now </span>
        </div>
      </div>
    </div>
            </>
        )
    })}
    </section>
     
    </>
  )
}

export default MenuCard
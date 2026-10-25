const ChildComp = (props)=>{
     const{newItem,newPrice,parentmethod}=props;//destructuring the props
    return(
        <div>
            <h2>This is child class</h2>
            <div>Item :<strong>{newItem}</strong></div>
            <div>Price :<strong>{newPrice}</strong></div>
            <button type="button" onClick={parentmethod}>Change Data</button>
        </div>
    )
}

export default ChildComp;

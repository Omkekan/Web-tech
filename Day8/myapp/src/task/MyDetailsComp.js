const MyDetailsCom=(props)=>{
    const {name,contact,gender,address}=props;
    return(
        <div>
            <h2>Name:{name} Contact:{contact} Gender:{gender} Address:{address}</h2>
        </div>
    )
}

export default MyDetailsCom;
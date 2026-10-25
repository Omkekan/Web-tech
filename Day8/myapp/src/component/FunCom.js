const FunCom = (props) => {

    const {fname,lname,pin}=props;
    return (
        <div>
            <h2>This is function componet. </h2>
            {/* <h1>Fname:{props.fname} , Lname:{props.lname} , pin={props.pin}</h1> */}
            <h1>Fname:{fname} , Lname:{lname} , pin={pin}</h1>
        </div>

    )
}

export default FunCom;
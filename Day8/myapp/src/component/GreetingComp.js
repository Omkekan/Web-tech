const GreetingComp=()=>{
    const greeting=()=>{
        window.alert("Nice to meet you")
    }
    const welcome=()=>{
        window.alert("Welcome to React")
    }
    return(
        <div>
            <h2>This is greeting component</h2>
            <button type="button" onClick={()=>greeting()}>Click me</button>
            <h2 onMouseOver={()=>welcome()}>Hover over me</h2>
        </div>
    )
}

export default GreetingComp;
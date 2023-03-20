function favoriteColor(){
    const [color, setColor] = useState("red");
}

return (

    /*for reading the state*/
    <h1>My name is Lovkush {color} lol </h1>

    /*for updating the state*/
    <button type="button" onClick={() => setColor("Blue")}>Blue</button>

)
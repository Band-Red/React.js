import "./FirstComponentStyle.css";

export default function FristComponent() {

    const x = 10;

    const person = {
        name: "ali",
        email: "mohammed@gmail.com",
        city: "Riyadh"
    };

    const elStyle = {
        backgroundColor: "black",
        fontSize: "2.5em",
    };

    return (
        <div>
            <div>
                <h1 style={{
                    backgroundColor: "white",
                    fontSize: "2em",
                    color: "black",
                    boxShadow: "0px 0px 15px 2px white",
                }}
                > {x + 10 * 30} Hello Word x+10</h1>

                {/* <h1>{sayHello()} Hello Word x+10</h1> */}

                <h1 style={elStyle}>Hello Word {person.name}</h1>

                <h3 className={"active rosbrownBg"}>{person.email}</h3>

                <h2 className={"active"} style={elStyle}>
                    Hi
                </h2>

                <h1 className={person.name == "Mohammed" ? "rosbrownBg" : "greenBg"}>check Name</h1>

                <button onClick={sayHello}>Click here</button>
            </div>

            <div></div>
        </div>
    );
}

function sayHello(){
    alert("Hello");
}
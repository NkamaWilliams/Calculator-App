import Head from "next/head";
import { useState } from "react";


export default function Welcome() {
    const [name, setName] = useState("");

    function getName(): void{
        const name: string|null = prompt("What is your name?");
        name === null? setName("No Name") : setName(name);
    }

    return(
        <>
            <h1 onClick={getName}>Welcome to typeScript, {name}</h1>
            <p>We understand that this is going to be a very new experience, but trust me when I say this: "You're gonna love it."</p>
            <p>Now sit back, relax, and code.</p>
            <br/> <br/>
            <pre>With love, NextJS</pre>
        </>
    )
}
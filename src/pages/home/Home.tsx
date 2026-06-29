import { Link } from "react-router-dom";
import { useState } from "react"

import { Liar } from "@/components/liar/Liar";

export default function Home() {
    const [isLiarExposed, setIsLiarExposed] = useState(false);

    return (<><h1>Êtes-vous Vincent Lejeune ?</h1>
        <button onClick={() => setIsLiarExposed(true)}>Oui</button>
        <Link to="/menu">Non</Link>
        {isLiarExposed && <Liar />}
    </>)
}
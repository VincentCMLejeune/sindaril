import { Link } from "react-router-dom";

import { HealthCheck } from "@/components/HealthCheck";

export default function Menu() {
    return (<><div>Fuck you</div>
        <HealthCheck />
        <p>Né à une époque où Internet était un refuge.</p>
        <Link to="/sandbox">Sandbox</Link>
    </>)
}
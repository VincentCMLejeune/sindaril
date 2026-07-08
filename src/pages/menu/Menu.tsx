import { Link } from "react-router-dom";

import { HealthCheck } from "@/components/HealthCheck";

export default function Menu() {
    return (<><div>Fuck you</div>
        <HealthCheck />
        <p>Né à une époque où Internet était un refuge.</p>
        <p>Repars, imbécile, Internet est mort.</p>
        <Link to="/sandbox">Sandbox</Link>
        <Link to="/feedback">Feedback</Link>
    </>)
}
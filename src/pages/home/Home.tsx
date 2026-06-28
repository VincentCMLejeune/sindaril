import { HealthCheck } from "@/components/HealthCheck";
import { Link } from "react-router-dom";

export default function Home() {
    return (<><div>Fuck you</div>
        <HealthCheck />
        <p>Né à une époque où Internet était un refuge.</p>
        <Link to="/sandbox">Sandbox</Link>
    </>)
}
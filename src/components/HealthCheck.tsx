import { useEffect, useState } from "react";
import { API_URL } from "@/config";

type Status = "idle" | "loading" | "ok" | "error";

const StatusMessage = {
    "idle": "Je dors",
    "loading": "Testing...",
    "ok": "OK",
    "error": "Ded"
}

export function HealthCheck() {
    const [status, setStatus] = useState<Status>("idle");

    useEffect(() => {
        setStatus("loading");

        fetch(`${API_URL}/health`)
            .then((res) => {
                setStatus(res.ok ? "ok" : "error");
            })
            .catch(() => setStatus("error"));
    }, []);
    return (
        <div>
            <div>
            API url: {API_URL}
            </div>
            <div>
            API status: {StatusMessage[status]}
            </div>
        </div>
    );
}
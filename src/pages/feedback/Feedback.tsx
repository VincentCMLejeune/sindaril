import { useState } from "react";
import { Phonekeyboard } from "../../components/phonekeyboard/Phonekeybaord";

export default function Feedback() {
    const [feedbacktext, setFeedbacktext] = useState("");
    const [curChar, setCurChar] = useState("")

    return (<><h1>Feedback</h1>
        <div>{feedbacktext + curChar}</div>
        <div><Phonekeyboard text={feedbacktext} setText={setFeedbacktext} setCurChar={setCurChar} /></div>
    </>)
}
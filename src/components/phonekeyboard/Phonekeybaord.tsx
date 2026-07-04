import { useEffect, useState } from "react";

export function Phonekeyboard({ text, setText, setCurChar }: { text: string; setText: (text: string) => void; setCurChar: (text: string) => void }) {
    interface Btn {
        chars: Array<string>;
        id: string;
        element: HTMLElement | null;
    }

    const [currentButton, setCurrentButton] = useState<Btn | null>(null)
    const [charIdx, setCharIdx] = useState(0)

    function BtnConstructor(this: Btn, chars: Array<string>, element: string) {
        this.chars = chars;
        this.id = element;
        this.element = document.querySelector(element);
    }

    let btn1 = new (BtnConstructor as any)(['.', ',', '?', '!', '1'], "#btn-1");
    let btn2 = new (BtnConstructor as any)(['a', 'b', 'c', '2'], "#btn-2");
    let btn3 = new (BtnConstructor as any)(['d', 'e', 'f', '3'], "#btn-3");
    let btn4 = new (BtnConstructor as any)(['g', 'h', 'i', '4'], "#btn-4");
    let btn5 = new (BtnConstructor as any)(['j', 'k', 'l', '5'], "#btn-5");
    let btn6 = new (BtnConstructor as any)(['m', 'n', 'o', '6'], "#btn-6");
    let btn7 = new (BtnConstructor as any)(['p', 'q', 'r', 's', '7'], "#btn-7");
    let btn8 = new (BtnConstructor as any)(['t', 'u', 'v', '8'], "#btn-8");
    let btn9 = new (BtnConstructor as any)(['w', 'x', 'y', 'z', '9'], "#btn-9");
    let btn0 = new (BtnConstructor as any)([' ', '0'], "#btn-0");

    function type(btn: Btn) {
        if (currentButton === null) {
            setCurrentButton(btn)
        } else if (currentButton.id === btn.id) {
            setCharIdx(charIdx + 1)
        } else {
            setText(text + currentButton?.chars[charIdx % currentButton?.chars.length])
            setCurrentButton(btn)
            setCharIdx(0)
        }
    }

    useEffect(() => {
        setCurChar(currentButton ? currentButton.chars[charIdx % currentButton.chars.length] : '')
    }, [currentButton, charIdx])


    useEffect(() => {
        if (!currentButton) return;

        const timer = setTimeout(() => {
            setText(text + currentButton.chars[charIdx % currentButton.chars.length]);
            setCurrentButton(null);
            setCharIdx(0);
        }, 1000);

        return () => clearTimeout(timer);
    }, [currentButton, charIdx]);

    return (<div><h2>Phone Keyboard</h2>
        <div>
            <button id="btn-1" onClick={() => type(btn1)}>1</button>
            <button id="btn-2" onClick={() => type(btn2)}>2</button>
            <button id="btn-3" onClick={() => type(btn3)}>3</button>
            <button id="btn-4" onClick={() => type(btn4)}>4</button>
            <button id="btn-5" onClick={() => type(btn5)}>5</button>
            <button id="btn-6" onClick={() => type(btn6)}>6</button>
            <button id="btn-7" onClick={() => type(btn7)}>7</button>
            <button id="btn-8" onClick={() => type(btn8)}>8</button>
            <button id="btn-9" onClick={() => type(btn9)}>9</button>
            <button id="btn-0" onClick={() => type(btn0)}>0</button>
        </div></div>)
}
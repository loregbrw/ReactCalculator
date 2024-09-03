import { useState } from "react";
import "./style.css";
import { StringCalculator } from "../services/calculator";

const standardOperators = ['%', '÷', 'x', '-', '+'];

export const Calculator = () => {

    const [calc, setCalc] = useState("");

    const addChar = (char) => {
        setCalc(calc + char);
    }

    const addDot = () => {

        if (calc.length < 1)
            return;

        const lastChar = calc.charAt(calc.length - 1);

        if (standardOperators.includes(lastChar) || lastChar === '.')
            return;

        setCalc(calc + '.');
    }

    const addOperator = (operator) => {

        if (calc.length < 1)
            return;

        const lastChar = calc.charAt(calc.length - 1);

        if (standardOperators.includes(lastChar))
            if (lastChar !== '%' || operator === '%')
                return;

        if (lastChar === '.')
            return setCalc(calc + '0' + operator);

        setCalc(calc + operator);
    }

    const eraseChar = () => {
        if (calc.length < 2)
            return setCalc("");

        setCalc(calc.substring(0, calc.length - 1));
    }

    const handleCount = () => {
        standardOperators.forEach(op => {
            if ((calc.charAt(calc.length - 1) == op && calc.charAt(calc.length - 1) != '%') || (calc.charAt(calc.length - 1) == '.')) {
                setCalc(calc.substring(0, calc.length - 1));
            }
        });

        setCalc(StringCalculator.calculate(calc));
    }

    return (
        <>
            <main style={{ backgroundColor: "#2b2b2b", padding: "25px", borderRadius: "10px", width: "100%", maxWidth: "400px", display: "flex", flexDirection: "column", alignItems: "center", gap: "35px" }}>
                <div style={{ width: "100%", backgroundColor: "#959595", height: "65px", borderRadius: "5px", display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "10px" }}>
                    <span style={{ overflow: "hidden", whiteSpace: "nowrap" }}>{calc}</span>
                </div>
                <div style={{ width: "100%", height: "50px", display: "grid", gridTemplateColumns: "auto auto auto auto", gap: "5px", flex: "1" }}>
                    <button onClick={() => addOperator('%')} className="button">%</button>
                    <button onClick={() => { setCalc("") }} className="button">c</button>
                    <button onClick={() => eraseChar()} className="button">⌫</button>
                    <button onClick={() => addOperator('÷')} className="button">÷</button>
                    <button onClick={() => addChar('1')} className="button">1</button>
                    <button onClick={() => addChar('2')} className="button">2</button>
                    <button onClick={() => addChar('3')} className="button">3</button>
                    <button onClick={() => addOperator('x')} className="button">x</button>
                    <button onClick={() => addChar('4')} className="button">4</button>
                    <button onClick={() => addChar('5')} className="button">5</button>
                    <button onClick={() => addChar('6')} className="button">6</button>
                    <button onClick={() => addOperator('-')} className="button">-</button>
                    <button onClick={() => addChar('7')} className="button">7</button>
                    <button onClick={() => addChar('8')} className="button">8</button>
                    <button onClick={() => addChar('9')} className="button">9</button>
                    <button onClick={() => addOperator('+')} className="button">+</button>
                    <button className="button">#</button>
                    <button onClick={() => addChar('0')} className="button">0</button>
                    <button onClick={() => addDot()} className="button">.</button>
                    <button onClick={() => handleCount()} className="button" style={{ backgroundColor: "#af6b1e" }}>=</button>
                </div>
            </main>
        </>
    )
}
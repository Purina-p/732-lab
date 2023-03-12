import { useState } from "react";

function Lightbulb() {
    const [isOn, setisOn] = useState(true);

    return (
        <button onClick={() => setisOn(!isOn)}>
            {isOn ? <img src=".\public\light-off.png" alt="light-of" /> : <img src=".\public\light-on.png" alt="light-on" />}
        </button>
    )
}

export default Lightbulb;
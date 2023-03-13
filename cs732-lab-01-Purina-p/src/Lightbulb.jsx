import { useState } from "react";

function Lightbulb() {
    const [isOn, setisOn] = useState(true);

    return (
        <button onClick={() => setisOn(!isOn)}>
            {isOn ? <img src=".\public\light-off.png" alt="light-off" /> : <img src=".\public\light-on.png" alt="light-on" />}
        </button>
    )
}

// 设置isOn的初始值为true(默认他是关闭的),然后使用set方法来更新他的状态
// 第二行看他的状态是什么，在他的前后进行改变

export default Lightbulb;

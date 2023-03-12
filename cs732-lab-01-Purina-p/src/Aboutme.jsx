
// 上面设置了name，age，hobby三个属性，把他们当作一个变量来传递到下面，在用props进行调用
function Aboutme(myself){
    return(
        <div>
            <p>Hello everyone, my name is {myself.name},I'm {myself.age} years old, I love watching {myself.hobby}</p>
        </div>
    )
}

export default Aboutme;
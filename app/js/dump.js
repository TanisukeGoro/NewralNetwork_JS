const normRand = (...generate_arr_length) => {
    const a = 1 - Math.random();
    const b = 1 - Math.random();
    const c = Math.sqrt(-2 * Math.log(a));
    arr = [];
    for (let i = 0; i < generate_arr_length.length; i++) {
        let tmp = [];
        for (let j = 0; j < generate_arr_length[i]; j++) {
            if (0.5 - Math.random() > 0) {
                //一応、 平均0と分散0を明示
                tmp.push(c * Math.sin(Math.PI * 2 * b) * 1 + 0);
            } else {
                tmp.push(c * Math.cos(Math.PI * 2 * b) * 1 + 0);
            }
        }
        arr.push(tmp);
    }
    return arr
};


Array.prototype.tail = () => {
    if (this.length === 0) return null;
    let copy = this.slice();
    copy.shift();
    console.log(copy)
    return copy;
}
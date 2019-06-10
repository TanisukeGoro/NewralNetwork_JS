/**
 * Array.prototype.shift()の非破壊的操作を行う関数
 * @param {Array} arr 
 */
const tail = (arr) => {
    if (toString.call(arr) !== '[object Array]') return null;
    if (arr.length === 0) return null;
    let copy = arr.slice();
    copy.shift();
    return copy;
};
/**
 * Array.prototype.pop()の非破壊的操作を行う関数
 * @param {Array} arr 
 */
function pop(arr) {
    if (toString.call(arr) !== '[object Array]') return null;
    if (arr.length === 0) return null;
    var copy = arr.slice();
    copy.pop();
    return copy;
};

/**
 * 平均 0 , 標準偏差 1 (=分散 1)の標準正規分布に従う乱数配列を返す
 * 可変長引数にして、いくらでも作るはず
 * @param {number} generate_arr_length
 */
const createBiase = (innerLen, arrlen) => {
    let a = 0;
    let b = 0;
    let c = 0;
    arr = [];
    for (let i = 0; i < arrlen; i++) {
        let tmp = [];
        for (let j = 0; j < innerLen; j++) {
            a = 1 - Math.random();
            b = 1 - Math.random();
            c = Math.sqrt(-2 * Math.log(a));
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

/**
 * python の zip() のJS版
 * @param {Array} array1 
 * @param {Array} array2 
 */
const zip = (array1, array2) => array1.map((_, i) => [array1[i], array2[i]]);

/**
 * sigmoid function
 * @param {number} x 
 */
const sigmoid = (x) => 1 / (1 + Math.pow(Math.E, -x));

/**
 * 内積および行列積を算出する関数
 * @param {Array} x 
 * @param {Array} y 
 */
const dot = (x, y) => {
    // console.log('x', x);
    // console.log('y', y);
    // 配列 1次の長さ
    let m = x.length;
    let n_y = y.length;

    // 配列 2次の長さ
    let n_x = x[0].length;
    let k = y[0].length;


    // console.log(`
    //     m : ${m},
    //     k : ${k},
    //     n_x : ${n_x},
    //     n_y : ${n_y},`);

    // x, yが1次元の時
    if (n_x === undefined && k === undefined) {
        // console.log('x, yが1次元配列です。')
        a = 0;
        if (m = n_y) {
            for (let i = 0; i < m; i++) {
                a += x[i] * y[i];
            }
        }
        return a
    }

    // x が1次元配列の時
    if (n_x === undefined) {
        // console.log('xが1次元配列です。');
        return one_d;
    };

    // y が1次元配列の時
    if (k === undefined) {
        // console.log('yが1次元配列です。');
        let one_d = [];
        for (let _m = 0; _m < m; _m++) {

            for (let _k = 0; _k < k; _k++) {
                a = 0;
                a += x[_m][_k] * y[_k];
                one_d.push(a);
            }
        }
        return one_d;
    }

    // 計算不可能な行列のセットの場合
    if (n_x !== n_y) return !1;
    // 互いに2次元配列であった場合
    let one_d = [];
    for (let _m = 0; _m < m; _m++) {
        two_d = [];
        for (let _k = 0; _k < k; _k++) {
            a = 0;
            for (let _n = 0; _n < n_x; _n++) {
                a += x[_m][_n] * y[_n][_k];
            }
            two_d.push(a);
        }
        one_d.push(two_d);

    }
    return one_d;

}


/**
 * 
 * @class Network
 * @param {Array} Net_sizes newral networks size of each phase
 */
class Network {
    constructor(Net_sizes) {
            // 受け取った配列の長さ
            this.num_layers = Net_sizes.length
                // 配列
            this.sizes = Net_sizes;
            // biaseを平均値0, 標準偏差1の
            // ガウス分布を持つ乱数として生成して初期化 {array}
            this.biases = tail(this.sizes).map(x => createBiase(x, 1));
            // 重みを計算
            this.weights = zip(pop(this.sizes), tail(this.sizes)).map(x => createBiase(x[0], x[1]))

        }
        // ニューラルネットワークの計算を行う
    feedforward(a /* [0, 1, 2 ... n] */ ) {
        for (let i = 0; i < this.biases.length /* 2になる */ ; i++) {
            this.tmpArr = []; // aの参照を
            this.nonSig = []

            for (let j = 0; j < this.weights[i].length; j++) {
                this.tmpArr.push(sigmoid(dot(this.weights[i][j], a) + this.biases[i][0][j]));
                this.nonSig.push(dot(this.weights[i][j], a) + this.biases[i][0][j]);
            }
            console.log(`
            input_a : ${a}
            weights : ${this.weights[i]}
            b       : ${this.biases[i][0]}
            nonSig  : ${this.nonSig}
            output_a: ${this.tmpArr}
            `)
            a = this.tmpArr;
        }
        return a;
    }


    SGD(training_data, epochs, mini_batch_size, eta, test_data = None) {
        if (test_data) this.Ntest = test_data.length
        this.Ntraining = training_data.length

    }

    numerical_gradient(f, x) {
        h = 1e-4; // 刻み幅
        // xと同じ形状の配列を形成して0にする

        for (let idx = 0; idx < x.length; idx++) {
            const element = array[idx];

        }

    }
}
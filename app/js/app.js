a = require('./test.js');
// loading MNIST Digits module
var mnist = require('../../node_modules/mnist');
var synaptic = require('synaptic');

// setting (trainingSet, testSet)
let set = mnist.set(1, 10);

// Substitution each data
let trainingSet = set.training;
console.log(trainingSet);
for (let i = 0; i < trainingSet.length; i++) {
    // console.log(trainingSet[i].input);
    for (let j = 0; j < trainingSet[i].input.length; j++) {
        console.log(trainingSet[i].input[j]);

    }
}
let testSet = set.test;

/**
 * There is the data that has a 784-length array of floats representing each pixel of the 28 x 28 image,, normalized between 0 and 1
 * and a 10-length binary array that tells which digits (from 0 to 9) is in that image.
 */
// console.log(set.training[1].input); // 784-length array
// console.log(set.training[1].output); //10-length binary array

// const Layer = synaptic.Layer;
// const Network = synaptic.Network;
// const Trainer = synaptic.Trainer;

// const inputLayer = new Layer(784);
// const hiddenLayer = new Layer(15);
// const outputLayer = new Layer(10);
// inputLayer.project(hiddenLayer);
// hiddenLayer.project(outputLayer);

// const myNetwork = new Network({
//     input: inputLayer,
//     hidden: [hiddenLayer],
//     output: outputLayer
// });

// const trainer = new Trainer(myNetwork);
// trainer.train(trainingSet, {
//     rate: .2,
//     iterations: 20,
//     error: .1,
//     shuffle: true,
//     log: 1,
//     cost: Trainer.cost.CROSS_ENTROPY
// });

// param = myNetwork.activate(testSet[0].input);
// param.forEach(element => {
//     console.log(element);
// });
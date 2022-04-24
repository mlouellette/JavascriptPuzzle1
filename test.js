const variablesReferenceTest = () => {
    const x = { value1: 1, value2: 2 };
    const y = x;
    x.value1 = 3;
    if (x.value1 == y.value1) {
        throw 'ERROR!';
    }
};

try {
    variablesReferenceTest();
    console.log('SUCCESS')
} catch (error) {
    console.log(error)
}
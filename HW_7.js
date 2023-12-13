function memoize(defaultValue) {
    let data = defaultValue;
    return [
        function getData() { return data; },
        function setData(newData) { data = newData; }
    ];
}
const memData = memoize();
const getMemData = memData[0];
const setMemData = memData[1];
console.log(getMemData()); // поверне undefined
setMemData(3);
console.log(getMemData()); // поверне 3
setMemData('some string');
console.log(getMemData()); // поверне some string
setMemData({ a: 'b' });
console.log(getMemData()); // поверне { a: 'b' }
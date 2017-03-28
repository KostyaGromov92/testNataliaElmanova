var str = 'foobar';
var reverseStr = str.split('').reverse().join('');

console.log('Main string : ' + str + ', Reverse string : ' + reverseStr);

// -------------------------------------------------------------------------- //

var matrix = 'Wake up, Neo. The Matrix has you... Follow the white rabbit. Knock, knock, Neo.';


var store = {};

var items = matrix.split(/[\s\r\n,\.\?\-\(\)\*]+/);
var itemsRepeat = [];

var count = 0;

for (var i = 0, j = items.length - 1; i < j; i++) {
    if (itemsRepeat.indexOf(items[i]) === -1 && items.indexOf(items[i], i+1) !== -1) {
        itemsRepeat.push(items[i]);
    }

}

items.forEach(function (item) {
    itemsRepeat.forEach(function (itemR) {
        var key = item;

        if(item == "") return;

        if(item == itemR) {
            ++count;
            store[key] = count;
        } else {
            store[key] = 0;
        }
    });
});

console.log(store);


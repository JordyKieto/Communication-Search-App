var regex = /\$([0-9,]+)(?:\.(\d\d))?/g;

module.exports = function (line) {
    let searchType = null;
    let relationship = null;
    let target = null;
    let depth = null;

    if (!line.includes('=>')){
        searchType = 'binarySearch';
    }
    else{
        searchType = 'graphTraversal';
        target = line.split('=>')[0];
        depth = parseInt(line.substr(-1));
    }

    if (line.includes('SENT OR RECEIVED')){
        relationship = 'sent/recieved';
    }
    else if (line.includes('SENT')){
        relationship = 'sent';
    }
    else if (line.includes('RECIEVED')){
        relationship = 'recieved';
    }

    let dissent = line.match(/\((.*)\)/).pop();
    if (dissent.includes('>')) comparison = `$gt`
    else if (dissent.includes('<')) comparison = `$lt`

    let value = parseFloat(dissent.replace(/[^0-9$.]/g, ''));
    return {searchType, relationship, comparison, value, target, depth}
}
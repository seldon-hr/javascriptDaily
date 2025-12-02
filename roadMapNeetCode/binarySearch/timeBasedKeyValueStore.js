/* How it could looks the object
    {
        "foo": [
            {timeTamp: 1, value "bar"},
            {timeTamp: 2, value "bar2"}
        ],
        "key2": [...]
    }
    this looks better as plain object.


    Own version; understanding and building.
*/


/* Understanding the fundamentals */
var TimeMap = function () {
    this.map = {} //Make persist across the methods. when declares with this.
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {

    if (this.map.hasOwnProperty[key]) {
        this.map[key].push({ 'timestamp': timestamp, 'value': value })
        //This the map, to reference to the lookinf ofr it.
    } else {
        this.map[key] = [{ 'timestamp': timestamp, 'value': value}] //Initialize value
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 *  Here's the parte where is binary search enter, we was looking for enter the most timeStamp.
 */
TimeMap.prototype.get = function (key, timestamp) {
    
    if (timeMap.hasOwnProperty(key)) {
        //if exits search for the value
        let range = timeMap[key]

        let left = 0
        let right = range.length - 1

        while (left < right) {
            let mid = Math.ceil((left + right) / 2)
            if (range[mid].value === timestamp) {
                return range[mid].value //We find exact, return that.
            } else if(range[mid].value < timestamp) {
                left = mid
            } else {
                right = mid - 1
            }
        }
        return right

    } else {
        return null
    }
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */




/* let output = []
    
    for (let i = 0; i < operations.length; i++) {
        switch (operation) {
            case 'TimeMap':
                let timeMap = new TimeMap()
                //operations.push(null)
                break;
            case 'set':
                let key = values[i][0]
                let value = values[i][1]
                let timestamp = values[i][2]
                timeMap.set(key, value, timestamp)
                //operations.push(null) 
                break;
            case 'get':
                let keyG = values[i][0]
                let timestampG = values[i][0]
                let val = timeMap.get(keyG, timestampG)
                //operations.push(val)
            default:
                break;
        }
    }

    return output */
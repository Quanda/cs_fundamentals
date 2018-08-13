// Implement a hashmap
class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._slots = [];
        this._capacity = initialCapacity;
    }
    // hashing function - converts string to hash index
    hashString(string) {
        let hash = 5381;
        for (let i=0; i<string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }
    // sets the value of a slot
    set(key, value) {
        const index = this.findSlot(key);
        this._slots[index] = {
            key,
            value
        };
        this.length++;
    }
    // returns the data from a slot
    getData(key) {
        const index = this.findSlot(key)
        return this._slots[index]
    }
    // returns the index of a key
    findSlot(key) {
        const hash = this.hashString(key);
        const start = hash % this._capacity;

        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._slots[index];
            if (slot === undefined || slot.key == key) {
                return index;
            }
        }
    }
}

const hashmap = new HashMap();
hashmap.set('qKey', {data:'mydata'})
console.log(hashmap)
console.log(hashmap.getData('qKey'))
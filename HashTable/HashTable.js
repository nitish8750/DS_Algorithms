class HashTable {
    constructor(size = 23){
        this.keyValueMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        let randomPrime = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++ ){
            let charCode = key.charCodeAt(i) - 96;
            total = (total * randomPrime + charCode) % this.keyValueMap.length;
        }
        return total;
    }
    set(key, value){
        let index = this._hash(key);
        if(!this.keyValueMap[index]){
            this.keyValueMap[index] = [];
        }
        this.keyValueMap[index].push([key, value]);
    }
    get(key){
        let index = this._hash(key);
        if(this.keyValueMap[index]){
            for(let i=0; i < this.keyValueMap[index].length; i++){
                if(this.keyValueMap[index][i][0] === key){
                    return this.keyValueMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyValueMap.length; i++){
            if(this.keyValueMap[i]){
                for(let j = 0; j < this.keyValueMap[i].length; j++){
                    if(!keysArr.includes(this.keyValueMap[i][j][0])){
                        keysArr.push(this.keyValueMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyValueMap.length; i++){
            if(this.keyValueMap[i]){
                for(let j = 0; j < this.keyValueMap[i].length; j++){
                    if(!valuesArr.includes(this.keyValueMap[i][j][1])){
                        valuesArr.push(this.keyValueMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585");
ht.set("mediumvioletred","#C71585");
ht.set("mediumvioletred","#C71585");
ht.set("plum","#DDA0DD");
ht.set("plum1","#DDA0DD");
ht.set("plum2","#DDA0DD");
console.log(ht.keys());
console.log(ht.values());
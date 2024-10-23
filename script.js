class HashMap{
  constructor(initialCapcity = 4, loadFactor = 0.75){
    this.capacity = initialCapcity;
    this.size = 0;
    this.loadFactor = loadFactor;
    this.buckets = new Array(this.capacity).fill(null).map(()=>[]);
  }
  
  hash(key) {
    console.log("a");
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode%this.capacity;
    }
    
    console.log(hashCode);
    return hashCode;
  } 

  set(key,value){
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if key exists, and update the value if so
    for(let entry of bucket){
      if(entry[0] === key){
        entry[1] = value;
        return;
      }
    }
    //Otherwise, add the new key-value pair
    bucket.push([key,value]);
    this.size++;

    //check  if  we need resize
    if(this.size  / this.capacity > this.loadFactor){
      this.resize();
    }
  }
  get(key){
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for(let pairs of bucket){
      if(pairs[0]===key){
        return pairs[1];
      }
    }
    return null;
  }

  has(key){
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for(let pairs of bucket){
      if(pairs[0]===key){
        return true;
      }
      return false;
    }
  }

  remove(key){
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for(let i = 0; i<bucket.length; i++){
      if(bucket[i][0]===key){
        bucket.splice(i,1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length(){
    return this.size;
  }

  clear(){
    this.buckets = Array(this.capacity).fill(null).map(()=>[]);
    this.size = 0;
  }

  key(){
    const keyArray = [];
    for(let bucket of buckets){
      for(let keys of bucket){
        keyArray.push(keys);
      }
    }
    return keyArray;
  }

  value(){
    const valueArray = [];
    for(let bucket of this.buckets){
      for(let pairs of bucket){
        valueArray.push(pairs[1]);
      }
    }
    return valueArray;
  }

  entries(){
    const entriesArray = [];
    for(let bucket of this.buckets){
      for(let pairs of bucket){
        entriesArray.push(pairs);
      }
    }

  }

  resize(){
    const oldBuckets  = this.buckets;
    this.capacity = this.capacity*2;
    this.buckets = new Array(this.capacity).fill(null).map(()=>[]);
    this.size = 0;
    for(let bucket of oldBuckets){
      for(let [key, value] of bucket){
        this.set(key,value);
      }
    }
  }
}

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');






/*if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
}*/


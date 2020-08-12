'use strict';


// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairs = 0;
    ar.sort();
    for(let i = 0; i < n; i++){
        if(ar[i] == ar[i + 1]){
            i++;
            pairs++;
        }
    }
    return pairs;
}

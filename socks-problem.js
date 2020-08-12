'use strict';


// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairs = 0;
    ar.sort(); //sort array low to high
    for(let i = 0; i < n; i++){ //loop through array
        if(ar[i] == ar[i + 1]){ //if matches next add to pairs and continue
            i++;
            pairs++;
        }
    }
    return pairs;
}

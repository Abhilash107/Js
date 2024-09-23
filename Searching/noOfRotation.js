const arr = [3, 5, 6, 7, 8, 1, 2, 3, 3]
console.log(findMinSortedArray(arr));


function findMinSortedArray(a){
    let l =0
    let h = a.length-1
    let res = Number.MAX_VALUE
    let index = -1

    while(l <= h){
        let mid = Math.floor((l+h)/2)
        
        if (a[l] < a[h]) {
            
            if(a[l] < res) {
                index = l
                res = a[l]
            }
            break;
        }

        if(a[l] <= a[mid]){
            
            if(a[l] < res) {
                index = l
                res = a[l]
            }
            l = mid+1
        }
        else{
            if(a[mid] < res) {
                index = mid
                res = a[mid]
            }
            h = mid-1
        }
    }
    return index;
}


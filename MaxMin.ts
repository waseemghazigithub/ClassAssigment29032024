let maxmin: number[]=[10,2,13,6,150];
let mtype='Min'
let result=mxmn(maxmin,mtype); // calling function
console.log(maxmin);
console.log(mtype+'  of Above Array is:  '+result)

//---------------- function---------------
function mxmn(arr:number[], maxormin:string){
    let max:number=0;
     let min=maxnumber(arr); // calling nested function
for(let a=0; a<arr.length; a++){
    if(arr[a]>max) { max=arr[a]}
    if(arr[a]<min) {min=arr[a]}
}
if (maxormin=='Max'){ 
return(max);
}
else if(maxormin=='Min'){
    return(min);
}
 else{return('Select Max or Min in argument passing') }
}
//---------------- function---------------
function maxnumber(num:number[]){
   let amax=0;
    for(const a of num){
        if(num[a]>amax) { amax=num[a]}
    }
    return(amax)
}

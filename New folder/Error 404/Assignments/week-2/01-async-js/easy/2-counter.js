let cnt=0;
function callSetTimeout(){
    setTimeout(()=>{count()},1000);
}
function count(){
    cnt++;
    console.log(cnt);
    callSetTimeout();
}
count();
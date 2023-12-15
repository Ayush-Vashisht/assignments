let date= new Date();

function clock(){
    const twentyFourHrFormat=date.toTimeString().substring(0,8);
    const twelveFourHrFormat=date.toLocaleTimeString();
    console.log(twentyFourHrFormat);
    console.log(twelveFourHrFormat);
}
setInterval(clock,1000);

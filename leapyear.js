var year=2024
if((year %100==0 && year %400==0) || (year %100!=0 && year %4==0)){
    console.log(`${year} is a leapyear`);
}
else{
    console.log(`${year} is a not leapyear`);
}
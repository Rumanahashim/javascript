weight_inkg=65
height_incm=175
height_inm=height_incm/100
bmi=weight_inkg/height_inm**2
console.log(bmi)
if(bmi<19)
    console.log(`${bmi} is under weight`)
else if(bmi>=20 && bmi<25)
    console.log(`${bmi} is normal`)
else if(bmi>=25 && bmi<30)
    console.log(`${bmi} is overweight`);
else
    console.log("obesity") 
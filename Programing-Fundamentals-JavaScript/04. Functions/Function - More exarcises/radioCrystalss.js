function radioCristals(array) {

    let targetThickness = array[0];
    array.shift(targetThickness);
    
    
    for (let i = 0; i < array.length; i++) {
        let quartzOre = array[i];
        let counterCut = 0;
        let counterLap = 0;
        let counterGrind = 0;
        let counterEtch = 0;
        console.log(`Processing chunk ${quartzOre} microns`);

        for (let j = 1; quartzOre >= (targetThickness * 4); j++) {
            let cut = 4;
            quartzOre = quartzOre / cut;
            counterCut++;    
        }
        quartzOre = Math.floor(quartzOre); //transport
        if(counterCut > 0){
        console.log(`Cut x${counterCut}`);
        console.log(`Transporting and washing`);
        }
        for (let j = 1; quartzOre >= targetThickness * 1.2; j++) {
            let lap = 0.2;
            quartzOre = quartzOre - quartzOre * lap;
            counterLap++;   
        }
        quartzOre = Math.floor(quartzOre); //transport
        if(counterLap > 0){
        console.log(`Lap x${counterLap}`);
        console.log(`Transporting and washing`);
        }
        for (let j = 1; quartzOre >= (targetThickness + 20); j++) {
            let grind = 20;
            quartzOre = quartzOre - grind;
            counterGrind++;            
        }
        quartzOre = Math.floor(quartzOre); //transport
        if(counterGrind > 0){
        console.log(`Grind x${counterGrind}`);
        console.log(`Transporting and washing`);
        }
        for (let j = 1; quartzOre >= targetThickness + 1; j++) {
            let etch = 2;
            quartzOre = quartzOre - etch;
            counterEtch++;            
        }
        quartzOre = Math.floor(quartzOre); //transport
        if(counterEtch > 0){ 
        console.log(`Etch x${counterEtch}`);
        console.log(`Transporting and washing`);
        }
        if (quartzOre < targetThickness) {
            let rentgen = 1;
            quartzOre = quartzOre + rentgen;
            console.log(`X-ray x${rentgen}`);
        }
            console.log(`Finished crystal ${quartzOre} microns`);
        

    }
}





radioCristals([1000, 4000, 8100])

//Cut ??? ???????????????? ???????????????? ???? 4
//??? Lap ??? ???????????????? 20% ???? ???????????????????? ???? ????????????????
//??? ?????????????? ??? ???????????????? 20 ?????????????? ????????????????
//??? Etch ??? ???????????????? 2 ?????????????? ????????????????
//??? ?????????????? ??? ?????????????????? ???????????????????? ???? ???????????????? ?? 1 ????????????; ???????? ???????????????? ???????? ???? ???? ?????????????? ???????? ????????????!
//??? ???????????????????????????? ?? ?????????? ??? ???????????????????? ???????????? ???????????????????????????? ????-?????????? ???? 1 ???????????? (???????????????????? ?????????????? ????????????); ?????????????????? ???????? ???????? ?????????? ?????????????? ???? ????????????????, ?????????? ?????????????????? ????????????????
function counthappy(N, numlisty) {
    let happychecky = 0
    for (let a = 0; a < N; a++) {
       //console.log("added", numlisty[a] + numlisty[a+1])
        if ((N-1)==a) {
            //console.log("nan added", numlisty[a] + numlisty[0])
            if ((numlisty[a]+numlisty[0]) % 2 == 0) {
            happychecky +=1
            }
        }
        else{
            if ((numlisty[a]+numlisty[a+1]) % 2 == 0) {
            happychecky +=1
        }
        //console.log('happychecky', happychecky)
    }
    }
    return(happychecky)
            
}

function happyAlpacas(N, X) {
    let numlisty = []
    
    for (let i = 0; i < N; i++) {
        numlisty.push(Math.floor(Math.random() * (10 + 1)))
    }
    console.log(numlisty)
    if (X %2 != 0){
        console.log ('impossible')
        return -1
    }

    let happyty = (counthappy(N, numlisty))
    //console.log('happyty', happyty)
            
    if (happyty < X) {
        //console.log("too small adding stuff now")
        //console.log("numlisty", numlisty)
        for (let a = 0; a < N; a++) {
        //console.log("added", numlisty[a] + numlisty[a+1])
        if ((N-1)==a) {
            //console.log("nan added", numlisty[a] + numlisty[0])
            if ((numlisty[a]+numlisty[0]) % 2 != 0) {
                //console.log('added something interesting')
            numlisty[a] +=1
            }
        }
        else{
            if ((numlisty[a]+numlisty[a+1]) % 2 != 0) {
                if ((numlisty[a]) % 2 != 0){
                    numlisty[a] +=1
                }
                if ((numlisty[a+1]) % 2 != 0){
                    numlisty[a+1] +=1
                }
                //console.log('added something')
            
        }
        happyty = (counthappy(N, numlisty))
        //console.log("numlisty", numlisty)
        if (happyty == X) {
            console.log ('done', happyty)
            return happyty
        }
    }
    }
    }



    if (happyty > X) {
       // console.log("too big removing stuff now")
        //console.log("numlisty", numlisty)
        for (let a = 0; a < N; a++) {
        //console.log("added", numlisty[a] + numlisty[a+1])
        if ((N-1)==a) {
            //console.log("nan added", numlisty[a] + numlisty[0])
            if ((numlisty[a]+numlisty[0]) % 2 == 0) {
                //console.log('removed something interesting')
            numlisty[a] -=1
            }
        }
        else{
            if ((numlisty[a]+numlisty[a+1]) % 2 == 0) {
                if ((numlisty[a]) % 2 == 0){
                    numlisty[a] -=1
                }
                if ((numlisty[a+1]) % 2 == 0){
                    numlisty[a+1] -=1
                }
                //console.log('removed something')
            
        }
        happyty = (counthappy(N, numlisty))
        //console.log("numlisty", numlisty)
        if (happyty == X) {
            console.log ('done', happyty)
            return happyty
        }
    }
    }
    }
    console.log(happyty, numlisty)
}


happyAlpacas(6,4)
//console.log(happyAlpacas(6,2))
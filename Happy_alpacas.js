function happyAlpacas(N, X) {
    let numlisty = []
    let happychecky = 0
    for (let i = 0; i < N; i++) {
        numlisty.push(Math.floor(Math.random() * (10 + 1)))
    }
    console.log(numlisty)
    if (X %2 != 0){
        console.log ('impossible')
        return -1
    }
    for (let a = 0; a < N; a++) {
        
        console.log("added", numlisty[a] + numlisty[a+1])
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
    }
//         console.log(happychecky)
//     if (happychecky < X) {
//         console.log("too small adding stuff now")
//         console.log("numlisty", numlisty)
//         for (let a = 0; a < N; a++) {
//         //console.log("added", numlisty[a] + numlisty[a+1])
//         if ((N-1)==a) {
//             //console.log("nan added", numlisty[a] + numlisty[0])
//             if ((numlisty[a]+numlisty[0]) % 2 != 0) {
//             numlisty[a] +=1
//             }
//         }
//         else{
//             if ((numlisty[a]+numlisty[a+1]) % 2 != 0) {
//             numlisty[a] +=1
//         }
//         if (happychecky == X) {
//             return happychecky
//         }
//     }
//     }
//     }

}
}


happyAlpacas(6,4)
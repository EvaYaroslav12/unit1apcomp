function Food_lines(N,M,a){
    
    for (let i=1; i<=M; i++){ 
        //console.log(i)
        for(let b=1; b<=N; b++){ 
            //console.log("b",b)
            if (Math.min(...a) == a[i]){ 
                //console.log("math", Math.min(...a))
                console.log(a)
                console.log("result:",a[i])
                a[i]+=1
                // console.log(a[i])
            }
        }
    }
}

Food_lines(5,3, [2,2,3,3,3])
.
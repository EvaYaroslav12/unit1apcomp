function Food_lines(N,M,a){
    
    for (let i=1; i<=M; i++){ 
        console.log("i=", i)
        for(let b=0; b<N; b++){ 
            //console.log("b",b)
            if (Math.min(...a) == a[b]){ 
                //console.log("math", Math.min(...a))
                //console.log(a)
                console.log("result:",a[b])
                a[b]+=1
                // console.log(a[i])
                break;
            }
        }
    }
}

Food_lines(5,3, [2,2,3,3,3])

function pow(x,y){
    let temp;
    if (y == 0) { 
        temp = 1;        
    } else if (y > 0) { 
                temp = x;
                for (let i = 1; i < y; i++){
                    temp *= x;
                }
            } else if (y < 0) { 
                        temp = x;
                        for (let i = -1; i > y; i--){
                            temp *= x;
                        }
                        temp = 1/temp;
                    }
    return (temp);
}

console.log(pow (2, -1));
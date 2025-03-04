function checkProbabilityTheory(){
    
    let countMain = Math.floor(Math.random() * 5 )* 20 + 100; // определяем случайное целое количество будущих генераций

    return function generateData(){
                
                let min = 100;
                let max = 10000;

                let total = 0;
                let even = 0;
                let notEven = 0;
                let persent = 0;

                for (let i = 0; i < countMain; i++) {
                    
                    let temp = Math.floor(Math.random() * (max - min +1) + min);

                    total++;
                    
                    if (temp % 2 == 0){
                        even++;
                    }
                    else{
                        notEven++;
                    }
                }

                persent = even*100/total + '% / ' + notEven*100/total + '%';

                return ' Количество сгенерированных чисел: ' + total + '\n Парных чисел: ' + even + '\n Не парных чисел: ' + notEven + '\n Отношение парных к не парным: ' + persent + '\n\n';
            }

    

}





test1 = checkProbabilityTheory();
test2 = checkProbabilityTheory();

console.log('Test 1 result:');
console.log(test1());

console.log('Test 2 result:');
console.log(test2());


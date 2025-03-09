var services = {
    "Стрижка": "60 грн",
    "Бритье": "80 грн",
    "Вымыть голову": "100 грн",
    
    price: function () {
        var total = 0;
        for (var key in this) {
            if (typeof this[key] === 'string' && this[key].includes('грн')) {
                total += parseInt(this[key]);
            }
        }
        return total + ' грн';
    },
    
    minPrice(){
        var servicesArray = Object.values(this).filter(value => typeof value === 'string');

        servicesArray.sort((a, b) => {
            const priceA = parseInt(a);
            const priceB = parseInt(b);
            return priceA - priceB;
        });

        return servicesArray[0];
    },
    
    maxPrice(){
        var servicesArray = Object.values(this).filter(value => typeof value === 'string');

        servicesArray.sort((a, b) => {
            const priceA = parseInt(a);
            const priceB = parseInt(b);
            return priceA - priceB;
        });

        return servicesArray[servicesArray.length - 1];


    }
    };


services['Заменить стекло'] = "200 грн";
services['Разбить стекло'] = "20 грн";


console.log('Min:' + services.minPrice());
console.log('Max:' + services.maxPrice());
console.log('Total:' + services.price());

// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let result = {};
    if(currency <= 0){
        return result;
    }else if(currency>10000){
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }else{
        result.H = Math.floor(currency  / 50);
        (result.H===0) ? delete result.H :currency-=result.H*50;
        result.Q = Math.floor(currency  / 25);
        (result.Q===0) ? delete result.Q :currency-=result.Q*25;
        result.D = Math.floor(currency  / 10);
        (result.D===0) ? delete result.D : currency-=result.D*10;
        result.N  = Math.floor(currency  / 5);
        (result.N===0) ? delete result.N :currency-=result.N*5;
        result.P = Math.floor(currency%10);
        (result.P===0) ? delete result.P : currency-=result.P*1;
        return result;
    }

};
function maxProfit(prices){
    if(prices.length===0){
        return 0
    }
    let minPrice=prices[0];
    let maxProfit=0;
    for(let i;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice=prices[i]
        } else{
            let currentProfit=prices[i]-minPrice;
            if(currentProfit>maxProfit){
                maxProfit=currentProfit;
            }
        }
    }
    return maxProfit;
}
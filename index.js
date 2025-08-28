const historyData=[]








// National Emergency Number

// 1.heart icon
document.getElementById('National-heart-btn')
.addEventListener('click',function(){
    const heart=document.getElementById('heart')
    const heartValue=heart.innerText
    let heartValueNumber=parseInt(heartValue)
    if(isNaN(heartValueNumber)){
        heartValueNumber=0;
    }
    heartValueNumber++
    heart.innerText=heartValueNumber;
})

// 2.copy related

document.getElementById('National-copy-btn')
.addEventListener('click',function(){
    const copy=document.getElementById('copy')
    const copyValue=copy.innerText
    let copyValueNumber=parseInt(copyValue)
    if(isNaN(copyValueNumber)){
        copyValueNumber=0;
    }
    copyValueNumber++
    copy.innerText=copyValueNumber;
    const Number=document.getElementById('Emergency-number')
    const emergencyNumber=parseInt(Number.innerText)

    navigator.clipboard.writeText(emergencyNumber)
    .then(() => {
        alert(`Number has been copied: ${emergencyNumber}`);
    })
    .catch(err => {
        console.error('Failed to copy text: ', err);
    });

})
// 3.call related

document.getElementById('National-call-btn')
.addEventListener('click',function(){
    const Emergency=document.getElementById('emergency').innerText
    const Number=document.getElementById('Emergency-number')
    const emergencyNumber=parseInt(Number.innerText)

    const coin=document.getElementById('coin')
    const coinAmount=parseInt(coin.innerText)
    if(coinAmount<20){
        alert('Insufficient balance. At least 20 coin needed to make a call')
        return;
    }
    const remainCoinAmount=coinAmount-20;
    
    coin.innerText=remainCoinAmount;
    alert(`Calling ${Emergency}:${emergencyNumber}`)

    // call history
    const data={
    name:'National Emergency Number',
    call:999,
    date:new Date().toLocaleTimeString()                  
}
 historyData.push(data)
 console.log(historyData)
})
document.getElementById('National-call-btn')
.addEventListener('click',function(){
    const historyContainer=document.getElementById('history-container')
    historyContainer.innerHTML=''
    for(const data of historyData){
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="flex items-center justify-between shadow rounded-lg p-1">
                            <div>
                                <p>${data.name}</p>
                                 <p>${data.call}</p>
                            </div>

                            <div>
                                <p class="text-[14px]">${data.date}</p>
                            </div>
                        </div>
        `
        historyContainer.appendChild(div)
    }
})




// call history clear related button

document.getElementById('clear-btn')
.addEventListener('click',function(){
    const callHistory=document.getElementById('history-container')
    callHistory.innerHTML=''
})

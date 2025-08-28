const historyData=[]

// responsive code by using function
// 1.heart
function heart(id){
    const heart=document.getElementById(id)
    const heartValue=heart.innerText
    let heartValueNumber=parseInt(heartValue)
    if(isNaN(heartValueNumber)){
        heartValueNumber=0;
    }
    heartValueNumber++
    heart.innerText=heartValueNumber;
}
// 2.copy
function copy(id){
    const copy=document.getElementById(id)
    const copyValue=copy.innerText
    let copyValueNumber=parseInt(copyValue)
    if(isNaN(copyValueNumber)){
        copyValueNumber=0;
    }
    copyValueNumber++
    copy.innerText=copyValueNumber;
    // const Number=document.getElementById(id)
    // const emergencyNumber=parseInt(Number.innerText)

    // navigator.clipboard.writeText(emergencyNumber)
    // .then(() => {
    //     alert(`Number has been copied: ${emergencyNumber}`);
    // })
    // .catch(err => {
    //     console.error('Failed to copy text: ', err);
    // });

}

// 3.copy number
function copyNumber(id){
const Number=document.getElementById(id)
    const emergencyNumber=(Number.innerText)

    navigator.clipboard.writeText(emergencyNumber)
    .then(() => {
        alert(`Number has been copied: ${emergencyNumber}`);
    })
    .catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
// history created
function history(){
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
}






// National Emergency Number

// 1.heart icon
document.getElementById('National-heart-btn')
.addEventListener('click',function(){
    heart('heart')
    // const heart=document.getElementById('heart')
    // const heartValue=heart.innerText
    // let heartValueNumber=parseInt(heartValue)
    // if(isNaN(heartValueNumber)){
    //     heartValueNumber=0;
    // }
    // heartValueNumber++
    // heart.innerText=heartValueNumber;
})

// 2.copy related

document.getElementById('National-copy-btn')
.addEventListener('click',function(){
    copy('copy')
    copyNumber("Emergency-number")
    // const copy=document.getElementById('copy')
    // const copyValue=copy.innerText
    // let copyValueNumber=parseInt(copyValue)
    // if(isNaN(copyValueNumber)){
    //     copyValueNumber=0;
    // }
    // copyValueNumber++
    // copy.innerText=copyValueNumber;
    // const Number=document.getElementById('Emergency-number')
    // const emergencyNumber=parseInt(Number.innerText)

    // navigator.clipboard.writeText(emergencyNumber)
    // .then(() => {
    //     alert(`Number has been copied: ${emergencyNumber}`);
    // })
    // .catch(err => {
    //     console.error('Failed to copy text: ', err);
    // });

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

})
document.getElementById('National-call-btn')
.addEventListener('click',function(){
    history()
    // const historyContainer=document.getElementById('history-container')
    // historyContainer.innerHTML=''
    // for(const data of historyData){
    //     const div=document.createElement('div')
    //     div.innerHTML=`
    //     <div class="flex items-center justify-between shadow rounded-lg p-1">
    //                         <div>
    //                             <p>${data.name}</p>
    //                              <p>${data.call}</p>
    //                         </div>

    //                         <div>
    //                             <p class="text-[14px]">${data.date}</p>
    //                         </div>
    //                     </div>
    //     `
    //     historyContainer.appendChild(div)
    // }
})






// call history clear related button last a dite hobe

document.getElementById('clear-btn')
.addEventListener('click',function(){
    historyData.length=0;
    const callHistory=document.getElementById('history-container')
    callHistory.innerHTML=''
})

// Police helpline number
// 1.heart
document.getElementById('police-heart-btn')
.addEventListener('click',function(){
    heart('heart')
})
// 2.copy
document.getElementById('police-copy-btn')
.addEventListener('click',function(){
    copy('copy')
    copyNumber("police-number")

})
// 3.call related

document.getElementById('police-call-btn')
.addEventListener('click',function(){
    const Emergency=document.getElementById('police').innerText
    const Number=document.getElementById('police-number')
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
    name:'police helpline Number',
    call:emergencyNumber,
    date:new Date().toLocaleTimeString()                  
}
 historyData.push(data)

})
document.getElementById('police-call-btn')
.addEventListener('click',function(){
    history()
})




// Fire service number
// 1.heart
document.getElementById('fire-service-btn')
.addEventListener('click',function(){
    heart('heart')
})
// 2.copy
document.getElementById('fire-copy-btn')
.addEventListener('click',function(){
    copy('copy')
    copyNumber('fire-number')
})
// 3.call related

document.getElementById('fire-service-call-btn')
.addEventListener('click',function(){
    const Emergency=document.getElementById('fire').innerText
    const Number=document.getElementById('fire-number')
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
    name:'Fire service Number',
    call:emergencyNumber,
    date:new Date().toLocaleTimeString()                  
}
 historyData.push(data)

})
document.getElementById('fire-service-call-btn')
.addEventListener('click',function(){
    history()
})

// Ambulance service number

// 1.heart
document.getElementById('ambulance-service-btn')
.addEventListener('click',function(){
    heart('heart')
})
// 2.copy
document.getElementById('ambulance-copy-btn')
.addEventListener('click',function(){
    copy('copy')
    copyNumber('ambulance-number')
})
// 3.call related
document.getElementById('ambulance-call-btn')
.addEventListener('click',function(){
    const Emergency=document.getElementById('ambulance').innerText
    const Number=document.getElementById('ambulance-number')
    const emergencyNumber=(Number.innerText)

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
    name:'Ambulance service Number',
    call:emergencyNumber,
    date:new Date().toLocaleTimeString()                  
}
 historyData.push(data)

})
document.getElementById('ambulance-call-btn')
.addEventListener('click',function(){
    history()
})


// women & child helpline

// 1.heart
document.getElementById('women-child-btn')
.addEventListener('click',function(){
    heart('heart')
})
// 2.copy
document.getElementById('women-helpline-copy-btn')
.addEventListener('click',function(){
    copy('copy')
    copyNumber('women-helpline')
})
// 3.call related
document.getElementById('women-helpline-call-btn')
.addEventListener('click',function(){
    const Emergency=document.getElementById('women-child').innerText
    const Number=document.getElementById('women-helpline')
    const emergencyNumber=(Number.innerText)

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
    name:'Ambulance service Number',
    call:emergencyNumber,
    date:new Date().toLocaleTimeString()                  
}
 historyData.push(data)

})
document.getElementById('women-helpline-call-btn')
.addEventListener('click',function(){
    history()
})

// Anti-corruption helpline

// 1.heart
document.getElementById('Anti-Corruption-btn')
.addEventListener('click',function(){
    heart('heart')
})
// 2.copy
document.getElementById('Anti-Corruption-copy-btn')
.addEventListener('click',function(){
    copy('copy')
    copyNumber('Anti-Corruption-number')
})
// 3.call related
document.getElementById('Anti-Corruption-call-btn')
.addEventListener('click',function(){
    const Emergency=document.getElementById('corruption').innerText
    const Number=document.getElementById('Anti-Corruption-number')
    const emergencyNumber=(Number.innerText)

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
    name:'Anti-Corruption Number',
    call:emergencyNumber,
    date:new Date().toLocaleTimeString()                  
}
 historyData.push(data)

})
document.getElementById('Anti-Corruption-call-btn')
.addEventListener('click',function(){
    history()
})


// Electricity helpline

// 1.heart
document.getElementById('Electricity-btn')
.addEventListener('click',function(){
    heart('heart')
})
// 2.copy
document.getElementById('Electricity-copy-btn')
.addEventListener('click',function(){
    copy('copy')
    copyNumber('Electricity-helpline')
})
// 3.call related
document.getElementById('Electricity-call-btn')
.addEventListener('click',function(){
    const Emergency=document.getElementById('Electricity').innerText
    const Number=document.getElementById('Electricity-helpline')
    const emergencyNumber=(Number.innerText)

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
    name:'Electricity helpline',
    call:emergencyNumber,
    date:new Date().toLocaleTimeString()                  
}
 historyData.push(data)

})
document.getElementById('Electricity-call-btn')
.addEventListener('click',function(){
    history()
})



// BRAC helpline

// 1.heart
document.getElementById('brac-btn')
.addEventListener('click',function(){
    heart('heart')
})
// 2.copy
document.getElementById('brac-copy-btn')
.addEventListener('click',function(){
    copy('copy')
    copyNumber('brac-helpline')
})
// 3.call related
document.getElementById('brac-call-btn')
.addEventListener('click',function(){
    const Emergency=document.getElementById('brac').innerText
    const Number=document.getElementById('brac-helpline')
    const emergencyNumber=(Number.innerText)

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
    name:'Brac helpline',
    call:emergencyNumber,
    date:new Date().toLocaleTimeString()                  
}
 historyData.push(data)

})
document.getElementById('brac-call-btn')
.addEventListener('click',function(){
    history()
})


// Railway helpline

// 1.heart
document.getElementById('Railway-btn')
.addEventListener('click',function(){
    heart('heart')
})
// 2.copy
document.getElementById('Railway-copy-btn')
.addEventListener('click',function(){
    copy('copy')
    copyNumber('Railway-helpline')
})
// 3.call related
document.getElementById('Railway-call-btn')
.addEventListener('click',function(){
    const Emergency=document.getElementById('Railway').innerText
    const Number=document.getElementById('Railway-helpline')
    const emergencyNumber=(Number.innerText)

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
    name:'Railway helpline',
    call:emergencyNumber,
    date:new Date().toLocaleTimeString()                  
}
 historyData.push(data)

})
document.getElementById('Railway-call-btn')
.addEventListener('click',function(){
    history()
})

const addToDb = id =>{
    const quantity = localStorage.getItem(id)
    if(quantity){
        console.log('elready exist')
        const newQuantity = quantity +1;
        localStorage.setItem(newQuantity)
    }
    else{
        console.log('new item')
        localStorage.setItem(id, 1)
    }
  
}

export {addToDb}
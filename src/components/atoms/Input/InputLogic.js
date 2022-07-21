const getLabelText = (value, charactersLimit) =>{
    if(value){
       return `${charactersLimit - value.length} Characters left`; 
    }
    return '';
}

export {getLabelText};
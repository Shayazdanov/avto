 // Меняем регистр букв
 
 const invertCase = (text) => {
    let i = 0;
    let result = '';
    while (i < text.length){
        if (text[i] === text[i].toUpperCase()){
            result = `${result}${text[i].toLowerCase()}`;
        }else{
            result = `${result}${text[i].toUpperCase()}`;
        }
        i++;
    };
    return console.log(result);
};

export {invertCase};
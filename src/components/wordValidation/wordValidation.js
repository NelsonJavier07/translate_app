export const wordValidation = (words) =>{

    

    console.log('cantidad de caracteres', words.length);
    return words.length > 500 ? console.log("La palabra es mayor a 500 caracteres") : null;
}
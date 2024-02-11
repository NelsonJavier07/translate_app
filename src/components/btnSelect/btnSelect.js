export const btnActiveEn = ({btnClickEn, btnClickEs, btnClickFr, languajeOrigin}) => { 
    return btnClickEn && !btnClickEs && !btnClickFr && languajeOrigin == 'en' ? 'btnActive' : 'btnInactive'
}

export const btnActiveFr = ({btnClickEn, btnClickEs, btnClickFr, languajeOrigin}) =>{
    return !btnClickEn && !btnClickEs && btnClickFr && languajeOrigin == 'fr' ? 'btnActive' : 'btnInactive'
}

export const btnActiveEs = ({btnClickEn, btnClickEs, btnClickFr, languajeOrigin}) =>{
    return !btnClickEn && btnClickEs && !btnClickFr && languajeOrigin == 'es' ? 'btnActive' : 'btnInactive'
}




export const btnActiveEnII = ({btnClickEnII, btnClickEsII, btnClickFrII, languajeDestination}) => { 
    return btnClickEnII && !btnClickEsII && !btnClickFrII && languajeDestination == 'en' ? 'btnActive' : 'btnInactive'
}

export const btnActiveFrII = ({btnClickEnII, btnClickEsII, btnClickFrII, languajeDestination}) =>{
    return !btnClickEnII && !btnClickEsII && btnClickFrII && languajeDestination == 'fr' ? 'btnActive' : 'btnInactive'
}

export const btnActiveEsII = ({btnClickEnII, btnClickEsII, btnClickFrII, languajeDestination}) =>{
    return !btnClickEnII && btnClickEsII && !btnClickFrII && languajeDestination == 'es' ? 'btnActive' : 'btnInactive'
}
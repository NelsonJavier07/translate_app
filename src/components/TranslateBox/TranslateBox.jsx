import axios from 'axios'
import { useEffect, useState } from 'react'
import '../TranslateBox/TranslateBox.css'


export const TranslateBox = () => {

    let [words, setWords] = useState('');
    const [languajeOrigin, setLanguajeOrigin] = useState('')
    const [languajeDestination, setLanguajeDestination] = useState('')
    const [traductor, setTraductor] = useState([])

    let [btnClickEn, setBtnClickEn] = useState(false)
    let [btnClickEs, setBtnClickEs] = useState(false)
    let [btnClickFr, setBtnClickFr] = useState(false)

    let [btnClickEnII, setBtnClickEnII] = useState(false)
    let [btnClickEsII, setBtnClickEsII] = useState(false)
    let [btnClickFrII, setBtnClickFrII] = useState(false)


    const wordValidation = () =>{
        console.log('cantidad de caracteres', words.length);
        return words.length > 500 ? console.log("La palabra es mayor a 500 caracteres") : null;
    }

    
    const translateBtn = async() =>{
    const urlBase = `https://api.mymemory.translated.net/get?q=${words}&langpair=${languajeOrigin}|${languajeDestination}`
        
        return axios.get(urlBase)
                .then((res) =>{ return setTraductor(res.data.responseData.translatedText)})
                .catch((err) =>{console.log(err);})
    }


    useEffect(() =>{
        translateBtn
    })

    const btnActiveEn = () => { 
        return btnClickEn && !btnClickEs && !btnClickFr && languajeOrigin == 'en' ? 'btnActive' : 'btnInactive'
    }
        
    const btnActiveFr = () =>{
        return !btnClickEn && !btnClickEs && btnClickFr && languajeOrigin == 'fr' ? 'btnActive' : 'btnInactive'
    }

    const btnActiveEs = () =>{
        return !btnClickEn && btnClickEs && !btnClickFr && languajeOrigin == 'es' ? 'btnActive' : 'btnInactive'
    }



    
    const btnActiveEnII = () => { 
        return btnClickEnII && !btnClickEsII && !btnClickFrII && languajeDestination == 'en' ? 'btnActive' : 'btnInactive'
    }
        
    const btnActiveFrII = () =>{
        return !btnClickEnII && !btnClickEsII && btnClickFrII && languajeDestination == 'fr' ? 'btnActive' : 'btnInactive'
    }

    const btnActiveEsII = () =>{
        return !btnClickEnII && btnClickEsII && !btnClickFrII && languajeDestination == 'es' ? 'btnActive' : 'btnInactive'
    }

    console.log('Español', btnActiveEsII());
    console.log('Ingles', btnActiveEnII());
    console.log('Frances', btnActiveFrII());

    return(
        <div className='container'>
            <div className="containerB">
                <div className="boxTranslateBtnA">
                    <span>Detected Languaje</span>
                    <button className={`${btnActiveEn()}`} onClick={() => {setBtnClickEn(true); return setLanguajeOrigin('en')}}>English</button>
                    <button className={`${btnActiveFr()}`} onClick={() => {setBtnClickFr(true); return setLanguajeOrigin('fr')}} >French</button>
                    <button className={`${btnActiveEs()}`} onClick={() => {setBtnClickEs(true); return setLanguajeOrigin('es')}}>Spanish<img src="public/images/expand_down.svg" alt="desplegar" /></button>
                </div>

                <textarea 
                    name="textTranslate" 
                    id="textTranslate" 
                    value={words} 
                    onChange={(e) => {
                        wordValidation(); 
                        setWords(e.target.value)
                    }}
                >
                </textarea>
                <span>{`${words.length}/500`}</span>
                <div className='boxTranslateBtnB'>
                    <section>
                        <button><img src='public/images/sound_max_fill.svg' alt="altavoz" /></button>
                        <button><img src="public/images/copy.svg" alt="copiar" /></button>
                    </section>
                    <section>
                        <button id='btnTranslate' onClick={() => translateBtn()} ><img src="public/images/sort_alfa.svg" alt="alfa" />Translate</button>
                    </section>
                </div>
            </div>

                        {/* parte del segundo cuadro */}

            <div className="containerB">
                <div className="boxTranslateBtnA">
                    <button className={`${btnActiveEnII()}`} onClick={() => {setBtnClickEnII(true); return setLanguajeDestination('en')}}>English</button>
                    <button className={`${btnActiveEsII()}`} onClick={() => {setBtnClickEsII(true); return setLanguajeDestination('es')}}>Spanish</button>
                    <button className={`${btnActiveFrII()}`} onClick={() => {setBtnClickFrII(true); return setLanguajeDestination('fr')}}>French<img src="public/images/expand_down.svg" alt="desplegar" /></button>
                </div>

                <textarea 
                    name="textTranslate" 
                    id="textTranslate"
                     value={traductor}
                    // onChange={() => handleTraduction}
                >
                </textarea>

                <div className='boxTranslateBtnB'>
                    <section>
                        <button><img src='public/images/sound_max_fill.svg' alt="altavoz" /></button>
                        <button><img src="public/images/copy.svg" alt="copiar" /></button>
                    </section>
                </div>
            </div>
        </div>
    )
}


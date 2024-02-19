import axios from 'axios'
import { useEffect, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { textToSpeechA, textToSpeechB } from '../voiceSynthesizer/textToSpeech.js'
import { interchangeIdiome } from '../interchangeIdiome/interchangeIdiome.js'
import '../TranslateBox/TranslateBox.css'

import { btnActiveEn, btnActiveFr, btnActiveEs, btnActiveEnII, btnActiveEsII, btnActiveFrII } from "../btnSelect/btnSelect.js";
import { wordValidation } from '../wordValidation/wordValidation.js'


export const TranslateBox = () => {

    let [words, setWords] = useState('Hello how are you?');
    let [languajeOrigin, setLanguajeOrigin] = useState('')
    let [languajeDestination, setLanguajeDestination] = useState('')
    const [traductor, setTraductor] = useState([])

    let [btnClickEn, setBtnClickEn] = useState(false)
    let [btnClickEs, setBtnClickEs] = useState(false)
    let [btnClickFr, setBtnClickFr] = useState(false)

    let [btnClickEnII, setBtnClickEnII] = useState(false)
    let [btnClickEsII, setBtnClickEsII] = useState(false)
    let [btnClickFrII, setBtnClickFrII] = useState(false)
    
    const translateBtn = async() =>{
    const urlBase = `https://api.mymemory.translated.net/get?q=${words}&langpair=${languajeOrigin}|${languajeDestination}`
        
        return axios.get(urlBase)
                .then((res) =>{ return setTraductor(res.data.responseData.translatedText),( 
                        setBtnClickEnII(false), 
                        setBtnClickEsII(false), 
                        setBtnClickFrII(false),
                        setBtnClickEn(false),
                        setBtnClickEs(false),
                        setBtnClickFr(false)
                        )
                    })
                .catch((err) =>{console.log(err);})
    }

    useEffect(() =>{        
        translateBtn
    })

    return(
        <div className='container'>
            <div className="containerB">
                <div className="boxTranslateBtnA">
                    <span>Detected Languaje</span>
                    <button className={`${btnActiveEn({btnClickEn, btnClickEs, btnClickFr, languajeOrigin})}`} onClick={() => {setBtnClickEn(true); return setLanguajeOrigin('en')}}>English</button>
                    <button className={`${btnActiveFr({btnClickEn, btnClickEs, btnClickFr, languajeOrigin})}`} onClick={() => {setBtnClickFr(true); return setLanguajeOrigin('fr')}} >French</button>
                    <button className={`${btnActiveEs({btnClickEn, btnClickEs, btnClickFr, languajeOrigin})}`} onClick={() => {setBtnClickEs(true); return setLanguajeOrigin('es')}}>Spanish<img src="images/expand_down.svg" alt="desplegar" /></button>
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
                <span className='containerB_count'>{`${words.length}/500`}</span>
                <div className='boxTranslateBtnB'>
                    <section>
                        <button onClick={() => textToSpeechA(words)}><img src='/public/images/sound_max_fill.svg' alt="altavoz" /></button>
                        <CopyToClipboard text={words}>
                            <button><img src="public/images/copy.svg" alt="copiar" /></button>
                        </CopyToClipboard>
                    </section>
                    <section>
                        <button id='btnTranslate' onClick={() => translateBtn()} ><img src="public/images/sort_alfa.svg" alt="alfa" />Translate</button>
                    </section>
                </div>
            </div>

                        {/* parte del segundo cuadro */}

            <div className="containerB">
                <div className='containerBbtn'>
                    <div className="boxTranslateBtnA">
                        <button className={`${btnActiveEnII({btnClickEnII, btnClickEsII, btnClickFrII, languajeDestination})}`} onClick={() => {setBtnClickEnII(true); return setLanguajeDestination('en')}}>English</button>
                        <button className={`${btnActiveEsII({btnClickEnII, btnClickEsII, btnClickFrII, languajeDestination})}`} onClick={() => {setBtnClickEsII(true); return setLanguajeDestination('es')}}>Spanish</button>
                        <button className={`${btnActiveFrII({btnClickEnII, btnClickEsII, btnClickFrII, languajeDestination})}`} onClick={() => {setBtnClickFrII(true); return setLanguajeDestination('fr')}}>French<img src="public/images/expand_down.svg" alt="desplegar" /></button>
                    </div>
                    <div>
                        <CopyToClipboard text={traductor}>
                            <button className='btnCopy' onClick={() => interchangeIdiome({traductor, words, setTraductor, setWords})}><img src="public/images/horizontal_top_left_main.svg" alt="copy" /></button>
                        </CopyToClipboard>
                    </div>
                </div>
                <textarea 
                    name="textTranslate" 
                    id="textTranslate"
                    value={traductor}
                    onChange={() => translateBtn}
                >
                </textarea>

                <div className='boxTranslateBtnB'>
                    <section>
                        <button onClick={() => textToSpeechB(traductor)}><img src='public/images/sound_max_fill.svg' alt="altavoz" /></button>
                        <button><img src="public/images/copy.svg" alt="copiar" /></button>
                    </section>
                </div>
            </div>
        </div>
    )
}


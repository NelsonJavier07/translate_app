import { TranslateBox } from '../TranslateBox/TranslateBox.jsx'
import '../BackgroundTranslate/BackgroundTranslate.css'

export const BackgroundTranslate = () =>{


    return(
        <div className="ContainerBackground">
            <img src="images/logo.svg" alt="logo" className='logo' />
            <TranslateBox />
        </div>
    )
}
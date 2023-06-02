import './Portfolio.css'

import headphones from '../../images/portfolioImage1.png'
import microphone from '../../images/portfolioImage2.png'
import test from '../../audios/test.mp3'

export default function Portfolio() {
    return (
        <section className='portfolio' id='portfolio'>
            <div className='portolioTitles'>
                <p className='portfolioTitlesTitle'>Portafolio</p>
                <p className='portfolioTitlesSubtitle'>Algunas mustras de lo que hacemos</p>
            </div>
            <div className='portfolioContent'>
                <img src={headphones}/>
                <div className='portfolioContentInfo'>
                    <div className='portfolioContentInfoTitles'>
                        <p className='portfolioContentInfoTitlesTitle'>¡EL 50% DE TU VIDEO ES EL AUDIO!</p>
                        <p className='portfolioContentInfoTitlesSubtitle'>El audio malo genera rechazo: Música inadecuada, volumen demasiado bajo o alto, narración tapada por la música de fondo, sin fade out, cortes de sonido, ruidos, ambiente fuerte, saturaciones... Todo esto hace que tu video no sea agradable al oido, que no se reproduzca por completo y te hace perder audiencia.</p>
                    </div>
                    <div className='portfolioContentInfoAudios'>
                        <div className='portfolioContentInfoAudiosSection'>
                            <div className='portfolioContentInfoAudiosSectionTitles'>
                                <p className='portfolioContentInfoAudiosSectionTitlesTitle'>Esto es un audio</p>
                                <p className='portfolioContentInfoAudiosSectionTitlesSubtitle'>Juanma Dali</p>
                            </div>
                            <audio controls className='portfolioContentInfoAudiosSectionAudio'>
                                <source src={test} type='audio/mp3'/>
                            </audio>
                        </div>
                        <div className='portfolioContentInfoAudiosSection'>
                            <div className='portfolioContentInfoAudiosSectionTitles'>
                                <p className='portfolioContentInfoAudiosSectionTitlesTitle'>Esto es un audio</p>
                                <p className='portfolioContentInfoAudiosSectionTitlesSubtitle'>Juanma Dali</p>
                            </div>
                            <audio controls className='portfolioContentInfoAudiosSectionAudio'>
                                <source src={test} type='audio/mp3'/>
                            </audio>
                        </div>
                        <div className='portfolioContentInfoAudiosSection'>
                            <div className='portfolioContentInfoAudiosSectionTitles'>
                                <p className='portfolioContentInfoAudiosSectionTitlesTitle'>Esto es un audio</p>
                                <p className='portfolioContentInfoAudiosSectionTitlesSubtitle'>Juanma Dali</p>
                            </div>
                            <audio controls className='portfolioContentInfoAudiosSectionAudio'>
                                <source src={test} type='audio/mp3'/>
                            </audio>
                        </div>
                    </div>
                </div>
                <img src={microphone}/>
            </div>
        </section>
    )
}
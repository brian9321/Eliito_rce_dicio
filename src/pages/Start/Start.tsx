import './Start.scss';
import { CreateAnimation, IonImg, IonItem, IonLabel, IonPage} from '@ionic/react';
import React from 'react';
import Logo from '../../assets/eliiot-logo.svg';
import smartPhoneIcn from '../../assets/icn-smartphone.svg';

const Start: React.FC = () => {

    const keyframesAnm = [
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '0.5' },
        { offset: 1, transform: 'scale(1)', opacity: '1' }
    ];
    return(
        <IonPage>
            <section className="start">
                <form >
                    <div className="input-group">
                    <CreateAnimation
                        duration={1500}
                        keyframes={keyframesAnm}
                        play={true}
                        >
                        <IonImg src={Logo} alt="logo"/>
                    </CreateAnimation>
                        <h2>Ingresa tu celular para <br /> iniciar tu solicitud</h2>
                        <div className="start-input-group">
                            <img src={smartPhoneIcn} className="phone-icn" alt="logo" />
                            <input 
                            className="first-phone"
                            type="tel"
                            placeholder="a 10 dígitos"

                            />
                        </div>
                        <p className="error-text" >Ingresa un número válido</p>
                    </div>
                    <div className='btn-group' >
                         <IonItem color="transparent" lines="none">
                            <IonLabel>
                                Realizalo tu proceso con calma 😌, <br />  tendrás <b>30 minutos</b> para completarlo.
                            </IonLabel>
                         </IonItem>
                         <button  type="submit" >Continuar</button>
                    </div>
                </form>
            </section>
        </IonPage>
        
       
    );
  };
  
  export default Start;
  
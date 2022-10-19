import './Home.scss';
import Logo from '../../assets/eliiot-logo-white.svg'
import { IonImg, CreateAnimation} from '@ionic/react';
import React from 'react';
import { useIonViewDidEnter,IonPage, useIonRouter } from '@ionic/react';

const Home: React.FC = () => {

  const keyframesAnm = [
    { offset: 0, transform: 'scale(1)', opacity: '1' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '0.5' },
    { offset: 1, transform: 'scale(1)', opacity: '1' }
  ];

  const router = useIonRouter();

  useIonViewDidEnter(() => {
    setTimeout(() => {
      router.push("/start", "forward", "push");
    }, 2000)
  });

  return(
    <IonPage>
      <section className="splash">
          <div>
            <CreateAnimation
            duration={1500}
            keyframes={keyframesAnm}
            iterations={Infinity}
            play={true}
            >
              <IonImg src={Logo} alt="logo"/>
            </CreateAnimation>
          </div>
      </section>
    </IonPage>
    
  );
};

export default Home;

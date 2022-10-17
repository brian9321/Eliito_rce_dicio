import './Home.scss';
import Logo from '../../assets/eliiot-logo-white.svg'
import { IonContent, IonImg, CreateAnimation} from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return(
    <IonContent>
       <div>
        <CreateAnimation
        duration={1500}
        keyframes={[
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(0.8)', opacity: '0.5' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ]}
        iterations={Infinity}
        play={true}
        >
          <IonImg src={Logo} />
        </CreateAnimation>
       </div>
    </IonContent>
  );
};

export default Home;

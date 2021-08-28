import { IonContent, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector} from '../hooks'
import { addMessage } from '../store'
import './Home.css';


const Home: React.FC = () => {

  const [message, setMessage] = useState<string | undefined>();

  const messages  = useAppSelector((state) => state.messages);
  const dispatch = useAppDispatch();

  const addItem = () => {
    if (message) {
      dispatch(addMessage(message))
      setMessage(undefined);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ZaiChat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList className="zai-message-list">
          {
            messages.map(item =>
              <IonItem className="zai-message">
                <IonLabel>{item}</IonLabel>
              </IonItem>
            )
          }
        </IonList>
      </IonContent>
      <IonFooter>
        <form onSubmit={e => { addItem(); e.preventDefault() }}>
          <IonInput value={message} placeholder="Message..."
            onIonChange={e => setMessage(e.detail.value!)}
          >
          </IonInput>
        </form>
      </IonFooter>
    </IonPage>
  );
};

export default Home;

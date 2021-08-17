import { IonContent, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {

  const [message, setMessage] = useState<string | undefined>();
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    if (message) {
      setItems(current => current.concat([message]));
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
            items.map(item =>
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

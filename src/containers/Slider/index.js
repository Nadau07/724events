import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtB.date) < new Date(evtA.date) ? -1 : 1
  );
  /* Inversion du tri evtB et evtA pour trier les events par ordre décroissant */

  /* Ajout de "-1" à la fonction nextCard : si l'index est inferieur au tableau byDateDesc il passe au suivant sinon il revient à 0  */
  const nextCard = () => {
    if (byDateDesc){
      setTimeout(
        () => setIndex(index < byDateDesc.length -1 ? index + 1 : 0),
        5000
      );
    };
    }

    /* suppression de l'avertissement de la console : en rajoutant une condition "if" pour verifier que la valeur
    byDateDesc est bien défini */
   
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <>
          <div key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                /* une key doit être unique : modif de la clef ci-dessous , radioIdx +1 permet une key unique pour chaque radio */
                  key={`${radioIdx +1}`}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                  readOnly
                  /* Pour que les bullets suivent le carousel, remplacement de idx par index (verifie quel bouton radio doit etre coché) */
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Slider;

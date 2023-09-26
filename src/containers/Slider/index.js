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

    /* suppression de l'avertissement de la console : en rajoutant une condition "if" pour verifier que
    byDateDesc est bien défini */
   
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
    {byDateDesc?.map((event, idx) => (
      <div key={event.title}>
        <div
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
            {/* Changement de _ par dot (bouton) : meilleur comprehension */}
            {byDateDesc.map((dot, radioIdx) => (
              <input
                /* Changement de la key {`${event.id}`} , elle doit être unique */
                key={`${dot.title}`}
                type="radio"
                name="radio-button"
                /* Pour que les bullets suivent le carousel, remplacement de idx par index (verifie quel bullet doit être coché) */
                checked={index === radioIdx}
                readOnly
              />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);
};

export default Slider;
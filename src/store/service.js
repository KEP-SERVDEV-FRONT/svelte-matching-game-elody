import { store, state } from "../store/store";
import { hintTimer, failureTimer } from "../store/const";
import { hintCardShow, choiceCard, hiddenAllCards } from "../store/action";

/* 카드 한장씩 뒤집기 */
export const showHint = () => {
  const cards = store.getState().cards;

  cards.forEach((card, index) => {
    setTimeout(() => {
      state.dispatch(hintCardShow(index));
      const currentHintCard = index;
      if (currentHintCard === cards.length - 1) {
        setTimeout(() => {
          state.dispatch(hintCardShow(null));
        }, hintTimer);
      }
    }, index * hintTimer);
  });
};

/* 선택된 카드 짝 계산 */
export const confirmCheckedCards = (checkedCards) => {
  const cards = store.getState().cards;
  if (checkedCards[0].id === checkedCards[1].id) {
    cards.map((card) => {
      if (card.check) {
        card.done = true;
        card.check = false;
      }
    });

    state.dispatch(choiceCard(cards));
  } else {
    setTimeout(() => {
      state.dispatch(hiddenAllCards());
      return false;
    }, failureTimer);
  }
};

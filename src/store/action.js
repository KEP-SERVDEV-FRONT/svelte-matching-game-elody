export const GAME_START = "[게임시작]/GAME_START";
export const CARDS_SHUFFLE = "[카드섞기]/CARDS_SHUFFLE";
export const CHOICE_CARDS = "[카드선택]/CHOICE_CARDS";
export const HIDDEN_ALL_CARDS = "[전체카드숨기기]/HIDDEN_ALL_CARDS";
export const SHOW_ALL_CARD = "[전체카드보여주기]/SHOW_ALL_CARD";
export const RESET_CARDS_COUNT = "[카드갯수초기화]/RESET_CARDS_COUNT";
export const UPDATE_CARDS_COUNT = "[카드갯수업데이트]/UPDATE_CARDS_COUNT";
export const HINT_CARD_SHOW = "[힌트카드보여주기]/HINT_CARD_SHOW";

/* 게임 시작 */
export const gameStart = (count) => ({
  type: GAME_START,
  count,
});

/* 카드 섞기 */
export const cardsShuffle = (cards) => ({ type: CARDS_SHUFFLE, value: cards });

/* 카드 선택 */
export const choiceCard = (cards) => ({ type: CHOICE_CARDS, value: cards });

/* 전체 카드 숨기기 */
export const hiddenAllCards = () => ({ type: HIDDEN_ALL_CARDS });

/* 전체 카드 보여주기 */
export const showAllCard = () => ({ type: SHOW_ALL_CARD });

/* 카드 갯수 초기화 */
export const resetCardsCount = () => ({ type: RESET_CARDS_COUNT, value: 4 });

/* 카드 갯수 업데이트 */
export const updateCardsCount = (count) => ({
  type: UPDATE_CARDS_COUNT,
  value: count,
});

/* 힌트 카드 보여주기 */
export const hintCardShow = (cardIndex) => ({
  type: HINT_CARD_SHOW,
  value: cardIndex,
});

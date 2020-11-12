import { initialState } from "../store/state";
import { combineReducers } from "redux";
import { __shuffle } from "../utils";
import {
  CARDS_SHUFFLE,
  CHOICE_CARDS,
  HIDDEN_ALL_CARDS,
  UPDATE_CARDS_COUNT,
  RESET_CARDS_COUNT,
  GAME_START,
  HINT_CARD_SHOW,
  SHOW_ALL_CARD,
} from "./action";

/* 게임을 시작할경우 */
const is_started = (state = initialState.is_started, action) => {
  switch (action.type) {
    case GAME_START: {
      return true;
    }
  }

  return state;
};

/* 힌트 카드 보여줄경우 */
const current_hint_card_num = (
  state = initialState.currentShowCard,
  action
) => {
  switch (action.type) {
    case HINT_CARD_SHOW: {
      return action.value;
    }
  }

  return state;
};

/* 카드갯수, 카드위치, 카드상태 바꾼경우 */
const cards = (state = initialState.cards, action) => {
  switch (action.type) {
    // 게임 시작시 카드 추가 후 섞기
    case GAME_START: {
      const stateCount = action.count;
      let cards = [];

      for (let i = 0; i < stateCount / 2; i++) {
        const card = {
          id: i,
          check: true,
          done: false,
        };

        cards.push(card, { ...card });
      }

      return __shuffle(cards);
    }

    // 카드 섞기
    case CARDS_SHUFFLE: {
      const cards = __shuffle(state);

      cards.forEach((card) => {
        card.check = false;
        card.done = false;
      });

      return cards;
    }

    // 전체 카드 보여주기
    case SHOW_ALL_CARD: {
      const showAllCards = state.map((card) => {
        card.check = true;
        return card;
      });

      return showAllCards;
    }

    // 전체 카드 숨기기
    case HIDDEN_ALL_CARDS: {
      const hiddenAllCards = state.map((card) => {
        card.check = false;
        return card;
      });

      return hiddenAllCards;
    }

    // 선택된 카드 보여주기
    case CHOICE_CARDS: {
      return action.value;
    }
  }

  return state;
};

/* 카드 갯수 바꾼경우 */
const count = (state = initialState.count, action) => {
  switch (action.type) {
    // 카드 갯수 변경
    case UPDATE_CARDS_COUNT:
      return action.value;

    // 카드 갯수 초기화
    case RESET_CARDS_COUNT:
      return action.value;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  is_started,
  cards,
  count,
  current_hint_card_num,
});

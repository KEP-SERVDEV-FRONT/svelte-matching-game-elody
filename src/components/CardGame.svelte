<script>
  import { onMount } from "svelte";
  import { hiddenAllCards } from "../store/action";
  import { store, state } from "../store/store";
  import { checkedCardLength, hintTimer } from "../store/const";
  import { confirmCheckedCards } from "../store/service";

  let cards = store.getState().cards;
  let currentHintCard = store.getState().current_hint_card_num;
  let gameDoneEmoji = false;

  store.subscribe(() => {
    cards = store.getState().cards;
    currentHintCard = store.getState().current_hint_card_num;
  });

  onMount(async () => {
    /* 전체 카드 숨기기 */
    setTimeout(() => {
      state.dispatch(hiddenAllCards());
    }, hintTimer);
  });

  /* 카드 선택 */
  const onChoiceCard = (checkedCardIndex) => {
    // 클릭한 카드가 완료된 카드면 진행하지 않음
    if (cards[checkedCardIndex].done) {
      return false;
    }

    cards[checkedCardIndex].check = true;

    // 체크 된 카드 표시
    const checkedCards = cards.filter((card) => card.check);
    if (checkedCards.length === checkedCardLength) {
      confirmCheckedCards(checkedCards);
    }

    // 완료 카드 갯수로 게임 완료 체크
    const doneCards = cards.filter((card) => card.done);
    if (doneCards.length === cards.length) {
      gameClear();
    }
  };

  /* 짝맞추기 완료 */
  const gameClear = () => {
    gameDoneEmoji = true;
    setTimeout(() => {
      gameDoneEmoji = false;
    }, hintTimer);
  };
</script>

<section class="cards">
  <div class="cards-wrap">
    {#each cards as card, index}
      <div
        class="card"
        class:card-show={currentHintCard === index || card.check}
        class:card-done={card.done}
        on:click={() => onChoiceCard(index)}>
        <div class="card-back">{card.id}</div>

        <img class="card-front" src={`./images/pae${card.id}.png`} alt="" />
      </div>
    {/each}
  </div>

  <div class="cards-done-emoji" class:cards-done-emoji-active={gameDoneEmoji}>
    🤟🏻
  </div>
</section>

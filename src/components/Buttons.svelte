<script>
  import { store, state } from "../store/store";
  import { cardsShuffle, showAllCard, hiddenAllCards } from "../store/action";
  import { showHint } from "../store/service";
  import { failureTimer } from "../store/const";

  let currentHintCard = store.getState().current_hint_card_num;

  store.subscribe(() => {
    currentHintCard = store.getState().current_hint_card_num;
  });

  /* 카드 섞고 전체 보여주기 */
  const onCardsShuffle = () => {
    state.dispatch(cardsShuffle(store.getState().cards));

    state.dispatch(showAllCard());

    setTimeout(() => {
      state.dispatch(hiddenAllCards());
    }, failureTimer);
  };
</script>

{#if currentHintCard === null}
  <button class="btn btn-hint" on:click={() => showHint()}>👀</button>

  <button class="btn btn-shuffle" on:click={() => onCardsShuffle()}>🔄</button>
{/if}

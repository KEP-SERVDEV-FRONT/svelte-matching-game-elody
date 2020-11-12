<script>
  import { state, store } from "../store/store";
  import {
    updateCardsCount,
    resetCardsCount,
    gameStart,
  } from "../store/action";
  import { minCardsCount, maxCardsCount, warningTimer } from "../store/const";

  let warning = false;
  let countNum = store.getState().count;

  store.subscribe(() => {
    countNum = store.getState().count;
  });

  /* 게임 시작 */
  const onGameStart = () => {
    state.dispatch(gameStart(countNum));
  };

  /* 카드 갯수 변경 */
  const onChangeCardsCount = (count) => {
    if (countNum < minCardsCount || countNum > maxCardsCount || countNum % 2) {
      warning = true;

      setTimeout(() => {
        warning = false;
      }, warningTimer);

      state.dispatch(resetCardsCount());

      return false;
    }

    state.dispatch(updateCardsCount(count || countNum));
  };
</script>

<section class="intro">
  <div class="intro-wrap">
    <h2>난이도</h2>
    <div class="intro-wrap-difficulty">
      <button on:click={() => onChangeCardsCount(4)}>쉬움</button>
      <button on:click={() => onChangeCardsCount(24)}>중간</button>
      <button on:click={() => onChangeCardsCount(48)}>어려움</button>
    </div>
    <input
      type="number"
      bind:value={countNum}
      placeholder="4이상 48이하의 짝수"
      on:change={() => onChangeCardsCount()} />
    <button on:click={() => onGameStart()}>시작</button>
    <p class="intro-wrap-message" class:intro-wrap-warning={warning}>
      ❗️ 카드 갯수는 4이상 48이하의 짝수여야 합니다.
    </p>
  </div>

  <p class="intro-message">
    싸늘하다. 가슴에 비수가 날아와 꽂힌다. 하지만 걱정하지 마라. 손은 눈보다
    빠르니까
  </p>
</section>

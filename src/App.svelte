<script>
  import Buttons from "./components/Buttons.svelte";
  import CardGame from "./components/CardGame.svelte";
  import Intro from "./components/Intro.svelte";
  import { state } from "./store/store";
  import { __shuffle } from "./utils";
</script>

{#if $state.is_started}
  <Buttons />
  <CardGame />
{:else}
  <Intro />
{/if}

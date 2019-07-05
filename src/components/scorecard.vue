<template>
  <div class="score-container">
    <div class="score">
      You scored
      <span
        v-bind:class="{'score-good':(score > 8), 'score-average':(score<8 && score>=5), 'score-bad':(score<5)}"
      >{{score}}</span> points!
    </div>
    <div v-if="score >= 8" class="img-container">
      <p class="score-text">Congratulations!!</p>
      <img src="https://media.giphy.com/media/ehhuGD0nByYxO/giphy.gif" alt="congrats">
    </div>
    <div v-if="score < 8 && score >= 5" class="img-container">
      <p class="score-text">Good Job!</p>
      <img src="https://media.giphy.com/media/5hgYDDh5oqbmE4OKJ3/giphy.gif" alt="good job">
    </div>
    <div v-if="score < 5" class="img-container">
      <p class="score-text">Better luck next time!</p>
      <img
        src="https://media.giphy.com/media/l3UcjBJUov1gCRGbS/giphy.gif"
        alt="better luck next time"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["score"],
  name: "scoreCard"
};
</script>

<style>
.score,
.score-text {
  font-weight: bold;
  font-size: 32px;
  text-align: center;
}
.score-good {
  color: seagreen;
}
.score-average {
  color: darkorange;
}
.score-bad {
  color: red;
}
.img-container {
  text-align: center;
}
.img-container img {
  width: 75%;
}
.score-container {
  margin-top: 5%;
  padding-left: 15%;
}
</style>

<template>
  <div class="score-container">
    <div class="score">
      You scored
      <span
        v-bind:class="{'score-good':(score > 8), 'score-average':(score<8 && score>=5), 'score-bad':(score<5)}"
      >{{score}}</span> points!
    </div>
    <div class="correct-ans">
      <p class="correct-answers-title">The list of correct answers:</p>
      <correctAnswersList :data="dataSentAnswers"/>
    </div>
  </div>
</template>

<script>
import correctAnswersList from "./correctAnswersList.vue";
import { mapState } from "vuex";
export default {
  data: function() {
    return {
      dataSent: this.getAnswer,
      dataSentAnswers: [],
      options: []
    };
  },
  props: ["score"],
  name: "scoreCard",
  components: {
    correctAnswersList: correctAnswersList
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapState({
      getCorrectQA: state => state.correctQAList,
      optionsSelectedGetter: state => state.optionsSelected
    }),
    getAnswer: function() {
      this.dataSent = this.getCorrectQA;
    },
    getOptionsSelected: function() {
      this.options = this.optionsSelectedGetter;
      // this.dataSentAnswers = [...this.dataSent];
      if (this.dataSent && this.options) {
        this.dataSent.forEach((item, key) => {
          this.options.forEach((item1, key1) => {
            if (key === item1.key) {
              this.dataSentAnswers[key] = {
                question: item.question,
                correctAnswer: item.correctAnswer,
                userAnswer: item1.option
              };
              if (item.correctAnswer === item1.option) {
                this.dataSentAnswers[key].correct = true;
              } else {
                this.dataSentAnswers[key].correct = false;
              }
            }
          });
        });
      }

      return this.dataSentAnswers;
    }
  },
  watch: { getAnswer: Function, getOptionsSelected: Function }
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
  padding-left: 15%;
}
.correct-answers-title {
  font-weight: bold;
  padding-top: 25px;
  font-style: italic;
}
</style>

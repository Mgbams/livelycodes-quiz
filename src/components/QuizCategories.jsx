import axios from "axios";
import React, { useState, useEffect } from "react";

function QuizCategories() {
  const [categories, setCategories] = useState([]);
  //generated from Trivia API
  const getQuiz = async () => {
    const { data } = await axios.get(
      "https://opentdb.com/api.php?amount=20&category=18&difficulty=medium"
    );

    const formattedData = data.results.map((category) => {
      const incorrectAnswersIndexes = category.incorrect_answers.length;
      const randomIndex = Math.random() * (incorrectAnswersIndexes - 0) + 0;
      category.incorrect_answers.splice(
        randomIndex,
        0,
        category.correct_answer
      );
      return {
        ...category,
        answes: category.incorrect_answers,
      };
    });

    setCategories(formattedData);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  console.log(categories);
  return <div>Quiz Categories</div>;
}

export default QuizCategories;

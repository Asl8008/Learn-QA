/* ===========================================================
   Learn-QA — darslar uchun interaktiv komponentlar
   Barcha darslar shu faylni ulaydi. Yangi komponent kerak
   bo'lsa — bu yerga qo'shiladi, darsning ichiga emas.
   =========================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     QUIZ
     Belgilash (markup):

     <section class="quiz">
       <p class="quiz-prompt">Savol matni</p>
       <div class="quiz-options">
         <button class="quiz-option" data-correct
                 data-explain="Nega to'g'ri">Javob A</button>
         <button class="quiz-option"
                 data-explain="Nega noto'g'ri">Javob B</button>
       </div>
       <p class="quiz-feedback" hidden></p>
     </section>

     Xatti-harakat: darhol fikr-mulohaza. Noto'g'ri javobda
     qayta urinish mumkin — to'g'ri javob topilgunicha quiz
     yopilmaydi (effortful retrieval = mustahkam xotira).
     --------------------------------------------------------- */

  function initQuiz(quiz) {
    var options  = Array.prototype.slice.call(quiz.querySelectorAll(".quiz-option"));
    var feedback = quiz.querySelector(".quiz-feedback");
    var solved   = false;

    options.forEach(function (option) {
      option.setAttribute("type", "button");

      option.addEventListener("click", function () {
        if (solved) return;

        var isCorrect = option.hasAttribute("data-correct");
        var explain   = option.getAttribute("data-explain") || "";

        // Oldingi urinishning "noto'g'ri" belgisini tozalaymiz
        options.forEach(function (o) { o.classList.remove("is-wrong"); });

        if (isCorrect) {
          solved = true;
          option.classList.add("is-correct");
          options.forEach(function (o) { o.disabled = true; });
          showFeedback("To'g'ri. " + explain, true);
        } else {
          option.classList.add("is-wrong");
          showFeedback("Hali emas. " + explain + " Yana urinib ko'ring.", false);
        }
      });
    });

    function showFeedback(text, ok) {
      if (!feedback) return;
      feedback.textContent = text;
      feedback.classList.toggle("is-correct", ok);
      feedback.classList.toggle("is-wrong", !ok);
      feedback.hidden = false;
    }
  }

  /* ---------------------------------------------------------
     RECALL — xotiradan tiklash mashqi

     <section class="recall">
       <p class="recall-q">Savol</p>
       <button class="recall-btn">Javobni ko'rsatish</button>
       <p class="recall-a" hidden>Javob</p>
     </section>

     Muhimi: foydalanuvchi AVVAL o'zi eslashga urinadi, keyin
     tugmani bosadi. Tugma matni shuni eslatib turadi.
     --------------------------------------------------------- */

  function initRecall(recall) {
    var button = recall.querySelector(".recall-btn");
    var answer = recall.querySelector(".recall-a");
    if (!button || !answer) return;

    button.setAttribute("type", "button");
    button.addEventListener("click", function () {
      answer.hidden = !answer.hidden;
      button.textContent = answer.hidden ? "Javobni ko'rsatish" : "Javobni yashirish";
    });
  }

  /* --------------------------------------------------------- */

  function boot() {
    document.querySelectorAll(".quiz").forEach(initQuiz);
    document.querySelectorAll(".recall").forEach(initRecall);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

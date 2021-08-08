// create variables
let question = document.querySelectorAll('.question');
let answer = document.querySelectorAll('.answer');
let subFaq = document.querySelectorAll('.sub-faq');
var svgArrowMain = document.querySelectorAll('.svg-arrow');

//implement logic
subFaq.forEach(element=>{
    element.addEventListener('click', function(){
      
    var ans = element.querySelector('.answer');
    var qst = element.querySelector('.question');
    var svgArrow = element.querySelector('.svg-arrow');
    
      ans.classList.toggle('answer-active');
      svgArrow.classList.toggle('svg-active'); 
      qst.classList.toggle('question-active'); 
});

});
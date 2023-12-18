const corretAnswers = ['D','A','D','C']
const finalScoreContainer = document.querySelector('.final-score-container')
const form = document.querySelector('.quiz-form')

const questions = form.querySelectorAll('p')

let score = 0;

const getUserAnswers = () => corretAnswers.map((_, index)=>
    form[`inputQuestion${index+1}`].value  )   

/* - versão menos resuzida para fins didáticos:
const getUserAnswers = () => {
    const userAnswers = corretAnswers.map((_, index)=>{
        return form[`inputQuestion${index+1}`].value    
    })   
    return userAnswers
}
*/
const calculateUserScore = (userAnswer) => {
    userAnswer.forEach((userAnswer, index) =>{
        const question = questions[index]
        const isUserAnswerCorret = userAnswer === corretAnswers[index]
        if (isUserAnswerCorret){
            question.style.color = 'lightgreen'
            score += 25;
        }else {
            question.style.color = 'lightcoral'
        }
    })
}

const showFinalScore = ()=>{
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
    let  counter = 0
    const timer = setInterval( ()=>{
        if (counter === score){
            clearInterval(timer)
        }
        finalScoreContainer.querySelector('span').textContent = `${counter++}%`
        
    },10)
    
}

const quiz = event =>{
    event.preventDefault();
   
    score = 0
   
    const userAnswer = getUserAnswers() 
   
    calculateUserScore(userAnswer)
    showFinalScore()
    animateFinalScore();

}

form.addEventListener('submit',quiz )

//lightgoldenrodyellow


let wcount = 0;
let hangMan = document.querySelector('.hangman-box')
function checkAnswer(char) {
    console.log(char);
    let position = [];
    let wrong = document.getElementById('wrong');
    if (qn.Answer.toLowerCase().includes(char.toLowerCase())) {
        for (let i = 0; i < qn.Answer.length; i++) {
            if (qn.Answer[i].toLowerCase() == char.toLowerCase()) {
                position.push(i);
            }


        }

        position.forEach(pos => {
            underScore[pos] = char;
        });
        line.innerHTML = '';
        underScore.forEach(underScore => {
            const span = document.createElement('span');
            span.textContent = underScore;
            span.classList.add('uderscore');
            line.appendChild(span);
        })

    }

    else if (wcount < 6) {
        

        wcount = wcount + 1;    
        console.log(wcount);
        wrong.textContent = `${wcount}/6`
        hangMan.innerHTML=`<img src="./images/hangman-${wcount}.svg" alt="">`

    }


     if (underScore.join('').toLowerCase() === qn.Answer.toLowerCase()) {
        console.log('win');
        // const sucess=document.querySelector('.sucessful')
        // sucess.innerHTML='<img src="images\victory.gif">'
        document.getElementById('sucess').style.display="flex"
        
     }
     if(wcount==6)
     {
        document.getElementById('fail').style.display="flex"
     }

}



let keyboard = document.querySelector('.section1')



for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(i + 65);
    let inp = document.createElement('input')
    inp.type = 'button';
    inp.value = char;

    inp.addEventListener('click', function () {
        checkAnswer(char)
    })
    inp.classList.add('btn')
    if (i == 13) {
        keyboard.append(document.createElement('br'))
    }
    keyboard.append(inp)


}

let questions = [
    {
        Question: 'What animal can change colors to blend in with its surroundings?',
        Hint: 'It’s a reptile, known for its ability to change color.',
        Answer: 'Chameleon',
    },


    {
        Question: "A large mammal that is known as the king of the jungle.",
        Hint: "It has a mane.",
        Answer: "Lion"
    },
    {
        Question: "The city known for the Eiffel Tower.",
        Hint: "It’s the capital of France.",
        Answer: "Paris"
    },
    {
        Question: "A city famous for the Great Wall.",
        Hint: "The capital of China.",
        Answer: "Beijing",
    },
    {
        Question: "The city where the Statue of Liberty is located.",
        Hint: "One of the most populous cities in the USA.",
        Answer: "NewYork",
    },

    {
        Question: "Known for its ancient pyramids and the Sphinx.",
        Hint: "A historic city in Egypt.",
         Answer: "Cairo"
    },
    {
        Question: "Home to the Colosseum, a famous ancient amphitheater.",       
        Hint: "Capital city of Italy.",
        Answer: "Rome"
},
{
       Question: "Famous for the Hollywood sign and film industry.",
       
       Hint: "A major city in California, USA.",
       Answer: "Los Angeles"
    },
    {
       Question: "This bird is known for its ability to mimic sounds and human speech.",
       Hint: "A colorful bird often kept as a pet.",
       Answer: "Parrot"
},
{
      Question: "This large sea mammal is known for its intelligence and ability to perform tricks.",
      Hint: "It’s known for its playful behavior and lives in oceans.",
      Answer: "Dolphin"
},
{
      Question: "This big cat is known for its speed and is the fastest land animal.",
      Hint: "Often spotted on the African savanna.",
      Answer: "Cheetah"
}

{
    Question: "This popular Italian dish is often topped with cheese, tomato, and various toppings.",

    Hint: "Typically served in slices, originated from Naples.",
    Answer: "Pizza",
},
{
    Question: "A popular drink made from beans, often served hot in the morning.",
    
    Hint: "Known for its stimulating effect due to caffeine.",
    Answer: "Coffee"
},
{
     Question: "A dessert often associated with France, known for its flaky layers.",
     
     Hint: "Often enjoyed for breakfast with coffee.",
     Answer: "Croissant"
},
{
    Question: "This planet is known as the 'Red Planet.'",
     Hint: "It’s the fourth planet from the Sun.",
     Answer: "Mars"
},
{
     Question: "This element, essential for breathing, makes up 21% of Earth's atmosphere.",
     Hint: "It has the chemical symbol O.",
     Answer: "Oxygen"
},
{
Question: "The largest organ of the human body.",
Hint: "It protects our body from external damage.",
Answer: "Skin"
}



]

let qn = questions[Math.floor(Math.random() * questions.length)];
console.log(qn.Question);

let h = document.getElementById('hi')
h.innerHTML = qn.Hint;

let q = document.getElementById('qn')
q.innerHTML = qn.Question


const underScore = Array(qn.Answer.length).fill('_');
console.log(underScore);
let line = document.getElementById('answer');

underScore.forEach(underscore => {
    const span = document.createElement('span');
    span.textContent = underscore;
    span.classList.add('underscore');
    answer.appendChild(span);
})

function underScoreCount() {
    return underScore.filter(char => char !== '_').length

}

if (underScoreCount() == qn.Answer.length) {
    alert('you won');
}

function next(){
    window.location.reload();
}
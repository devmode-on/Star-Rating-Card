const stars = document.querySelectorAll('.rating__star');
const text = document.querySelector('.rating__text');
const emoji = document.querySelector('.rating__emoji');
const ratings = [{emoji: '😍', text: 'I Love It!'},
                 {emoji: '👍', text: 'Good'},
                 {emoji: '😕', text: 'Not bad'},
                 {emoji: '👎', text: 'Bad'},
                 {emoji: '😡', text: 'I Hate It!'}];


stars.forEach( (star, i) => {
  star.addEventListener( 'click', () => {

    text.textContent = ratings[i].text;
    emoji.textContent = ratings[i].emoji;

    stars.forEach( (star, j) => {
      // "j" has to be greater than "i" because the array is reversed by the row-reverse property of the display flex
      if(j >= i){
        star.classList.add('active');
      }else if(star.classList.contains('active')){
        star.classList.remove('active');
      }
    } )
  })
})
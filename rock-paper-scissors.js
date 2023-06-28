  
  score = JSON.parse(localStorage.getItem('score'));
  //localStorage only support strings.
  //use to get item out of local storage.

  updateScoreElement();

  if (score === null){
    score = {
      wins : 0,
      losses : 0,
      ties : 0

    };
  }

  function playGame(playerMove){

    
    const computerMove = pickComputerMove();
    let result = '';

    if(playerMove === 'Scissors'){

      if(computerMove === 'Rock')
        {
          result = 'Computer won.';
        }else if(computerMove === 'Paper'){
          result = 'You won.'
        }else if(computerMove === 'Scissors'){
          result = 'Tie.';
        }

    }else if(playerMove === 'Rock'){
      if(computerMove === 'Rock')
        {
          result = 'Tie.';
        }else if(computerMove === 'Paper'){
          result = 'Computer won.'
        }else if(computerMove === 'Scissors'){
          result = 'You won.';
        }
    }else if(playerMove === 'Paper'){
      if(computerMove === 'Rock')
        {
          result = 'You won.';
        }else if(computerMove === 'Paper'){
          result = 'Tie.'
        }else if(computerMove === 'Scissors'){
          result = 'Computer won.';
        }
    }
      // adding property to update on of win,loss & ties.

      if(result === 'You won.'){
        score.wins ++ ;
      }else if(result === 'Computer won.'){
        score.losses ++ ;
      }else if(result === 'Tie.'){
        score.ties ++ ;
      }
        //localStorage -> 

        // section to display things 
        localStorage.setItem('score', JSON.stringify(score));
        
        updateScoreElement();
        // updateResult();
        // updateMoves();
        document.querySelector('.js-result').
        innerHTML = result;

        document.querySelector('.js-moves').
        innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
        
    }

    //function to update score.
    function updateScoreElement(){

      document.querySelector('.js-score').
        innerHTML = `wins : ${score.wins} , losses : ${score.losses} , ties : ${score.ties}`;
    }

    function pickComputerMove(){
      let randomNUmber = Math.random();
      
      let computerMove = '';
      

      if(randomNUmber >= 0 && randomNUmber < 1/3){
          computerMove = 'Rock';
        }else if(randomNUmber >= 1/3 && randomNUmber < 2/3){
          computerMove = 'Paper';
        }
        else if(randomNUmber >= 2/3 && randomNUmber <= 1){
          computerMove = 'Scissors';
        }

      return computerMove;
    }
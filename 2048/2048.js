var grid = [ 
    [0,0,0,0], 
    [0,0,0,0], 
    [0,0,0,0], 
    [0,0,0,0]]

var score = 0;

$(function() {

    function addNumber() {
        console.log("addNumber");
          
        // generate a random number either 2 or 4 (Game rules)
        var rand_num = Math.round(Math.random() > 0.9 ? 4 : 2);
      
        // generate a random row and column
        var r = Math.round(Math.random() * 3);
        var c = Math.round(Math.random() * 3);
      
        // put the number into the grid
        console.log('addNumber', 'r', r, 'c', c, 'rand_num', rand_num);
        if (grid[r][c] == 0) {
          grid[r][c] = rand_num;
        } else {
        	var opening = false
        	for(var i = 0; i<16; i++){
            	if (grid[Math.floor(i/4)][i%4] == 0){
              	opening = true
              	grid[Math.floor(i/4)][i%4] = rand_num;
                break;
              }
          
          }


          if (score > 2048) {
            opening == false;
          }

          if(opening == false){
          	// end the game
            console.log("sorry, you lose");
          }
        }
      
        gridToHTML();
    };
  
    function gridToHTML(){
        for(var r in grid ) {
            var row = grid[r];
        
            for(var c in row) {
                var num = row[c];
                if (grid[r][c] == 0) {
                  $('.r'+r+'c'+c).css('background-color','#dbceb0');
                }
                else if (grid[r][c] == 2) {
                  $('.r'+r+'c'+c).css('background-color','#8b6f47');
                }
                else if (grid[r][c] == 4){
                  $('.r'+r+'c'+c).css('background-color','#d4ac6e');
                }
                else if (grid[r][c] == 8){
                  $('.r'+r+'c'+c).css('background-color','#7e4a35');
                }
                else if (grid[r][c] == 16){
                  $('.r'+r+'c'+c).css('background-color','#cab577');
                }
                else if (grid[r][c] == 32){
                  $('.r'+r+'c'+c).css('background-color','#838060');
                }
                else if (grid[r][c] == 64) {
                  $('.r'+r+'c'+c).css('background-color','#bbab9b');
                }
                else if (grid[r][c] == 128) {
                  $('.r'+r+'c'+c).css('background-color','#4f3222');
                }
                else if (grid[r][c] == 256) {
                  $('.r'+r+'c'+c).css('background-color','#d9ad7c');
                }
                else if (grid[r][c] == 512) {
                  $('.r'+r+'c'+c).css('background-color','#674d3c');
                }
                else if (grid[r][c] == 1024) {
                  $('.r'+r+'c'+c).css('background-color','#f2e394');
                }
                else if (grid[r][c] == 2048) {
                  $('.r'+r+'c'+c).css('background-color','#c83349');
                }
                // r, c, num
                //console.log('r', r, 'c', c, 'num', num);
                console.log(r,c,num);
                $('.r' + r + 'c' + c).text(num); 
            }
        }
    }

    
    function moveLeft() {
    	for(var r = 0; r < 4; r++){
      	for(var c = 1; c < 4; c++){
        	if(grid[r][c] == 0){
          	continue;
          } else {
            var c1 = c
            //LOOP: c2 will be number LEFT of c..(c-1). c2 = c2 - 1 cause c2 will need to continue being left position of c;
          	for(var c2 = c-1; c2>=0; c2 -= 1){
                // if the two spots have the same number
            	if(grid[r][c1] === grid[r][c2]){
              		grid[r][c2] = grid[r][c2] + grid[r][c1];
                  grid[r][c1] = 0;
                  score = score + grid[r][c2];
                  $('#score').html(score);  
                  break;
                }
              	// if the spot we're comparing left of c (left of c is c2) is 0
                else if (grid[r][c2] === 0){
                  grid[r][c2] = grid[r][c1];
                  grid[r][c1] = 0;
                  c1 -= 1
                }
              // if the numbers are different
              else{
                break;
              }
            }
          }
        }
      }
    }

    function moveUp() {
    	for(var c = 0; c < 4; c++){
      	for(var r = 1; r < 4; r++){
        	if(grid[r][c] == 0){
          	continue;
          } else {
            var r1 = r
            //LOOP: c2 will be number LEFT of c..(c-1). c2 = c2 - 1 cause c2 will need to continue being left position of c;
          	for(var r2 = r-1; r2>=0; r2 -= 1) {
                // if the two spots have the same number
            	if(grid[r1][c] === grid[r2][c]){
              		grid[r2][c] = grid[r2][c] + grid[r1][c];
                    grid[r1][c] = 0;
                    score = score + grid[r2][c];
                  $('#score').html(score);
                  	break;
                }
              	// if the spot we're comparing left of c (left of c is c2) is 0
                else if (grid[r2][c] === 0){
                  grid[r2][c] = grid[r1][c];
                  grid[r1][c] = 0;
                  r1 -= 1
                }
              // if the numbers are different
              else{
                break;
              }
            }
          }
        }
      }
    }


    function moveRight() {
    	for(var r = 0; r < 4; r++){
      	for(var c = 2; c >= 0; c--){ 
        	if(grid[r][c] == 0){
          	continue;
          } 
          else {
            var c1 = c
          	for(var c2 = c+1; c2<=3; c2 += 1){
                // if the two spots have the same number
            	if(grid[r][c1] === grid[r][c2]){
              		grid[r][c2] = grid[r][c2] + grid[r][c1];
                  grid[r][c1] = 0;
                  score = score + grid[r][c2];
                  $('#score').html(score);
                  break;
              }
              	// if the spot we're comparing right of c (right of c is c2) is 0
              else if (grid[r][c2] === 0){
                grid[r][c2] = grid[r][c1];
                grid[r][c1] = 0;
                c1 += 1;
              }
              // if the numbers are different
              else{
                break;
              }
            
            }
          }
        }
      }
    }

    function moveDown() {
    	for(var c = 0; c < 4; c++){
      	for(var r = 2; r >= 0; r--){ 
        	if(grid[r][c] == 0){
          	continue;
          } 
          else {
            var r1 = r
          	for(var r2 = r+1; r2<=3; r2 += 1){
                // if the two spots have the same number
            	if(grid[r1][c] === grid[r2][c]){
              		grid[r2][c] = grid[r2][c] + grid[r2][c];
                  grid[r1][c] = 0;
                  score = score + grid[r2][c];
                  $('#score').html(score);
                  break;
              }
              	// if the spot we're comparing right of c (right of c is c2) is 0
              else if (grid[r2][c] === 0){
                grid[r2][c] = grid[r1][c];
                grid[r1][c] = 0;
                r1 += 1;
              }
              // if the numbers are different
              else{
                break;
              }
            
            }
          }
        }
      }
    }






  document.onkeydown = function(event) {
    //console.log("keydown event");
    switch (event.which) {
        case 37: 
            moveLeft();
            addNumber().animate({opacity: .5,height:"50%"});
            break;
        case 38:
            //alert("case 38"); 
            moveUp();
            addNumber();
            break;
        case 39:
            moveRight(); 
            addNumber();
            break;
        case 40: 
            moveDown();
            addNumber(); 
            break;
      }
  }   

});

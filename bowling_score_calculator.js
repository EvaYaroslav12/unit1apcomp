// Bowling Score Calculator

// You will be creating a single player bowling score calculator. Bowling has
// 10 frames, each frame consisting of 2 attempts to knock down the 10 pins.
// Scores are calculated each frame in the following way
// Open Frame: you don’t clear all 10 pins, just calculate number knocked
// down
// Spare (/): your two rolls together knock down all 10 pins. The frame score
// is 10 plus whatever you knock down on your very next roll (the first roll
// of the next frame).
// Strike (X): you knock down all 10 pins on your first roll, so you don't get a
// second roll that frame. The frame score is 10 plus the pins from your
// next two rolls, wherever they happen to fall (if the next frame is also a
// strike, that means looking one roll into the frame after that).
// Frame 10: Bonus rolls given immediately. Strike on roll 1 means 2 more
// rolls for 3 total. Spare on roll 2 means 1 more roll (3 total). Otherwise you
// get 2 normal rolls.
// Perfect game: is 12 strikes in a row for 300 points
// Ex. Frame 1 is 30 points because (10 + frame 2 + frame 3)

function lizardcalc (rayray){
    const attempts= listy.filter(item => Array.isArray(item)).length-1;
    let count = 0
    for (let i = 0; i <= attempts; i++){
        // let checky =(rayray[i].length);
        //check if its a strike
        if (rayray[i][0]==10){
            //check if the next roll is a strike
            if (rayray[i+1][0]!=10){ // next isnt a strike
                count = count+10+rayray[i+1][0]+rayray[i][1]
            }
            if (rayray[i+1][0]==10){ // next is a strike
                count = count+10+rayray[i+1][0]+rayray[i+2][0]
            }
        }
        //check if its a spare
        if (rayray[i][0]+rayray[i][1]==10);{
            count = count+10+rayray[i+1][0]
            console.log(count)
        }
        // count if neither
        if (rayray[i][0]+rayray[i][1]!=10);{
            count = count+rayray[i][0]+rayray[i][1]
        }
        // else console.log(rayray[i])
        // console.log(rayray[i]) 7
        console.log (count)
    }
}
listy = [[1,9], [4,3], [10],[2,3], [10], [10], [5,4], [9,1], [7,2], [2,4], [6,3],[3,6]]
lizardcalc(listy)
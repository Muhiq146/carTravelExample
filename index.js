const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    displayNone();
    startTheGame();
});
const rst = document.getElementById('rst');
rst.addEventListener('click', () => {
   document.querySelector('.body').innerHTML = "";
   document.querySelector('.start').innerHTML = "";
   displayBlock();
   document.getElementById('btn').style.display = "block";
   document.getElementById('rst').style.display = 'none';
});

const body = document.querySelector('.body');
const start = document.querySelector('.start');

function displayBlock() {
    document.getElementById('display').style.display = "block";
}
function displayNone() {
    document.getElementById('display').style.display = "none";
}
function startTheGame() {
    const header = document.createTextNode('Game Started!');
    start.appendChild(header);
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    let num4 = document.getElementById('num4').value;
    let num5 = document.getElementById('num5').value;
    let num6 = document.getElementById('num6').value;

    if ('' == num1 || '' == num2 || '' == num3 || '' == num4 || '' == num5 || '' == num6){
        alert("All fields are mandatory.");
        return false;
    }

    const p = {
        PP1: num1,
        PP2: num2,
        PP3: num3,
        PP4: num4,
        PP5: num5,
        PP6: num6,
    };

    const pps = document.createTextNode(
        `Petrol Pumps generated at ${p.PP1}, ${p.PP2}, ${p.PP3}, ${p.PP4}, ${p.PP5}, ${p.PP6}`
    );
    body.appendChild(pps);
    let num = 0;
    let posi = 0;
    let rem = 50;
    let po = 100 - posi;
    while (posi < 100) {
        // Generate a random number
        const random = Math.floor(Math.random() * 6);
        // For every random number you generate, add it to posi to get the position
        // till that point
        posi = posi + random;
        rem = parseInt(rem - random * 2);
        num++;
        switch (posi) {
            case 10:
                rem += 30;
                console.log(`petrol rem ${rem}`);
                break;
            case 27:
                rem += 30;
                console.log(`petrol rem ${rem}`);
                break;
            case 37:
                rem += 30;
                console.log(`petrol rem ${rem}`);
                break;
            case 39:
                rem += 30;
                console.log(`petrol rem ${rem}`);
                break;
            case 62:
                rem += 30;
                console.log(`petrol rem ${rem}`);
                break;
            case 75:
                rem += 30;
                console.log(`petrol rem ${rem}`);
                break;
            default:
                break;
        }
        // check whether you have reached the destination or not
        // if reached break out of the loop and display destination
        // reached!!!!

        if (rem <= 0) {
            document.body.querySelector(
                '.body'
            ).innerHTML += `Game Over<br/>
                    `;
            break;
        }
        if (posi >= 100) {
            document.body.querySelector(
                '.body'
            ).innerHTML += `<br/> - ${po}Kms travelled, Destination reached<br/>
                    `;
            break;
        }
        document.getElementById('btn').style.display = "none";
        document.getElementById('rst').style.display = 'block';


        // append the posi and the step

        document.body.querySelector(
            '.body'
        ).innerHTML += `<br/>Step ${num} - ${random} Kms travelled, position ${posi}Kms,
                petrol remaining (${rem}L)
                <br/>`;
    }
}

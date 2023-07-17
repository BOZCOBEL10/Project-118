currentRotation = 0;
aui = document.getElementById("MyAudio")
quick_data_draw_set = [];
timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
sketch = quick_data_draw_set[Math.random()];
function preload(){

}

function setup(){
    canvas = createCanvas(100,100)
    canvas.center();
    background("white");
    document.getElementById("tbd").innerHTML="Sketch To be drawn:"+sketch;
}

function draw() {
    check_sketch();
    if (drawn_sketch === sketch) {
      answer_holder = "set";
      score++;
    }
    document.getElementById("score").innerHTML = "Score: " + score;
  };

function  check_sketch() {
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer: " + timer_counter;
    console.log(timer_counter);

    if (timer_counter > 400) {
      timer_counter = 0;
      timer_check = "completed";
    }

    if (timer_check === "completed" || answer_holder === "set") {
      timer_check = "";
      answer_holder = "";
      updateCanvas();
    }
  };

function updateCanvas(){
 background('white');
 random_number = Math.floor(Math.random()*quick_data_draw_set.length);
 console.log("Random Sketch Name:", quick_draw_data_set[Math.random()]);
}

function Balllin(){
    var bodyElement = document.body;
    currentRotation += 15;
    bodyElement.style.transform = 'rotate(' + currentRotation + 'deg)';
}    

function fort(){
    aui.play();
    setInterval(Balllin, 400);
}

function clearCanvas(){
    background("white");
}
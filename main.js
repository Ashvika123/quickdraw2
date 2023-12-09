quick_draw_data_set = ["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser"];
random_number=Math.floor((Math.random()*quick_draw_data_set.length)+ 1);
console.log(quick_draw_data_set[random_number]);
sketch=quick_draw_data_set[random_number];
document.getElementById('sketch_name').innerHTML = 'Sketch To Be Drawn:'
+sketch;

timer_counter = 0;
timer_check = "" ;
drawn_sketch = "";
answer_holder = "";
score ="0" ;
function setup() {
  canvas = createCanvas(280, 280);
  canvas.center();

  background("white");
  canvas.mouseRealesed(classifyCanvas);
}

function draw() {
  check_sketch();
  if(drawn_sketch == sketch)
  {
    answer_holder="set";
    score++;
    document.getElementById("score").innerHTML = "score" + score;
  }
  image(video, 0, 0, 600, 500);

  fill("#FF0000");
  stroke("#FF0000");
}
function check_sketch() {
timer_counter++;
document.getElementById("Timer").innerHTML = "timer" + timer_counter;
console.log(timer_counter);
if(timer_counter > 400){
  timer_counter = 0;
  timer_check = "completed";
}

if(timer_check == "completed" || answer_holder == "set"){
  timer_check = "";
  answer_holder = "" ;
  updateCanvas();
}

}


function updateCanvas() {
  background("white");
  random_number=Math.floor((Math.random()*quick_draw_data_set.length)+ 1);
  console.log(quick_draw_data_set[random_number]);
  sketch=quick_draw_data_set[random_number];
  document.getElementById('sketch_name').innerHTML = 'Sketch To Be Drawn:'
  +sketch;
}
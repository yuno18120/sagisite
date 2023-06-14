let run=new Array(100);
let count=0;
let count2=0;
let start=false;
let color=document.getElementById("bColor");
let music=document.getElementById("audio");

document.addEventListener("click",click);
document.addEventListener("mousemove",reset);
music.addEventListener("ended",reseting);

function click(){
    if(!start){
        count=0;
        document.getElementById("t").innerText='';
    }
    start=true;
    music.play();
}
function reset(){
    if(music.currentTime>=25){
        music.currentTime=0;
    }
}
function reseting(){
    music.play();
}
for(let i=0;i<100;i++){
    run[i]=false;
}

if(run[4]==false){
    document.getElementById("button").style.visibility="hidden";
}

function inText(){
    if(start){
        if(run[0]){
            document.getElementById("t2").innerText="あなたのパソコンはトロイの木馬ウィルスに感染しました";
        }
        if(run[1]){
            document.getElementById("t3").innerText="放置しておくとこのパソコンは完全に乗っ取られ、二度と使えなくなります";
        }
        if(run[2]){
            document.getElementById("t4").innerText="これは詐欺ではありません";
        }
        if(run[3]){
            document.getElementById("t5").innerText="解決するには下のボタンをクリックしてください";
        }
        if(run[4]){
            document.getElementById("button").style.visibility="visible";
        }
    }
}
function countup(){
    count2++;
    if(start&&!run[4]){
        count++;
    }
    if(count>=0){
        run[0]=true;
    }
    if(count>=15){
        run[1]=true;
    }
    if(count>=30){
        run[2]=true;
    }
    if(count>=45){
        run[3]=true;
    }
    if(count>=60){
        run[4]=true;
    }

    if(count2%10>=0&&count2%10<=5){
        color.style.backgroundColor="rgb(100,0,0)";
    }else{
        color.style.backgroundColor="black";
    }
}
setInterval(countup,100);
setInterval(inText,100);

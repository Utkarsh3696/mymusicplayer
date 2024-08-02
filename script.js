let play = document.getElementById("play");
let pausebtn = document.getElementById("pause");
let durations = document.getElementById("duration");
let timerstart = document.getElementById("timer-start");
let progressbar = document.getElementById("progressbar");
let footer = document.getElementById("footer");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let titleshow = document.getElementById("titleshow");
let artistshow = document.getElementById("artistshow");
// let onesongplayer = document.getElementById("onesongplayer");
let showbig = document.getElementById("showbig");
let closes = document.getElementById("close");
// let maintag = document.getElementById("maintag");
let volumerng = document.getElementById("volume")
let volumeicon = document.getElementById("volumeicon");
const status = document.querySelector(".status");
const fill = document.querySelector(".fill");
const tumb = document.querySelector(".tumb");
const rangeValue = document.getElementById("rangeValue");
const musicstatus = document.querySelector(".musicstatus");
const musicFill = document.querySelector(".music-fill");
const musicThumb = document.querySelector(".music-thumb");
const musicValue = document.getElementById("musicValue");

let count =0;
let a ="";
const fileNames =
    [
        "MP3files/02 - Satranga (320 Kbps).mp3",
        "MP3files/03 - Papa Meri Jaan (320 Kbps).mp3",
        "MP3files/04 - Arjan Vailly (320 Kbps).mp3",
        "MP3files/09 - Abrars Entry Jamal Kudu (320 Kbps).mp3",
        "MP3files/12 - Saari Duniya Jalaa Denge (Extended Film Version) (320 Kbps).mp3",
        "MP3files/29316467_on-hold-phone-operator-loop_by_waderman_preview.mp3",
        "MP3files/ANIMAL_Ranvijay’s Entry Medley (Audio) Ranbir Kapoor _A.R. Rahman,Threeory Band _Sandeep _Bhushan K.mp3",
        "MP3files/Badass-MassTamilan.dev.mp3",
        "MP3files/beep-104060.mp3",
        "MP3files/Bloody-Sweet-MassTamilan.dev.mp3",
        "MP3files/Dakhancha Raja Jotiba Maza DJ Song _ Jyotibachya Navane Chang Bhala _ NS Production & DJ Abhishek.mp3",
        "MP3files/decidemp3-14575.mp3",
        "MP3files/Dhoni for a reason #shorts #viral #trending #viratkohli #cricket #india #dhoni.mp3",
        "MP3files/Eyy Bidda Idhi Naa Adda.mp3",
        "MP3files/Happy New Year Sound Effect.mp3",
        "MP3files/Lokiverse-2.0-MassTamilan.dev.mp3",
        "MP3files/Naa-Ready-MassTamilan.dev.mp3",
        "MP3files/pop-39222.mp3",
        "MP3files/Quiz-show-background-music-loop.mp3",
        "MP3files/Srivalli.mp3",
        "MP3files/start-13691.mp3",
        "MP3files/switch-click-and-beep-001a-11602.mp3",
        "MP3files/The Best Sport Sound Effects for FREE  Football, Basketball, Cricket, Rugby  Sport Sounds Saga.mp3",
        "MP3files/[iSongs.info] 01 - You Rock My World.mp3",
        "MP3files/[iSongs.info] 02 - Nuvvunte.mp3",
        "MP3files/[iSongs.info] 03 - O My Brotheru.mp3",
        "MP3files/[iSongs.info] 04 - Thakadimithom.mp3",
        "MP3files/[iSongs.info] 05 - Feel My Love.mp3",
        "MP3files/[iSongs.info] 06 - Aa Ante Amalapuram.mp3",
        "MP3files/01 - Hua Main (320 Kbps).mp3"
      ];
      
      let artistsList = [
        "Arijit Singh",
        "Arijit Singh",
        "Arijit Singh",
        "Arijit Singh",
        "Arijit Singh",
        "Arijit Singh",
        "Waderman",
        "A.R. Rahman, Threeory Band, Sandeep, Bhushan K, Ranbir Kapoor",
        "MassTamilan",
        "Unknown",
        "MassTamilan",
        "Unknown",
        "Unknown",
        "NS Production, DJ Abhishek",
        "Unknown",
        "Unknown",
        "Unknown",
        "Unknown",
        "MassTamilan",
        "MassTamilan",
        "Unknown",
        "Unknown",
        "Javed Ali",
        "Unknown",
        "Unknown",
        "Unknown",
        "Michael Jackson",
        "Unknown",
        "Unknown",
        "Unknown",
        "Unknown",
        "Unknown",
        "Unknown"
        ];
        
        
//   onesongplayer.style.display="none";

  let audio =new Audio(`${fileNames[0]}`);

  function load(n) {
    if(n>fileNames)
    {
        audio = new Audio(`${fileNames[fileNames.length]}`);  
    }
    else if(n<0)
    {
        audio = new Audio(`${fileNames[fileNames.length]}`);  
    }
    else
    {
    audio = new Audio(`${fileNames[n]}`);
    }
   
  }

next.addEventListener("click",()=>{
    nextmusic();
    
})
prev.addEventListener("click",()=>{
    prevmusic();
    
})

play.addEventListener("click",()=>{
    playmusic();
   
});

closes.addEventListener("click",()=>{
    onesongplayer.style.display="none";
    maintag.style.display="grid";
})


showbig.addEventListener("click",()=>{

    showbig.style.width="200px";
    showbig.style.height="200px";
    closes.style.marginTop="100px";
    closes.style.marginLeft="50%";
    footer.style.flexDirection="column";
    footer.style.position="absolute";
    footer.style.height="100vh";
    footer.style.width="100%";
    closes.style.display="inline-block";
    

});

closes.addEventListener("click",()=>{
    showbig.style.width="70px";
    showbig.style.height="70px";
    closes.style.removeProperty("margin-top");
    closes.style.removeProperty("margin-left");
    closes.style.display="none";
    footer.style.removeProperty('position');
    footer.style.removeProperty('height');
    footer.style.removeProperty('width');
    footer.style.flexDirection="row";
    
})


pausebtn.addEventListener("click",()=>{
   clearInterval(a);
    pausebtn.style.display = "none";
    console.log("clicked");

    document.getElementById("play").style.display="inline-block";
    audio.pause();
});

function upadateProgess() {
    a = setInterval(()=>{
   
        const cc = audio.currentTime;
        const dura = audio.duration;
        let per = (cc/dura )* 100;
        // progressbar.style.width=`${Math.round(per)}%`;
        musicFill.style.width = `${per}%`;
        musicThumb.style.left= `${per}%`;
        footer.style.borderTop = `100% solid red`;
        timerstart.innerHTML=`${Math.round(cc)}`;
        console.log(cc,dura,per);

    },1000)
}
function playmusic() {
    clearInterval(a);
    document.getElementById("pause").style.display = "none";
    console.log("clicked");

    document.getElementById("play").style.display="inline-block";
    audio.pause();
  
    setTimeout(()=>{
        let name = fileNames[count].substring(9);
        name = name.replace(".mp3"," ");
        titleshow.innerHTML=`${name}`;
        artistshow.innerHTML=`${artistsList[count]}`;
        play.style.display = "none";
        console.log("clicked");
        document.getElementById("pause").style.display="inline-block";
        console.log(audio);
        audio.play();
        // setTimeout(()=>{
        const songdura = Math.round(audio.duration);
        durations.innerHTML=`${songdura}s`;
        // },1000) 
        upadateProgess();
    //    setTimeout(()=>{
    //     nextmusic();
    //    },songdura*1000)
    },1000)
  

}

function nextmusic(params) {
    audio.pause();
    clearInterval(a);
    
    if(count<=fileNames.length)
    {
        count++;
        console.log(count);
        load(count);
        playmusic();
    }
}
function prevmusic(params) {
    audio.pause();
    clearInterval(a);
    clearInterval(a);
    document.getElementById("pause").style.display = "none";
    console.log("clicked");

    document.getElementById("play").style.display="inline-block";
    audio.pause();
    if(count>0)
    {
        count--;
        console.log(count);
        load(count);
        playmusic();
    }
}

musicstatus.addEventListener("mousedown",(event)=>{
    const containerWidth  = musicstatus.clientWidth;
    const offsetX = event.clientX - musicstatus.getBoundingClientRect().left;
    const percentage = Math.min(Math.max(offsetX / containerWidth, 0), 1)*100;
    updateMusic(percentage);


   const onMouseMove = (event) => {
    const offsetX = event.clientX - musicstatus.getBoundingClientRect().left;
    const percentage = Math.min(Math.max(offsetX / containerWidth, 0), 1)*100;
    updateMusic(percentage);
};

const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
};

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
});

status.addEventListener("mousedown",(event)=>{
    const containerWidth  = status.clientWidth;
    const offsetX = event.clientX - status.getBoundingClientRect().left;
    const percentage = Math.min(Math.max(offsetX / containerWidth, 0), 1) * 100;
    updateRange(percentage);


   const onMouseMove = (event) => {
    const offsetX = event.clientX - status.getBoundingClientRect().left;
    const percentage = Math.min(Math.max(offsetX / containerWidth, 0), 1) * 100;
    updateRange(percentage);
};

const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
};

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
});

const updateRange = (percentage) => {
fill.style.width = `${percentage}%`;
tumb.style.left = `${percentage}%`;
rangeValue.value = percentage;
audio.volume = percentage/100;
console.log(percentage);
};

const updateMusic=(a)=>
{
    
    // console.log(a);
    const dura = audio.duration;
    let per = (a/100)* dura;

    // progressbar.style.width=`${Math.round(per)}%`;
    audio.currentTime= Math.round(per);
    musicFill.style.width = `${a}%`;
    musicThumb.style.left= `${a}%`;
    
}




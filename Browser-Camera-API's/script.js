//<!--browser get camera and mic-->
//  <!--we are getting in the form of stream-->
//<!--navigator is for browser apis-->
//<!--fetching the apis-->
//<!--aim audio video element feed-->
//<!--aim record the current feed on press of record button and stop on press the button and start downloading-->

let constraints = {
  audio: true,
  video: true,
};
let videoElem = document.querySelector("video");
let audioElem = document.querySelector("audio");
let recordbtn = document.querySelector(".record");
let pausebtn = document.querySelector(".pause");
let capture = document.querySelector(".capture");
let filter_overlay = document.querySelector(".filter_overlay");
let filter_array = document.querySelectorAll(".filter");
let timings = document.querySelector(".timing");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let counter = 0;
let isvideopaused = false;
let curr_filter;
let scale = 1;
let clearObj;
// here the getusermedia return us the promise
// based on the promise is resolved or rejected
// and in resolved we get a stream
let recording = [];
let isrecording = false;
let ispaused = false;
let curr_recording;
plus.addEventListener("click", () => {
  if (scale < 2) {
    scale += 0.1;
    videoElem.style.transform = `scale(${scale})`;
  }
});
minus.addEventListener("click", () => {
  if (scale > 1) {
    scale -= 0.1;
    videoElem.style.transform = `scale(${scale})`;
  }
});
for (let i = 0; i < filter_array.length; i++) {
  filter_array[i].addEventListener("click", () => {
    filter_overlay.style.backgroundColor =
      filter_array[i].style.backgroundColor;
    curr_filter = filter_overlay.style.backgroundColor;
  });
}
function startTimer() {
  timings.style.display = "block";
  function fn() {
    // hours
    let hours = Number.parseInt(counter / 3600);
    let RemSeconds = counter % 3600;
    let mins = Number.parseInt(RemSeconds / 60);
    let seconds = RemSeconds % 60;
    hours = hours < 10 ? `0${hours}` : hours;
    mins = mins < 10 ? `0${mins}` : `${mins}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    timings.innerText = `${hours}:${mins}:${seconds}`;
    if (!ispaused) counter++;
  }
  clearObj = setInterval(fn, 1000);
}
function stopTimer() {
  timings.style.display = "none";
  clearInterval(clearObj);
}
capture.addEventListener("click", () => {
  let canvas = document.createElement("canvas");
  canvas.height = videoElem.videoHeight;
  canvas.width = videoElem.videoWidth;
  let tool = canvas.getContext("2d");
  //zoom in and zoom out before drawing the image on canas
  tool.scale(scale, scale);
  const x = (tool.canvas.width / scale - videoElem.videoWidth) / 2;
  const y = (tool.canvas.height / scale - videoElem.videoHeight) / 2;
  // console.log(x, y);
  tool.drawImage(videoElem, x, y);
  // tool.drawImage(videoElem, 0, 0);
  if (curr_filter) {
    tool.fillStyle = curr_filter;
    //from o,o to x,y  means ->left and down
    tool.fillRect(0, 0, canvas.width, canvas.height);
  }
  //we have to draw the filter on image not image on filter
  // tool.drawImage(videoElem,0,0);

  let url = canvas.toDataURL();
  let a = document.createElement("a");
  a.href = url;
  a.download = "file.png";
  a.click();
  a.remove();
});

recordbtn.onclick = () => {
  if (curr_recording == undefined) {
    alert("first give access to camera and microphone");
    return;
  }

  if (!isrecording) {
    recordbtn.innerText = "Recording...";
    curr_recording.start();
    startTimer();
    recordbtn.style.animation = "bounce 1.5s ease-in-out  infinite";
  } else {
    recordbtn.innerText = "Record";
    curr_recording.stop();
    recordbtn.style.animationName = "none";
    stopTimer();
  }
  isrecording = !isrecording;
};

let vidplay = () => {
  videoElem.play();
};
let vidpause = () => {
  videoElem.pause();
};

pausebtn.onclick = () => {
  if (curr_recording == undefined) {
    alert("first give access to camera and microphone");
    return;
  }
  if (!isvideopaused) {
    vidpause();
    pausebtn.innerText = "Paused";
    pausebtn.style.animation = "bounce 1.5s ease-in-out  infinite";
  } else {
    vidplay();
    pausebtn.innerText = "Pause";
    pausebtn.style.animation = "none";
  }
  isvideopaused = !isvideopaused;
  if (!ispaused) {
    try {
      curr_recording.pause();
      pausebtn.innerText = "Paused";
      pausebtn.style.animation = "bounce 1.5s ease-in-out  infinite";
    } catch (err) {
      //print error here or print nothing
    }
  } else {
    //  vidplay();

    try {
      curr_recording.resume();
      pausebtn.innerText = "pause";
      pausebtn.style.animation = "none";
    } catch (err) {
      //print error here or print nothing
    }
  }
  ispaused = !ispaused;
};
let userMediaPrmoise = navigator.mediaDevices.getUserMedia(constraints);
userMediaPrmoise
  .then((stream) => {
    videoElem.srcObject = stream;
    //  audioElem.srcObject=stream;
    curr_recording = new MediaRecorder(stream);
    curr_recording.ondataavailable = (e) => {
      recording.push(e.data);
    };
    // curr_recording.onstart=()=>{
    //     alert("Recording started")
    // }
    //here we have to stop the recording and after stopping the recording
    //we have to download it
    curr_recording.onstop = () => {
      //here download the data after stop the recording
      const blob = new Blob(recording, { type: "video/mp4" });
      const url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.download = "file-mp4";
      a.href = url;
      a.click();
      //clear the recording array that stores the video data
      recording = [];
    };
  })
  .catch((err) => {
    console.log(err);
    alert("please allow both microphone and camera");
  });
/*
    using async await
    async function MediaElements(){
        try{
            let stream= await navigator.mediaDevices.getUserMedia(constraints)
            videoElem.srcObject=stream;
            audioElem.srcObject=stream;
        }catch(error){
            alert("please allow both microphone and camera")
        }
    }
    MediaElements()
*/

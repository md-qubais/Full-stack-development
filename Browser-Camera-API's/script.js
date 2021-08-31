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
// here the getusermedia return us the promise
// based on the promise is resolved or rejected
// and in resolved we get a stream
let recording = [];
let isrecording = false;
let ispaused = false;
let curr_recording;
recordbtn.onclick = () => {
  if (curr_recording == undefined) {
    alert("first give access to camera and microphone");
    return;
  }
  if (!isrecording) {
    recordbtn.innerText = "Recording...";
    curr_recording.start();
  } else {
    recordbtn.innerText = "Record";
    curr_recording.stop();
  }
  isrecording = !isrecording;
};
pausebtn.onclick = () => {
  if (curr_recording == undefined) {
    alert("first give access to camera and microphone");
    return;
  }
  if (!ispaused) {
    curr_recording.pause();
    pausebtn.innerText = "Paused";
  } else {
    curr_recording.resume();
    pausebtn.innerText = "pause";
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

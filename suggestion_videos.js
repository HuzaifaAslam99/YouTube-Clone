// const storedContainer = localStorage.getItem("suggestion_video");

let storedArray = JSON.parse(localStorage.getItem('suggestion_video'));

let VideoData = storedArray[1] 
let videoplay = storedArray[0] 
console.log(videoplay);

const video = document.querySelectorAll(".video2");
video.forEach(element=> {
    let videoData = element.getAttribute("video-data");
            if (videoData===VideoData){
                const video = element.outerHTML
                localStorage.setItem('video', video);
                const url = element.getAttribute("data-url");
                window.location.href = url;
            }
    // });
});

let array = []
video.forEach(element => {
    array.push({
        InnerHTML: element.innerHTML,
        videoData: element.getAttribute("video-data") // Store the attribute value
    });
});

localStorage.setItem('array',  JSON.stringify(array));
console.log(array);
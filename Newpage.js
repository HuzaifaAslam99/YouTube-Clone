let container = null;
let songElement = null;

window.addEventListener('DOMContentLoaded', (event) => {
  const storedContainer = localStorage.getItem("video");
  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = storedContainer;

  const parsedElement = tempContainer.firstElementChild;
  // console.log(parsedElement);

  const channel_logo = parsedElement.children[1].children[0].children[0].firstElementChild;
  // console.log(channel_logo);

  // const check = parsedElement.querySelector("div > :nth-child(2) > :nth-child(3)");
  channel_logo.className = "Channel-Logo";
  // check.classList.add("Channel-Logo"); 
  const wow = document.querySelector(".channel-img-name-subscribers")
  const referenceElement = wow.querySelector(".channel-name-subscribers");
  wow.insertBefore(channel_logo, referenceElement);

  const channel_name = parsedElement.children[1].children[0].children[1].children[1].children[0];

  channel_name.className = "Channel-Name";
  const wow2 = document.querySelector(".channel-name-subscribers")
  const referenceElement2 = wow2.querySelector(".subscribers");
  wow2.insertBefore(channel_name, referenceElement2);


  const channel_title = parsedElement.children[1].children[0].children[1].children[0]
  channel_title.className = "Title";
  const wow3 = document.querySelector(".title-info")
  const referenceElement3 = wow3.querySelector(".channel-subscribe-download");
  wow3.insertBefore(channel_title, referenceElement3);


  let video_array = [
    { id: "arshad nadeem", sub: "13.9M subscribers", path: "videos/Arshad Nadeem.mp4" },
    { id: "dreamers", sub: "8.68M subscribers", path: "videos/Dreamers BTS.mp4" },
    { id: "neymar", sub: "13.9M subscribers", path: "videos/Neymar Olympic Record.mp4" },
    { id: "best yorkers", sub: "11.5M subscribers", path: "videos/Best Yorkers.mp4" },
    { id: "winning moment", sub: "11.5M subscribers", path: "videos/winning moment.mp4" },
    { id: "nadal", sub: "2.37M subscribers", path: "videos/Nadal.mp4" },
    { id: "cro vs den", sub: "21.5M subscribers", path: "videos/Croatia vs Denmark.mp4" },
    { id: "ronaldo", sub: "40M subscribers", path: "videos/ronaldo.mp4" },
  ];
  //videos/Best of Rafael Nadal Australian Open.mp4
  const img = parsedElement
    // console.log(img);
// console.log(video_array);

  const imageId = img.getAttribute("video-data");
  console.log(imageId)
  const videoData = video_array.find(video => video.id === imageId);
  // console.log(videoData);

  if (videoData) {
    const package = document.querySelector(".package")
    const videoElement = document.createElement('video');
    videoElement.src = videoData.path
    const referenceElement4 = package.querySelector(".title-info");
    package.insertBefore(videoElement, referenceElement4)
    // console.log(videoData.path)
    videoElement.controls = true;
    // videoElement.play();


    let channel_subscribers = document.querySelector(".channel-name-subscribers")
    const subscribers = document.createElement("span")
    subscribers.innerHTML = videoData.sub
    subscribers.className = "subscribers"
    // console.log(subscribers);
    // console.log(channel_subscribers);
    channel_subscribers.appendChild(subscribers)


  }



  let new_array = []
  let video1_array = [
    { id: "arshad nadeem", sub: "13.9M subscribers", path: "videos/Arshad Nadeem.mp4" },
    { id: "dreamers", sub: "8.68M subscribers", path: "videos/Dreamers BTS.mp4" },
    { id: "neymar", sub: "13.9M subscribers", path: "videos/Neymar Olympic Record.mp4" },
    { id: "best yorkers", sub: "11.5M subscribers", path: "videos/Best Yorkers.mp4" },
    { id: "winning moment", sub: "11.5M subscribers", path: "videos/winning moment.mp4" },
    { id: "nadal", sub: "2.37M subscribers", path: "videos/Nadal.mp4" },
    { id: "cro vs den", sub: "21.5M subscribers", path: "videos/Croatia vs Denmark.mp4" },
    { id: "ronaldo", sub: "40M subscribers", path: "videos/ronaldo.mp4" },
  ];
  // console.log(parsedElement);

  const id1 = parsedElement.getAttribute('video-data')
  // console.log(id1);

  video1_array.forEach(element => {
    if (element.id !== id1) {
      new_array.push(element.id);
    }
  });

  let storedArray = JSON.parse(localStorage.getItem('array'));
  let count = 1;

  if (storedArray) {
    storedArray.forEach((content, index) => {
      if (content.videoData !== id1) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content.InnerHTML
        // console.log(tempDiv.innerHTML);


        // const parentId = `${index + 1}`;
        const parentId = `${count}`;

        const parent1 = document.getElementById(parentId);
        console.log(`Attempting to find element with ID: ${parentId}`);
        const ReferenceElement = parent1.querySelector(".suggestion-logo-channel-name-view-week")
        // console.log(ReferenceElement);
        
        // console.log(ReferenceElement);

        // console.log(tempDiv.innerHTML);

        const img = tempDiv.children[0]
        img.className = "suggestion-thumbnail"
        parent1.insertBefore(img, ReferenceElement)

        const Title = tempDiv.children[0].children[0].children[1].children[0]
        Title.className = "suggestion-title";
        const parent2 = parent1.children[1].children[0]
        // console.log(parent2);
        
        const ReferenceElement2 = parent1.querySelector(".suggestion-channel-name-view-week")
        parent2.insertBefore(Title, ReferenceElement2)


        const channel_name = tempDiv.children[0].children[0].children[1].children[0].children[0]
        // console.log(channel_name.innerHTML);
        channel_name.className = "suggestion-channel-name";
        const parent3 = parent1.children[1].children[0].children[1]
        // console.log(parent3)
        const ReferenceElement3 = parent1.querySelector(".suggestion-view-week")
        parent3.insertBefore(channel_name, ReferenceElement3)


        const views = tempDiv.children[0].children[0].children[1].children[0].children[0].children[0]
        // console.log(views.innerHTML);
        views.className = "suggestion-view";
        const parent4 = parent1.children[1].children[0].children[1].children[1]
        // console.log(parent4);    
        const ReferenceElement4 = parent1.querySelector(".suggestion-dot")
        parent4.insertBefore(views, ReferenceElement4)
        // console.log(tempDiv.innerHTML);


        const time = tempDiv.children[0].children[0].children[1].children[0].children[0].children[1]
        // console.log(time);
        time.className = "suggestion-weeks";
        const parent5 = parent1.children[1].children[0].children[1].children[1]
        // console.log(parent5);

        const ReferenceElement5 = parent1.querySelector(".suggestion-dot")
        parent5.insertBefore(time, ReferenceElement5.nextSibling)


            const channel_logo = tempDiv.children[0].children[0].children[0].firstElementChild
            console.log(channel_logo);
            channel_logo.className = "Suggestion-Channel-Logo";
            const parent6 = parent1.children[1]
            console.log(parent6);
            const ReferenceElement6 = parent1.querySelector(".suggestion-title-info")
            parent6.insertBefore(channel_logo, ReferenceElement6)            

        count++;

      }

    })
  } else {
    console.log("No array found in localStorage");
  }




})
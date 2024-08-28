let parsedElement;
let tempDiv;
let id1;
let arrayID = [];

// window.onload = function() {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme) {
//       document.documentElement.setAttribute('data-theme', savedTheme);
//       console.log("saved Theme");

//   }
// };


function Click() {

  window.addEventListener('DOMContentLoaded', (event) => {

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      console.log(savedTheme);
    }
    else {
      console.log("not");

    }

    const storedContainer = localStorage.getItem("video");
    // console.log(storedContainer);    
    // console.log("--------------");

    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = storedContainer;

    // console.log(tempContainer.innerHTML);

    parsedElement = tempContainer.firstElementChild;
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


    let channel_subscribe = document.querySelector(".channel-subscribe-download");
    let comments = document.querySelector(".comments");
    let arrow_down = document.querySelector(".arrow-down");
    let title_info = document.querySelector(".title-info");
    // if (channel_title) {
    console.log("Title element found:", channel_title);

    channel_title.addEventListener("click", () => {
      console.log("Clicked Title");

      channel_title.style.display = "none";


      channel_subscribe.style.display = "none";
      comments.style.display = "none";
      arrow_down.style.display = "block";

      arrow_down.style.display = "flex"
      arrow_down.style.justifyContent = "flex-end"
      arrow_down.style.alignItems = "center"

      // title_info.style.paddingLeft = "0px"
      // title_info.style.paddingRight = "0px"
      // title_info.style.height = "auto"

    });

    arrow_down.addEventListener("click", () => {
      channel_title.style.display = "block";
      channel_subscribe.style.display = "block";
      comments.style.display = "block";
      arrow_down.style.display = "none";

      channel_title.style.display = '-webkit-box';
      channel_title.webkitLineClamp = '2';
      channel_title.style.webkitBoxOrient = 'vertical';
      channel_title.style.textOverflow = 'ellipsis';

      channel_subscribe.style.height = "auto";

    });


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
    // console.log(imageId)
    const videoData = video_array.find(video => video.id === imageId);
    // console.log(videoData);

    if (videoData) {
      const package = document.querySelector(".package")
      const videoElement = document.createElement('video');
      videoElement.className = "video-play"
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
      channel_subscribers.appendChild(subscribers)

      subscribers.addEventListener('click', (e) => {
        console.log("Clicked Video");
      });
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

    id1 = parsedElement.getAttribute('video-data')
    // console.log(id1);
    // let Clicked_suggession = []
    video1_array.forEach(element => {
      if (element.id !== id1) {
        new_array.push(element.id);
      }
    });

    let storedArray = JSON.parse(localStorage.getItem('array'));
    let count = 1;
    let array0 = []

    // if (storedArray) {
    storedArray.forEach((content, index) => {
      if (content.videoData !== id1) {
        tempDiv = document.createElement('div');
        tempDiv.innerHTML = content.InnerHTML
        tempDiv.className = "suggestion-content-box"

        // console.log(content.videoData);
        // console.log(content);

        // console.log(su);



        // const parentId = `${index + 1}`;
        const parentId = `${count}`;
        tempDiv.id = parentId;
        tempDiv.setAttribute("video-data", content.videoData)

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

        // const comments = tempDiv.children[0]

        // console.log("Comments: "+comments)

        // console.log(comments);



        count++;
        arrayID.push(tempDiv)
        // content.video

        const suggestion_video5 = document.querySelector(".suggestion-content-box");
        suggestion_video5.setAttribute("video-data", content.videoData)


        // console.log(suggestion_video5.getAttribute("video-data"));

        //  array0.push(suggestion_video5.getAttribute("video-data"));

        // array0.push(suggestion_video5)
        // console.log(array0);
        // for (const element of array0) {
        //     console.log(element.getAttribute("video-data"));
        // }
        // console.log(tempDiv);
        // tempDiv.className = "suggestion-content-box"
      }
    })


  })


}
Click()



const suggestion_videos = document.querySelectorAll(".suggestion-content-box");

suggestion_videos.forEach(Clicked => {
  Clicked.addEventListener('click', function () {
    let tempDivID;
    arrayID.forEach(element => {
      if (element.id === Clicked.id) {
        tempDivID = Clicked.id;
      }
    });

    arrayID.forEach(element2 => {
      if (element2.id === tempDivID) {
        console.log(tempDivID);

        let array = JSON.parse(localStorage.getItem('array'));

        array.forEach(element3 => {
          let video3 = element3.videoData;
          let tempDivAtt = element2.getAttribute('video-data');

          if (video3 === tempDivAtt) {
            let video = document.createElement('div');
            video.innerHTML = element3.InnerHTML;

            video.setAttribute("video-data", video3);

            console.log(video.outerHTML);
            localStorage.setItem('video', video.outerHTML);

            // Reload the page to reflect the changes in the stored video
            // window.location.href = window.location.href;
            location.reload();
            // const url = Clicked.getAttribute("data-url");
            // window.location.href = url;
          }
        });
      }
    });
  });
});


const tempContainer = document.createElement('div');    
const profile1 = localStorage.getItem("profile");
tempContainer.innerHTML = profile1;

let profile = tempContainer.firstChild
profile.className = "logo"
console.log(profile);



document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.querySelector('.text');
  const cancelButton = document.querySelector('.cancel');
  const commentButton = document.querySelector('.comment');
  const availableComments = document.querySelector('.available-comments');

  // Function to clear the input field
  function clearComment() {
    inputField.value = ''; // Clear the input field
  }

  // Function to handle adding a comment
  function addComment() {
    const comment = inputField.value.trim();
    if (comment) {
      // Create a new comment element
      const commentElementBox = document.createElement('div');
      commentElementBox.className = "commentElementBox"
      // commentElement.appendChild(tempContainer.innerHTML)
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment-item');
      commentElement.textContent = comment;



      commentElementBox.appendChild(profile.cloneNode(true))
      commentElementBox.appendChild(commentElement);
      // commentElementBox.insertBefore(commentElement,profile.nextSibling)

      // Append the new comment to the available-comments section
      availableComments.appendChild(commentElementBox);
      // availableComments.appendChild(commentElement);

      // Clear the input field after adding the comment
      inputField.value = '';
    } else {
      console.log('No comment to add.');
    }
  }

  // Add event listeners
  cancelButton.addEventListener('click', clearComment);
  commentButton.addEventListener('click', addComment);


});




window.addEventListener('load', function () {
  const channel_subscribe = document.querySelector('.channel-subscribe-download'); // Change to your specific selector

  function updateStyles() {
    if (window.innerWidth > 850) {
      channel_subscribe.style.display = "flex";
      channel_subscribe.style.flexDirection = "row";
      channel_subscribe.style.alignItems = "center";
      channel_subscribe.style.justifyContent = "space-between";
    } else {
      // Optional: Reset styles if the width is less than or equal to 850px
      channel_subscribe.style.display = ""; // or "none" if you want to hide it
      channel_subscribe.style.flexDirection = "";
      channel_subscribe.style.alignItems = "";
      channel_subscribe.style.justifyContent = "";
    }
  }

  updateStyles(); // Run once on load
  window.addEventListener('resize', updateStyles); // Run on resize
});



let slideBox = document.querySelector('.cover-box');
let comments = document.querySelector('.comments');
let title_info = document.querySelector(".title-info");

function updateSlideBoxHeight() {
    setTimeout(() => {
        let video = document.querySelector('.video-play');
        // let heightPx = video ? video.offsetHeight : 0;
        let heightPx = video.offsetHeight;
        let viewportHeight = window.innerHeight;
        let remainingPx = viewportHeight - heightPx;

        slideBox.style.minHeight = `${remainingPx}px`;
        slideBox.style.overflowY = 'auto';

        if (window.innerWidth <= 850) {
            // Add event listeners only if they are not already attached
            comments.addEventListener("click", handleCommentsClick);
            const box = document.querySelector('.first-Comments');
            if (box) {
                box.addEventListener("click", handleBoxClick);
            }
        } else {
            // Remove event listeners if the width is greater than 850px
            comments.removeEventListener("click", handleCommentsClick);
            const box = document.querySelector('.first-Comments');
            if (box) {
                box.removeEventListener("click", handleBoxClick);
            }
            slideBox.style.display = "none";
        }
    }, 2);
}

function handleCommentsClick() {
    slideBox.style.display = "block";
    title_info.style.paddingLeft = "0px";
    title_info.style.paddingRight = "0px";
}

function handleBoxClick() {
    slideBox.style.display = "none";
    title_info.style.paddingLeft = "";
    title_info.style.paddingRight = "";
}

// Initial setup
updateSlideBoxHeight();

// Update on resize
window.addEventListener('resize', updateSlideBoxHeight);




document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.querySelector('.text1');
  const cancelButton = document.querySelector('.cancel1');
  const commentButton = document.querySelector('.comment1');
  const availableComments = document.querySelector('.available-comments1');

  // Function to clear the input field
  function clearComment() {
    inputField.value = ''; // Clear the input field
  }

  // Function to handle adding a comment
  function addComment() {
    const comment = inputField.value.trim();
    if (comment) {
      // Create a new comment element
      const commentElementBox = document.createElement('div');
      commentElementBox.className = "commentElementBox1"
      // commentElement.appendChild(tempContainer.innerHTML)
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment-item1');
      commentElement.textContent = comment;



      commentElementBox.appendChild(profile.cloneNode(true))
      commentElementBox.appendChild(commentElement);
      // commentElementBox.insertBefore(commentElement,profile.nextSibling)

      // Append the new comment to the available-comments section
      availableComments.appendChild(commentElementBox);
      // availableComments.appendChild(commentElement);

      // Clear the input field after adding the comment
      inputField.value = '';
    } else {
      console.log('No comment to add.');
    }
  }

  // Add event listeners
  cancelButton.addEventListener('click', clearComment);
  commentButton.addEventListener('click', addComment);

})

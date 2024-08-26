function Click() {
    window.addEventListener('DOMContentLoaded', (event) => {
      // Retrieve and parse stored container data
      const storedContainer = localStorage.getItem("video");
      if (!storedContainer) {
        console.error("No data found in local storage.");
        return;
      }
      const tempContainer = document.createElement('div');
      tempContainer.innerHTML = storedContainer;
      const parsedElement = tempContainer.firstElementChild;
  
      // Debugging
      console.log('Parsed Element:', parsedElement);
  
      // Update channel logo
      const channel_logo = parsedElement.querySelector('.some-selector'); // Replace with correct selector
      if (channel_logo) {
        channel_logo.className = "Channel-Logo";
        const wow = document.querySelector(".channel-img-name-subscribers");
        const referenceElement = wow.querySelector(".channel-name-subscribers");
        wow.insertBefore(channel_logo, referenceElement);
      } else {
        console.error('Channel logo not found.');
      }
  
      // Update channel name
      const channel_name = parsedElement.querySelector('.some-channel-name-selector'); // Replace with correct selector
      if (channel_name) {
        channel_name.className = "Channel-Name";
        const wow2 = document.querySelector(".channel-name-subscribers");
        const referenceElement2 = wow2.querySelector(".subscribers");
        wow2.insertBefore(channel_name, referenceElement2);
      } else {
        console.error('Channel name not found.');
      }
  
      // Update channel title
      const channel_title = parsedElement.querySelector('.some-channel-title-selector'); // Replace with correct selector
      if (channel_title) {
        channel_title.className = "Title";
        const wow3 = document.querySelector(".title-info");
        const referenceElement3 = wow3.querySelector(".channel-subscribe-download");
        wow3.insertBefore(channel_title, referenceElement3);
      } else {
        console.error('Channel title not found.');
      }
  
      // Video data setup
      let video_array = [
        { id: "arshad nadeem", sub: "13.9M subscribers", path: "videos/Arshad Nadeem.mp4" },
        { id: "dreamers", sub: "8.68M subscribers", path: "videos/Dreamers BTS.mp4" },
        { id: "neymar", sub: "13.9M subscribers", path: "videos/Neymar Olympic Record.mp4" },
        { id: "best yorkers", sub: "11.5M subscribers", path: "videos/Best Yorkers.mp4" },
        { id: "winning moment", sub: "11.5M subscribers", path: "videos/winning moment.mp4" },
        { id: "nadal", sub: "2.37M subscribers", path: "videos/Nadal.mp4" },
        { id: "cro vs den", sub: "21.5M subscribers", path: "videos/Croatia vs Denmark.mp4" },
        { id: "ronaldo", sub: "40M subscribers", path: "videos/ronaldo.mp4" }
      ];
  
      // Find video data based on stored element's attribute
      const imageId = parsedElement.getAttribute("video-data");
      console.log('Image ID:', imageId);
      const videoData = video_array.find(video => video.id === imageId);
      console.log('Video Data:', videoData);
  
      if (videoData) {
        const package = document.querySelector(".package");
        const videoElement = document.createElement('video');
        videoElement.src = videoData.path;
        videoElement.controls = true;
        const referenceElement4 = package.querySelector(".title-info");
        package.insertBefore(videoElement, referenceElement4);
  
        // Update subscribers info
        let channel_subscribers = document.querySelector(".channel-name-subscribers");
        const subscribers = document.createElement("span");
        subscribers.innerHTML = videoData.sub;
        subscribers.className = "subscribers";
        channel_subscribers.appendChild(subscribers);
      } else {
        console.error('Video data not found.');
      }
  
      // Create new array of suggestions
      let new_array = [];
      video_array.forEach(element => {
        if (element.id !== imageId) {
          new_array.push(element.id);
        }
      });
  
      let storedArray = JSON.parse(localStorage.getItem('array')) || [];
      let count = 1;
      let arrayID = [];
      let array0 = [];
  
      storedArray.forEach((content, index) => {
        if (content.videoData !== imageId) {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = content.InnerHTML;
  
          const parentId = `${count}`;
          const parent1 = document.getElementById(parentId);
          if (parent1) {
            console.log(`Attempting to find element with ID: ${parentId}`);
            
            const img = tempDiv.querySelector('.some-thumbnail-selector'); // Replace with correct selector
            if (img) {
              img.className = "suggestion-thumbnail";
              const ReferenceElement = parent1.querySelector(".suggestion-logo-channel-name-view-week");
              parent1.insertBefore(img, ReferenceElement);
  
              const Title = tempDiv.querySelector('.some-title-selector'); // Replace with correct selector
              if (Title) {
                Title.className = "suggestion-title";
                const parent2 = parent1.children[1].children[0];
                const ReferenceElement2 = parent1.querySelector(".suggestion-channel-name-view-week");
                parent2.insertBefore(Title, ReferenceElement2);
  
                const channel_name = tempDiv.querySelector('.some-channel-name-selector'); // Replace with correct selector
                if (channel_name) {
                  channel_name.className = "suggestion-channel-name";
                  const parent3 = parent1.children[1].children[0].children[1];
                  const ReferenceElement3 = parent1.querySelector(".suggestion-view-week");
                  parent3.insertBefore(channel_name, ReferenceElement3);
  
                  const views = tempDiv.querySelector('.some-views-selector'); // Replace with correct selector
                  if (views) {
                    views.className = "suggestion-view";
                    const parent4 = parent1.children[1].children[0].children[1].children[1];
                    const ReferenceElement4 = parent1.querySelector(".suggestion-dot");
                    parent4.insertBefore(views, ReferenceElement4);
  
                    const time = tempDiv.querySelector('.some-time-selector'); // Replace with correct selector
                    if (time) {
                      time.className = "suggestion-weeks";
                      const parent5 = parent1.children[1].children[0].children[1];
                      const ReferenceElement5 = parent1.querySelector(".suggestion-dot");
                      parent5.insertBefore(time, ReferenceElement5.nextSibling);
  
                      const channel_logo = tempDiv.querySelector('.some-channel-logo-selector'); // Replace with correct selector
                      if (channel_logo) {
                        channel_logo.className = "Suggestion-Channel-Logo";
                        const parent6 = parent1.children[1];
                        const ReferenceElement6 = parent1.querySelector(".suggestion-title-info");
                        parent6.insertBefore(channel_logo, ReferenceElement6);
                      } else {
                        console.error('Channel logo not found in tempDiv.');
                      }
                    } else {
                      console.error('Time element not found in tempDiv.');
                    }
                  } else {
                    console.error('Views element not found in tempDiv.');
                  }
                } else {
                  console.error('Channel name element not found in tempDiv.');
                }
              } else {
                console.error('Title element not found in tempDiv.');
              }
            } else {
              console.error('Thumbnail image not found in tempDiv.');
            }
  
            count++;
            arrayID.push(content);
            const suggestion_video5 = document.querySelector(".suggestion-content-box");
            if (suggestion_video5) {
              suggestion_video5.setAttribute("video-data", content.videoData);
              array0.push(suggestion_video5);
            } else {
              console.error('Suggestion content box not found.');
            }
          } else {
            console.error('Parent element not found.');
          }
        }
      });
  
      // Debugging
      array0.forEach(element => {
        console.log('Video Data Attribute:', element.getAttribute("video-data"));
      });
    });
  }
  Click();
  
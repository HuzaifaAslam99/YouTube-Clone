const savedTheme = localStorage.getItem('theme');
document.documentElement.setAttribute('data-theme', savedTheme);
console.log(savedTheme);



document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.Profile-logo');

    let currentTheme;
    currentTheme = document.documentElement.getAttribute('data-theme');
    // if (savedTheme) {
        // const savedTheme = localStorage.getItem('theme');
        // currentTheme = document.documentElement.setAttribute('data-theme', savedTheme);
        // currentTheme = document.documentElement.setAttribute('data-theme', savedTheme);
        // console.log(savedTheme);
    // }
    if (!currentTheme) {
        currentTheme = 'light';
        document.documentElement.setAttribute('data-theme', 'light');
    }
    console.log(currentTheme)

    function updateAppearanceText(currentTheme) {
        let appearanceWord;
        appearanceWord = document.querySelector('.appearance-word');
        if (appearanceWord) {
            appearanceWord.innerHTML = `Appearance : ${currentTheme === 'light' ? 'Light' : 'Dark'}`;
        }
    }


    logo.addEventListener('click', (event) => {
        event.stopPropagation();

        let options = document.querySelector('.options');
        let container = document.querySelector('.container');

        if (container) {
            if (options) {
                options.remove();
            } else {
                options = document.createElement('div');
                options.classList.add('options');
                options.innerHTML =
                    `<div class="appearance"> <div class="svg-word"><div class="small-box"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></div>
     <span class="appearance-word">Appearance : ${currentTheme === 'light' ? 'Light' : 'Dark'}</span></div>
                         <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                        color="#000000" fill="none">
                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
     </div>
     <div class="appearance">
     <div class="svg-word"><div class="small-box">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.9871 10.2401 20.8194 9.05112 20.484C6.18961 19.6769 3.70555 18.3204 3.10956 15.2816C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27704 3.10956 8.71845C3.70555 5.67963 6.18961 4.32314 9.05112 3.516C10.2401 3.18062 10.8346 3.01293 11.3156 3.00116C13.3831 2.95058 14.9264 4.52305 15 6.37499" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M10 12H21M10 12C10 11.2998 11.9943 9.99153 12.5 9.5M10 12C10 12.7002 11.9943 14.0085 12.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></div>
     <span class="appearance-word">Sign-In</span></div>
                         <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                        color="#000000" fill="none">
                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
     </div>`;
                options.style.height = "100px";
                options.style.width = "220px";
                options.style.display = "flex";
                options.style.flexDirection = "column";
                options.style.justifyContent = "center";
                container.appendChild(options);

                const logoRect = logo.getBoundingClientRect();
                options.style.top = `${logoRect.bottom}px`;
                // console.log(logoRect.bottom);
                
                options.style.right = "1px";
                options.style.marginRight = "70px";

                options.addEventListener('click', (event) => {
                    event.stopPropagation();
                });
                attachListeners()

            }
        } else {
            console.error('Container not found!');
        }
    });



    function attachListeners() {
        const divs = document.querySelectorAll('.appearance');
        const options = document.querySelector('.options');

        // options.addEventListener('click', (event) => {
        //     event.stopPropagation();
        // });

        let currentTheme;
        currentTheme = document.documentElement.getAttribute('data-theme');
        if (!currentTheme) {
            currentTheme = 'light';
            document.documentElement.setAttribute('data-theme', 'light');
        }
        updateAppearanceText(currentTheme);

        if (divs[0]) {
            divs[0].addEventListener('click', () => {
                options.innerHTML =
           `<div class="appearance-new" data-theme="dark">
            <div class="svg-word">
            <div class="tick" style="visibility: ${currentTheme === 'dark' ? 'visible' : 'hidden'}">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
          <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
           </div>
            <span class="appearance-new-word">Dark-Theme</span>
            </div>
            <svg class="arrow"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
            </div>

            <div class="appearance-new" data-theme="light">
            <div class="svg-word"><div class="tick" style="visibility: ${currentTheme === 'light' ? 'visible' : 'hidden'}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </div><span class="appearance-new-word">Light-Theme</span>
            </div>
            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
            </div>`;

            options.addEventListener('click', (event) => {
                event.stopPropagation();
            });

            const divs = document.querySelectorAll('.appearance-new');

            if (divs[0]) {
                divs[0].addEventListener('click', () => {
                    // Show tick for dark theme and hide for light theme
                    divs[0].querySelector('.tick').style.visibility = 'visible';
                    divs[1].querySelector('.tick').style.visibility = 'hidden';
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                });
            }
    
            if(divs[1]) {
                divs[1].addEventListener('click', () => {
                    // Show tick for light theme and hide for dark theme
                    divs[1].querySelector('.tick').style.visibility = 'visible';
                    divs[0].querySelector('.tick').style.visibility = 'hidden';
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                    // currentTheme = 'light';

                });
            }

            })
        }
       
        if (divs[1]) {
            divs[1].addEventListener('click', () => {
                alert('Hi');
            });
        }
    }


    document.addEventListener('click', (event) => {
        const options = document.querySelector('.options');
        const logo = document.querySelector('.Profile-logo');

        if (options && !options.contains(event.target) && !logo.contains(event.target)) {
            options.remove();
        }
    });

});


let hamburger = document.querySelector(".hamburger");
let close1 = document.querySelector(".cross-icon");
let left1 = document.querySelector(".left");

function applyHamburgerStyles() {
if ((window.innerWidth > 1040)){
    // left1.style.position = "relative";
    // left1.style.left = "0%";
    // left1.style.width = "15vw"

    left1.style.position = "";
    left1.style.left = "";
    left1.style.width = "";
}
else {
    left1.style.position = "absolute";
    left1.style.left = "-100%";
    left1.style.width = "220px"
}
 if(window.innerWidth <= 1040) { 

    hamburger.addEventListener("click", () => {
        hamburger.style.display = "none";
        close1.style.display = "block";
        left1.style.position = "absolute";
        left1.style.width = "220px";
        left1.style.left = "0%";
        console.log("hamburger clicked");
    });

    close1.addEventListener("click", () => {
        hamburger.style.display = "block";
        close1.style.display = "none";
        left1.style.left = "-100%";
    });
    } 
}

applyHamburgerStyles();
window.addEventListener("resize", applyHamburgerStyles);



const video = document.querySelectorAll(".video2");
video.forEach(element=> {
    element.addEventListener('click', function() {
       const video = element.outerHTML
            localStorage.setItem('video', video);
            const url = element.getAttribute("data-url");
            window.location.href = url;
    });
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


let profile1 = document.querySelector(".Profile-logo")
localStorage.setItem('profile', profile1.outerHTML);

// console.log("Profile1");
// console.log(profile1);




// const storedContainer = localStorage.getItem("suggestion_video");
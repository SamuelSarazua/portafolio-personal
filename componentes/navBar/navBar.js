let navBarDiv = document.createElement(`div`);
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement(`img`);
imgLogo.src = "https://w7.pngwing.com/pngs/1013/132/png-transparent-linux-distribution-tux-free-software-linux-kernel-linux-logo-bird-linux-thumbnail.png"
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Samuel Sarazua";
navBarDiv.appendChild(h2);


export { navBarDiv }

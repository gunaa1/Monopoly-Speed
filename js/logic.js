//window load logic
window.onload = function() {
    setTimeout(pageLoading, 2000);
};

//window close logic


//loading bar
function pageLoading() {
    document.getElementById("pageLoading").style.display = "none";
    document.getElementById("content").style.display = "block";
    progressBar();
}

//window scroll logic
window.onscroll = function() {
    progressBar();
    upButton();
};

//handles logic for the progress bar
function progressBar() {
    var scrollHeight = document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var hasVerticalScrollbar = scrollHeight > clientHeight;
    if (hasVerticalScrollbar) {
        document.getElementById('myProgress').style.display = 'block';
        document.getElementById('myBar').style.display = 'block';
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = scrollHeight - clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
    else {
        document.getElementById('myProgress').style.display = 'none';
        document.getElementById('myBar').style.display = 'none';
    }
}

//decides whether or not to show up button
function upButton() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll != 0) {
        document.getElementById('upbtn').style.display = 'block';
    }
    else {
        document.getElementById('upbtn').style.display = 'none';
    }
}

//loads correct content based on clicked link
function changeScreen(screenNum) {
    if (screenNum == 1) {
        document.getElementById("home").style.display = "block";
        document.getElementById("playGame").style.display = "none";
        document.getElementById("questions").style.display = "none";
    }
    else if (screenNum == 2) {
        document.getElementById("home").style.display = "none";
        document.getElementById("playGame").style.display = "block";
        document.getElementById("questions").style.display = "none";
    }
    else if (screenNum == 3) {
        document.getElementById("home").style.display = "none";
        document.getElementById("playGame").style.display = "none";
        document.getElementById("questions").style.display = "block";
    }
}

//miscellaneous
function alertCon() {
    alert("Submitting...");
}
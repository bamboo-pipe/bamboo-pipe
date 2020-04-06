const ISTD = "Information Systems Technology and Design";
const ESD = "Engineering Systems and Design";
var container = document.querySelector(".container-x");
var inner = document.querySelector(".box");

$(document).ready(() => {

    $(window).hover((e) => {
        // console.log(inner);
        var x = e.clientX, y = e.clientY,
            elementMouseIsOver = document.elementFromPoint(x, y);
        if (elementMouseIsOver != null) {
            if (elementMouseIsOver.className == "container-x") {
                container = elementMouseIsOver;
                inner = elementMouseIsOver.childNodes[1];
            } else if (elementMouseIsOver.className == "card-img") {
                container = elementMouseIsOver.parentElement.parentElement;
                inner = elementMouseIsOver.parentElement;
            }

            if (container != null && inner != null) {
                // Mouse 
                var mouse = {
                    _x: 0,
                    _y: 0,
                    x: 0,
                    y: 0,
                    updatePosition: function (event) {
                        var e = event || window.event;
                        this.x = e.clientX - this._x;
                        this.y = (e.clientY - this._y) * -1;
                    },
                    setOrigin: function (e) {
                        if (e != null) {
                            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
                        }
                    },
                    show: function () { return '(' + this.x + ', ' + this.y + ')'; }
                }
                // Track the mouse position relative to the center of the container.
                mouse.setOrigin(container);

                var counter = 0;
                var updateRate = 10;
                var isTimeToUpdate = function () {
                    return counter++ % updateRate === 0;
                };

                var update = function (event) {
                    mouse.updatePosition(event);
                    updateTransformStyle(
                        (mouse.y / inner.offsetHeight / 2).toFixed(2),
                        (mouse.x / inner.offsetWidth / 2).toFixed(2)
                    );
                };

                var updateTransformStyle = function (x, y) {
                    if (inner != null) {
                        var style = "rotateX(" + 1.5 * x + "deg) rotateY(" + 1.5 * y + "deg)";
                        inner.style.transform = style;
                        inner.style.webkitTransform = style;
                        inner.style.mozTransform = style;
                        inner.style.msTransform = style;
                        inner.style.oTransform = style;
                    }
                };

                var onMouseEnterHandler = function (event) {
                    update(event);
                };
                var onMouseLeaveHandler = function () {
                    inner.style = "";
                };
                var onMouseMoveHandler = function (event) {
                    if (isTimeToUpdate()) {
                        update(event);
                    }
                };
                container.onmouseenter = onMouseEnterHandler;
                container.onmouseleave = onMouseLeaveHandler;
                container.onmousemove = onMouseMoveHandler;
            }
        }

    });



    $('#lexuan').click(() => {
        putInfo("Soong Le Xuan", ISTD, "Prototyping, Strategic Thinking, Blockchain, Problem-Solving, Backend Development (Express, Nodejs, SQL)", "Java, JavaScript, CSS, HTML, C, Python, Lucid", "F&B Tech Reboot", "Distributed Ledger Technology (DLT) based solution for Singapore's fragmented voucher ecosystem. Created the backend server that enables a set of basic REST APIs to interface with a HyperLedger Fabric using Express.js.", "https://www.linkedin.com/in/le-xuan-soong-81687818b/", "https://github.com/hihithisisme")
        $('#popinfo').fadeIn();
    });

    $('#fion').click(() => {
        putInfo("Fion Yao Yuechi", ISTD, "Adobe Illustrator, Design Thinking, Ideation", "Python, Java, Swift", "Smart Fridge", "Ideated on ways to reduce domestic food waste. Developed an Android mobile app which shows the live update of amounts and types of food at home.", "https://www.linkedin.com/in/fion-yao", "https://github.com/fionyao")
        $('#popinfo').fadeIn();
    });

    $('#yuxuan').click(() => {
        putInfo("Li Yuxuan", ISTD, "Full-stack development, Machine Learning, Web Scraping and Crawling, Cloud Computing (GCP, Kubernetes), Code Automation (Docker), Music Composition", "Python, Java, JavaScript, HTML, CSS, C/C++, C#, SQL", "Sales Dashboard & Music cloud extraction", "Full-stack developed a Sales Dashboard for feedback management using Python Flask (backend) and Native HTML/CSS/JS (frontend). Dockerize python web scraping programme to extract music metadata from YouTube. This process is through using Google PubSub to establish message bus and Kubernetes as cloud computing engines. ", "https://www.linkedin.com/in/li-yuxuan/", "https://github.com/xmliszt")
        $('#popinfo').fadeIn();
    });

    $('#weeping').click(() => {
        putInfo("Kuah Wee Ping", ISTD, "App / full-stack web development, PERN (Postgres, Express, React, Nodejs) stack", "Python, Java, Javascript, C/ C++, HTML/CSS, SQL", "Capstone Space Allocation", "Developed the frontend UI webpage with React-redux, backend server API using Express and database using PostgresSQL", "https://www.linkedin.com/in/kuah-weeping/", "https://github.com/GrimmWeeper")
        $('#popinfo').fadeIn();
    });

    $('#zhenhao').click(() => {
        putInfo("Ng Zhen Hao", ESD, "Math modelling, video editing", "R, SQL, Python", "Population Prediction", "Worked on a data analytics project with Teralytics to find an optimal model that can predict population size at a particular location in the next 10 minutes. Involved in researching time-series models and building them in Python.", "https://www.linkedin.com/in/ngzhenhao/", "")
        $('#popinfo').fadeIn();
    });

    $('#jeslyn').click(() => {
        putInfo("Peh Wei Ting, Jeslyn", ISTD, "Backend Android app development, Network reconnaissance, Adobe Extendscript scripting for Illustrator", "Java, Extendscript, C, Python, Lucid", "Capstone Stone Allocation", "Designed script that automates the process of space allocation according to user preferences directly in Adobe Illustrator, as well as optimise user experience", "https://www.linkedin.com/in/jeslynpwt/", "https://github.com/jesterlyn")
        $('#popinfo').fadeIn();
    });

    $('#weiting').click(() => {
        putInfo("Hoon Wei Ting", ESD, "decent at adobe cc product suite, can google for stuff", "a bit of python, a smaller bit of R, a smaller bit of SQL", "EPIC Data Challenge 2019", "Extracted data, conducted natural language processing and sentiment analysis, and visualised results using Python.", "", "http://github.com/hoonweiting")
        $('#popinfo').fadeIn();
    });

    $('.outerbox').click(() => {
        $('#popinfo').fadeOut();
    });
});

function putInfo(name, pillar, skills, lang, pt, pe, linkedin, github) {
    $('#name').html(name);
    $('#pillar').html(pillar);
    $('#skills').html(skills);
    $('#language').html(lang);
    $('#project-title').html(pt);
    $('#project-desc').html(pe);
    $('#github').prop("disabled", false);
    $('#github').css("cursor", "pointer");
    $('#github').css("color", "white");
    $('#linkedin').prop("disabled", false);
    $('#linkedin').css("cursor", "pointer");
    $('#linkedin').css("color", "white");
    $('#linkedin').unbind();
    $('#github').unbind();

    if (github == "") {
        $('#github').prop("disabled", true);
        $('#github').css("cursor", "auto");
        $('#github').css("color", "gray");
        $('#linkedin').click(() => {
            window.open(linkedin);
        });
    } else if (linkedin == "") {
        $('#linkedin').prop("disabled", true);
        $('#linkedin').css("cursor", "auto");
        $('#linkedin').css("color", "gray");
        $('#github').click(() => {
            window.open(github);
        });
    } else {
        $('#linkedin').click(() => {
            window.open(linkedin);
        });
        $('#github').click(() => {
            window.open(github);
        });
    }
}



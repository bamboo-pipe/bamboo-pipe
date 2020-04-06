const ISTD = "Information Systems Technology and Design";
const ESD = "Engineering Systems and Design";
var container = document.querySelector(".container-x");
var inner = document.querySelector(".box");

$(document).ready(()=>{

    $(window).hover((e) =>{
        // console.log(inner);
        var x = e.clientX, y = e.clientY,
        elementMouseIsOver = document.elementFromPoint(x, y);
        if (elementMouseIsOver != null){
            if (elementMouseIsOver.className == "container-x"){
                container = elementMouseIsOver;
                inner = elementMouseIsOver.childNodes[1]; 
            } else if (elementMouseIsOver.className == "card-img"){
                container = elementMouseIsOver.parentElement.parentElement;
                inner = elementMouseIsOver.parentElement;
            }   

            if (container != null && inner != null){
                // Mouse 
                var mouse = {
                    _x: 0,
                    _y: 0,
                    x: 0,
                    y: 0,
                    updatePosition: function(event) {
                        var e = event || window.event;
                        this.x = e.clientX - this._x;
                        this.y = (e.clientY - this._y) * -1;
                    },
                    setOrigin: function(e) {
                        if (e != null){
                            this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
                            this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
                        }
                    },
                    show: function() { return '(' + this.x + ', ' + this.y + ')'; }
                }
                // Track the mouse position relative to the center of the container.
                mouse.setOrigin(container);

                var counter = 0;
                var updateRate = 10;
                var isTimeToUpdate = function() {
                    return counter++ % updateRate === 0;
                };

                var update = function(event) {
                    mouse.updatePosition(event);
                    updateTransformStyle(
                    (mouse.y / inner.offsetHeight/2).toFixed(2),
                    (mouse.x / inner.offsetWidth/2).toFixed(2)
                    );
                };
                
                var updateTransformStyle = function(x, y) {
                    if (inner != null){
                        var style = "rotateX(" + 1.5*x + "deg) rotateY(" + 1.5*y + "deg)";
                        inner.style.transform = style;
                        inner.style.webkitTransform = style;
                        inner.style.mozTransform = style;
                        inner.style.msTransform = style;
                        inner.style.oTransform = style;
                    }
                };

                var onMouseEnterHandler = function(event) {
                    update(event);
                };
                var onMouseLeaveHandler = function() {
                    inner.style = "";
                };
                var onMouseMoveHandler = function(event) {
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
    
    
    
    $('#lexuan').click(()=>{
        putInfo("Soong Le Xuan", ISTD, "Prototyping, Strategic Thinking, Blockchain, Problem-Solving","Java, JavaScript, CSS, HTML, C, Python, Lucid", "https://www.linkedin.com/in/le-xuan-soong-81687818b/","https://github.com/hihithisisme")
        $('#popinfo').fadeIn();
    });

    $('#fion').click(()=>{
        putInfo("Fion Yao Yuechi", ISTD, "Adobe Illustrator, Design Thinking, Ideation","Python, Java, Swift", "https://www.linkedin.com/in/fion-yao","https://github.com/fionyao")
        $('#popinfo').fadeIn();
    });

    $('#yuxuan').click(()=>{
        putInfo("Li Yuxuan", ISTD, "Full-stack development, Machine Learning, Web Scraping and Crawling, Cloud Computing (GCP, Kubernetes), Code Automation (Docker), Music Composition","Python, Java, JavaScript, HTML, CSS, C/C++, C#, SQL", "https://www.linkedin.com/in/li-yuxuan/","https://github.com/xmliszt")
        $('#popinfo').fadeIn();
    });

    $('#weeping').click(()=>{
        putInfo("Kuah Wee Ping", ISTD, "Experienced in app dev and web dev (frontend, backend, fullstack). Worked with PERN (Postgres, Express, React, Node) stack. Worked with projects related to Machine Learning and Computer Vision, utilising Tensorflow and OpenCV","Python, Java, Javascript, C/C++", "https://www.linkedin.com/in/kuah-weeping/","https://github.com/GrimmWeeper")
        $('#popinfo').fadeIn();
    });

    $('#zhenhao').click(()=>{
        putInfo("Ng Zhen Hao", ESD, "Math modelling, video editing","Python and R", "https://www.linkedin.com/in/ngzhenhao/","")
        $('#popinfo').fadeIn();
    });

    $('#jeslyn').click(()=>{
        putInfo("Peh Wei Ting, Jeslyn", ISTD, "Crochet, Baking, Personal information reconnaissance","Java, Python, Scripting in Adobe Illustrator (Javascript), abit of C", "https://www.linkedin.com/in/jeslynpwt/","https://github.com/jesterlyn")
        $('#popinfo').fadeIn();
    });

    $('#weiting').click(()=>{
        putInfo("Hoon Wei Ting", ESD, "decent at adobe cc product suite, can google for stuff","a bit of python, a smaller bit of R, a smaller bit of SQL", "","http://github.com/hoonweiting")
        $('#popinfo').fadeIn();
    });

    $('.outerbox').click(()=>{
        $('#popinfo').fadeOut();
    });
});

function putInfo(name,pillar,skills,lang,linkedin,github){
    $('#name').html(name);
    $('#pillar').html(pillar);
    $('#skills').html(skills);
    $('#language').html(lang);
    $('#linkedin').unbind();
    $('#github').unbind();
    
    if (name == "Ng Zhen Hao"){
        $('#github').prop("disabled", true);
        $('#github').css("cursor", "auto");
        $('#github').css("color", "gray");
    } else if (name == "Hoon Wei Ting"){
        $('#linkedin').prop("disabled", true);
        $('#linkedin').css("cursor", "auto");
        $('#linkedin').css("color", "gray");
    } else {
        $('#linkedin').click(()=>{
            window.open(linkedin);
        });
        $('#github').click(()=>{
            window.open(github);
        });
    }
}



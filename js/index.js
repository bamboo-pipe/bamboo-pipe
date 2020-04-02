const ISTD = "Information Systems Technology and Design";
const ESD = "Engineering Systems and Design";

$(document).ready(()=>{
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
        putInfo("Peh Wei Ting, Jeslyn", ISTD, "Crochet, Baking, Stalking","Java, Python, Scripting in Adobe Illustrator (Javascript), abit of C", "https://www.linkedin.com/in/jeslynpwt/","https://github.com/jesterlyn")
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
    $('#linkedin').click(()=>{
        window.open(linkedin);
    });
    $('#github').click(()=>{
        window.open(github);
    });
}


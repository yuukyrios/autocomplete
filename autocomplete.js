let availableKeywords = [
    'HTML', 'CSS', 'Javascript', 'Python', 'easy tutorial', 'web tutorial', 
    'where to learn online', 'where to learn web design', 'how to create a website', 
    'web development tutorial', 'learn HTML', 'learn CSS', 'learn JavaScript', 
    'learn Python', 'HTML tags', 'CSS grid', 'CSS flexbox', 'web design principles', 
    'frontend development', 'backend development', 'learn frontend', 'learn backend', 
    'responsive design', 'web development bootcamp', 'UI/UX design', 'learn UI design', 
    'learn UX design', 'JavaScript frameworks', 'React tutorial', 'Vue.js tutorial', 
    'Angular tutorial', 'Node.js tutorial', 'Express.js tutorial', 'MongoDB tutorial', 
    'SQL tutorial', 'PHP tutorial', 'Ruby on Rails tutorial', 'Django tutorial', 
    'WebAssembly tutorial', 'Docker tutorial', 'Git tutorial', 'version control', 
    'GitHub tutorial', 'GitLab tutorial', 'Python frameworks', 'Flask tutorial', 
    'Machine learning tutorial', 'AI tutorial', 'data science tutorial', 'data visualization', 
    'web scraping tutorial', 'CSS animations', 'HTML5 tutorial', 'web performance optimization', 
    'progressive web apps', 'SEO basics', 'search engine optimization', 'web accessibility', 
    'website speed optimization', 'cross-browser compatibility', 'how to build a blog', 
    'how to build an e-commerce site', 'how to build a portfolio website', 'web hosting tutorial', 
    'domain registration', 'cloud computing tutorial', 'API tutorial', 'REST API tutorial', 
    'GraphQL tutorial', 'web security basics', 'SSL certificates', 'web security best practices', 
    'ethical hacking tutorial', 'cybersecurity tutorial', 'web accessibility WCAG', 
    'learn JavaScript DOM', 'learn JavaScript ES6', 'ES6 features', 'async JavaScript', 
    'AJAX tutorial', 'how to use jQuery', 'jQuery vs vanilla JavaScript', 'JavaScript debugging', 
    'front-end build tools', 'task runners in JavaScript', 'npm tutorial', 'yarn tutorial', 
    'how to use webpack', 'web fonts', 'CSS preprocessors', 'SASS tutorial', 'LESS tutorial', 
    'BEM methodology', 'design patterns in JavaScript', 'JavaScript closures', 'JavaScript async/await', 
    'test-driven development', 'unit testing in JavaScript', 'end-to-end testing', 
    'build tools for web developers', 'developer tools in Chrome', 'WebRTC tutorial', 
    'using APIs in JavaScript', 'third-party APIs', 'how to build a RESTful API', 'OAuth tutorial', 
    'JWT tutorial', 'deploying a website', 'how to use Firebase', 'Firebase authentication tutorial',
    'cloud functions tutorial', 'serverless architecture', 'static site generators', 
    'Jekyll tutorial', 'Gatsby tutorial', 'Hugo tutorial', 'Next.js tutorial', 'Nuxt.js tutorial'
];


const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = '';
    }
};

function display(result) {
    const content = result.map((list)=> {
        return "<li onclick=selectInput(this) >" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"

}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}
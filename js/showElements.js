const $fragment = document.createDocumentFragment()

const img_data = [{

    id: "python",
    caption: "Python",
    img_path: "img/icons/python.png"
},
{
    id: "java",
    caption: "Java",
    img_path: "img/icons/java.png"
},
{
    id: "mongo_db",
    caption: "Mongo DB",
    img_path: "img/icons/mongo_db.png"
},
{
    id: "html",
    caption: "HTML",
    img_path: "img/icons/html.png"
},
{
    id: "css",
    caption: "CSS",
    img_path: "img/icons/css.png"
},
{
    id: "javascript",
    caption: "JavaScript",
    img_path: "img/icons/js.png"
},
{
    id: "git",
    caption: "Git",
    img_path: "img/icons/git.png"
},
{
    id: "linux",
    caption: "Linux",
    img_path: "img/icons/linux.png"
},
{
    id: "terminal",
    caption: "Terminal",
    img_path: "img/icons/terminal.png"
}]

const $tech_div = document.getElementById("tech-icons")

img_data.forEach(path => {

    const $div = document.createElement("div")
    $div.classList.add("tech-div")
    const $img = document.createElement("img")
    $img.src = path["img_path"]
    $img.alt = path["id"]
    const $h3 = document.createElement("h3")
    $h3.innerHTML = path["caption"]

    $div.appendChild($img)
    $div.appendChild($h3)

    $fragment.appendChild($div)
})

$tech_div.appendChild($fragment)

const projects_data = [{

    name: "Location Tracker<br>Project",
    technologies: "Java - MongoDB - Android",
    description: "This project has two android apps, Location Service gets last known location by a background service and uploads it to a MongoDB collection, and finally Location Tracker queries that location and sets a marker on a map.",
    url: "https://github.com/SantiagoPujana/LocationTrackerProject"
},
{
    name: "Allianz Receipts",
    technologies: "Python 3 - Selenium",
    description: "This project in Python 3 with Selenium, automates the download of Allianz receipts on the Allia 2Net platform, according to a data set previously given in Excel format.",
    url: "https://github.com/SantiagoPujana/RecibosAllianz"
},
{
    name: "MyWebPortafolio",
    technologies: "HTML - CSS - JavaScript - Node.js",
    description: "This project written in HTML, CSS and JS is a simple design of my web portfolio to introduce myself and get a job.",
    url: "https://github.com/SantiagoPujana/MyWebPortafolio"
}]

const $project_list_div = document.getElementById("project-list")

projects_data.forEach(project => {

    const $div = document.createElement("div")
    $div.classList.add("project-info")
    const $h3 = document.createElement("h3")
    $h3.innerHTML = project["name"]
    const $h4 = document.createElement("h4")
    $h4.textContent = project["technologies"]
    const $p = document.createElement("p")
    $p.textContent = project["description"]
    const $a = document.createElement("a")
    $a.classList.add("light-btn")
    $a.href = project["url"]
    $a.target = "_blank"
    $a.textContent = "Repository"

    $div.appendChild($h3)
    $div.appendChild($h4)
    $div.appendChild($p)
    $div.appendChild($a)

    $fragment.appendChild($div)
})

$project_list_div.appendChild($fragment)

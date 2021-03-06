// Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

console.dir(heading.className);

heading.className = "subheading";

console.log(heading.subheading);

// Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    console.dir(paragraphs[i].innerHTML);

    paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }

];


//function list() {
//    for(let i = 0; i < list; i++);
//}

//list();

//console.log(list);


// Question 8

const catContainer = document.querySelector(".cat-container");

console.dir(catContainer);

let html = "";

for(let i = 0; i < cats.length; i++) {
    console.log(cats[i]);

    //html = html + "<h5>" + cats[i].name + "</h5>";
    html += `<div>
            <h5>${cats[i].name}</h5>
            <p>Age: ${cats[i].age}
            </div>
            `;

    console.log(html);
}

catContainer.innerHTML = html;

//const createCats = cats;

//console.log(cats);




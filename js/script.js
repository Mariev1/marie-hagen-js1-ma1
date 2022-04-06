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


let count = 0;
let previousEntries = "";

function increment() {
    count += 1;
    document.getElementById("number").innerText = count;
}

function save() {
    if (previousEntries === "") {
        previousEntries = count;
    } else {
        previousEntries += " - " + count;
    }
    
    document.getElementById("pre").innerText = "Previous entries: " + previousEntries;
    count = 0;
    document.getElementById("number").innerText = count;
}


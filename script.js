// ================= Part 1: Variables & Conditionals =================
let crops = []; // Array to store crop names

function updateFarmStatus() {
    let farmStatus = document.getElementById("farmStatus");
    if (crops.length > 0) {
        farmStatus.textContent = `You have ${crops.length} crop(s) growing!`;
    } else {
        farmStatus.textContent = "No crops planted yet.";
    }
}

updateFarmStatus();

// ================= Part 2: Custom Functions =================
function addCrop(cropName) {
    if(cropName.trim() !== "") {
        crops.push({name: cropName, ready: false});
        updateFarmStatus();
        displayCrops();
    }
}

function checkHarvest() {
    let readyCrops = crops.filter(c => c.ready).map(c => c.name);
    let harvestResult = document.getElementById("harvestResult");
    if (readyCrops.length > 0) {
        harvestResult.textContent = "Crops ready for harvest: " + readyCrops.join(", ");
    } else {
        harvestResult.textContent = "No crops are ready yet!";
    }
}

// ================= Part 3: Loops =================
function displayCrops() {
    let cropList = document.getElementById("cropList");
    cropList.innerHTML = "";
    for (let crop of crops) {
        let li = document.createElement("li");
        li.textContent = `${crop.name} - ${crop.ready ? "Ready" : "Growing"}`;
        cropList.appendChild(li);
    }
}

// ================= Part 4: DOM Interactions =================
document.getElementById("addCropBtn").addEventListener("click", function() {
    let cropInput = document.getElementById("newCrop");
    addCrop(cropInput.value);
    cropInput.value = "";
});

// Simulate crops getting ready over time
setInterval(function() {
    for (let crop of crops) {
        if (!crop.ready) {
            crop.ready = true; // For demo, all crops become ready after interval
        }
    }
    displayCrops();
}, 10000); // 10 seconds

document.getElementById("harvestBtn").addEventListener("click", checkHarvest);


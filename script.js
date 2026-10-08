```javascript
function updatePerformance() {

    const cpu =
        Math.floor(Math.random() * 35) + 25;

    const ram =
        Math.floor(Math.random() * 25) + 45;

    const storage =
        Math.floor(Math.random() * 30) + 25;


    document.getElementById("cpu").textContent =
        cpu + "%";

    document.getElementById("ram").textContent =
        ram + "%";

    document.getElementById("storage").textContent =
        storage + "%";


    document.getElementById("cpuBar").style.width =
        cpu + "%";

    document.getElementById("ramBar").style.width =
        ram + "%";

    document.getElementById("storageBar").style.width =
        storage + "%";
}


updatePerformance();

setInterval(
    updatePerformance,
    2000
);
```

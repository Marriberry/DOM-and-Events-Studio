// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener('load', () => {
    const takeoffBtn = document.getElementById("takeoff");
    const flightStatusP = document.getElementById("flightStatus")
    const flightStatusBg = document.getElementById("shuttleBackground");
    const flightHeight = document.getElementById("spaceShuttleHeight");

    const landBtn = document.getElementById("landing");
    const missionAbortBtn = document.getElementById("missionAbort");

    const upBtn = document.getElementById("up");
    const downBtn = document.getElementById("down");
    const rightBtn = document.getElementById("right");
    const leftBtn = document.getElementById("left");
    const rocketImg = document.getElementById("rocket");
    let top = 0;
    let left = 0;

    takeoffBtn.addEventListener('click', () => {
        let takeoffResponse = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(takeoffResponse) {
            flightStatusP.innerText = "Shuttle in flight.";
            flightStatusBg.style.backgroundColor = "blue";
            flightHeight.innerText = "10000";
        }
    });

    landBtn.addEventListener('click', () => {
        let landResponse = window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatusP.innerText = "The shuttle has landed.";
            flightStatusBg.style.backgroundColor = "green";
            flightHeight.innerText = "0";
    });

    missionAbortBtn.addEventListener('click', () => {
        let missionAbortResponse = window.confirm("Confirm that you want to abort the mission.");
        if(missionAbortResponse) {
            flightStatusP.innerText = "Mission aborted.";
            flightStatusBg.style.backgroundColor = "green";
            flightHeight.innerText = "0";
        }
    });

    upBtn.addEventListener('click', () => {
        let flightHeightAmount = Number(flightHeight.innerText);
        flightHeightAmount += 10000;
        flightHeight.innerText = flightHeightAmount;
        top -= 10;
        document.getElementById("rocket").style.top = (top - 10) + "px";
    });

    downBtn.addEventListener('click', () => {
        let flightHeightAmount = Number(flightHeight.innerText);
        flightHeightAmount -= 10000;
        flightHeight.innerText = flightHeightAmount;
        top += 10;
        document.getElementById("rocket").style.top = (top - 10) + "px";
    });

    rightBtn.addEventListener('click', () => {
        left += 10;
        document.getElementById("rocket").style.left = (left - 10) + "px";
    });

    leftBtn.addEventListener('click', () => {
        left -= 10;
        document.getElementById("rocket").style.left = (left - 10) + "px";
    });
});
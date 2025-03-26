console.log('working, api test v1.12');
document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    const minusButton = document.getElementById("minusL1");
    const plusButton = document.getElementById("plusL1");
    const counterDiv = document.getElementById("cvL1");

    const minusButton2 = document.getElementById("minusL2");
    const plusButton2 = document.getElementById("plusL2");
    const counterDiv2 = document.getElementById("cvL2");

    const minusButton3 = document.getElementById("minusL3");
    const plusButton3 = document.getElementById("plusL3");
    const counterDiv3 = document.getElementById("cvL3");

    const minusButton4 = document.getElementById("minusL4");
    const plusButton4 = document.getElementById("plusL4");
    const counterDiv4 = document.getElementById("cvL4");

    const submitButton = document.getElementById("submit");

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    minusButton.addEventListener("click", (event) => {
        if (count1 > 0) {
            count1--;
        }
        counterDiv.textContent = count1;
    });

    plusButton.addEventListener("click", (event) => {
        count1++;
        counterDiv.textContent = count1;
    });

    minusButton2.addEventListener("click", (event) => {
        if (count2 > 0) {
            count2--;
        }
        counterDiv2.textContent = count2;
    });

    plusButton2.addEventListener("click", (event) => {
        count2++;
        counterDiv2.textContent = count2;
    });

    minusButton3.addEventListener("click", (event) => {
        if (count3 > 0) {
            count3--;
        }
        counterDiv3.textContent = count3;
    });

    plusButton3.addEventListener("click", (event) => {
        count3++;
        counterDiv3.textContent = count3;
    });

    minusButton4.addEventListener("click", (event) => {
        if (count4 > 0) {
            count4--;
        }
        counterDiv4.textContent = count4;
    });

    plusButton4.addEventListener("click", (event) => {
        count4++;
        counterDiv4.textContent = count4;
    });

    // Algae counters
    const minusButtonN = document.getElementById("minusN");
    const plusButtonN = document.getElementById("plusN");
    const counterDivN = document.getElementById("cvN");

    const minusButtonS = document.getElementById("minusS");
    const plusButtonS = document.getElementById("plusS");
    const counterDivS = document.getElementById("cvS");

    const minusButtonP = document.getElementById("minusP");
    const plusButtonP = document.getElementById("plusP");
    const counterDivP = document.getElementById("cvP");

    let countN = 0;
    let countS = 0;
    let countP = 0;

    minusButtonN.addEventListener("click", (event) => {
        if (countN > 0) {
            countN--;
        }
        counterDivN.textContent = countN;
    });

    plusButtonN.addEventListener("click", (event) => {
        countN++;
        counterDivN.textContent = countN;
    });

    minusButtonS.addEventListener("click", (event) => {
        if (countS > 0) {
            countS--;
        }
        counterDivS.textContent = countS;
    });

    plusButtonS.addEventListener("click", (event) => {
        countS++;
        counterDivS.textContent = countS;
    });

    minusButtonP.addEventListener("click", (event) => {
        if (countP > 0) {
            countP--;
        }
        counterDivP.textContent = countP;
    });

    plusButtonP.addEventListener("click", (event) => {
        countP++;
        counterDivP.textContent = countP;
    });

    //TELEOP

    const TminusButton = document.getElementById("TminusL1");
    const TplusButton = document.getElementById("TplusL1");
    const TcounterDiv = document.getElementById("TcvL1");

    const TminusButton2 = document.getElementById("TminusL2");
    const TplusButton2 = document.getElementById("TplusL2");
    const TcounterDiv2 = document.getElementById("TcvL2");

    const TminusButton3 = document.getElementById("TminusL3");
    const TplusButton3 = document.getElementById("TplusL3");
    const TcounterDiv3 = document.getElementById("TcvL3");

    const TminusButton4 = document.getElementById("TminusL4");
    const TplusButton4 = document.getElementById("TplusL4");
    const TcounterDiv4 = document.getElementById("TcvL4");

    let Tcount1 = 0;
    let Tcount2 = 0;
    let Tcount3 = 0;
    let Tcount4 = 0;

    TminusButton.addEventListener("click", (event) => {
        if (Tcount1 > 0) {
            Tcount1--;
        }
        TcounterDiv.textContent = Tcount1;
    });

    TplusButton.addEventListener("click", (event) => {
        Tcount1++;
        TcounterDiv.textContent = Tcount1;
    });

    TminusButton2.addEventListener("click", (event) => {
        if (Tcount2 > 0) {
            Tcount2--;
        }
        TcounterDiv2.textContent = Tcount2;
    });

    TplusButton2.addEventListener("click", (event) => {
        Tcount2++;
        TcounterDiv2.textContent = Tcount2;
    });

    TminusButton3.addEventListener("click", (event) => {
        if (Tcount3 > 0) {
            Tcount3--;
        }
        TcounterDiv3.textContent = Tcount3;
    });

    TplusButton3.addEventListener("click", (event) => {
        Tcount3++;
        TcounterDiv3.textContent = Tcount3;
    });

    TminusButton4.addEventListener("click", (event) => {
        if (Tcount4 > 0) {
            Tcount4--;
        }
        TcounterDiv4.textContent = Tcount4;
    });

    TplusButton4.addEventListener("click", (event) => {
        Tcount4++;
        TcounterDiv4.textContent = Tcount4;
    });

    // Algae counters
    const TminusButtonN = document.getElementById("TminusN");
    const TplusButtonN = document.getElementById("TplusN");
    const TcounterDivN = document.getElementById("TcvN");

    const TminusButtonS = document.getElementById("TminusS");
    const TplusButtonS = document.getElementById("TplusS");
    const TcounterDivS = document.getElementById("TcvS");

    const TminusButtonP = document.getElementById("TminusP");
    const TplusButtonP = document.getElementById("TplusP");
    const TcounterDivP = document.getElementById("TcvP");

    let TcountN = 0;
    let TcountS = 0;
    let TcountP = 0;

    TminusButtonN.addEventListener("click", (event) => {
        if (TcountN > 0) {
            TcountN--;
        }
        TcounterDivN.textContent = TcountN;
    });

    TplusButtonN.addEventListener("click", (event) => {
        TcountN++;
        TcounterDivN.textContent = TcountN;
    });

    TminusButtonS.addEventListener("click", (event) => {
        if (TcountS > 0) {
            TcountS--;
        }
        TcounterDivS.textContent = TcountS;
    });

    TplusButtonS.addEventListener("click", (event) => {
        TcountS++;
        TcounterDivS.textContent = TcountS;
    });

    TminusButtonP.addEventListener("click", (event) => {
        if (TcountP > 0) {
            TcountP--;
        }
        TcounterDivP.textContent = TcountP;
    });

    TplusButtonP.addEventListener("click", (event) => {
        TcountP++;
        TcounterDivP.textContent = TcountP;
    });

    document.getElementById('defenseY').addEventListener("click", () => {
        document.getElementById("defenseTable").style.display = "table";
    });

    document.getElementById('defenseN').addEventListener("click", () => {
        document.getElementById("defenseTable").style.display = "none";
    });
    // Read URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const scoutName = urlParams.get('name');
    const matchNum = urlParams.get('match');
    const teamNumber = urlParams.get('team');

    submitButton.addEventListener("click", (event) => {
        const leavePos = document.querySelector('input[name="leave"]:checked');
        const barge = document.querySelector('input[name="status"]:checked');
        const coralPickup = document.querySelector('input[name="coralPickup"]:checked');
        const algaePickup = document.querySelector('input[name="algaePickup"]:checked');
        const coopertition = document.querySelector('input[name="coopertition"]:checked');
        const driverSkill = document.querySelector('input[name="skill"]:checked');
        const defense = document.querySelector('input[name="defense"]:checked');
        const speed = document.querySelector('input[name="speed"]:checked');
        const notes = document.getElementById("notes").value;
        const rankPoints = document.getElementById("rankPoints").value;
        const total = 3 * (leavePos ? 1 : 0)
                    + 3 * count1 + 4 * count2 + 6 * count3 + 7 * count4 + 4 * countN + 6 * countP
                    + 2 * Tcount1 + 3 * Tcount2 + 4 * Tcount3 + 5 * Tcount4 + 4 * TcountN + 6 * TcountP
                    + (barge && barge.value === "Parked" ? 2 : 0)
                    + (barge && barge.value === "Shallow" ? 6 : 0)
                    + (barge && barge.value === "Deep" ? 12 : 0);
        console.log(total);

        const assessments = [];
        document.querySelectorAll('input[name="assess"]:checked').forEach((checkbox) => {
            assessments.push(checkbox.id);
        });
        const defenseAssess = [];
        document.querySelectorAll('input[name="dSkill"]:checked').forEach((checkbox) => {
            defenseAssess.push(checkbox.id);
        });
        if (assessments.length === 0) {
            assessments.push("null");
        }
        if (defenseAssess.length === 0) {
            defenseAssess.push("null");
        }
        console.log(defenseAssess)
        const data = {
            scoutName: scoutName,
            matchNum: matchNum,
            teamNumber: teamNumber,
            leavePos: leavePos ? leavePos.nextElementSibling.textContent : null,
            counter1: count1,   
            counter2: count2,
            counter3: count3,
            counter4: count4,
            counterN: countN,
            counterS: countS,
            counterP: countP,
            Tcounter1: Tcount1,
            Tcounter2: Tcount2,
            Tcounter3: Tcount3,
            Tcounter4: Tcount4,
            TcounterN: TcountN,
            TcounterS: TcountS,
            TcounterP: TcountP,
            finalStatus: barge ? barge.nextElementSibling.textContent : null,
            coralPickup: coralPickup ? coralPickup.nextElementSibling.textContent : null,
            algaePickup: algaePickup ? algaePickup.nextElementSibling.textContent : null,
            coopertition: coopertition ? coopertition.nextElementSibling.textContent : null,
            driverSkill: driverSkill ? driverSkill.nextElementSibling.textContent : null,
            defense: defense ? defense.nextElementSibling.textContent : null,
            defenseAssess: defenseAssess.join(', '),
            speed: speed ? speed.nextElementSibling.textContent : null,
            assessments: assessments.join(', '),
            rankPoints: rankPoints,
            notes: notes,
            total: total
        };
        const queryString = new URLSearchParams(data).toString();

        fetch(`https://script.google.com/macros/s/AKfycbxVHzRTKlHYtv6NH-cxt1enxMt0Uh5kgwhkDYIocSDmhaLwbr69Tstb5Qv0mxFisWlVFw/exec?${queryString}`, {
            method: 'POST',
            redirect: "follow",
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.location.assign(`/index.html`);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});

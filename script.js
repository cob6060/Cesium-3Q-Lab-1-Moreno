const E=2.7183;
const R=8.4611e-5

function calcBactColonRateOfGrowth() {
    let P0=parseFloat(document.getElementById("initPop").value);
    let t=parseFloat(document.getElementById("time").value);

    let P=P0*(E**(R*t));

    let output=`The final population after the given time is ${P}`;

    document.getElementById("calculated").innerText = output;
}
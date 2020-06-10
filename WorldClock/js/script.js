
  const secondHand = document.querySelectorAll('.second-hand');
  const minsHand = document.querySelectorAll('.min-hand');
  const hourHand = document.querySelectorAll('.hour-hand');
  var dt1 = new Date();
  console.log(dt1.getUTCMonth());
  document.getElementById("datetime1").innerHTML = `${dt1.getDate()}/${dt1.getMonth() + 1}/${dt1.getFullYear()}`;
  document.getElementById("datetime2").innerHTML = `${dt1.getUTCDate()}/${dt1.getUTCMonth() + 1}/${dt1.getUTCFullYear()}`;

  function setDate() {
    const now = new Date();

    const seconds1 = now.getSeconds();
    const secondsDegrees1 = ((seconds1 / 60) * 360) + 90;
    secondHand[0].style.transform = `rotate(${secondsDegrees1}deg)`;

    const mins1 = now.getMinutes();
    const minsDegrees1 = ((mins1 / 60) * 360) + ((seconds1/60)*6) + 90;
    minsHand[0].style.transform = `rotate(${minsDegrees1}deg)`;

    const hour1 = now.getHours();
    const hourDegrees1 = ((hour1 / 12) * 360) + ((mins1/60)*30) + 90;
    hourHand[0].style.transform = `rotate(${hourDegrees1}deg)`;

    const seconds2 = now.getUTCSeconds();
    const secondsDegrees2 = ((seconds2 / 60) * 360) + 90;
    secondHand[1].style.transform = `rotate(${secondsDegrees2}deg)`;

    const mins2 = now.getUTCMinutes();
    const minsDegrees2 = ((mins2 / 60) * 360) + ((seconds2/60)*6) + 90;
    minsHand[1].style.transform = `rotate(${minsDegrees2}deg)`;

    const hour2 = now.getUTCHours();
    const hourDegrees2 = ((hour2 / 12) * 360) + ((mins2/60)*30) + 90;
    hourHand[1].style.transform = `rotate(${hourDegrees2}deg)`;


  }

  setInterval(setDate, 1000);

  setDate();


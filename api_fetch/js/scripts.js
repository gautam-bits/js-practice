
function fetchdata(val1 , val2) {
    console.log(val1);
    console.log(val2);
    let endpoint1 = `https://codeforces.com/api/user.rating?handle=${val1}`;
    let endpoint2 = `https://codeforces.com/api/user.rating?handle=${val2}`;
    console.log(420);
    let apiRequest1 = fetch(endpoint1).then(function(response){ 
      return response.json()
    });

    let apiRequest2 = fetch(endpoint2).then(function(response){
      return response.json()
    });

    Promise.all([apiRequest1,apiRequest2]).then(function(values){
      //console.log(4743);
      DisplayResults(values[0],values[1])  
    });

}

function DisplayResults(you , his ) {

    let array1 = you.result;
    let array2 = his.result;

    //console.log(array1);
    array1.reverse();
    //console.log(array1);
    //console.log(array2);

    const html = array1.map(e => {
      let ContestId = e.contestId;
      let ContestName = e.contestName;
      let YourRank = e.rank;
      let YourRating = e.newRating;
      let HisElement = array2.find(element => element.contestId === e.contestId) ;
      let HisRank = -1;
      let HisRating = -1;
      if(HisElement)
      {
        HisRank = HisElement.rank;
        HisRating = HisElement.newRating;
      }

      return `
      <tr>
      <td class="column1">${ContestId}</td>
      <td class="column2">${ContestName}</td>
      <td class="column3">${YourRank}</td>
      <td class="column4">${HisRank}</td>
      <td class="column5">${YourRating}</td>
      <td class="column6">${HisRating}</td>
    </tr>
      `;
    }).join('');

    tablebody.innerHTML = html;

}





let yourhandle = document.getElementById("your-handle");
let hishandle = document.getElementById("his-handle");
let searchbutton = document.getElementById("search-button");
let tablebody = document.getElementById("table-body");
//searchbutton.innerHTML = "dmjvv";
//console.log("clickcheck");
searchbutton.addEventListener("click" , function(){
//console.log(69);
let yourusername = yourhandle.value;
let hisusername = hishandle.value;
fetchdata(yourusername, hisusername);

});
 
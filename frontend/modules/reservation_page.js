import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try {
      const url = config.backendEndpoint + "/reservations/";
      const response = await fetch(url);
      const data = await response.json();

    return data;
  } catch (error) {
    return null;
  }

  // Place holder for functionality to work in the Stubs
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table

  if(reservations.length>0){
    document.getElementById("no-reservation-banner").style.display="none";
    document.getElementById("reservation-table-parent").style.display="block";
  }
 else{
  document.getElementById("no-reservation-banner").style.display="block";
  document.getElementById("reservation-table-parent").style.display="none";  
 }

for(let i=0;i<reservations.length;i++){
  var date=new Date(reservations[i].date);
  var time=new Date(reservations[i].time);
  var month=time.toLocaleString(undefined,{month:"long"})
  var day=time.getDate();
  var year=time.getFullYear();
  var booktime=time.toLocaleString("en-IN").split(" ");

  let k=reservations[i].adventure

  var tr=document.createElement("tr");
  tr.innerHTML=`<td>${reservations[i].id}</td>
  <td>${reservations[i].name}</td>
  <td>${reservations[i].adventureName}</td>
  <td>${reservations[i].person}</td>
  <td>${date.toLocaleDateString("en-IN")}</td>
  <td>${reservations[i].price}</td>
  <td>${day} ${month} ${year}, ${booktime[1]} ${booktime[2]}</td>
  <td id="${reservations[i].id}"><a href="../detail/?adventure=${k}">
  <button class="reservation-visit-button">Visit Adventure</button>
  </a></td>`
  
  document.getElementById("reservation-table").append(tr);
}

  // const reservationTableParentElement = document.getElementById("reservation-table-parent");
  
  // const reservationTableElement = document.getElementById("reservation-table");

  // const noReservationBannerElement = document.getElementById("no-reservation-banner");

  // if(reservations.length > 0) {
  //   noReservationBannerElement.style.display = "none";
  //   reservationTableParentElement.style.display = "block";
  // } else {
  //   noReservationBannerElement.style.display = "block";
  //   reservationTableParentElement.style.display = "none";
  // }

  // reservations.forEach (reservation => {
  //   const {adventureName, date, id, name, person, price, time, adventure} = reservation;

  //   const tableRowElement = document.createElement("tr");

  //   tableRowElement.innerHTML = `
    
  //     <th>${id}</th>
  //     <td>${name}</td>
  //     <td>${adventureName}</td>
  //     <td>${person}</td>
  //     <td>${new Date(date).toLocaleDateString('en-IN')}</td>
  //     <td>${price}</td>
  //     <td>${new Date(time).toLocaleString("en-IN")}</td>
  //     <td>
  //       <div class="reservation-visit-button" id=${id}>
  //            <a href="../detail/?adventure=${adventure}"> Visit Adventure </a>
  //       </div>
      
  //     </td>

  //   `;

  //   reservationTableElement.append(tableRowElement);
  // })
  //Conditionally render the no-reservation-banner and reservation-table-parent

  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */

}

export { fetchReservations, addReservationToTable };

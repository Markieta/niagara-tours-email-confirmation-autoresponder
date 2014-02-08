function Autoresponder() {

  var email = GmailApp.getInboxThreads (0, GmailApp.getInboxUnreadCount());
  var x = GmailApp.getInboxUnreadCount();
  while (x > 0) {
    var message = email[x - 1].getMessages();
   // if (email[x - 1].isUnread() == true && (message[0].getSubject().indexOf("Payment received from ") != -1 || message[0].getSubject().indexOf("Notification of payment received ") != -1) && message[0].getBody().indexOf("Niagara Falls") - message[0].getBody().indexOf("Description:") < 20 && message[0].getBody().indexOf(" | Transaction ID: ") != -1) {
      var location;
      if (message[0].getBody().indexOf("Item#:") != -1) {
        location = message[0].getBody().substring (message[0].getBody().indexOf("Item#:") + 6, message[0].getBody().indexOf(", Your Name:"));
        if (message[0].getBody().indexOf("&amp;") > message[0].getBody().indexOf("Item#:") && message[0].getBody().indexOf("&amp;") < message[0].getBody().indexOf(", Your Name:")) {
          location = message[0].getBody().substring (message[0].getBody().indexOf("Item#:") + 7, message[0].getBody().indexOf("&amp;")) + message[0].getBody().substring (message[0].getBody().indexOf("&amp;") + 5, message[0].getBody().indexOf(", Your Name:"));
        }
      }
      else if (message[0].getBody().indexOf("item #:") != -1) {
        location = message[0].getBody().substring (message[0].getBody().indexOf("item #:") + 7, message[0].getBody().indexOf(", Your Name:"));
        if (message[0].getBody().indexOf("&amp;") > message[0].getBody().indexOf("item #:") && message[0].getBody().indexOf("&amp;") < message[0].getBody().indexOf(", Your Name:")) {
          location = message[0].getBody().substring (message[0].getBody().indexOf("item #:") + 7, message[0].getBody().indexOf("&amp;")) + message[0].getBody().substring (message[0].getBody().indexOf("&amp;") + 5, message[0].getBody().indexOf(", Your Name:"));
        }
      }
      
      var pickupTime;
      if (location.indexOf("Best Western Toronto Airport") != -1 || location.indexOf("Carlingview") != -1 || location.indexOf("Carlingview Airport Inn") != -1 || location.indexOf("Comfort Suites City Centre") != -1 || location.indexOf("Courtyard by Marriott - Toronto Airport") != -1 || location.indexOf("Crowne Plaza Toronto Airport") != -1 || location.indexOf("Days Inn & Conf Centre Tor Airp East") != -1 || location.indexOf("Delta Meadowvale Hotel") != -1 || location.indexOf("Doubletree Int'l Plaza Hotel (Airport)") != -1 || location.indexOf("Gardenview House") != -1 || location.indexOf("Hampton Inn & Suites Airport") != -1 || location.indexOf("Hilton Toronto Airport") != -1 || location.indexOf("Holiday Inn Airport East)") != -1 || location.indexOf("Holiday Inn Select Toronto Airport") != -1 || location.indexOf("Howard Johnson Markham") != -1 || location.indexOf("Marriott Residence Inn Airport") != -1 || location.indexOf("Marriott Residence Inn Markham") != -1 || location.indexOf("Marriott Airport") != -1 || location.indexOf("Marriott Courtyard Airport") != -1 || location.indexOf("Marriott Courtyard Markham") != -1 || location.indexOf("Novotel Airport") != -1 || location.indexOf("Novotel Mississauga") != -1 || location.indexOf("Novotel Toronto Airport Hotel") != -1 || location.indexOf("Quality Hotel & Suites Airport East?") != -1 || location.indexOf("Quality Inn & Suites Airport?") != -1 || location.indexOf("Quality Suites Carlingview") != -1 || location.indexOf("Radisson Suite Hotel Toronto Airport") != -1 || location.indexOf("Ramada Hotel Toronto Airport") != -1 || location.indexOf("Renaissance Airport Hotel") != -1 || location.indexOf("Sheraton Gateway Hotel") != -1 || location.indexOf("Travelodge Hotel (Toronto Airport)") != -1 || location.indexOf("Westin Bristol Place Hotel") !=-1) {
        pickupTime = "7:50 AM";
      }
      else if (location.indexOf("Best Western Roehampton Inn") != -1 || location.indexOf("Crowne Plaza Don Valley") != -1 || location.indexOf("Best Western Metro Inn") != -1 || location.indexOf("Novotel North York") != -1 || location.indexOf("Travelodge Yorkdale") != -1) {
        pickupTime = "8:00 AM";
      }
      else if (location.indexOf("Days Inn Beaches (Queen Street)") != -1 || location.indexOf("Radisson Plaza Hotel Admiral") != -1 || location.indexOf("Howard Johnsons Inn Yorkville") != -1 || location.indexOf("Intercontinental") != -1 || location.indexOf("New College Residence") != -1 || location.indexOf("Bay Bloor Executive Suites") != -1 || location.indexOf("Old Mill Hotel") != -1) {
        pickupTime = "8:10 AM";
      }
      else if (location.indexOf("Annex Guest House") != -1 || location.indexOf("Bond Place Hotel") != -1 || location.indexOf("Bus Station - Bay Street") != -1 || location.indexOf("Cambridge Suites") != -1 || location.indexOf("Clarion & Selby") != -1 || location.indexOf("College Hostel") != -1 || location.indexOf("Cosmopolitan Hotel") != -1 || location.indexOf("Courtyard by Marriott (Tor Dwntwn)") != -1 || location.indexOf("Days Hotel & Conf. Centre Downtown Toronto") != -1 || location.indexOf("Delta Chelsea") != -1 || location.indexOf("Fairmont Royal York") != -1 || location.indexOf("Four Points Sheraton Lakeshore") != -1 || location.indexOf("Four Seasons Hotel (Toronto)") != -1 || location.indexOf("Global Village Backpackers (hostel)") != -1 || location.indexOf("Grand Hotel & Suites") != -1 || location.indexOf("Grange Apartment Hotel") != -1 || location.indexOf("Hilton Toronto") != -1 || location.indexOf("Holiday Inn Express (Downtown Toronto)") != -1 || location.indexOf("Holiday Inn Midtown") != -1 || location.indexOf("Holiday Inn on King - Toronto") != -1 || location.indexOf("Hotel Le Germain") != -1 || location.indexOf("Hotel Victoria") != -1 || location.indexOf("Intercontinental on Front St.") != -1 || location.indexOf("Westin Harbour Castle") != -1 || location.indexOf("Windsor Arms Hotel") != -1 || location.indexOf("Neill-Wycik College Hotel") != -1 || location.indexOf("Havinn International B & B") != -1 || location.indexOf("Hostelling International -Church Street") != -1 || location.indexOf("Jarvis House") != -1 || location.indexOf("Le Royal Merdien King Edward") != -1 || location.indexOf("Marriott Residence Inn Entertainment District Toronto") != -1 || location.indexOf("Marriott Courtyard") != -1 || location.indexOf("Marriott Eaton Centre") != -1 || location.indexOf("Marriott Yorkville") != -1 || location.indexOf("Metropolitan Hotel - Downtown Toronto") != -1 || location.indexOf("Mulberry Tree Bed & Breakfast") != -1 || location.indexOf("Novotel Toronto Centre") != -1 || location.indexOf("Palmerston Bed & Breakfast") != -1 || location.indexOf("Pantages Suites Hotel") != -1 || location.indexOf("Park Hyatt Toronto") != -1 || location.indexOf("Ramada Hotel & Suites - Jarvis St") != -1 || location.indexOf("Rosemont Hotel Theatre District?") != -1 || location.indexOf("Rosemont Hotel Yorkville") != -1 || location.indexOf("Sheraton Centre") != -1 || location.indexOf("Skydome Rennaisance Hotel") != -1 || location.indexOf("Soho Metropolitan Hotel") != -1 || location.indexOf("Strathcona Hotel") != -1 || location.indexOf("Sutton Place") != -1 || location.indexOf("Sweetheart Bed and Breakfast") != -1 || location.indexOf("King West, Suite of 1 King West") != -1 || location.indexOf("Victoria Hotel") != -1 || location.indexOf("Town Inn") != -1 || location.indexOf("Travelodge Toronto Downtown West") != -1 || location.indexOf("Union Station (Royal York Hotel West Entrance)") != -1 || location.indexOf("Victoria's Mansion") != -1 || location.indexOf("Waverley Hotel") != -1) {
        pickupTime = "8:20 AM";
      }
      else if (location.indexOf("Best Western Primrose") != -1) {
        pickupTime = "8:30 AM";
      }
      else if (getDistance("Jarvis Street and Carlton Street Toronto Ontario M5A", location+" Toronto Ontario Canada")<3){
        pickupTime = "8:20 AM";
      }
      else if (getDistance("Jarvis Street and Carlton Street Toronto Ontario M5A", location+" Toronto Ontario Canada")<6){
        pickupTime = "8:10 AM";
      } 
      else if (getDistance("Jarvis Street and Carlton Street Toronto Ontario M5A", location+" Toronto Ontario Canada")<20){
        pickupTime = "8:00 AM";
      }
      else if (getDistance("Jarvis Street and Carlton Street Toronto Ontario M5A", location+" Toronto Ontario Canada")<40){
        pickupTime = "7:50 AM";
      }
      //GmailApp.sendEmail("markietachristopher@gmail.com", "test", location+pickupTime);
      var NiagaraToursTemp = "Pick-up time: "+pickupTime+"\nTel: 416-315-4065";
      
      //if (pickupTime.indexOf("7:50 AM") != -1 || pickupTime.indexOf("8:00 AM") != -1 || pickupTime.indexOf("8:10 AM") != -1 || pickupTime.indexOf("8:20 AM") != -1 || pickupTime.indexOf("8:30 AM") != -1) {
        GmailApp.sendEmail("markietachristopher@gmail.com", "test", NiagaraToursTemp);
      //message[0].reply(NiagaraToursTemp);
       // GmailApp.markMessageRead(message);
     // }
   // }
    x -= 1;
  }
  
  
  //var name = message[0].getBody().substring (message[0].getBody().indexOf("Your Name: ") + 11, message[0].getBody().indexOf(", Tour Date"));
  
  //var adult = 0;
 // var child = 0;
  
  
  //var seniorStudent = 0;
  
  
  //var date = message[0].getBody().substring (message[0].getBody().indexOf("Tour Date:") + 10, message[0].getBody().indexOf("Unit price") - 6);
  //var tourNumber = " ";
  //var tourTime = " ";
  //var extra = " ";
  //var receipt = " ";
  //var telephone = " ";
  //var emailAddress = " ";
  //var flight = " ";
  //var vehicle = " ";
  //var comment = " ";
  
  
  
  
  //var torontoToursNiagara = "This is your Niagara Falls Tour Confirmation:\n\nNAME: "+name+"\nPICK-UP LOCATION: "+location+"\nADULTS: "+adult+"\nCHILDREN/SENIORS: "+child+"\nDATE: "+date+"\nPICK-UP TIME: "+pickupTime+"\nRETURN TIME: 5:15 PM - 6:30 PM\nEXTRA_OPTIONS: Helicopter Tour has not been paid for but is available on the day of the tour.\nCOMMENTS:"+comment+"\nADULT PRICE: $79 per person plus tax, plus pick-up charge if outside Toronto\nCHILD/SENIOR: $69 per person plus tax, plus pick-up charge if outside Toronto\nWEBSITE: www.TorontoTours.ca\nTOUR OPERATOR: King Tours\n\n\n__\n\nPLEASE PRINT YOUR PAYPAL CONFIRMATION AND SHOW\nIT TO THE TOUR GUIDE ON THE DAY OF THE TOUR.\n\nGratuities not included.\n\nPayment has already been made.  Extra options\ncan be purchased on the day of the tour from\nthe tour guide.\n\nPlease keep our dispatch telephone number with\nyou just in case you would like to make some\nlast minute changes to your reservation.\n\nThe tour bus leaves Toronto at 9AM.  If you\nare not picked-up within 15 miutes of your\nscheduled time please call 416-721-3472.\n\nDepending on your location, a courtesy car\nmay be picking you up from your location and\ntransporting you to the bus.\n\nTel: 416-721-3472 (Toronto)\n\nDisclaimer\nTorontoTours.ca is not the tour operator and\nis not liable for any injuries or damages that\nmay occur while on tour.\n\n__\nSPECIAL OFFER\nSave 10% on Transportation from any Toronto location\nto Toronto International Airport (YYZ).\nhttp://www.GoAirport.ca";
  //var torontoToursHelicopter = "This is your Helicopter Tour Confirmation:\n\nTour #"+tourNumber+"\n\nNAME: "+name+"\nPICK-UP LOCATION: Because The Helicopter Company is located on an\nisland you will have to take the world's shortest scheduled ferry\nservice which departs from the foot of Bathurst Street.\n\nADULTS: "+adult+"\nCHILDREN: "+child+"\nDATE: "+date+"\nTOUR TIME: "+tourTime+"\nEXTRA_OPTIONS: "+extra+"\nCOMMENTS: The only extra costs is the transfer fee to the Island Airport of\n$5.50 each.\nWEBSITE: www.TorontoTours.ca\nTOUR OPERATOR:  The Helicopter Company Inc.\n__\n\nPLEASE PRINT YOUR PAYPAL CONFIRMATION AND SHOW\nIT TO THE TOUR GUIDE ON THE DAY OF THE TOUR.\n\nGratuities not included.\n\nPayment has already been made.  Extra options can be purchased on the\nday of the tour from the tour guide.\n\nPLEASE CALL 24 HOURS BEFORE YOUR TOURS date to confirm the\npick-up time and weather conditions.\nPlease keep our dispatch telephone number with you just in case you\nwould like to make some last minute changes to your reservation.\n\nTel: (416) 203-3280 (Toronto)\n\nFlight-times may be canceled at the discretion of the Chief Pilot when\nweather or airspace conditions are unsuitable for flight. Heli-Tours\nwill do its best to reschedule your heli-tour time for a future date\nwhere possible. If this is not possible, the Chief will authorize your\nvoucher for refund. There are no refunds for missed flights,\npassengers barred from entry due to unsafe conduct or last-minute\nwalk-ins of voucher holders without an advance booking. Always have\nyour flight time pre-booked. Always arrive on time for you flight.\n\nReservations must be cancelled 24 or more hours in advance to qualify\nfor a refund.\n__\nDisclaimer\nTorontoTours.ca is not the tour operator and\nis not liable for any injuries or damages that\nmay occur while on tour.\n__\nSPECIAL OFFER\nSave 10% on Transportation from any Toronto location\nto Toronto International Airport (YYZ).\nhttp://www.GoAirport.ca";
  //var torontoToursHippo = "This is your Toronto Hippo Tour Confirmation:\n\nNAME: "+name+"\n\nPICK-UP LOCATION: Pick up and Departure location is: 151 Front St. W.\nAt the S.E. corner of Front and Simcoe St. Directly beside East Side\nMario's. ( http://bit.ly/9zETt0 )\n\nADULTS: "+adult+"\nCHILDREN: "+child+"\nSENIOR/STUDENT: "+seniorStudent+"\n\nDATE: "+date+"\n\nPICK-UP TIME: Tours depart hourly from 11 am to 5 pm, seven days a week. It is best to call 416-703-4476 to reserve a time.\n\nEXTRA_OPTIONS: "+extra+"\nCOMMENTS: "+comment+"\nWEBSITE: www.TorontoTours.ca\nTOUR OPERATOR: Toronto Hippo Tours\n__\n\nPLEASE PRINT YOUR PAYPAL CONFIRMATION AND SHOW\nIT TO THE TOUR GUIDE ON THE DAY OF THE TOUR.\n\nGratuities not included.\n\nPayment has already been made.\nPlease keep our dispatch telephone number with you just in case you would\nlike to make some last minute changes to your\nreservation.\n\nTel: (416) 703-4476 (Toronto)\n__\n\nDisclaimer\nTorontoTours.ca is not the tour operator and\nis not liable for any injuries or damages that\nmay occur while on tour.";
  //var torontoToursShopDine = "This is your Toronto City Tour Confirmation:\n\nNAME: "+name+"\nPICK-UP LOCATION: Yonge & Dundas Square or call 416-463-7467\nADULTS: "+adult+"\nCHILDREN: "+child+"\nDATE: "+date+"\nPICK-UP TIME: First Tour starts 9 am\nEXTRA_OPTIONS: "+extra+"\nCOMMENTS: "+comment+"\nWEBSITE: www.TorontoTours.ca\nTOUR OPERATOR: Shop Dine Tour Toronto\n__\n\nPLEASE PRINT YOUR PAYPAL CONFIRMATION AND SHOW\nIT TO THE TOUR GUIDE ON THE DAY OF THE TOUR.\n\nGratuities not included.\n\nPayment has already been made.\n\nIt is best to call 24 hours before your tour date to\nconfirm the pick-up time. Please keep our dispatch\ntelephone number with you just in case you would\nlike to make some last minute changes to your\nreservation.\n\nTel: 416-463-7467 (Toronto)\n__\n\nDisclaimer\nTorontoTours.ca is not the tour operator and\nis not liable for any injuries or damages that\nmay occur while on tour.";
  
  //var eToursNiagara = "This is your Niagara Falls Tour Confirmation:\n\nNAME: "+name+"\nPICK-UP LOCATION: "+location+"\nADULTS: "+adult+"\nCHILDREN/SENIORS: "+child+"\nDATE: "+date+"\nPICK-UP TIME: "+pickupTime+"\nRETURN TIME: 5:15 PM - 6:30 PM\nEXTRA_OPTIONS: Helicopter Tour has not been paid for but is available on the day of the tour.\nCOMMENTS:"+comment+"\nADULT PRICE: $79 per person plus tax, plus pick-up charge if outside Toronto\nCHILD/SENIOR: $69 per person plus tax, plus pick-up charge if outside Toronto\nWEBSITE: www.eTours.to\nTOUR OPERATOR: King Tours\n\n\n__\n\nPLEASE PRINT YOUR PAYPAL CONFIRMATION AND SHOW\nIT TO THE TOUR GUIDE ON THE DAY OF THE TOUR.\n\nGratuities not included.\n\nPayment has already been made.  Extra options\ncan be purchased on the day of the tour from\nthe tour guide.\n\nPlease keep our dispatch telephone number with\nyou just in case you would like to make some\nlast minute changes to your reservation.\n\nThe tour bus leaves Toronto at 9AM.  If you\nare not picked-up within 15 miutes of your\nscheduled time please call 416-721-3472.\n\nDepending on your location, a courtesy car\nmay be picking you up from your location and\ntransporting you to the bus.\n\nTel: 416-721-3472 (Toronto)\n\nDisclaimer\neTours.to is not the tour operator and\nis not liable for any injuries or damages that\nmay occur while on tour.\n\n__\nSPECIAL OFFER\nSave 10% on Transportation from any Toronto location\nto Toronto International Airport (YYZ).\nhttp://www.GoAirport.ca";
  //var eToursShopDine = "This is your Toronto City Tour Confirmation:\n\nNAME: "+name+"\nPICK-UP LOCATION: Yonge & Dundas Square or call 416-463-7467\nADULTS: "+adult+"\nCHILDREN: "+child+"\nDATE: "+date+"\nPICK-UP TIME: First Tour starts 9 am\nEXTRA_OPTIONS: "+extra+"\nCOMMENTS: "+comment+"\nWEBSITE: www.eTours.to\nTOUR OPERATOR: Shop Dine Tour Toronto\n__\n\nPLEASE PRINT YOUR PAYPAL CONFIRMATION AND SHOW\nIT TO THE TOUR GUIDE ON THE DAY OF THE TOUR.\n\nGratuities not included.\n\nPayment has already been made.\n\nIt is best to call 24 hours before your tour date to\nconfirm the pick-up time. Please keep our dispatch\ntelephone number with you just in case you would\nlike to make some last minute changes to your\nreservation.\n\nTel: 416-463-7467 (Toronto)\n__\n\nDisclaimer\neTours.to is not the tour operator and\nis not liable for any injuries or damages that\nmay occur while on tour.";
  //var eToursBusBoat = "This is your City Sightseeing (Bus & Boat) Tour Confirmation:\n\nNAME: "+name+"\nPICK-UP LOCATION: 249 Queen’s Quay West or call 416-410-0536 to\narrange hotel pick-up or to find the closest stop near you.\nADULTS: "+adult+"\nSENIOR/STUDENT: "+seniorStudent+"\nDATE: "+date+"\nPICK-UP TIME: Tours start at 9 am and are available every 30 minutes from all 25 stops.\nEXTRA_OPTIONS: "+extra+"\nCOMMENTS: "+comment+"\nWEBSITE: www.eTours.to\nTOUR OPERATOR: City Sightseeing Toronto Bus & Boat Tour\nReceipt No: "+receipt+"\n__\nPLEASE PRINT THIS CONFIRMATION AND YOUR PAYPAL RECEIPT AND YOUR SHOW\nIT TO THE TOUR GUIDE ON THE DAY OF THE TOUR.\n\nGratuities not included.\n\nPayment has already been made.\n\nIt is best to call 24 hours before your tour date to arrange the\npick-up time. Please keep the dispatch telephone number with you just\nin case you would like to make some last minute changes to your\nreservation.\n\nTel: 416-410-0536 (Toronto)\n__\n\nDisclaimer\neTours.to is not the tour operator and\nis not liable for any injuries or damages that may occur while on tour.";
  //var eToursWinery = "This is your Winery Tour Confirmation\nReference #:    eTours.to \n\n--------------------------------------------------------------------------------\n\nTrip Information ...\n\nName: "+name+"\nAdults: "+adult+"\nTravel Date: "+date+"\nHotel: "+location+"\nPick-up Time: between 07:50 and 08:15\n\n\n\nYour Winery Tour from any of the major downtown Toronto hotels\nincludes roundtrip transportation to Niagara on the Lake. Our\nmost flexible tour which offers the fine wines of : Inniskillin,\nStonechurch Vineyards, Pillitteri Estates, Reif Estates. Enjoy\na tour and testing at each. You will see  and experience the\nfine countyside of our vast and beautiful Niagara wine region.\nFinish off a great day with free time to browse shops and sightsee\nin historic NOTL. Take a safe and carefree way. A Great Value.\n\n\nPhone:\nFrom Canada 905-374-8111\nToll Free within 416/905 area code 800-268-8111\nToll Free (North America) 800-206-7222\n\nReservations must be cancelled 24 or more hours in advance to qualify for a refund.\nFor cancellations under 24 hours, you will have a credit towards future travel in\nthe amount of the portion of the fare related to the cancellation.\nNo shows are Null & Void.";
 // var eToursShark = "This is your Toronto Boat Tour Confirmation:\n\nNAME: "+name+"\nPICK-UP LOCATION: Harbourfront Centre West Piere\nADULTS: "+adult+"\nCHILDREN:"+child+"\nDATE: "+date+"\nCOMMENTS: "+comment+"\nWEBSITE: www.eTours.to\nTOUR OPERATOR: Shark Attack Tours\n\n____\n\nPLEASE PRINT YOUR PAYPAL CONFIRMATION AND SHOW\nIT TO THE TOUR GUIDE ON THE DAY OF THE TOUR.\n\nGratuities not included.\n\nPayment has already been made.\n\nIt is best to call 24 hours before your tour date to\nconfirm the pick-up time. Please keep our dispatch\ntelephone number with you just in case you would\nlike to make some last minute changes to your\nreservation.\n\nTel: 416-410-0536 (Toronto)\n__\n\nDisclaimer\neTours.to is not the tour operator and\nis not liable for any injuries or damages that\nmay occur while on tour.";

 // var airport = "These are the details of your reservation:\n- Airport Transportation\n- Your Name: "+name+"\n- Your Telephone number: "+telephone+"\n- Date Transportation Required: "+date+"\n- Address of destination/or pick-up location: "+location+"\n- Your Email Address: "+emailAddress+"\n- Number of passengers: "+adult+"\n- Flight Number: "+flight+"\n- Time Required: "+pickupTime+"\n- Vehicle Type: "+vehicle+"\n Tel: 416-315-4065\n Toll Free: 1-866-546-4999";
  
  
  //Browser.msgBox(NiagaraToursTemp);
  
  //GmailApp.sendEmail("markietachristopher@gmail.com", "subject", torontoToursNiagara);
} 

function getDistance(cityA, cityB) {

if (cityA == "") {
  return "You should write name the first place"
}
    
if (cityB == "") {
    return "And also you should write the second place :)"
}
    
    
var url = "http://maps.google.com/maps?f=q&source=s_q&output=js&hl=en&geocode=&q="+ cityA +"+to+"+ cityB;
var response = UrlFetchApp.fetch(url);

if (response) {

var str = response.getContentText();
var od = str.indexOf("distance");
var az = str.indexOf("km",od);
var convert = 1;
  
  if (az <= 0) {
  az = str.indexOf("mi",od);
  convert = 0.621371192;
  }  
  
var out = str.substring(od+10,az).replace(",","");;
var num = parseFloat(out);
  if (num >=1 ) {
   return Math.round(num / convert);
}else {
  return "Error: with places. Try add city or country.";
};

  
  
} else {
  return "Error: with dumping data. Try later."; 
}

}

console.log('Heello world');
document.write('<h3> This is my test doc </h3>');

var hotel = new Object();
hotel.name = 'Quay';
hotel.rooms = 24;
hotel.booked = 21;
hotel.gym = true;
hotel.roomTypes = ['twin', 'double', 'single'];
hotel.checkAvailability = function () {
  return this.rooms - this.booked;
};

hotel.name = 'Test Hotel Name';
document.write('<h1>' + hotel.name + '</h1>');

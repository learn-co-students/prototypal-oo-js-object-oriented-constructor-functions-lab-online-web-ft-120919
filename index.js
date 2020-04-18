function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  const scooter = new User(2015, 'red', 'swoosh');
  
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  const driver = new Driver('Allison', 16, '2 years');
  
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  const pickUpLocation = new PickupLocation('123 Broadway', 'New York City');
  
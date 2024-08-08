// Example for Object Literals
const userOne = {
  name: "Muhammad Mutahir",
  loginCount: 8,
  signIn: true,
  getUser: function () {
    console.log(`SALAM ${this.name}`);
    console.log("this", this);
  },
};

const userTwo = {
  name: "Muhammad Mutahir",
  loginCount: 8,
  signIn: true,
  getUser: function () {
    console.log(`SALAM ${this.name}`);
    console.log("this", this);
  },
};

console.log("this", this); // Note: `this` here refers to the global object in a non-strict mode
console.log("userOne", userOne);
console.log("userTwo", userTwo);
userOne.getUser();
userTwo.getUser();

// Example for Constructor Function
function User(name, password, pinCode) {
  this.name = name;
  this.password = password;
  this.pinCode = pinCode;
}

const user1 = new User("Muhammad Talha", "12345678", "123465");
const user2 = new User("Muhammad Mutahir", "123456", "1234");

console.log("user1", user1);
console.log("user2", user2);

// Example for Class with Prototype Methods
class Car {
  // Private method that hides the complexity of how the engine starts
  startEngine() {
    console.log("Engine started");
  }

  // Public method that provides a simple interface to drive the car
  drive() {
    this.startEngine();
    console.log("Car is driving");
  }
}

const myCar = new Car();
myCar.drive(); // Outputs: Engine started, Car is driving

// Example for Encapsulation
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(`Balance: ${account.getBalance()}`); // Outputs: Balance: 1300

// Example for Inheritance
class Users {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Teacher extends Users {
  constructor(name, email, password) {
    super(name, email);
    this.password = password;
  }
}

const userOne_1 = new Users("Muhammad Mutahir", "mutahirkareem820@gmail.com");
const teacherOne = new Teacher("Raza", "raza@gmail.com", "123");

console.log("userOne", userOne_1);
console.log("teacherOne", teacherOne);
console.log(teacherOne instanceof Teacher); // true
console.log(teacherOne instanceof Users); // true
console.log(userOne_1 instanceof Teacher); // false
console.log(userOne_1 instanceof Users); // true

// Example for Polymorphism
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const animals = [new Dog(), new Cat()];
animals.forEach((animal) => animal.speak());
// Outputs: Dog barks
//          Cat meows

/*:
Object Literals: Demonstrates how to use objects with methods.
Constructor Function: Shows the use of function constructors to create objects.
Class with Prototype Methods: Illustrates basic class structure and methods.
Encapsulation: Demonstrates how to use private properties and methods to protect data.
Inheritance: Shows how a subclass can inherit from a superclass.
Polymorphism: Illustrates how different subclasses can override methods from a common superclass.*/

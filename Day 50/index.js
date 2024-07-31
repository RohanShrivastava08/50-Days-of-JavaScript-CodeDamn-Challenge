// Start coding here
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}

	fullName() {
		return `${this.firstName} ${this.lastName}`
	}
}

class Employee extends Person {
	constructor(firstName, lastName, position, salary) {
		super(firstName, lastName)
		this.position = position
		this.salary = salary
	}

	toString() {
		return `Employee Name: ${this.fullName()}, Position: ${
			this.position
		}, Salary: ${this.salary}`
	}
}

export default Employee

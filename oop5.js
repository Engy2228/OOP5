class Developer {
  constructor(fullName, age, position) {
    this.fullName = fullName
    this.age = age
    this.position = position
    this.technologies = []

  }
  code() {}

  learnNewTechnologies(technology) {
    this.technologies.push(technology)
  }
}

class JuniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, 'Junior')
    this.technologies =['HTML', 'CSS', 'JavaScript']
  }
  
  code() {
    console.log(`${this.position} разработчик пишет код ${(this.technologies).join(', ')}`)
  }
}

class MiddleDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, 'Middle')
    this.technologies = ['HTML', 'CSS', 'JavaScript', 'React']

  }
  
  code() {
    console.log(`${this.position} разработчик пишет код ${(this.technologies).join(', ')}`)
  }
}

class SeniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, 'Senior')
    this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
  }

  code() {
    console.log(`${this.position} разработчик пишет код ${(this.technologies).join(', ')}`)
  }
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
juniorDeveloper.code()
console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); 


const middleDeveloper = new MiddleDeveloper('Игорь', 25);
middleDeveloper.code();
console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies);

const seniorDeveloper = new SeniorDeveloper('Максим', 30);
seniorDeveloper.code()
seniorDeveloper.learnNewTechnologies('Docker');
console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies); 


// в этом коде массив technologies перезаписывается каждый раз при создании экземпляров дочерних классов (JuniorDeveloper, MiddleDeveloper, SeniorDeveloper) Это правильно?
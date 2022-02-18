function eb (name, age) {
  this.name = name
  this.age = age
  this.exercicio = () => {
    return 'CrossFit'
  }
  
}

const felipe = new eb ('felipe', 25)

console.log(felipe)
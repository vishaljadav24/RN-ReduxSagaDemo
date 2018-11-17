const data= [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 }
];

const users = [
  { name: 'Vishal', age: 36 },
  { name: 'Jaymin', age: 24 },
  { name: 'Nilesh', age: 44 }
]

export const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(data)
    }, 3000)
  })
}

export const getUser =  () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(users)
    }, 3000)
  })
}
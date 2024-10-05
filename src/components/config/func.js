// group list object by param

export const groupArray = (obj, name ,setRes) => {

 const group =  obj && obj.reduce((p, a) => {
     p[`${a[name]}`] = [...p[`${a[name]}`] || [], a]; return p;
  
  }, {})
  console.log(group)  
  setRes(group)
}


// sum all value on object by field name
export const sumValue = (obj, name) => {
  console.log(obj, name)
  const sum = obj && obj.reduce((p, a) => {
   return p + Number(`${a[name]}`) 
  
 }, 0)
  console.log(sum)
 // setRes(sum)
}
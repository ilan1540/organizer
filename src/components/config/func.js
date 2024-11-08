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

  const arrayToSun = [] 
  
  obj && obj.map((rec) => {
    
    const num = rec[name]
    if (isNaN(rec[name])) {
      console.log('is not number')
      const n = Number(rec[name])
   
    } else
    {
      const num = Number(rec[name])
      arrayToSun.push(num)
     
    }
 
 })
  const sum = arrayToSun.reduce((p, a) => 
   p + a , 0)
  return sum
}

export function numberWithCommas(x) {
  x= Number(x)
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
//import XLSX from 'xlsx';
import moment from 'moment'
import axios from 'axios';


export function numFormt(num) {
  let str = num.toLocaleString("en-US");
  return  str
}
export function numberWithCommas(x) {
  x= Number(x)
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

export const dateFormat = (x) => {
  console.log(moment(x).format('L'))
  console.log(x)
  return moment(x).format('L')
}

// get madd rate from stistic web

export const getMaddReate = async (id,from,until)  => {
  const url = `https://api.cbs.gov.il/index/data/price?id=${id}&format=json&download=false&startPeriod=${from}&endPeriod=${from}`

  let res = {}
 // let res2 = {}
 // let base = ''

  await axios.get(url).then((res) => {
     res = res.data.month[0]
    console.log('res=', res)
    
  })
  /*
  if (data && data.data) {
      const prvRate = {
        code: data.code,
        name: data.name,
        base: data.data[0].currBase.baseDesc,
        value: data.data[0].currBase.value,
        month: data.data[0].currBase.monthDesc,
        year: data.data[0].currBase.year,
      }
      console.log(prvRate)
    //return res.data.month
    
    }
*/

}

// מחשבון הצמדה למדד

export const calcMadd = async () => {
  const url = `https://api.cbs.gov.il/index/data/calculator/120010?value=14953.69&date=2022-01-01&toDate=2022-12-01&format=json&download=false`
  

 await axios(url)
 // .then((response) => response.json())
  .then((data) => console.log(data));

  console.log(url)
  

  /*
  await axios.get(url).then((res) => {
    // res = res.data.month[0]
    console.log('res=', res)
   
  })
*/
}

export const getAll = async () => {
  const url = `https://api.cbs.gov.il/index/data/price?id=120010&format=json&download=false&last>0&coef=true` 

  await axios(url)
 // .then((response) => response.json())
  .then((data) => console.log(data));

  console.log(url)
  

}


/*
export const excelToJson = (file, callback) => {
  let wb = [];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (event) => {
      let data = event.target.result;
      let workbook = XLSX.read(data, { type: 'binary' });
      workbook.SheetNames.forEach((sheet, i) => {
        let rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        wb.push({
          sheetName: workbook.SheetNames[i],
          sheetData: rowObject,
        });
      })
      
      return callback(null, wb);
    }
}
*/

// sum all items in array of object
export const sumAll = (arr) => {
 // console.log(arr)
  if (arr) {
    const result = arr.reduce((item, object) => {
      return  item + object.currValue
    }, 0)
return result 
  //  console.log(result)
  }
}

// sum all itemNo in arry of object

export const sumAllItemNo = (arr, itemNo) => {
  if (arr) {
    const result = arr.reduce((item, object) => {
      if (object.itemNo === itemNo) {
        return  item + object.currValue
      }
     return result  
     
    }, 0) 
   
  } 
}





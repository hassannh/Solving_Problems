function chunk(arr, n) {
    
  
    const result = [];
    let chunkedArr = [];



  
    for (let i = 0; i < arr.length; i++) {

      chunkedArr.push(arr[i]);
  
      if (chunkedArr.length === n || i === arr.length - 1) {
        result.push([...chunkedArr]);
        chunkedArr = [];
      }
    }
  
    return result;
  }


  const arr = [6,3,5,2,90,5,9,2,1,4];
  console.log(chunk(arr, 2));
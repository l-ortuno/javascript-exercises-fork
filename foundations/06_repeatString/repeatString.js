//1. coge el string
//2. lo repite el numero de veces que le pongas
//3. devuelve el resultado


const repeatString = function(str, num) {
	{
		 if (num>0){
			let result = "";
			for(let i = 0; i < num; i ++)
			result=result+str
			return result
			}
		else if (num<0){
			return "ERROR"
	  	  }
		else if (num===0){
			return ""
		}
	} 
};

// Do not edit below this line
module.exports = repeatString;

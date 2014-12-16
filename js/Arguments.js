function Arguments(){
	this.treatTheInput = function(inputArgs){
		/*if(inputArgs == "-l")
			return "logging -> true";
		else if(inputArgs == "-p 8080")
			return "port -> 8080";
		else if(inputArgs == "-d /usr/logs")
			return "directory -> /usr/logs";*/

		command = inputArgs.split(" ");
		//console.log("depois do split - " + command);
		resultToShow = "";
		for(i = 0 ; i < command.length - 1 ; i++){
			console.log(command[i]);
			/*switch(command[i]){
				case "-l":
					resultToShow = resultToShow + "logging -> true";
					break;
				case "-p":
					resultToShow = resultToShow + "port -> " + command[i+1];
					break;
			}*/
		}
		console.log("depois do for  - " + command);
		return resultToShow;
	}
}
describe("Reading the arguments",function(){
	beforeEach(function(){
		args = new Arguments();
	})
	
	it("should show 'logging -> true' when the -l argument is present",function(){
		expect(args.treatTheInput("-l")).toBe("logging -> true")
	})

	it("should show 'port -> 8080' when the -p 8080 is passed",function(){
		expect(args.treatTheInput("-p 8080")).toBe("port -> 8080")
	})

	it("should show 'directory -> /usr/logs' when the -d /usr/logs is passed",function(){
		expect(args.treatTheInput("-d /usr/logs")).toBe("directory -> /usr/logs")
	})

	it("should show 'logging -> false, port -> 9207' when -p 9207",function(){
		expect(args.treatTheInput("-p 9207")).toBe("logging -> false, port -> 9207")
	})
})
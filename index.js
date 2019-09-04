var fs = require('fs');

fs.readFile('fileList.txt', function (err, data) {
	if (err) {
		return console.log('Cannot read file :-', err)
	} else {
		var fileName = process.argv[2];
		var result = data.toString()
		var resultData = [];
		if (data.toString().length > 0) {
			resultData = data.toString().split(",");
		}
		if (resultData.includes(fileName)) {
			return console.log("File Name already present")
		} else {
			fs.writeFile(fileName + '.txt', 'You are awesome', function (err1) {
				if (err1) {
					console.log(err1)
				} else {
					if (resultData.length > 0) {
						result += ","
					}
					result += fileName
					fs.writeFile('fileList.txt', result, function (err) {
						if (err) {
							console.log(err)
						} else {
							return console.log("File created with data")
						}
					})
				}
			})
		}
	}
})
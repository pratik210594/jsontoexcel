
var dataHtml  = JSON.parse(data);

document.getElementById("json").innerHTML = JSON.stringify(dataHtml);   


function downloadFunc()
{
		const worksheet = XLSX.utils.json_to_sheet(data);
		console.log(worksheet);
		const workbook = {
			Sheet :{
				'data' : worksheet
			},
			SheetNames: ['data']
		};
		const excelBuffer = XLSX.write(workbook,{booktype: 'xlsx', type: 'array'});
		console.log(excelBuffer);
		saveAsExcel(excelBuffer, 'myFile');
}



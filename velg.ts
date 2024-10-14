let data = [
	{
	  id: 1,
	  name: 'TDR',
	  color: 'black',
	  stock: 10,
	  price: 750000,
	},
	{
	  id: 2,
	  name: 'Rossi',
	  color: 'black',
	  stock: 15,
	  price: 200000,
	},
	{
	  id: 3,
	  name: 'Takegawa',
	  color: 'black',
	  stock: 20,
	  price: 190000,
	},
	{
	  id: 4,
	  name: 'RCB',
	  color: 'black',
	  stock: 5,
	  price: 1500000,
	},
  ];

//TODO 1 : dapatkan semua data
//TODO 2 : dapatkan data dengan nama tertentu
//TODO 3 : dapatkan data dengan warna tertentu
//TODO 4 : dapatkan data dengan stok >= 30


// TODO 1 : Dapatkan semua data
console.log("Semua data dalam format tabel:");
console.table(data);

// TODO 2 : Dapatkan data dengan nama tertentu
const getDataByName = (name) => data.find(velg => velg.name === name);
console.log("Data dengan nama TDR:", getDataByName('TDR'));

// TODO 3 : Dapatkan data dengan warna tertentu
const getDataByColor = (color) => data.filter(velg => velg.color === color);
console.log("Data dengan warna hitam:", getDataByColor('hitam'));

// TODO 4 : Dapatkan data dengan stok >= 30
const getDataByStock = (stock) => data.filter(velg => velg.stock >= stock);
console.log("Data dengan stok >= 10:", getDataByStock(10));
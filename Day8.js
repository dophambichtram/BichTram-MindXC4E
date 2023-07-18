// Câu 1 
// a
let arrA = ["Apple", "Strawberry", "Banna"]
arrA.splice(2, 0, "Rose", "Tulip")
console.log(arrA);
// b
let arrB = ["Apple Version1", "Strawberry Version1"]
let arrC = arrA.concat(arrB);
console.log(arrC);

// c 
arrC.splice(2, 1);
console.log(arrC);
// d
let missUniverse = [
	{
		name: "Oxana",
		age: 53
	},

	{
		name: "Amelia",
		age: 42
	},

	{
		name: "RyoMori",
		age: 43
	},

	{
		name: "Paulina",
		age: 30

	},

	{
		name: "Hanarz",
		age: 24
	},

]
// Viet function tra ve mang chi chua name
function newName() {
	let arrName = missUniverse.map(x => x.name)
	return arrName
}
console.log(newName());
// Viet function tra ve tong trung binh cua tuoi tung phan tu ben trong
function averageAge() {
	const arrAge = missUniverse.map(x => x.age)
	var sum = 0;
	var i = 0;
	while (i < arrAge.length) {
		sum = sum + arrAge[i];
		i++
	}
	var average = sum / arrAge.length;
	return average;
}
console.log("Tổng trung bình của tuổi bên trong " + averageAge());


// Câu 2
const infor = [
	{
		name: "Kpop",
		idol: [
			{ person: "Irene", obj: { entertaiment: "SM" } },
			{ person: "Dara", obj: { entertaiment: "YG" } },
			{ person: "Nayeon", obj: { entertaiment: "JYP" } }
		]
	}
]
function company() {
	const A = [];
	const itemA = infor[0];
	itemA.idol.forEach((idol) => {
		A.push(idol.obj.entertaiment);
	})
	return A;
}
console.log(company());

// BTVN
// Câu 1:
const array = [
	[{ name: "Hoàng", score: 2 }, { name: "Long", score: 4 }],
	[{ name: "Tú", score: 100 }, { name: "Linh", score: 10 }],
	[{ name: "Ngọc", score: 1 }, { name: "Long Lê", score: 9 }]
]
// Nối các mảng lại với nhau 
function concatArray(array) {
	let B = [];
	for (let i = 0; i < array.length; i++) {
		let C = array[i];
		B = B.concat(C);
	}
	return B
}

// Sắp xếp các mảng theo score
function sortArray(array) {
	array.sort(function (a, b) {
		return a.score - b.score; // So sánh hai đối tượng theo thuộc tính score
	});
	return array;
}
let noiMangArray = concatArray(array);
let sorteArray = sortArray(noiMangArray);
console.log(sorteArray);

// Câu 2
const array1 = [
	["Bai_01", "Bai_02", "Bai_03", "Bai_04"],
	["Bai_01", "Bai_03"],
	["Bai_02", "Bai_04", "Bai_01"],
	["Bai_04", "Bai_02", "Bai_03", "Bai_01"],
	["Bai_04", "Bai_03", "Bai_02", "Bai_01"]
]
function getObject(array1) {
	let x = {};//Tạo một đối tượng rỗng

	for (let i = 0; i < array1.length; i++)// Duyệt các phần tử của mảng
	{
		let x1 = array1[i];
		for (let j = 0; j < x1.length; j++)// Duyệt các phần tử của mảng con
		{
			let lesson = x1[i];
			let test = x1.indexOf(lesson);
			if (test < x1.length - 1)// Kiểm tra xem bài học hiện tại có phải là bài học cuối cùng trong mảng con không
			{
				let x2 = test + 1;// Tăng vị trí lên 1 và lấy ra bài học kế tiếp
				let nextLesson = x1[x2];
				x[lesson] = nextLesson;
			}
		}
	}
	return x;
}

let project = getObject(array1);// Gọi hàm với mảng đã cho
console.log(project);
document.addEventListener('DOMContentLoaded', function () {
	//////////////
	//////////////
	// document.querySelector('#btn-print').addEventListener('click', function () {
	// 	// window.print();

	// 	let wspFrame = document.getElementById('frame').contentWindow;
	// 	wspFrame.focus();
	// 	wspFrame.print();
	// });
	//////////////
	//////////////


// 	document.querySelector('#btn-one').addEventListener('click', function () {
// 		html2canvas(document.querySelector('#content')).then((canvas) => {
// 			let base64image = canvas.toDataURL('image/png');
// 			// console.log(base64image);
// 			let pdf = new jsPDF('p', 'px', [1600, 1331]);
// 			pdf.addImage(base64image, 'PNG', 185, 15,970, 1500);
// 			// pdf.addImage(base64image, 'PNG', 245, 205,830, 900);
// 			// pdf.addImage(base64image, 'PNG', 15, 15, 1110, 360);

// 			// pdf.save('webtylepress-two.pdf');
// 			pdf.autoPrint();
// 		//This is a key for printing
// 			// pdf.output('dataurlnewwindow');
// 			window.open(pdf.output('bloburl'), '_blank');
// // 1331 
// // 245

// 			db.collection('pdfcounter').onSnapshot(snapshot => {
// 				let changes = snapshot.docChanges();
// 				changes.forEach(change => {
// 					if(change.type == 'added'){
// 					renderReservation(change.doc)
// 					}
// 				})
// 			})
// 			function renderReservation(doc){
// 				var str= doc.data().count;
				
// 				var newStr = str.replace(/-/g, "");
// 				// console.log(newStr)
// 				// console.log(Number(newStr))
// 				let counter = newStr
// 				counter++
		
// 				var a = String(counter);
// 				var b = "-";
// 				var position = 2;
// 				var result = [a.slice(0, position), b, a.slice(position)].join('');
// 				console.log(result);

// 				db.collection('pdfcounter').doc('5tyUZ0nJQyBq6oOnPEhw').set({
// 					count: result
// 				})
// 			}
			


// 		});
// 	});


	document.querySelector('#btn-two').addEventListener('click', () => {
		html2canvas(document.querySelector('#content')).then((canvas) => {
			let base64image = canvas.toDataURL('image/png');
			base64image.crossOrigin="anonymous"
			// console.log(base64image);
			let pdf = new jsPDF('p', 'px', [1600, 1331]);
			pdf.addImage(base64image, 'PNG', 185, 15,970, 1500);


			pdf.save('webtylepress-two.pdf');

			// get number
			const code = document.querySelector('.num')
			var cached = JSON.parse(window.sessionStorage.getItem('pdfinfo-cached'));
			cached.number = code.textContent
			
			db.collection('travelResult').add(
				cached
			).then(e => {
				window.location.reload();

				sessionStorage.clear();
			})

		});
	})
	document.querySelector('#btn-back').addEventListener('click', () => {

		db.collection('pdfcounter').onSnapshot(snapshot => {
			let changes = snapshot.docChanges();
			changes.forEach(change => {
				if(change.type == 'added'){
				renderCount(change.doc)
				}
			})
		})
		function renderCount(doc){
			var str= doc.data().count;
			
			var newStr = str.replace(/-/g, "");
			let counter = newStr
			counter++
	
			var a = String(counter);
			var b = "-";
			var position = 2;
			var result = [a.slice(0, position), b, a.slice(position)].join('');

			db.collection('pdfcounter').doc('5tyUZ0nJQyBq6oOnPEhw').set({
				count: result
			}).then(e => {
				window.location.href = './index.html'
			})
		}


	})
	// document.querySelector('#btn-edit').addEventListener('click', () => {
	// 	window.location.href = './index.html'
	// })
	//////////////
	//////////////
	// document.querySelector('#btn-two').addEventListener('click', function () {
	// 	html2canvas(
	// 		document
	// 			.querySelector('iframe')
	// 			.contentWindow.document.querySelector('.receipt-wrap'),
	// 	).then((canvas) => {
	// 		let base64image = canvas.toDataURL('image/png');
	// 		// console.log(base64image);
	// 		let pdf = new jsPDF('p', 'px', [1600, 1131]);
	// 		pdf.addImage(base64image, 'PNG', 15, 15, 1140, 966);
	// 		pdf.save('webtylepress-receipt.pdf');
	// 	});
	// });
	//////////////
	//////////////
});

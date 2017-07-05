var items = [
	{
		id: 0,
		header: "header",
		meta: "meta",
		image: "https://semantic-ui.com/images/avatar2/large/kristy.png"
	},
	{
		id: 1,
		header: "header",
		meta: "meta",
		image: "https://semantic-ui.com/images/avatar2/large/kristy.png"
	},
	{
		id: 2,
		header: "header",
		meta: "meta",
		image: "https://semantic-ui.com/images/avatar2/large/kristy.png"
	}
];

function get(url) {
	var m = meta;
	axios
		.get(url)
		.then(function(response) {
			m.items = response;
		})
		.catch(function(error) {
			m.items = response;
		});
}

function semanticJS() {
	// var id = $('ui.cards').find('option:selected').attr('id')
	// console.log(id)
	// $('.long.modal').modal('show')

	console.log("semantic initalised");
}

var vue = new Vue({
	el: "#app",
	data: {
		items: items,
		image: "",
		name: "",
		desc: "",
		price: ""
	},
	created: function() {
		semanticJS();
		get("http://httpbin.org/ip");
	},
	methods: {
		newItem: function(event) {
			$(".ui.modal.new.item").modal("setting", "transition", "fade up").modal("show");
		},
		showModal: function(event) {
			$(".ui.modal.select.item").modal("setting", "transition", "fade up").modal("show");
		},
		onFileChange: function(e) {
			var files = e.target.files || e.dataTransfer.files;
			if (!files.length) return;
			this.createImage(files[0]);
		},
		createImage: function(file) {
			var image = new Image();
			var reader = new FileReader();
			var vm = this;

			reader.onload = e => {
				vm.image = e.target.result;
			};
			reader.readAsDataURL(file);
		},
		removeImage: function(e) {
			this.image = "";
		},
		confirmItem: function(e) {
			item_details = {};
			item_details.name = this.name;
			item_details.desc = this.desc;
			item_details.price = this.price;
			item_details.image = this.image;

			alert("Adding new item with details: " + JSON.stringify(item_details));
		}
	}
});

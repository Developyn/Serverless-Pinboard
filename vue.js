var items = [{'header':'header', 'meta': 'meta', 'image': 'https://semantic-ui.com/images/avatar2/large/kristy.png'}, {'header':'header', 'meta': 'meta', 'image': 'https://semantic-ui.com/images/avatar2/large/kristy.png'}, {'header':'header', 'meta': 'meta', 'image': 'https://semantic-ui.com/images/avatar2/large/kristy.png'}]

function get(url) {
	var m = meta
	axios.get(url)
		.then(function(response) {
			m.items = response
		})
		.catch(function(error) {
			m.items = response
		}
	)
}

function semanticJS() {
	$('.ui.modal').modal('show');
}

var vue = new Vue({
	el: '#app',
	data: {
		items: items
	},
	created: function() {
		get("http://httpbin.org/ip")
		fetchBranchNames()
		fetchTerraformReleaseBranch()
	}
})

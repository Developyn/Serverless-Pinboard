var branchNames = []
var releaseBranches = []
var meta = {};

function get(url) {
	var m = meta;
	axios.get(url)
		.then(function(response) {
			m.ip = response.data.origin
		})
		.catch(function(error) {
			m.ip = response
		}
	)
}

function fetchBranchNames() {
	var url = "http://httpbin.org/ip"
	var jenkins = "https://jenkins.cognitoservice.com/job/ReleaseManagement/job/ProductStackPipeline/job/ProductStackReleaseManagement/lastSuccessfulBuild/artifact/release_branch_names_and_tags.txt"
	axios.get(url)
		.then(function(response) {

			var a = {
				ccBranch: "Orwell-Product-Stack",
				terraformTag: "Orwell",
				platformTag: "Orwell_patch_1",
				ansibleBranch: "Orwell",
				terraformBranch: "release/1.17.0",
				response: response
			}

			this.branchNames.push(a);
		})
}

function fetchTerraformReleaseBranch() {
	var url = "http://httpbin.org/ip"
	var jenkins = "https://jenkins.cognitoservice.com/job/ReleaseManagement/job/ProductStackPipeline/job/ProductStackReleaseManagement/lastSuccessfulBuild/artifact/devops_trraform_release_branch_or_tag.txt"
	axios.get(url)
		.then(function(response) {

			var a = {
				ansibleCassandraBranch: "17.05.100",
				terraformSNSBranch: "17.06.20",
				terraformLambdaBranch:"16.06.50",
				terraformSecurityBranch: "17.06.20",
				terraformSQSBranch: "17.06.20",
				response: response
			}

			this.releaseBranches.push(a);
		})
}

var vue = new Vue({
	el: '#app',
	data: {
		meta: meta,
		branchNames: branchNames,
		releaseBranches: releaseBranches
	},
	created: function() {
		get("http://httpbin.org/ip")
		fetchBranchNames()
		fetchTerraformReleaseBranch()
	}
})

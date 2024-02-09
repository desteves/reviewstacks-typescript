import * as pulumi from "@pulumi/pulumi";
import * as service from "@pulumi/pulumiservice";

// Configurations
const organization = pulumi.getOrganization();
const config = new pulumi.Config();
const repository: string = config.require('repository');
const branch: string = config.require('branch');
const repoDir: string = config.require('repoDir');
const projectRef:string = config.require('projectRef');
const stackRef: string = config.require('stackRef');

// Resources
new service.DeploymentSettings("ds", {
    organization: organization,
    project: projectRef,
    stack: stackRef, //"test
	github: {
        // this single stack is used for both push to deploy + PR previews
        // as well as the review stack template
		deployCommits: true,
		previewPullRequests: true,
		pullRequestTemplate: true,
		repository: repository, //"desteves/pulumi-reviewstacks-demo",
	},
    sourceContext: {
        git: {
            branch: branch, //"refs/heads/main",
            repoDir: repoDir, //"infra"
        }
    }
});
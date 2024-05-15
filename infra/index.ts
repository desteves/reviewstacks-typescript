import * as pulumi from "@pulumi/pulumi";
import * as service from "@pulumi/pulumiservice";

// Configurations
const organization = pulumi.getOrganization();
const config = new pulumi.Config();

const repositoryRef: string = config.require('repositoryRef');
const branchRef: string = config.require('branchRef');
const repoDirRef: string = config.require('repoDirRef');
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
		repository: repositoryRef, //"desteves/pulumi-reviewstacks-demo",
	},
    sourceContext: {
        git: {
            branch: branchRef, //"refs/heads/main",
            repoDir: repoDirRef, //"infra"
        }
    }
});

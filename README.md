# reviewstacks-typescript

A Pulumi template to quickly add Pulumi Deployments Review Stacks to your existing Pulumi program. This is Pulumi Cloud-backed programs.

The template lives in the `infra/` subfolder.

> [!IMPORTANT]
> [Install the Pulumi GitHub App](https://www.pulumi.com/docs/using-pulumi/continuous-delivery/github-app/#installation-and-configuration) before proceeding.

To use the template

```bash
# copy the template (feel free to change the output dir)
program=test
pulumi new https://github.com/desteves/reviewstacks-typescript/infra --dir $program
# complete the prompts

# create the resources
pulumi up --cwd $program --yes

# clean up
pulumi destroy --cwd $program --yes --remove
```

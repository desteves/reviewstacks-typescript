# reviewstacks-typescript 🚧🦺🏗️ WORK IN PROGRESS

A Pulumi template to quickly add Pulumi Cloud Review Stacks to your existing Pulumi program

The template lives in the `infra/` subfolder

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
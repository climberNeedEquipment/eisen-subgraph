# Eisen Subgraph

This Subgraph sources events from the Eisen router contract in different networks.

## Deploying the subgraph:

**First time only**

```ssh
yarn
```

**Network deployment**

We use Goldsky for deploying make sure to have files for specific network info in json format in config folder.

First run:

```ssh
goldsky login
```

If you already have an existing subgraph in deployed network, you will have to delete it to deploy the new one

**Deploy**

```
--product hosted-service --access-token {TOKEN}
```

as extra parameters just after "graph deploy" in the package json and then execute the following:

```ssh
yarn prepare:<network> // make sure to add in the package.json scripts
yarn codegen // generate the types
yarn build // build the subgraph
goldsky subgraph deploy {your_project_name}/{version} --path .
```

## Deployments

You can check deployed goldsky subgraphs urls in src/config.ts

## Notes

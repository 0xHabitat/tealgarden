# TealGarden :muscle: :sunny:

###### (a.k.a. SolarPunch)

A collection of self-management processes and tools used by communities, DAOs and collaboratives around the globe.

## The Community

We host a community of curated internal organisational processes and the independent tools that are used. The SolarPunch members range from smaller teams over intermediate initiatives to bigger international movements.

**Learn**  
Test and integrate new solutions from the community. Learn about new processes, decentralized mangement methods and open-source tools.   

**Experiment**  
Become the owner of your data and documents by using decentralized or self-hosted tools. Inform yourself about sovereign tech and find the right organisational solution with the right tool.  

**Share**  
Become a organisation architect and share your individual experience of organising yourself or your initiative. 

We believe in open-source and decentralized software solutions that keeps privacy and the sovereignity of the user. As solarpunks we believe in open software for decentralized communities of the people. 

Become part of the solarpunch community - learn, experiment, share. 

## Join the Future of Organization

Non-hierachical organisations are the future for distributed self-managed people. Already today many organisations coordinate themselves decentralized and as a collaboration of members inside a community. 

Transparency of processes (e.g. communication, decision making and task management) are the key for efficient organisation. Members are the drivers of change with responsive and influential actions. 

# Installation

```
yarn
```

```
// For starting GatsbyJs Server run
yarn gatsby-dev
```
GatsbyJs server will start in `localhost:8000`

# Folder Structure

```
/packages
	/common [All common components and resource]
		/Assets
		/components
		/contexts
		/data
		/theme
	/functions
	/landing-gatsby [all pages]
```

# Stack used in this project

1. Lerna (A tool for managing JavaScript projects with multiple packages. https://lernajs.io)
2. Yarn Workspace
3. React Js
4. Gatsby Js
5. Styled System and Styled Components

# Deployment

For deploying your final project you have to build your project first. To build the project you have to follow below procedure.

### GatsbyJs

Run the below command on

```
yarn gatsby-build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.

yarn gatsby-serve
```

If you run `yarn gatsby-serve` then the build version the the project will start in `localhost:9000` . Navigate to the url you will get your site up and running.

# Deployment Support

## now.sh

### GatsbyJs

We have given now.sh deployment by default. For hosting the project in now.sh first you have to rename `gatsby-landing.now.json` to `now.json`.

You can change the name according to your project in now.json file like:

```
{
	"name": "your_project_name"
}
```

Now run below command after building the project.

```
now
```

## Netlify

At first, open an account on netlify and go to `sites` tab.

### GatsbyJs

If you want to host the `gatsbyjs` project, go to your command line and run this command on root directory.

```
yarn gatsby-build
```

After running above command go to `landing-gatsby` folder. You will find a `public` folder
there. Drag and drop this `public` folder on netlify `sites` tab.

![solarpunk](img/solarpunk.png "solarpunk")

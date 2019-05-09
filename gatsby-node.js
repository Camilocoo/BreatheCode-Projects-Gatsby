
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const fetch = require('node-fetch');
const fs = require('fs');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        fetch("https://projects.breatheco.de/json?size=big")
            .then(resp => resp.json())
            .then(projects => {
	            const technologyTags = projects.map(p => p.technology);

                createPage({

                    path: `/home`,
                    component: path.resolve("./src/templates/home.js"),
                    context: {
                        technologyTags,
                        projects
                    },
                })

                projects.forEach(p => {
                    createPage({
                        path: `/project/${p.slug}`,
                        component: path.resolve("./src/templates/single.js"),
                        context: p,
                    })
                    createPage({
                        path: `/d/${p.slug}`,
                        component: path.resolve("./src/templates/single.js"),
                        context: p,
                    })
                });
                resolve();
            })
            .catch(error => {
                console.log(error);
                reject();
            });
    });

};
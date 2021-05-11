# Personal Website
My Website Link: https://andy-94.github.io/webpage/ .

</hr>
This is my personal website. built using modern JavaScript, base on create-react-app with React-Router, Less, Material-UI, GitHub actions, and many other userful technologies.

# Adapting this Project
If you want to build your own personal website from this project, it will very faster. Please feel free to reach out to me by filing an issue or emailing me at andycodebuilder@gmail.com for help configuring your project.

# Dependencies
My development environment is MacOS. using Visual Studio.
Tested with: node == v12.16.0 and optional brew for managing node versions.(windows can use nvm for managing node versions.)


# Running

Run the following command to build the react application and serve it with fast refresh:
<ul>
  <li>npm start</li>
  or
  <li>yarn start</li>
  <li>nvm install</li>
  <li>npm install  or  yarn install</li>
</ul>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
</hr>
The page will reload if you make edits.\
You will also see any lint errors in the console.

## Deploying
<h4>Deploying to Github Pages</h4>
<ol>
<li>Modify the environmental variables and git remote url in .github/workflows/github-pages.yml.</li>
<li>Modify homepage in package.json to point to where you plan to host your site. If you do not plan on using a custom domain name, it should look like https://[your-gh-username].github.io/[repository-name - default:personal-site]/</li>
<li>If you plan on using a custom domain, modify public/CNAME. If you don't, delete public/CNAME.</li>
</ol>
Make a commit to main and push your changes. That's it.


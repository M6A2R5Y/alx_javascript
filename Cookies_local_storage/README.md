<h1>Cookies and local storage</h1>
<div>
<h2>Tasks</h2>
<h3>0.Create basic cookie</h3>
<h4> Install your development environment:</h4>
<p>
<ul>
<li>Installwebpack-dev-server by running npm install webpack-dev-server --save-dev (if you have some errors of missing dependencies, install these packages: npm i -D webpack and npm i -D webpack-cli)</li>
<li>Create an empty file src/index.js</li>
<li>Run your server with node_modules/.bin/webpack-dev-server</li>
</ul>
</p>
<h4>In a file 0-index.html, create a basic html template:</h4>
<p>
<ul>
<li>Add two text inputs, with the id firstname and email</li>
<li>Add one button with the text “Log me in” that will call the function setCookies</li>
<li>Add one button with the text “Show the cookies” that will call the function showCookies</li>
<li>Create a function setCookies:
<ul>
<li>It should set the cookie firstname with the value in the firstname input</li>
<li>It should set the cookie email with the value in the email input</li>
</ul>
</li>
<li>Create a function showCookies:
<ul>
<li>It should create a DOM element p</li>
<li>It should set the inner html with Cookies: and the value of the cookie</li>
<li>It should append the paragraph at the bottom of the page</li>
</ul>
</li>
</ul>
</p>
<h4> Requirements:</h4>
<p>
<ul>
<li>Try to make your page to look as close to the image below as possible</li>
<img src="C:\Users\Admin\Downloads\5bcb67bddaba890742ab.png" alt="">
<li>Access your code with http://localhost:8080/0-index.html</li>
<li>Use vanilla javascript to complete the task</li>
</ul>
</p>
<p>
<h4>Tips</h4>
<p>
<ul>
<li>If you are using VSCode, you can use the plugin live server</li>
</ul>
</p>
<p>
<h4>Repo:</h4>
<ul>
<li>GitHub repository: alx_javascript</li>
<li>Directory: Cookies_local_storage</li>
<li>File: package.json, src/index.js, 0-index.html</li>
</ul>
<h3> 1. Create cookie with expiration date and specific path</h3>
<h4> In a file 1-index.html: </h4>
<p>
<ul>
<li>Reuse the code of the previous task</li>
<li>Modify the way you are setting cookies to expire in 10 days</li>
</ul>
<h4>Requirements:</h4>
<ul>
<li>Access your code with http://localhost:8080/1-index.html</li>
<li>Use vanilla javascript to complete the task</li>
</ul>
<h4>Repo:</h4>
<ul>
<li>GitHub repository: alx_javascript</li>
<li>Directory: Cookies_local_storage</li>
<li>File: 1-index.html</li>
</ul>
</p>
<h3> 2. Read cookie</h3>
<h4>In a file 2-index.html:</h4>
<p>
<ul>
<li>Reuse the code of the previous task</li>
<li>Create a function getCookie:
<ul>
<li>It accepts name as argument</li>
<li>It should return the value of the cookie with the name passed in argument<?</li>
<li>If the cookie does not exist, it should return an empty string</li>
</ul>
<ul>
<li>Modify the function showCookies:
<ul>
<li>It should display the paragraph Email: EMAIL - Firstname: FIRSTNAME</li>
</ul>
</li>
</ul>
<h4>Requirements:</h4>
<ul>
<li>Access your code with http://localhost:8080/2-index.html</li>
<li>Use vanilla javascript to complete the task</li>
</ul>
<h4>Repo:</h4>
<ul>
<li>GitHub repository: alx_javascript</li>
<li>Directory: Cookies_local_storage</li>
<li>File: 2-index.html</li>
</ul>






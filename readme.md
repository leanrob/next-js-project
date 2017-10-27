# Portfolio Project
## aka Building a single-page app with React and Next.js

## What is it

It is me, Rob, in digital portfolio form. This is meant to replace the current site that is hosted at [http://leanrob.com]

## What you building it with?

The following are some of the technologies, frameworks and methodologies that I am using to implement this. Some are chose because they are the right tool for the job, some because they are awesome and some are just overkill to learn some cool new stuff.

(img)

[NextJS] by Arunoda Susiripala ([@arunoda]) – ▲ZEIT
[https://github.com/zeit/next.js/]

[ReactJS] by Facebook
[https://github.com/facebook/react/]

[Babel]
[https://github.com/babel/babel]

[NodeJS]
[https://github.com/nodejs]

[npm ]/ [Yarn]
[https://github.com/yarnpkg]
[https://github.com/npm]

## Styling in this project

This project uses jsx style markup to create the styles and then import them directly into the markup as React imports.

For example, the following would be a style only file that would only then be imported into the react element it is meant to style…

'' const HeaderSectionStyle = () => (
'' 	<style jsx>{`
''       .header-section {
''         background: url("http://leanrob.com/wp-content/uploads/2016/08/Gmail-bkgrd.png");
''         text-align: center;
''         padding: 50px;
''       }
''       @media (min-width: 320px) {
''         
''       }
''       @media (min-width: 480px) {
''         
''       }
''       @media (min-width: 600px) {
''         
''       }
''       @media (min-width: 801px) {
''         
''       }
''       @media (min-width: 1025px) {
''         
''       }
''       @media (min-width: 1281px) {
''         
''       }
'' 	`}
'' 	</style>
'' )
'' 
'' export default HeaderSectionStyle

Where in the example above there are sections designed to be used for any media size.

This way it is possible to think about design in the same form at I think about JS and to take mobile platforms into consideration right from the start.

**Note:** If you know how to get SublimeText/WebStorm to display the content in these backpacks with the correct CSS colour then please let me know, I would love to hear about it!

## Why?

Why not?

Check me out on twitter at [@lean_rob]
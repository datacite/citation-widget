# citation-widget
Widget to generate and display a citation based on a DOI in any web page, using the Crosscite Citation Formatter

## Widget setup
### Pre-requisites

- You have a live website, and have access to add/edit HTML code including ```<script>``` tags on the page that you would like to embed the widget into
- You are able host the citation-widget.js on your server, or copy the source code into your page.

Note: you cannot link to the .js file on github, as github will prevent it being loaded.

### Basic setup

Copy and paste the code below into a page on your website that you'd like the widget to appear on. Edit the code to include your ORCID API client ID and the URL of the page that you've pasted the code into.

    <script src="http://[YOUR SERVER LOCATION FOR THE SCRIPT]/citation-widget.js"></script>
    <div id="citation" data-doi='[THE DOI THAT YOU WOULD LIKE TO GENERATE A CITATION FOR]'></div>

If you cannot host the .js file, then you can copy and paste the contents of citation-widget.js in between the script tags.
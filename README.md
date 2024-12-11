# Readme

1. I have used vite for faster development. I created a react app using vite and at first and installed the modules and packages that were required for this project such as react-router-dom and all.
2. I have used Tailwind css and font awesome for faster styling.
3. I created a file named Topbar and created the topbar with title and navs(only Home).
4. I created the tools section in the Homepage. It contains search, search by barcode, sort and filter.
5. I created the products div and card component with dummy details. Then I fetched all the products using the api with page=1, page_size=24, search_terms="".
This will get send us the products list.
6. Then using the map function I have displayed the dummy cards and send the product data as prop in the card component. Then I used the data to display details of the product in the card.
7. Then I have created a Details page where product detailsare displayed I have used dynamic routing and react router dom for this. I have used product._id as params.
Using the barcode api I can fetch the product details, after fetching the details I used it to display the data.
8. Then I have created state name search using this we can use searchbar to search the list of products which has similar values to it.
9. Then I have created a sidebar for the filter, after clicking on the filter the sidebar will open and close. In the sidebar I have used the checkboxes and have added some categories(filter Options in the Tools.jsx). I have created the filter state in the Homepage.jsx after chicking on any category the filter state will get updated. If the filter's length is greated than 0 it will use the api for filter and update the jsonData(state where products are stored).

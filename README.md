# Sunshine Rebel -React Typescript

Summary

#### The project introduces the following
1) Mocked API.
2) The structure of the table is handed over as a parameters.
3) The table is able to display images, links, dates, booleans, and select input.
4) The data is handed over as a parameter.
5)The table has an option to be displayed as table or as grid.

## How does it work 



The solution provides a fully custmizable react components to display tables and grids for given schema.
For Example, the picture below displays a table with schema that contains the following columns :

[Image	Item Name	Fat(g)	Carbs(g)	Protein(g)	Calories(g)	Contains Milk]
![image](https://github.com/rotanmihyar/sunShine/blob/master/ScreenShots/table.png)

As another example, the below picture displays the table for the very same data but with a different schema. 
![image](https://github.com/rotanmihyar/sunShine/blob/master/ScreenShots/table2.png)

For both examples above, the end user is able easily to change the layout from table to a grid.
![image](https://github.com/rotanmihyar/sunShine/blob/master/ScreenShots/grid.png)

## Primary Components
### [Table Grid](https://github.com/rotanmihyar/sunShine/blob/master/src/TableGridSwitch.tsx)
This component will allow switching the views between display grid and display table through radio buttons.

### [Display Grid](https://github.com/rotanmihyar/sunShine/blob/master/src/DisplayGrid.tsx)
This component contains customizable Grid UI views and functions.

### [Display](Table https://github.com/rotanmihyar/sunShine/blob/master/src/DisplayTable.tsx)
This component contains customizable table UI views and functions.

## Used Frameworks
### Mocked API / json-server
json-server is a Node Module that you can use to create mock rest json webservice in less than a minute.
After pulling the code you can run the following on the terminal : **json-server --watch src/db.json**
and you can access it by calling this API
**http://localhost:3000/food**


![image](https://github.com/rotanmihyar/sunShine/blob/master/ScreenShots/API.png)

### Material UI
Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.


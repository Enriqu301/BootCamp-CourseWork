<center>

### AUSTIN COMMUNITY COLLEGE
### Web Software Bootcamp

# SQL

</center>

# Objectives:

1) Connect to PostgreSQL Database
1) Understand how to write SQL queries

    1) Basic queries
    2) Joins
    3) Data Manipulation
    4) Creating tables

1) Use projects to practice writing queries
1) Introdution to database architecture

<hr><hr>
<center>

# Learning Path

</center>

## <a id='_deadlines' href='#deadlines'>1. Deadlines</a>

1. Ongoing - go through the Readings and get a basic idea of how to write queries
1. 10/29/22 - W3Schools - focus on joins and how to write them
1. 11/8/22 - Tentative date to work on BucketList App conversion from Mongo to SQL - make sure you have completed Project #2
1. 11/10/22 - Should be done with ALL SQL projects
  
## <a id='_readings' href='#readings'>2. Readings</a>

1.  <a id='_subRead1' href='#subRead1' style='color: blue'>W3Schools</a>
  

## <a id='_tutorials' href='#tutorials'>3. Online Supplemental Tutorials</a>


## <a id='_projects' href='#projects'>4. Projects</a>

1. <a id='_projects' href='#project1' style='color: blue'>SQL Queries</a>
1. <a id='_projects' href='#project2' style='color: blue'>BucketList App conversion</a>

## <a id='_slides' href='#slides'>5. Slide Decks (if applicable)</a>

## <a id='_recommended' href='#recommended'>6. Recommended Resources</a>

1. <a id='_projects' href='#subResource1' style='color: blue'>SQL Tutorial on Khan Academy</a>
1. <a id='_projects' href='#subResource2' style='color: blue'>Youtube Learn Postgres for Beginners</a>
1. <a id='_projects' href='#subResource3' style='color: blue'>PG Documentation</a>

  
<hr><hr>

# <center>Readings</center>

Most of our SQL learning will be done in class and through practical experiences and interacting with a database.

The following is a a great self-study to get a basic understanding of SQL.
<hr>

## <center>W3Schools SQL</center>
#### <a id='subRead1' href="#_readings"> (back to top)</a>
<br>

### [W3Schools SQL tutorial](https://www.w3schools.com/sql/)

Go through this at your own pace.

It is set up to be an interactive learning experience. 

<hr><hr>

# <center>Slide Decks

#### <a id='slides' href='#_slides'>(back to top)</a>

These slides are for reference only and will not necessarily be used in class:

1. [SQL - Intro, Setup, Queries](https://docs.google.com/presentation/d/1rw6yyB9xOmkoAWYgU3EMk1YkH13djCiVR72W01xJwXE/edit?usp=sharing)
2. [SQL - Practice, Design](https://docs.google.com/presentation/d/12HrTgqCZ71jTPMt6rdLwCjNWEAYzytywz64W_lP8fxw/edit?usp=sharing)

<hr><hr>

# <center id="tutorials">Online Tutorials</center>

<h2 style='color: red'>TIME REQUIRED - 2-3 hours</h3>

1. [SQL Tutorial by Socratica (fun - gotta watch) ](https://www.youtube.com/watch?v=nWyyDHhTxYU&list=PLi01XoE8jYojRqM4qGBF1U90Ee1Ecb5tt)

<hr><hr>

# <center id='projects'>Projects</center>

SQL is best learned by practice, practice, practice.  Learning concepts from secondary sources is necessary to start, 
but to grasp the underlying concepts you must write the queries and check the output of those while fine-tuning the results until you can get exactly what you are looking for (or asked for).

## <center>Project #1</center>
#### <a id='project1' href="#_projects"> (back to top)</a>
<br>

Try the following questions on the database provided in class and add the queries to a file in your github repository. You can add individually or add to one text file and save to your repo.

#### Task 1:

1. Please find all employees that have a salary greater than 30000 and less than 50000
- using AND operator
- using BETWEEN operator

#### Task 2:

1. List the employees whose last name is longer than 6 characters.  
2. In this query, return the first 6 characters of their last names, the jobs they perform and their salary.

**Hint:** find appropriate string functions that would help you get this done.

#### Task 3:

1. Please find all employees that have a salary greater than 8000, and those hired after 1996 (use implicit conversion of a date as a string to the DATE type).  
2. Create a separate query to find the lowest salary in the company (look for a SQL math function from references or Google search which allows you find the minimum in a set or a column).
3. In the first query you wrote above, please also report the employee's total compensation (salary + commission, if any) as a percentage of the minimum salary in the company from the #2 above.

#### Task 4: 

  List the full names and their department names of the all employees in the "bootcamp" database.  Do the same for the employees
  that work for department "Sales".  Order the results by hiring date with the most recent hires at the top.
  
  Hint: you may NOT look up the department_id of "Sales", but use the text "Sales" in the query.  Do something like `... WHERE department_name = 'Sales'`  
  
  
  What you would expect to see is somthing like this:

```
         Full Name     |    Department    
    -------------------+------------------
     Lex De Haan       | Executive
     Susan Mavris      | Human Resources
     William Gietz     | Accounting
     Hermann Baer      | Public Relations
     Shelley Higgins   | Accounting
     Daniel Faviet     | Finance
     ...
 ```
 
 #### Task 5: 
 
   List the first, last, email, department name and city of all employees that are Execs.
   
   Hint: Join between EMPLOYEES, DEPARTMENTS and LOCATIONS using DEPARTMENT_NAME = 'appropriate department name'.
   
   What you would expect to see is something similar to this:
   ```
   FIRST      LAST       EMAIL      DEPT       CITY
   ---------- ---------- ---------- ---------- ------------
   Steven     King       SKING      Executive  Seattle
   Neena      Kochhar    NKOCHHAR   Executive  Seattle
   Lex        De Haan    LDEHAAN    Executive  Seattle
   Seely      Bruce      bman       Executive  Seattle
   Stephen    Noyce      snoyce     Executive  Seattle
   ...
   ```

#### Task 6: 

  To the above query, add the manager's first name to the column list.
  
  Hint: add a self join to the EMPLOYEES table all over again giving it a different alias.   
  
  Make changes so that all 22 employees are listed (for this requirement, think about using outer joins.  You may wait till we have covered outer joins in class.)  
  
  What you would expect to see is something similar to this:
  
  ```
  FIRST      LAST       EMAIL      MANAGER    DEPT       CITY
  ---------- ---------- ---------- ---------- ---------- ----------
  Neena      Kochhar    nkocchar   Steven     Executive  Seattle
  Lex        De Haan    ldehaan    Steven     Executive  Seattle
  Seely      Bruce      bman       Steven     Executive  Seattle
  Stephen    Noyce      snoyce     Steven     Executive  Seattle
  ...
  ```


#### Task 7: 

  Find out how many employees were hired in each year.  List years and counts of employees hired in those years.  See sample output below.  
  
  Hint: use grouping after extracting the year of hire.
  
  Then leave out those who years where less than 2 employees were hired, while ordering the results chronologically.

  You should see something smiliar to this:
    
  ```
     year_of_hiring | count 
    ----------------+-------
               1997 |     2
               2004 |     2
               2006 |     3
               2007 |     3
               2008 |     3
               2009 |     2
    (6 rows)
  ```

<hr>

## <center>Project #2</center>
#### <a id='project2' href="#_projects"> (back to top)</a>
<br>

We will rebuild our Mongo BucketList App in class. In order to truly understand this, researching the following before the class where we build the ToDo App:

[NPM PG and documentation](https://node-postgres.com/)

<hr><hr>

# <center id='recommended'>Recommended Resources :</center>

## <center>SQL Tutorial on Khan Academy</center>

#### <a id='subResource1' href="#_recommended"> (back to top)</a>
<br>

[SQL Tutorial on Khan Academy](https://www.khanacademy.org/computing/computer-programming/sql)

This gives you more hands on practice.

<hr>

## <center>Youtube Learn Postgres for Beginners</center>
#### <a id='subResource2' href="#_recommended"> (back to top)</a>
<br>

[Youtube Learn Postgres for Beginners](https://www.youtube.com/playlist?list=PL-osiE80TeTsKOdPrKeSOp4rN3mza8VHN)

This training is designed and demonstrated on a Mac.  So if you are on a Mac, you would be able to follow along.  

If you are on Windows or Linux, you may have to adapt to the Corey Schafer (instructor)'s steps.  For example, you may use the Postgres DB provided by the Bootcamp instructors and specified in the first slide deck above.

<hr>

## <center>PG Documentation</center>
#### <a id='subResource3' href="#_recommended"> (back to top)</a>
<br>

[NPM PG and documentation](https://node-postgres.com/)

Documentation for PG module on NPM.


<hr><hr>


-- Select all rows from hr.employees
SELECT *
FROM hr.employees
WHERE department_id = 110;
-- 
-- 
-- 
-- List all employees with last name king
SELECT *
FROM  employees
WHERE UPPER (last_name) ILIKE UPPER('%king%');


-- List all employees whost lats names start with 
SELECT first_name || ' ' || last_name AS full_name 
FROM hr.employees 
WHERE last_name 
ILIKE 'k%';

SELECT employee_id AS _id, first_name || ' ' || last_name AS full_name 
FROM hr.employees 
WHERE last_name 
ILIKE 'k%';

-- All empooyess for more than 20 year_of_release
SELECT *
FROM hr.employees
WHERE extract(year FROM CURRENT_DATE) - extract(year FROM hire_date)AS Years_with_Company, > 20;
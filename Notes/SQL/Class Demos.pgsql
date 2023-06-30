-- Class Demos
-- SELECT first_name, last_name, salary
-- FROM
-- WHERE salary > (select avg(salary) from employees);

-- find all dep in UK
-- Sub Queries
SELECT department_name
FROM departments
WHERE location_id IN 
        (SELECT location_id FROM locations
        WHERE country_)id = 'UK');



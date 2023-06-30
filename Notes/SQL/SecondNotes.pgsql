-- Find all in Seatle
SELECT first_name || ' ' || last_name
    AS "fullname",
    department_id
FROM
    employees
WHERE
    department_id IN (
        SELECT department_id FROM departments
        WHERE location_id IN (
            SELECT location_id FROM locations
            WHERE city = 'Seattle'
        )
        
    );


-- sub queries finds employees who make above average salary
-- averaged over each department

SELECT first_name, last_name, salary
FROM hr.employees as e_outer
WHERE
    salary > 
    (
        select avg(salary) 
        from employees as e_inner
        where e_inner.department_id = e_outer.department_id
        group by department_id   
    );

-- subquery finds emps who make above average salary
-- averaged over each department
SELECT first_name, last_name, salary
FROM hr.employees as e_outer
WHERE
    salary > 
    (
        select avg(salary) 
        from employees as e_inner
        where e_inner.department_id = e_outer.department_id
        group by e_inner.department_id;


-- List teams in a specific order
SELECT p.fname || ' ' || p.lname AS full_name, t.name
FROM players p LEFT JOIN teams t
ON p.team_id = t.id



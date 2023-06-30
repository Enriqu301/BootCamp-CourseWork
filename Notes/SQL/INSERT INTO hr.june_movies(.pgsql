INSERT INTO hr.june_movies(
    movie_name,
    year_released,
    run_time_minutes,
    suggestor
) VALUES (
    'Fight Club',
    1999,
    139 ,
    'Rick'
);
-- WHERE means 
-- Count shows how many there are
-- AS is an alias that changes the output title collumn
SELECT 
    rec_by, 
    count(*) AS "HOW Many"
FROM movies
GROUP by rec_by
HAVING count(*) > 2
ORDER BY count(*) DESC
;

SELECT
    -- First Type of FN 
    LOWER(LEFT(rec_by,2)),
    -- Second Type of FN
    count(*) AS "How Many"
FROM movies
GROUP by rec_by
HAVING count(*) > 2
ORDER BY count(*) DESC
;

SELECT count(manager_id) AS "how many managers"
FROM employees
WHERE manager_id is not null;



SELECT 
    extract(year from hire_date) AS Hire_Year,
    count(*)
FROM employees
GROUP BY hire_year
order by count(*) desc;

-- most payed employee
SELECT MAX(salary), MIN(salary), AVG(salary) FROM Employees;

-- Shows us the current time 
select now()




-- SELECT 
--     suggestor,
--     count(*) AS "HOW Many"
-- FROM june_movies
-- GROUP by suggestor
-- HAVING count(*) > 2
-- ;



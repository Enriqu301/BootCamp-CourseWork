How do you start the mongo shell inside Studio 3T?
    - URL: mongodb://
    - then press manual
    - Connect to the server using an IP Address.

How do you determine which database is currently being used?
    - within intellshell class server you are able to see the label of the database being used
    - show dbs

1. Find all characters and sort by alias.
-db.heros.find({})

2. Find all characters who have Batman as their nemesis.
-db.heros.find({nemesis: 'Batman'})

3. Find all characters who are heroes?
-db.heros.find({hero: true})

4.Find all characters who are a hero, but show alias only.
-db.heros.find({hero: true},{alias: 1})

5. Find all characters who are a hero, but show everything BUT their alias.
-db.heros.find({hero: true},{fname: 1, lname: 1, lname: 1, nemesis: 1, hero: 1})

6. Catwoman started dating Batman, and now is considered a hero. Update her hero status? (HINT: make sure nothing else changes)
-db.heros.update(
{alias: 'Catwoman', fname: 'Selena', lname: "Kyle", nemesis: 'Batman', hero: false},
{$set:{hero: true}}
)

7. Catwoman broke up with Batman, she is a villain again. Update her hero status? (HINT: make sure nothing else changes)
- db.heros.update(
{alias: 'Catwoman', fname: 'Selena', lname: "Kyle", nemesis: 'Batman', hero: true},
{$set:{hero: false}}
)

8. Batman adopted a son named Jason Todd. Add a new field to his document. You want to add a field called children and it is an array of objects with age, fname, and lname of the child.
-`db.heros.update(
{alias: 'Red Hood' },
{$set:{child: true}
}
)
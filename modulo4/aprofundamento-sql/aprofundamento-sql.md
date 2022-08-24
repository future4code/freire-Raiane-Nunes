# Aprofundamento SQL

### Exercício 1

a) esse comando deleta a coluna salario
b) esse comando muda a coluna de gender para sex
c)esse comando muda a quantidade de caracteres da coluna gender
d)```ALTER TABLE Actor CHANGE gender gender VARCHAR(100);```

### Exercício 2

a)```UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";```
b)```UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";```
c)```UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";```

### Exercício 3

a)```DELETE FROM Actor WHERE name = "Fernanda Montenegro"```
b)```DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000```
c)
d)
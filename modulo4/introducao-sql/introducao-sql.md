#Banco de Dados e Introdução a SQL

### Exercício 1

a)o varchar armazena uma string e o date armazena uma data.
b)show databases mostra arquivos criados, e o show tables mostra tabelas criadas
C)o comando describe mostra os detalhes da tabela 

### Exercício 2

a)
```INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);```

b)chave primaria duplicada
c)a quantidade de colunas não era compativel com a quantidade de valores
```INSERT INTO Actor (id, name, salary,birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);```
d)o erro acontece por que o campo name nao pode ser nulo
```INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Rodrigo Santoro",
  400000,
  "1949-04-18", 
  "male"
);
```
e)o valor data tem que estar entre aspas
```INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);```
f)

### Exercício 3

a)```SELECT * FROM Actor WHERE gender = 'female'```
b)```SELECT salary  FROM Actor WHERE name  = 'Tony Ramos' ```
c)não vai retornar nenhum resultado
d)
id |name               |salary  |
---+-------------------+--------+
001|Tony Ramos         |400000.0|
003|Fernanda Montenegro|300000.0|
004|Rodrigo Santoro    |400000.0|
e)


### Exercício 4

a) retorna os atores em que os nomes iniciam com A ou J
b)```SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;```
c)```SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";````
d)```SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;```
  id |name           |salary  |birth_date|gender|
---+---------------+--------+----------+------+
001|Tony Ramos     |400000.0|1948-08-25|male  |
004|Rodrigo Santoro|400000.0|1949-04-18|male  |
005|Juliana Paes   |719333.0|1979-03-26|female|

### Exercício 5

a)
b)
c)
d)
e)

### Exercício 6

a)
b)
c)

### Exercício 7

a)
b)
c)
d)
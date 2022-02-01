1 a) usamos nessa tabela o VARCHAR(255) que diz que a variavel sera uma string com numero limitado de caracteres, usamos tambem o DATE que representa uma data como (YYYY-MM-DD)
b)SHOW DATABASES ira mostrar como uma tabela todas as DATABASES que estão dentro do banco de dados. SHOW TABLES vai mostrar todas as tabelas dentro do banco de dados
c) o resultado de DESCRIBE Actor é uma tabela com as variaveis dentro da tabela Actor, com os nomes, tipos, se pode ser null.
2 a)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
b) diz erro 1062 chave 'PRIMARY' '002' ducplicada, ocorreu pois a chave primaria tem que ser unica e não pode ser igual.
c)diz erro 1136, a contagem de colunas nao corresponde aos valores da linha 1. Esse erro ocorre pois na linha de INSERT precisa conter todos os nomes das variaveis em ordem.
c) erro 1364 o campo 'name' nao contem valor padrão, esse erro ocorre pois o valor do nome não foi dito
e) diz erro 1292 valor de date incorreto para a coluna 'birth_date' na linha 1, esse erro ocorre pois falotu as "" no valor de data.
3 a) SELECT * FROM Actor WHERE gender = "female";
b)SELECT salary FROM Actor WHERE name = "Tony Ramos";
c) O resultado foi 0 linhas retornadas, pois não tem nenhum ator com esse genero.
d)SELECT  id, name, salary FROM Actor WHERE salary >= 50000;
e)erro 1054 coluna 'nome' não conhecida, erro ocorre pois o nome da coluna é name.
SELECT id, name from Actor WHERE id = "002";
4 a) A query retorna os atores que começam com a letra A ou J e tem salario maior que 300.000
b)SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
c)SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");
d)SELECT * FROM Actor
WHERE 
(name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%G%" OR name LIKE "%g%")
 AND salary BETWEEN 350000 AND 900000;
 
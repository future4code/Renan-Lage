1a) a chave estrangeira é uma relação com a tabela dos filmes.
c) erro 1452 não é possível adicionar ou atualizar uma linha, erro com a chave estrangeira.
e)erro 1451 não é possivel excluir ou atualizar uma linha pai, uma chave de restrição de chave estrangeira. não pode excluir pois ha uma uma linha ligada a essa linha.
2a) essa tabela relaciona os atores da tabela de actor, com o filme da tabela de movie.
c) erro 1452 não é possível adicionar ou atualizar uma linha, erro com a chave estrangeira, acontence por não encontrar o ator
d)erro 1451 não é possivel excluir ou atualizar uma linha pai, uma chave de restrição de chave estrangeira. não pode excluir pois ha uma uma linha ligada a essa linha.
3a) o on quer dizer todos os filmes que tem alguma avaliação, 
3b) SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
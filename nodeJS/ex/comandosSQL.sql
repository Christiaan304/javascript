mysql -h localhost -u root -p

create database if not exists sistemadecadastro;
use nomeBancoDeDados;

describe nomeTabela;

create table if not exists usuarios(
    nome varchar(50),
    email varchar(100),
    idade int
);

insert into usuarios(nome, email, idade) values(
    "Richard Roe",
    "rr1911@mail.com",
    13
);

select * from usuarios where idade = 37;
delete from usuarios where nome = "John Roe";
update usuarios set idade = 14 where idade = 45 && nome = "Jhonny Roe";
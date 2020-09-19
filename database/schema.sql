drop database if exists githubdb;
create database githubdb;
use githubdb;

create table users (
  id integer unique primary key,
  name varchar(100)
);

create table repos (
  id integer unique primary key,
  name varchar(100),
  user integer,
  forks integer
);

insert into users (id, name) values (583231, 'octocat');

insert into repos (id, name, user, forks) values (18221276, 'git-consortium', 583231, 24);
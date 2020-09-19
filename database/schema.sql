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
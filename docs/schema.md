# Schema Information

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
user_id   | integer   | not null, foreign key (references users), indexed

## Follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references users), indexed
Follwer_id  | integer   | not null, foreign key (references users), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null
tag         | string    | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null
user_id     | integer   | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

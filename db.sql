create table imagequiz.scores
(
	id bigserial primary key,
	scores integer 
    socresid integer references imagequiz.questions
);

create table imagequiz.flowers
(
	id bigserial primary key,
	name text not null,
	
	
	
	
);

create table imagequiz.customer
(
	id bigserial primary key,
	name text not null,
	password text not null,
	email text not null
);

create table imagequiz.questions
(
	id bigserial primary key,
	answer text not null,
	questionsid integer references imagequiz.flowers(id)
	
	
);
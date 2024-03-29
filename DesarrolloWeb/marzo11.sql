use cards_db;
select * from card;
select * from effect;
select * from card_Effect;

select * from card as c
join effect as e
join card_effect as ce
on c.card_id = ce.cardd_id and e.effect_id = ce.effect_id;

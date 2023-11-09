const Item = require('./item');
const EntityError = require('./entity-error');
const { ulid } = require('ulid');
const { DateTime } = require('luxon');

class WeightEntity {
    constructor(pk, sk, rest) {
        this.item = new Item(pk, sk);
        this.rest = rest;
    }

    static get PK_PREFIX() {
        return "year_";
    }

    static get SK_PREFIX() {
        return "weight_";
    }

    static fromUpdateDto(dto) {
        if(!dto) {
            throw new EntityError('No dto!');
        }

        const {id, year, ...rest} = dto;

        if(!id) {
            throw new EntityError('id not defined');
        }

        if(!year) {
            throw new EntityError('year not defined');
        }

        if(!rest.date) {
            throw new EntityError('date not defined');
        }

        const pk = WeightEntity.generatePk(year);
        const sk = WeightEntity.generateSk(id);

        return new EventEntity(pk, sk, rest);
    }

    static fromInsertDto(dto) {
        if(!dto) {
            throw new EntityError('No dto!');
        }

        const {year, ...rest} = dto;

        if(!year) {
            throw new EntityError('year not defined');
        }

        if(!rest.date) {
            throw new EntityError('date not defined');
        }

        const time = WeightEntity.parseTime(rest.date);
        const pk = WeightEntity.generatePk(year);
        const sk = WeightEntity.generateSk(ulid(time));

        return new WeightEntity(pk, sk, rest);
    }

    static parseTime(date) {
        try {
            const dateTime = DateTime.fromISO(date);
            return dateTime.toMillis();
        } catch(err) {
            throw new EntityError(`Cannot parse DateTime from: ${date}`);
        }
    }

    static generatePk(year) {
        return WeightEntity.PK_PREFIX + year;
    }

    static generateSk(time) {
        return WeightEntity.SK_PREFIX + time;
    }

    static fromItem(item) {
        if(!item) {
            throw new EntityError('No dynamoDB item!');
        }

        const {pk, sk, rest} = Item.parseDynamoDbItem(item);

        return new WeightEntity(pk, sk, rest);
    }

    get pk() {
        return this.item.pk
    }

    get sk() {
        return this.item.sk
    }

    get id() {
        return this.item.sk.substring(WeightEntity.SK_PREFIX.length);
    }

    get year() {
        return this.item.pk.substring(WeightEntity.PK_PREFIX.length);
    }

    toDynamoDbItem() {
        return {
            ...this.item.keys(),
            ...this.rest
        }
    }

    toDto() {
        return {
            id: this.id,
            year: this.year,
            ...this.rest
        }
    }

    updateFrom(entity) {
        if(entity.rest.date !== this.rest.date) {
            throw new EntityError("Date change is forbidden!");
        }
        this.rest = entity.rest
    }
}

module.exports = WeightEntity;
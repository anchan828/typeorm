import "reflect-metadata";
import {createTestingConnections, closeTestingConnections, reloadTestingDatabases} from "../../utils/test-utils";
import {Connection} from "../../../src/connection/Connection";
import {expect} from "chai";
import {Race} from "./entity/Race";
import {Duration} from "./entity/Duration";

describe("github issues > embeddeds with custom column name don't work", () => {

    let connections: Connection[];
    before(async () => connections = await createTestingConnections({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        schemaCreate: true,
        dropSchemaOnConnection: true,
    }));
    beforeEach(() => reloadTestingDatabases(connections));
    after(() => closeTestingConnections(connections));

    it("embedded with custom column name should persist and load without errors", () => Promise.all(connections.map(async connection => {

        const race = new Race();
        race.name = "National Race";
        race.duration = new Duration();
        race.duration.durationDays = 1;
        race.duration.durationHours = 10;
        race.duration.durationMinutes = 30;

        await connection.entityManager.persist(race);

        const loadedRace = await connection.entityManager.findOne(Race, { name: "National Race" });
        expect(loadedRace).to.be.not.empty;
        expect(loadedRace!.id).to.be.not.empty;
        expect(loadedRace!.duration).to.be.not.empty;
        loadedRace!.name.should.be.equal("National Race");
        loadedRace!.duration.should.be.instanceOf(Duration);
        loadedRace!.duration.durationDays.should.be.equal(1);
        loadedRace!.duration.durationHours.should.be.equal(10);
        loadedRace!.duration.durationMinutes.should.be.equal(30);

    })));

});

import {MigrationInterface, QueryRunner} from "typeorm";

export class init1579373874078 implements MigrationInterface {
    name = 'init1579373874078'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "role" ("name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "roleId" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_703705ba862c2bb45250962c9e1" PRIMARY KEY ("roleId"))`, undefined);
        await queryRunner.query(`CREATE TABLE "permission" ("name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "permissionId" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_86b314be9c1be5c62b3a9d97ae4" PRIMARY KEY ("permissionId"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("userId" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstname" character varying, "lastname" character varying, "username" character varying(80) NOT NULL, "email" character varying NOT NULL, "password" character varying(60) NOT NULL, "countryCode" character varying(2), "profileImg" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d72ea127f30e21753c9e229891e" PRIMARY KEY ("userId"))`, undefined);
        await queryRunner.query(`CREATE TABLE "rolePermission" ("roleRoleId" uuid NOT NULL, "permissionPermissionId" uuid NOT NULL, CONSTRAINT "PK_89ad5c5c4a39bfe8ee65f0f5e1e" PRIMARY KEY ("roleRoleId", "permissionPermissionId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_b02bd7a7bbfd25fb4bfc6f7ccf" ON "rolePermission" ("roleRoleId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_59ec169844b7036626e30c6890" ON "rolePermission" ("permissionPermissionId") `, undefined);
        await queryRunner.query(`CREATE TABLE "userRole" ("userUserId" uuid NOT NULL, "roleRoleId" uuid NOT NULL, CONSTRAINT "PK_6a936a17b01374ab5f1da01b958" PRIMARY KEY ("userUserId", "roleRoleId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_6071418e050a8f6fc4bb7598f5" ON "userRole" ("userUserId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_dba26d09e70de1a054d4c61f51" ON "userRole" ("roleRoleId") `, undefined);
        await queryRunner.query(`ALTER TABLE "rolePermission" ADD CONSTRAINT "FK_b02bd7a7bbfd25fb4bfc6f7ccfb" FOREIGN KEY ("roleRoleId") REFERENCES "role"("roleId") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "rolePermission" ADD CONSTRAINT "FK_59ec169844b7036626e30c6890b" FOREIGN KEY ("permissionPermissionId") REFERENCES "permission"("permissionId") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "userRole" ADD CONSTRAINT "FK_6071418e050a8f6fc4bb7598f56" FOREIGN KEY ("userUserId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
        await queryRunner.query(`ALTER TABLE "userRole" ADD CONSTRAINT "FK_dba26d09e70de1a054d4c61f51f" FOREIGN KEY ("roleRoleId") REFERENCES "role"("roleId") ON DELETE CASCADE ON UPDATE CASCADE`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "userRole" DROP CONSTRAINT "FK_dba26d09e70de1a054d4c61f51f"`, undefined);
        await queryRunner.query(`ALTER TABLE "userRole" DROP CONSTRAINT "FK_6071418e050a8f6fc4bb7598f56"`, undefined);
        await queryRunner.query(`ALTER TABLE "rolePermission" DROP CONSTRAINT "FK_59ec169844b7036626e30c6890b"`, undefined);
        await queryRunner.query(`ALTER TABLE "rolePermission" DROP CONSTRAINT "FK_b02bd7a7bbfd25fb4bfc6f7ccfb"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_dba26d09e70de1a054d4c61f51"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_6071418e050a8f6fc4bb7598f5"`, undefined);
        await queryRunner.query(`DROP TABLE "userRole"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_59ec169844b7036626e30c6890"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_b02bd7a7bbfd25fb4bfc6f7ccf"`, undefined);
        await queryRunner.query(`DROP TABLE "rolePermission"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "permission"`, undefined);
        await queryRunner.query(`DROP TABLE "role"`, undefined);
    }

}

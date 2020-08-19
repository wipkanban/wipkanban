import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";
import { Field, ObjectType } from '@nestjs/graphql';
import { Image } from "./image.entity";

@Entity({ name: 'users' })
@ObjectType()
export class User {

    @ObjectIdColumn()
    @Field(type => String)
    id: ObjectID;

    @Field({nullable: true})
    @Column({ nullable: true })
    name: String;

    @Field({nullable: true})
    @Column({ nullable: true })
    lastname: String;

    @Field()
    @Column()
    email: String;

    @Field()
    @Column()
    firstAccess: boolean;

    @Field()
    @Column()
    password: String;

    @Field()
    @Column()
    image: Image;
}
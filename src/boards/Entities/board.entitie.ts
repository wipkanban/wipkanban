import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'boards' })
@ObjectType()
export class Board {

    @ObjectIdColumn()
    @Field(type => String)
    id: ObjectID;

    @Field({ nullable: true })
    @Column({ nullable: true })
    name: String;

    @ObjectIdColumn()
    @Field(type => String)
    userId: ObjectID;

    @Field()
    @Column()
    createdAt: Date;
}
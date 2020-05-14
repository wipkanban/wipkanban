import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Image } from "./image.entity";

@Entity({name: 'users'})
@ObjectType()
export class User {

    @ObjectIdColumn()
    @Field(type => String)
    id: ObjectID;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    lastname: string;
    
    @Field()
    @Column()
    email: string;
    
    @Field()
    @Column()
    firstAccess: boolean;

    @Field()
    @Column()
    password: string;
    
    @Field()
    @Column()
    image: Image;


}
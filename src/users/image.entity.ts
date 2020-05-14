import {Column} from "typeorm";
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Image {

    @Field()
    @Column()
    originalname: string;

    @Field()
    @Column()
    newFilename: string;
}
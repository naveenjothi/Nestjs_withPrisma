import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class PostMinAggregateInput {
  @Field(() => Boolean, {
    nullable: true,
  })
  id?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  title?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  content?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  published?: true;

  @Field(() => Boolean, {
    nullable: true,
  })
  authorId?: true;
}

import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestimonalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPost = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly readTime?: number | null;
  readonly body?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly readTime?: number | null;
  readonly body?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post, PostMetaData>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

type EagerTestimonal = {
  readonly id: string;
  readonly name?: string | null;
  readonly avatar?: string | null;
  readonly testimony?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestimonal = {
  readonly id: string;
  readonly name?: string | null;
  readonly avatar?: string | null;
  readonly testimony?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Testimonal = LazyLoading extends LazyLoadingDisabled ? EagerTestimonal : LazyTestimonal

export declare const Testimonal: (new (init: ModelInit<Testimonal, TestimonalMetaData>) => Testimonal) & {
  copyOf(source: Testimonal, mutator: (draft: MutableModel<Testimonal, TestimonalMetaData>) => MutableModel<Testimonal, TestimonalMetaData> | void): Testimonal;
}
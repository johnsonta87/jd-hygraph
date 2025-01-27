import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type AboutPage = Entity & Node & {
  contactSectionTitle?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<AboutPage>;
  /** List of AboutPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  myProcessSection: Array<MyProcessList>;
  pageContactSection: Array<ContactLink>;
  pageHero?: Maybe<MainPageIntro>;
  processTitle?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  servicesList: Array<ServicesList>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AboutPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type AboutPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type AboutPageMyProcessSectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<MyProcessListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MyProcessListWhereInput>;
};


export type AboutPagePageContactSectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ContactLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactLinkWhereInput>;
};


export type AboutPagePageHeroArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AboutPageServicesListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ServicesListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServicesListWhereInput>;
};


export type AboutPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AboutPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AboutPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type AboutPageConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AboutPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AboutPageCreateInput = {
  contactSectionTitle?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  myProcessSection?: InputMaybe<MyProcessListCreateManyInlineInput>;
  pageContactSection?: InputMaybe<ContactLinkCreateManyInlineInput>;
  pageHero?: InputMaybe<MainPageIntroCreateOneInlineInput>;
  processTitle?: InputMaybe<Scalars['String']>;
  servicesList?: InputMaybe<ServicesListCreateManyInlineInput>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AboutPageCreateManyInlineInput = {
  /** Connect multiple existing AboutPage documents */
  connect?: InputMaybe<Array<AboutPageWhereUniqueInput>>;
  /** Create and connect multiple existing AboutPage documents */
  create?: InputMaybe<Array<AboutPageCreateInput>>;
};

export type AboutPageCreateOneInlineInput = {
  /** Connect one existing AboutPage document */
  connect?: InputMaybe<AboutPageWhereUniqueInput>;
  /** Create and connect one AboutPage document */
  create?: InputMaybe<AboutPageCreateInput>;
};

/** An edge in a connection. */
export type AboutPageEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AboutPage;
};

/** Identifies documents */
export type AboutPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contactSectionTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactSectionTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactSectionTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactSectionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactSectionTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactSectionTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactSectionTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactSectionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactSectionTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactSectionTitle_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AboutPageWhereStageInput>;
  documentInStages_none?: InputMaybe<AboutPageWhereStageInput>;
  documentInStages_some?: InputMaybe<AboutPageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  myProcessSection_every?: InputMaybe<MyProcessListWhereInput>;
  myProcessSection_none?: InputMaybe<MyProcessListWhereInput>;
  myProcessSection_some?: InputMaybe<MyProcessListWhereInput>;
  pageContactSection_every?: InputMaybe<ContactLinkWhereInput>;
  pageContactSection_none?: InputMaybe<ContactLinkWhereInput>;
  pageContactSection_some?: InputMaybe<ContactLinkWhereInput>;
  pageHero?: InputMaybe<MainPageIntroWhereInput>;
  processTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  processTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  processTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  processTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  processTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  processTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  processTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  processTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  processTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  processTitle_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  servicesList_every?: InputMaybe<ServicesListWhereInput>;
  servicesList_none?: InputMaybe<ServicesListWhereInput>;
  servicesList_some?: InputMaybe<ServicesListWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AboutPageOrderByInput {
  CONTACTSECTIONTITLE_ASC = 'contactSectionTitle_ASC',
  CONTACTSECTIONTITLE_DESC = 'contactSectionTitle_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  PROCESSTITLE_ASC = 'processTitle_ASC',
  PROCESSTITLE_DESC = 'processTitle_DESC',
  PUBLISHEDAT_ASC = 'publishedAt_ASC',
  PUBLISHEDAT_DESC = 'publishedAt_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

export type AboutPageUpdateInput = {
  contactSectionTitle?: InputMaybe<Scalars['String']>;
  myProcessSection?: InputMaybe<MyProcessListUpdateManyInlineInput>;
  pageContactSection?: InputMaybe<ContactLinkUpdateManyInlineInput>;
  pageHero?: InputMaybe<MainPageIntroUpdateOneInlineInput>;
  processTitle?: InputMaybe<Scalars['String']>;
  servicesList?: InputMaybe<ServicesListUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type AboutPageUpdateManyInlineInput = {
  /** Connect multiple existing AboutPage documents */
  connect?: InputMaybe<Array<AboutPageConnectInput>>;
  /** Create and connect multiple AboutPage documents */
  create?: InputMaybe<Array<AboutPageCreateInput>>;
  /** Delete multiple AboutPage documents */
  delete?: InputMaybe<Array<AboutPageWhereUniqueInput>>;
  /** Disconnect multiple AboutPage documents */
  disconnect?: InputMaybe<Array<AboutPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AboutPage documents */
  set?: InputMaybe<Array<AboutPageWhereUniqueInput>>;
  /** Update multiple AboutPage documents */
  update?: InputMaybe<Array<AboutPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AboutPage documents */
  upsert?: InputMaybe<Array<AboutPageUpsertWithNestedWhereUniqueInput>>;
};

export type AboutPageUpdateManyInput = {
  contactSectionTitle?: InputMaybe<Scalars['String']>;
  processTitle?: InputMaybe<Scalars['String']>;
};

export type AboutPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AboutPageUpdateManyInput;
  /** Document search */
  where: AboutPageWhereInput;
};

export type AboutPageUpdateOneInlineInput = {
  /** Connect existing AboutPage document */
  connect?: InputMaybe<AboutPageWhereUniqueInput>;
  /** Create and connect one AboutPage document */
  create?: InputMaybe<AboutPageCreateInput>;
  /** Delete currently connected AboutPage document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected AboutPage document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single AboutPage document */
  update?: InputMaybe<AboutPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AboutPage document */
  upsert?: InputMaybe<AboutPageUpsertWithNestedWhereUniqueInput>;
};

export type AboutPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AboutPageUpdateInput;
  /** Unique document search */
  where: AboutPageWhereUniqueInput;
};

export type AboutPageUpsertInput = {
  /** Create document if it didn't exist */
  create: AboutPageCreateInput;
  /** Update document if it exists */
  update: AboutPageUpdateInput;
};

export type AboutPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AboutPageUpsertInput;
  /** Unique document search */
  where: AboutPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AboutPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AboutPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contactSectionTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactSectionTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactSectionTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactSectionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactSectionTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactSectionTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactSectionTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactSectionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactSectionTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactSectionTitle_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AboutPageWhereStageInput>;
  documentInStages_none?: InputMaybe<AboutPageWhereStageInput>;
  documentInStages_some?: InputMaybe<AboutPageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  myProcessSection_every?: InputMaybe<MyProcessListWhereInput>;
  myProcessSection_none?: InputMaybe<MyProcessListWhereInput>;
  myProcessSection_some?: InputMaybe<MyProcessListWhereInput>;
  pageContactSection_every?: InputMaybe<ContactLinkWhereInput>;
  pageContactSection_none?: InputMaybe<ContactLinkWhereInput>;
  pageContactSection_some?: InputMaybe<ContactLinkWhereInput>;
  pageHero?: InputMaybe<MainPageIntroWhereInput>;
  processTitle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  processTitle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  processTitle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  processTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  processTitle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  processTitle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  processTitle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  processTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  processTitle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  processTitle_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  servicesList_every?: InputMaybe<ServicesListWhereInput>;
  servicesList_none?: InputMaybe<ServicesListWhereInput>;
  servicesList_some?: InputMaybe<ServicesListWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AboutPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AboutPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References AboutPage record uniquely */
export type AboutPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Aggregate = {
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  bannerImageHomepage: Array<Homepage>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  showcaseImagePortfolio: Array<Portfolio>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetBannerImageHomepageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<HomepageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomepageWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetShowcaseImagePortfolioArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PortfolioOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PortfolioWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  bannerImageHomepage?: InputMaybe<HomepageCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileContactLink?: InputMaybe<ContactLinkCreateManyInlineInput>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  iconContactLink?: InputMaybe<ContactLinkCreateManyInlineInput>;
  iconMyProcessList?: InputMaybe<MyProcessListCreateManyInlineInput>;
  imageFullWidthImage?: InputMaybe<FullWidthImageCreateManyInlineInput>;
  imageMyProcessSection?: InputMaybe<MyProcessSectionCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  showcaseImageMainPageIntro?: InputMaybe<MainPageIntroCreateManyInlineInput>;
  showcaseImagePortfolio?: InputMaybe<PortfolioCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bannerImageHomepage_every?: InputMaybe<HomepageWhereInput>;
  bannerImageHomepage_none?: InputMaybe<HomepageWhereInput>;
  bannerImageHomepage_some?: InputMaybe<HomepageWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  showcaseImagePortfolio_every?: InputMaybe<PortfolioWhereInput>;
  showcaseImagePortfolio_none?: InputMaybe<PortfolioWhereInput>;
  showcaseImagePortfolio_some?: InputMaybe<PortfolioWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  FILENAME_ASC = 'fileName_ASC',
  FILENAME_DESC = 'fileName_DESC',
  HANDLE_ASC = 'handle_ASC',
  HANDLE_DESC = 'handle_DESC',
  HEIGHT_ASC = 'height_ASC',
  HEIGHT_DESC = 'height_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  MIMETYPE_ASC = 'mimeType_ASC',
  MIMETYPE_DESC = 'mimeType_DESC',
  PUBLISHEDAT_ASC = 'publishedAt_ASC',
  PUBLISHEDAT_DESC = 'publishedAt_DESC',
  SIZE_ASC = 'size_ASC',
  SIZE_DESC = 'size_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  WIDTH_ASC = 'width_ASC',
  WIDTH_DESC = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  bannerImageHomepage?: InputMaybe<HomepageUpdateManyInlineInput>;
  fileContactLink?: InputMaybe<ContactLinkUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  iconContactLink?: InputMaybe<ContactLinkUpdateManyInlineInput>;
  iconMyProcessList?: InputMaybe<MyProcessListUpdateManyInlineInput>;
  imageFullWidthImage?: InputMaybe<FullWidthImageUpdateManyInlineInput>;
  imageMyProcessSection?: InputMaybe<MyProcessSectionUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  showcaseImageMainPageIntro?: InputMaybe<MainPageIntroUpdateManyInlineInput>;
  showcaseImagePortfolio?: InputMaybe<PortfolioUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bannerImageHomepage_every?: InputMaybe<HomepageWhereInput>;
  bannerImageHomepage_none?: InputMaybe<HomepageWhereInput>;
  bannerImageHomepage_some?: InputMaybe<HomepageWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  showcaseImagePortfolio_every?: InputMaybe<PortfolioWhereInput>;
  showcaseImagePortfolio_none?: InputMaybe<PortfolioWhereInput>;
  showcaseImagePortfolio_some?: InputMaybe<PortfolioWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export type ContactLink = Entity & {
  emailLink?: Maybe<Scalars['String']>;
  file?: Maybe<Asset>;
  icon?: Maybe<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  isExternal?: Maybe<Scalars['Boolean']>;
  link?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
};


export type ContactLinkFileArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ContactLinkIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ContactLinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactLinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactLinkConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactLinkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactLinkCreateInput = {
  emailLink?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<AssetCreateOneInlineInput>;
  icon?: InputMaybe<AssetCreateOneInlineInput>;
  isExternal?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ContactLinkCreateManyInlineInput = {
  /** Create and connect multiple existing ContactLink documents */
  create?: InputMaybe<Array<ContactLinkCreateInput>>;
};

export type ContactLinkCreateOneInlineInput = {
  /** Create and connect one ContactLink document */
  create?: InputMaybe<ContactLinkCreateInput>;
};

export type ContactLinkCreateWithPositionInput = {
  /** Document to create */
  data: ContactLinkCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContactLinkEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ContactLink;
};

/** Identifies documents */
export type ContactLinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactLinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  emailLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  emailLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  emailLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  emailLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  emailLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  emailLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  emailLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  emailLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  emailLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  emailLink_starts_with?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<AssetWhereInput>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isExternal?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isExternal_not?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ContactLinkOrderByInput {
  EMAILLINK_ASC = 'emailLink_ASC',
  EMAILLINK_DESC = 'emailLink_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  ISEXTERNAL_ASC = 'isExternal_ASC',
  ISEXTERNAL_DESC = 'isExternal_DESC',
  LINK_ASC = 'link_ASC',
  LINK_DESC = 'link_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type ContactLinkParent = AboutPage | ContactPage;

export type ContactLinkParentConnectInput = {
  AboutPage?: InputMaybe<AboutPageConnectInput>;
  ContactPage?: InputMaybe<ContactPageConnectInput>;
};

export type ContactLinkParentCreateInput = {
  AboutPage?: InputMaybe<AboutPageCreateInput>;
  ContactPage?: InputMaybe<ContactPageCreateInput>;
};

export type ContactLinkParentCreateManyInlineInput = {
  /** Connect multiple existing ContactLinkParent documents */
  connect?: InputMaybe<Array<ContactLinkParentWhereUniqueInput>>;
  /** Create and connect multiple existing ContactLinkParent documents */
  create?: InputMaybe<Array<ContactLinkParentCreateInput>>;
};

export type ContactLinkParentCreateOneInlineInput = {
  /** Connect one existing ContactLinkParent document */
  connect?: InputMaybe<ContactLinkParentWhereUniqueInput>;
  /** Create and connect one ContactLinkParent document */
  create?: InputMaybe<ContactLinkParentCreateInput>;
};

export type ContactLinkParentUpdateInput = {
  AboutPage?: InputMaybe<AboutPageUpdateInput>;
  ContactPage?: InputMaybe<ContactPageUpdateInput>;
};

export type ContactLinkParentUpdateManyInlineInput = {
  /** Connect multiple existing ContactLinkParent documents */
  connect?: InputMaybe<Array<ContactLinkParentConnectInput>>;
  /** Create and connect multiple ContactLinkParent documents */
  create?: InputMaybe<Array<ContactLinkParentCreateInput>>;
  /** Delete multiple ContactLinkParent documents */
  delete?: InputMaybe<Array<ContactLinkParentWhereUniqueInput>>;
  /** Disconnect multiple ContactLinkParent documents */
  disconnect?: InputMaybe<Array<ContactLinkParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ContactLinkParent documents */
  set?: InputMaybe<Array<ContactLinkParentWhereUniqueInput>>;
  /** Update multiple ContactLinkParent documents */
  update?: InputMaybe<Array<ContactLinkParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContactLinkParent documents */
  upsert?: InputMaybe<Array<ContactLinkParentUpsertWithNestedWhereUniqueInput>>;
};

export type ContactLinkParentUpdateManyWithNestedWhereInput = {
  AboutPage?: InputMaybe<AboutPageUpdateManyWithNestedWhereInput>;
  ContactPage?: InputMaybe<ContactPageUpdateManyWithNestedWhereInput>;
};

export type ContactLinkParentUpdateOneInlineInput = {
  /** Connect existing ContactLinkParent document */
  connect?: InputMaybe<ContactLinkParentWhereUniqueInput>;
  /** Create and connect one ContactLinkParent document */
  create?: InputMaybe<ContactLinkParentCreateInput>;
  /** Delete currently connected ContactLinkParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ContactLinkParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ContactLinkParent document */
  update?: InputMaybe<ContactLinkParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactLinkParent document */
  upsert?: InputMaybe<ContactLinkParentUpsertWithNestedWhereUniqueInput>;
};

export type ContactLinkParentUpdateWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpdateWithNestedWhereUniqueInput>;
  ContactPage?: InputMaybe<ContactPageUpdateWithNestedWhereUniqueInput>;
};

export type ContactLinkParentUpsertWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpsertWithNestedWhereUniqueInput>;
  ContactPage?: InputMaybe<ContactPageUpsertWithNestedWhereUniqueInput>;
};

export type ContactLinkParentWhereInput = {
  AboutPage?: InputMaybe<AboutPageWhereInput>;
  ContactPage?: InputMaybe<ContactPageWhereInput>;
};

export type ContactLinkParentWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageWhereUniqueInput>;
  ContactPage?: InputMaybe<ContactPageWhereUniqueInput>;
};

export type ContactLinkUpdateInput = {
  emailLink?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<AssetUpdateOneInlineInput>;
  icon?: InputMaybe<AssetUpdateOneInlineInput>;
  isExternal?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContactLinkUpdateManyInlineInput = {
  /** Create and connect multiple ContactLink component instances */
  create?: InputMaybe<Array<ContactLinkCreateWithPositionInput>>;
  /** Delete multiple ContactLink documents */
  delete?: InputMaybe<Array<ContactLinkWhereUniqueInput>>;
  /** Update multiple ContactLink component instances */
  update?: InputMaybe<Array<ContactLinkUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContactLink component instances */
  upsert?: InputMaybe<Array<ContactLinkUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactLinkUpdateManyInput = {
  isExternal?: InputMaybe<Scalars['Boolean']>;
};

export type ContactLinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactLinkUpdateManyInput;
  /** Document search */
  where: ContactLinkWhereInput;
};

export type ContactLinkUpdateOneInlineInput = {
  /** Create and connect one ContactLink document */
  create?: InputMaybe<ContactLinkCreateInput>;
  /** Delete currently connected ContactLink document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ContactLink document */
  update?: InputMaybe<ContactLinkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactLink document */
  upsert?: InputMaybe<ContactLinkUpsertWithNestedWhereUniqueInput>;
};

export type ContactLinkUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContactLinkUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactLinkWhereUniqueInput;
};

export type ContactLinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactLinkUpdateInput;
  /** Unique document search */
  where: ContactLinkWhereUniqueInput;
};

export type ContactLinkUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactLinkCreateInput;
  /** Update document if it exists */
  update: ContactLinkUpdateInput;
};

export type ContactLinkUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContactLinkUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactLinkWhereUniqueInput;
};

export type ContactLinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactLinkUpsertInput;
  /** Unique document search */
  where: ContactLinkWhereUniqueInput;
};

/** Identifies documents */
export type ContactLinkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactLinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactLinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactLinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  emailLink?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  emailLink_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  emailLink_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  emailLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  emailLink_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  emailLink_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  emailLink_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  emailLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  emailLink_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  emailLink_starts_with?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<AssetWhereInput>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isExternal?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isExternal_not?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References ContactLink record uniquely */
export type ContactLinkWhereUniqueInput = {
  emailLink?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContactPage = Entity & Node & {
  contactLinks: Array<ContactLink>;
  contactMainHeading?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ContactPage>;
  enableForm?: Maybe<Scalars['Boolean']>;
  /** List of ContactPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  subheading?: Maybe<RichText>;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ContactPageContactLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ContactLinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactLinkWhereInput>;
};


export type ContactPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ContactPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ContactPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ContactPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ContactPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ContactPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ContactPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactPageConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactPageCreateInput = {
  contactLinks?: InputMaybe<ContactLinkCreateManyInlineInput>;
  contactMainHeading?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  enableForm?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  subheading?: InputMaybe<Scalars['RichTextAST']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ContactPageCreateManyInlineInput = {
  /** Connect multiple existing ContactPage documents */
  connect?: InputMaybe<Array<ContactPageWhereUniqueInput>>;
  /** Create and connect multiple existing ContactPage documents */
  create?: InputMaybe<Array<ContactPageCreateInput>>;
};

export type ContactPageCreateOneInlineInput = {
  /** Connect one existing ContactPage document */
  connect?: InputMaybe<ContactPageWhereUniqueInput>;
  /** Create and connect one ContactPage document */
  create?: InputMaybe<ContactPageCreateInput>;
};

/** An edge in a connection. */
export type ContactPageEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ContactPage;
};

/** Identifies documents */
export type ContactPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contactLinks_every?: InputMaybe<ContactLinkWhereInput>;
  contactLinks_none?: InputMaybe<ContactLinkWhereInput>;
  contactLinks_some?: InputMaybe<ContactLinkWhereInput>;
  contactMainHeading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactMainHeading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactMainHeading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactMainHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactMainHeading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactMainHeading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactMainHeading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactMainHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactMainHeading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactMainHeading_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ContactPageWhereStageInput>;
  documentInStages_none?: InputMaybe<ContactPageWhereStageInput>;
  documentInStages_some?: InputMaybe<ContactPageWhereStageInput>;
  enableForm?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  enableForm_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ContactPageOrderByInput {
  CONTACTMAINHEADING_ASC = 'contactMainHeading_ASC',
  CONTACTMAINHEADING_DESC = 'contactMainHeading_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  ENABLEFORM_ASC = 'enableForm_ASC',
  ENABLEFORM_DESC = 'enableForm_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  PUBLISHEDAT_ASC = 'publishedAt_ASC',
  PUBLISHEDAT_DESC = 'publishedAt_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

export type ContactPageUpdateInput = {
  contactLinks?: InputMaybe<ContactLinkUpdateManyInlineInput>;
  contactMainHeading?: InputMaybe<Scalars['String']>;
  enableForm?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  subheading?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContactPageUpdateManyInlineInput = {
  /** Connect multiple existing ContactPage documents */
  connect?: InputMaybe<Array<ContactPageConnectInput>>;
  /** Create and connect multiple ContactPage documents */
  create?: InputMaybe<Array<ContactPageCreateInput>>;
  /** Delete multiple ContactPage documents */
  delete?: InputMaybe<Array<ContactPageWhereUniqueInput>>;
  /** Disconnect multiple ContactPage documents */
  disconnect?: InputMaybe<Array<ContactPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ContactPage documents */
  set?: InputMaybe<Array<ContactPageWhereUniqueInput>>;
  /** Update multiple ContactPage documents */
  update?: InputMaybe<Array<ContactPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContactPage documents */
  upsert?: InputMaybe<Array<ContactPageUpsertWithNestedWhereUniqueInput>>;
};

export type ContactPageUpdateManyInput = {
  contactMainHeading?: InputMaybe<Scalars['String']>;
  enableForm?: InputMaybe<Scalars['Boolean']>;
  subheading?: InputMaybe<Scalars['RichTextAST']>;
};

export type ContactPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactPageUpdateManyInput;
  /** Document search */
  where: ContactPageWhereInput;
};

export type ContactPageUpdateOneInlineInput = {
  /** Connect existing ContactPage document */
  connect?: InputMaybe<ContactPageWhereUniqueInput>;
  /** Create and connect one ContactPage document */
  create?: InputMaybe<ContactPageCreateInput>;
  /** Delete currently connected ContactPage document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ContactPage document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ContactPage document */
  update?: InputMaybe<ContactPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactPage document */
  upsert?: InputMaybe<ContactPageUpsertWithNestedWhereUniqueInput>;
};

export type ContactPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactPageUpdateInput;
  /** Unique document search */
  where: ContactPageWhereUniqueInput;
};

export type ContactPageUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactPageCreateInput;
  /** Update document if it exists */
  update: ContactPageUpdateInput;
};

export type ContactPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactPageUpsertInput;
  /** Unique document search */
  where: ContactPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ContactPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ContactPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contactLinks_every?: InputMaybe<ContactLinkWhereInput>;
  contactLinks_none?: InputMaybe<ContactLinkWhereInput>;
  contactLinks_some?: InputMaybe<ContactLinkWhereInput>;
  contactMainHeading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  contactMainHeading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  contactMainHeading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contactMainHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactMainHeading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  contactMainHeading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  contactMainHeading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  contactMainHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  contactMainHeading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  contactMainHeading_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ContactPageWhereStageInput>;
  documentInStages_none?: InputMaybe<ContactPageWhereStageInput>;
  documentInStages_some?: InputMaybe<ContactPageWhereStageInput>;
  enableForm?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  enableForm_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ContactPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ContactPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References ContactPage record uniquely */
export type ContactPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Divider = Entity & {
  enable?: Maybe<Scalars['Boolean']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
};

export type DividerConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: DividerWhereUniqueInput;
};

/** A connection to a list of items. */
export type DividerConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<DividerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DividerCreateInput = {
  enable?: InputMaybe<Scalars['Boolean']>;
};

export type DividerCreateManyInlineInput = {
  /** Create and connect multiple existing Divider documents */
  create?: InputMaybe<Array<DividerCreateInput>>;
};

export type DividerCreateOneInlineInput = {
  /** Create and connect one Divider document */
  create?: InputMaybe<DividerCreateInput>;
};

export type DividerCreateWithPositionInput = {
  /** Document to create */
  data: DividerCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type DividerEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Divider;
};

/** Identifies documents */
export type DividerManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DividerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DividerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DividerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  enable?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  enable_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum DividerOrderByInput {
  ENABLE_ASC = 'enable_ASC',
  ENABLE_DESC = 'enable_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC'
}

export type DividerParent = Portfolio;

export type DividerParentConnectInput = {
  Portfolio?: InputMaybe<PortfolioConnectInput>;
};

export type DividerParentCreateInput = {
  Portfolio?: InputMaybe<PortfolioCreateInput>;
};

export type DividerParentCreateManyInlineInput = {
  /** Connect multiple existing DividerParent documents */
  connect?: InputMaybe<Array<DividerParentWhereUniqueInput>>;
  /** Create and connect multiple existing DividerParent documents */
  create?: InputMaybe<Array<DividerParentCreateInput>>;
};

export type DividerParentCreateOneInlineInput = {
  /** Connect one existing DividerParent document */
  connect?: InputMaybe<DividerParentWhereUniqueInput>;
  /** Create and connect one DividerParent document */
  create?: InputMaybe<DividerParentCreateInput>;
};

export type DividerParentUpdateInput = {
  Portfolio?: InputMaybe<PortfolioUpdateInput>;
};

export type DividerParentUpdateManyInlineInput = {
  /** Connect multiple existing DividerParent documents */
  connect?: InputMaybe<Array<DividerParentConnectInput>>;
  /** Create and connect multiple DividerParent documents */
  create?: InputMaybe<Array<DividerParentCreateInput>>;
  /** Delete multiple DividerParent documents */
  delete?: InputMaybe<Array<DividerParentWhereUniqueInput>>;
  /** Disconnect multiple DividerParent documents */
  disconnect?: InputMaybe<Array<DividerParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing DividerParent documents */
  set?: InputMaybe<Array<DividerParentWhereUniqueInput>>;
  /** Update multiple DividerParent documents */
  update?: InputMaybe<Array<DividerParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple DividerParent documents */
  upsert?: InputMaybe<Array<DividerParentUpsertWithNestedWhereUniqueInput>>;
};

export type DividerParentUpdateManyWithNestedWhereInput = {
  Portfolio?: InputMaybe<PortfolioUpdateManyWithNestedWhereInput>;
};

export type DividerParentUpdateOneInlineInput = {
  /** Connect existing DividerParent document */
  connect?: InputMaybe<DividerParentWhereUniqueInput>;
  /** Create and connect one DividerParent document */
  create?: InputMaybe<DividerParentCreateInput>;
  /** Delete currently connected DividerParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected DividerParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single DividerParent document */
  update?: InputMaybe<DividerParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single DividerParent document */
  upsert?: InputMaybe<DividerParentUpsertWithNestedWhereUniqueInput>;
};

export type DividerParentUpdateWithNestedWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioUpdateWithNestedWhereUniqueInput>;
};

export type DividerParentUpsertWithNestedWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioUpsertWithNestedWhereUniqueInput>;
};

export type DividerParentWhereInput = {
  Portfolio?: InputMaybe<PortfolioWhereInput>;
};

export type DividerParentWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioWhereUniqueInput>;
};

export type DividerUpdateInput = {
  enable?: InputMaybe<Scalars['Boolean']>;
};

export type DividerUpdateManyInlineInput = {
  /** Create and connect multiple Divider component instances */
  create?: InputMaybe<Array<DividerCreateWithPositionInput>>;
  /** Delete multiple Divider documents */
  delete?: InputMaybe<Array<DividerWhereUniqueInput>>;
  /** Update multiple Divider component instances */
  update?: InputMaybe<Array<DividerUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Divider component instances */
  upsert?: InputMaybe<Array<DividerUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type DividerUpdateManyInput = {
  enable?: InputMaybe<Scalars['Boolean']>;
};

export type DividerUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: DividerUpdateManyInput;
  /** Document search */
  where: DividerWhereInput;
};

export type DividerUpdateOneInlineInput = {
  /** Create and connect one Divider document */
  create?: InputMaybe<DividerCreateInput>;
  /** Delete currently connected Divider document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Divider document */
  update?: InputMaybe<DividerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Divider document */
  upsert?: InputMaybe<DividerUpsertWithNestedWhereUniqueInput>;
};

export type DividerUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<DividerUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: DividerWhereUniqueInput;
};

export type DividerUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: DividerUpdateInput;
  /** Unique document search */
  where: DividerWhereUniqueInput;
};

export type DividerUpsertInput = {
  /** Create document if it didn't exist */
  create: DividerCreateInput;
  /** Update document if it exists */
  update: DividerUpdateInput;
};

export type DividerUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<DividerUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: DividerWhereUniqueInput;
};

export type DividerUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: DividerUpsertInput;
  /** Unique document search */
  where: DividerWhereUniqueInput;
};

/** Identifies documents */
export type DividerWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DividerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DividerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DividerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  enable?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  enable_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References Divider record uniquely */
export type DividerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  DOC = 'doc',
  DOCX = 'docx',
  HTML = 'html',
  JPG = 'jpg',
  ODP = 'odp',
  ODS = 'ods',
  ODT = 'odt',
  PDF = 'pdf',
  PNG = 'png',
  PPT = 'ppt',
  PPTX = 'pptx',
  SVG = 'svg',
  TXT = 'txt',
  WEBP = 'webp',
  XLS = 'xls',
  XLSX = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  ABOUTPAGE = 'AboutPage',
  /** Asset system model */
  ASSET = 'Asset',
  CONTACTLINK = 'ContactLink',
  CONTACTPAGE = 'ContactPage',
  DIVIDER = 'Divider',
  FULLWIDTHIMAGE = 'FullWidthImage',
  HOMEPAGE = 'Homepage',
  MAINPAGEINTRO = 'MainPageIntro',
  MYPROCESSLIST = 'MyProcessList',
  MYPROCESSSECTION = 'MyProcessSection',
  OVERVIEW = 'Overview',
  PORTFOLIO = 'Portfolio',
  PORTFOLIOCATEGORY = 'PortfolioCategory',
  QUOTE = 'Quote',
  /** Scheduled Operation system model */
  SCHEDULEDOPERATION = 'ScheduledOperation',
  /** Scheduled Release system model */
  SCHEDULEDRELEASE = 'ScheduledRelease',
  SERVICE = 'Service',
  SERVICESLIST = 'ServicesList',
  TEXTBLOCK = 'TextBlock',
  /** User system model */
  USER = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type FullWidthImage = Entity & {
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
};


export type FullWidthImageImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FullWidthImageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FullWidthImageWhereUniqueInput;
};

/** A connection to a list of items. */
export type FullWidthImageConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FullWidthImageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FullWidthImageCreateInput = {
  image?: InputMaybe<AssetCreateOneInlineInput>;
};

export type FullWidthImageCreateManyInlineInput = {
  /** Create and connect multiple existing FullWidthImage documents */
  create?: InputMaybe<Array<FullWidthImageCreateInput>>;
};

export type FullWidthImageCreateOneInlineInput = {
  /** Create and connect one FullWidthImage document */
  create?: InputMaybe<FullWidthImageCreateInput>;
};

export type FullWidthImageCreateWithPositionInput = {
  /** Document to create */
  data: FullWidthImageCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FullWidthImageEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FullWidthImage;
};

/** Identifies documents */
export type FullWidthImageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FullWidthImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FullWidthImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FullWidthImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum FullWidthImageOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC'
}

export type FullWidthImageParent = Portfolio;

export type FullWidthImageParentConnectInput = {
  Portfolio?: InputMaybe<PortfolioConnectInput>;
};

export type FullWidthImageParentCreateInput = {
  Portfolio?: InputMaybe<PortfolioCreateInput>;
};

export type FullWidthImageParentCreateManyInlineInput = {
  /** Connect multiple existing FullWidthImageParent documents */
  connect?: InputMaybe<Array<FullWidthImageParentWhereUniqueInput>>;
  /** Create and connect multiple existing FullWidthImageParent documents */
  create?: InputMaybe<Array<FullWidthImageParentCreateInput>>;
};

export type FullWidthImageParentCreateOneInlineInput = {
  /** Connect one existing FullWidthImageParent document */
  connect?: InputMaybe<FullWidthImageParentWhereUniqueInput>;
  /** Create and connect one FullWidthImageParent document */
  create?: InputMaybe<FullWidthImageParentCreateInput>;
};

export type FullWidthImageParentUpdateInput = {
  Portfolio?: InputMaybe<PortfolioUpdateInput>;
};

export type FullWidthImageParentUpdateManyInlineInput = {
  /** Connect multiple existing FullWidthImageParent documents */
  connect?: InputMaybe<Array<FullWidthImageParentConnectInput>>;
  /** Create and connect multiple FullWidthImageParent documents */
  create?: InputMaybe<Array<FullWidthImageParentCreateInput>>;
  /** Delete multiple FullWidthImageParent documents */
  delete?: InputMaybe<Array<FullWidthImageParentWhereUniqueInput>>;
  /** Disconnect multiple FullWidthImageParent documents */
  disconnect?: InputMaybe<Array<FullWidthImageParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FullWidthImageParent documents */
  set?: InputMaybe<Array<FullWidthImageParentWhereUniqueInput>>;
  /** Update multiple FullWidthImageParent documents */
  update?: InputMaybe<Array<FullWidthImageParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FullWidthImageParent documents */
  upsert?: InputMaybe<Array<FullWidthImageParentUpsertWithNestedWhereUniqueInput>>;
};

export type FullWidthImageParentUpdateManyWithNestedWhereInput = {
  Portfolio?: InputMaybe<PortfolioUpdateManyWithNestedWhereInput>;
};

export type FullWidthImageParentUpdateOneInlineInput = {
  /** Connect existing FullWidthImageParent document */
  connect?: InputMaybe<FullWidthImageParentWhereUniqueInput>;
  /** Create and connect one FullWidthImageParent document */
  create?: InputMaybe<FullWidthImageParentCreateInput>;
  /** Delete currently connected FullWidthImageParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected FullWidthImageParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single FullWidthImageParent document */
  update?: InputMaybe<FullWidthImageParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FullWidthImageParent document */
  upsert?: InputMaybe<FullWidthImageParentUpsertWithNestedWhereUniqueInput>;
};

export type FullWidthImageParentUpdateWithNestedWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioUpdateWithNestedWhereUniqueInput>;
};

export type FullWidthImageParentUpsertWithNestedWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioUpsertWithNestedWhereUniqueInput>;
};

export type FullWidthImageParentWhereInput = {
  Portfolio?: InputMaybe<PortfolioWhereInput>;
};

export type FullWidthImageParentWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioWhereUniqueInput>;
};

export type FullWidthImageUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type FullWidthImageUpdateManyInlineInput = {
  /** Create and connect multiple FullWidthImage component instances */
  create?: InputMaybe<Array<FullWidthImageCreateWithPositionInput>>;
  /** Delete multiple FullWidthImage documents */
  delete?: InputMaybe<Array<FullWidthImageWhereUniqueInput>>;
  /** Update multiple FullWidthImage component instances */
  update?: InputMaybe<Array<FullWidthImageUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FullWidthImage component instances */
  upsert?: InputMaybe<Array<FullWidthImageUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FullWidthImageUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type FullWidthImageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FullWidthImageUpdateManyInput;
  /** Document search */
  where: FullWidthImageWhereInput;
};

export type FullWidthImageUpdateOneInlineInput = {
  /** Create and connect one FullWidthImage document */
  create?: InputMaybe<FullWidthImageCreateInput>;
  /** Delete currently connected FullWidthImage document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FullWidthImage document */
  update?: InputMaybe<FullWidthImageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FullWidthImage document */
  upsert?: InputMaybe<FullWidthImageUpsertWithNestedWhereUniqueInput>;
};

export type FullWidthImageUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FullWidthImageUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FullWidthImageWhereUniqueInput;
};

export type FullWidthImageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FullWidthImageUpdateInput;
  /** Unique document search */
  where: FullWidthImageWhereUniqueInput;
};

export type FullWidthImageUpsertInput = {
  /** Create document if it didn't exist */
  create: FullWidthImageCreateInput;
  /** Update document if it exists */
  update: FullWidthImageUpdateInput;
};

export type FullWidthImageUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FullWidthImageUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FullWidthImageWhereUniqueInput;
};

export type FullWidthImageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FullWidthImageUpsertInput;
  /** Unique document search */
  where: FullWidthImageWhereUniqueInput;
};

/** Identifies documents */
export type FullWidthImageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FullWidthImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FullWidthImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FullWidthImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
};

/** References FullWidthImage record uniquely */
export type FullWidthImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Homepage = Entity & Node & {
  bannerImage?: Maybe<Asset>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Homepage>;
  general?: Maybe<MainPageIntro>;
  /** List of Homepage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  variant: HomepageVariant;
};


export type HomepageBannerImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HomepageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HomepageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type HomepageGeneralArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HomepageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type HomepagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HomepageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type HomepageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type HomepageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HomepageWhereUniqueInput;
};

/** A connection to a list of items. */
export type HomepageConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HomepageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HomepageCreateInput = {
  bannerImage?: InputMaybe<AssetCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  general?: InputMaybe<MainPageIntroCreateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  variant: HomepageVariant;
};

export type HomepageCreateManyInlineInput = {
  /** Connect multiple existing Homepage documents */
  connect?: InputMaybe<Array<HomepageWhereUniqueInput>>;
  /** Create and connect multiple existing Homepage documents */
  create?: InputMaybe<Array<HomepageCreateInput>>;
};

export type HomepageCreateOneInlineInput = {
  /** Connect one existing Homepage document */
  connect?: InputMaybe<HomepageWhereUniqueInput>;
  /** Create and connect one Homepage document */
  create?: InputMaybe<HomepageCreateInput>;
};

/** An edge in a connection. */
export type HomepageEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Homepage;
};

/** Identifies documents */
export type HomepageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomepageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomepageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomepageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bannerImage?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<HomepageWhereStageInput>;
  documentInStages_none?: InputMaybe<HomepageWhereStageInput>;
  documentInStages_some?: InputMaybe<HomepageWhereStageInput>;
  general?: InputMaybe<MainPageIntroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  variant?: InputMaybe<HomepageVariant>;
  /** All values that are contained in given list. */
  variant_in?: InputMaybe<Array<InputMaybe<HomepageVariant>>>;
  /** Any other value that exists and is not equal to the given value. */
  variant_not?: InputMaybe<HomepageVariant>;
  /** All values that are not contained in given list. */
  variant_not_in?: InputMaybe<Array<InputMaybe<HomepageVariant>>>;
};

export enum HomepageOrderByInput {
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  PUBLISHEDAT_ASC = 'publishedAt_ASC',
  PUBLISHEDAT_DESC = 'publishedAt_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  VARIANT_ASC = 'variant_ASC',
  VARIANT_DESC = 'variant_DESC'
}

export type HomepageUpdateInput = {
  bannerImage?: InputMaybe<AssetUpdateOneInlineInput>;
  general?: InputMaybe<MainPageIntroUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  variant?: InputMaybe<HomepageVariant>;
};

export type HomepageUpdateManyInlineInput = {
  /** Connect multiple existing Homepage documents */
  connect?: InputMaybe<Array<HomepageConnectInput>>;
  /** Create and connect multiple Homepage documents */
  create?: InputMaybe<Array<HomepageCreateInput>>;
  /** Delete multiple Homepage documents */
  delete?: InputMaybe<Array<HomepageWhereUniqueInput>>;
  /** Disconnect multiple Homepage documents */
  disconnect?: InputMaybe<Array<HomepageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Homepage documents */
  set?: InputMaybe<Array<HomepageWhereUniqueInput>>;
  /** Update multiple Homepage documents */
  update?: InputMaybe<Array<HomepageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Homepage documents */
  upsert?: InputMaybe<Array<HomepageUpsertWithNestedWhereUniqueInput>>;
};

export type HomepageUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type HomepageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HomepageUpdateManyInput;
  /** Document search */
  where: HomepageWhereInput;
};

export type HomepageUpdateOneInlineInput = {
  /** Connect existing Homepage document */
  connect?: InputMaybe<HomepageWhereUniqueInput>;
  /** Create and connect one Homepage document */
  create?: InputMaybe<HomepageCreateInput>;
  /** Delete currently connected Homepage document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Homepage document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Homepage document */
  update?: InputMaybe<HomepageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Homepage document */
  upsert?: InputMaybe<HomepageUpsertWithNestedWhereUniqueInput>;
};

export type HomepageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HomepageUpdateInput;
  /** Unique document search */
  where: HomepageWhereUniqueInput;
};

export type HomepageUpsertInput = {
  /** Create document if it didn't exist */
  create: HomepageCreateInput;
  /** Update document if it exists */
  update: HomepageUpdateInput;
};

export type HomepageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HomepageUpsertInput;
  /** Unique document search */
  where: HomepageWhereUniqueInput;
};

export enum HomepageVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

/** This contains a set of filters that can be used to compare values internally */
export type HomepageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type HomepageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomepageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomepageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomepageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  bannerImage?: InputMaybe<AssetWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<HomepageWhereStageInput>;
  documentInStages_none?: InputMaybe<HomepageWhereStageInput>;
  documentInStages_some?: InputMaybe<HomepageWhereStageInput>;
  general?: InputMaybe<MainPageIntroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  variant?: InputMaybe<HomepageVariant>;
  /** All values that are contained in given list. */
  variant_in?: InputMaybe<Array<InputMaybe<HomepageVariant>>>;
  /** Any other value that exists and is not equal to the given value. */
  variant_not?: InputMaybe<HomepageVariant>;
  /** All values that are not contained in given list. */
  variant_not_in?: InputMaybe<Array<InputMaybe<HomepageVariant>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type HomepageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomepageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomepageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomepageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<HomepageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Homepage record uniquely */
export type HomepageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  variant?: InputMaybe<HomepageVariant>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  CLIP = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  CROP = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  MAX = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  SCALE = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  EN = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type MainPageIntro = Entity & {
  /** The unique identifier */
  id: Scalars['ID'];
  introSubheading?: Maybe<RichText>;
  mainHeading?: Maybe<Scalars['String']>;
  showcaseImage?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
};


export type MainPageIntroShowcaseImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type MainPageIntroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MainPageIntroWhereUniqueInput;
};

/** A connection to a list of items. */
export type MainPageIntroConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MainPageIntroEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MainPageIntroCreateInput = {
  introSubheading?: InputMaybe<Scalars['RichTextAST']>;
  mainHeading?: InputMaybe<Scalars['String']>;
  showcaseImage?: InputMaybe<AssetCreateOneInlineInput>;
};

export type MainPageIntroCreateManyInlineInput = {
  /** Create and connect multiple existing MainPageIntro documents */
  create?: InputMaybe<Array<MainPageIntroCreateInput>>;
};

export type MainPageIntroCreateOneInlineInput = {
  /** Create and connect one MainPageIntro document */
  create?: InputMaybe<MainPageIntroCreateInput>;
};

export type MainPageIntroCreateWithPositionInput = {
  /** Document to create */
  data: MainPageIntroCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type MainPageIntroEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: MainPageIntro;
};

/** Identifies documents */
export type MainPageIntroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MainPageIntroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MainPageIntroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MainPageIntroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mainHeading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mainHeading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mainHeading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mainHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mainHeading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mainHeading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mainHeading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mainHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mainHeading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mainHeading_starts_with?: InputMaybe<Scalars['String']>;
  showcaseImage?: InputMaybe<AssetWhereInput>;
};

export enum MainPageIntroOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  MAINHEADING_ASC = 'mainHeading_ASC',
  MAINHEADING_DESC = 'mainHeading_DESC'
}

export type MainPageIntroParent = AboutPage | Homepage;

export type MainPageIntroParentConnectInput = {
  AboutPage?: InputMaybe<AboutPageConnectInput>;
  Homepage?: InputMaybe<HomepageConnectInput>;
};

export type MainPageIntroParentCreateInput = {
  AboutPage?: InputMaybe<AboutPageCreateInput>;
  Homepage?: InputMaybe<HomepageCreateInput>;
};

export type MainPageIntroParentCreateManyInlineInput = {
  /** Connect multiple existing MainPageIntroParent documents */
  connect?: InputMaybe<Array<MainPageIntroParentWhereUniqueInput>>;
  /** Create and connect multiple existing MainPageIntroParent documents */
  create?: InputMaybe<Array<MainPageIntroParentCreateInput>>;
};

export type MainPageIntroParentCreateOneInlineInput = {
  /** Connect one existing MainPageIntroParent document */
  connect?: InputMaybe<MainPageIntroParentWhereUniqueInput>;
  /** Create and connect one MainPageIntroParent document */
  create?: InputMaybe<MainPageIntroParentCreateInput>;
};

export type MainPageIntroParentUpdateInput = {
  AboutPage?: InputMaybe<AboutPageUpdateInput>;
  Homepage?: InputMaybe<HomepageUpdateInput>;
};

export type MainPageIntroParentUpdateManyInlineInput = {
  /** Connect multiple existing MainPageIntroParent documents */
  connect?: InputMaybe<Array<MainPageIntroParentConnectInput>>;
  /** Create and connect multiple MainPageIntroParent documents */
  create?: InputMaybe<Array<MainPageIntroParentCreateInput>>;
  /** Delete multiple MainPageIntroParent documents */
  delete?: InputMaybe<Array<MainPageIntroParentWhereUniqueInput>>;
  /** Disconnect multiple MainPageIntroParent documents */
  disconnect?: InputMaybe<Array<MainPageIntroParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing MainPageIntroParent documents */
  set?: InputMaybe<Array<MainPageIntroParentWhereUniqueInput>>;
  /** Update multiple MainPageIntroParent documents */
  update?: InputMaybe<Array<MainPageIntroParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple MainPageIntroParent documents */
  upsert?: InputMaybe<Array<MainPageIntroParentUpsertWithNestedWhereUniqueInput>>;
};

export type MainPageIntroParentUpdateManyWithNestedWhereInput = {
  AboutPage?: InputMaybe<AboutPageUpdateManyWithNestedWhereInput>;
  Homepage?: InputMaybe<HomepageUpdateManyWithNestedWhereInput>;
};

export type MainPageIntroParentUpdateOneInlineInput = {
  /** Connect existing MainPageIntroParent document */
  connect?: InputMaybe<MainPageIntroParentWhereUniqueInput>;
  /** Create and connect one MainPageIntroParent document */
  create?: InputMaybe<MainPageIntroParentCreateInput>;
  /** Delete currently connected MainPageIntroParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected MainPageIntroParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single MainPageIntroParent document */
  update?: InputMaybe<MainPageIntroParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MainPageIntroParent document */
  upsert?: InputMaybe<MainPageIntroParentUpsertWithNestedWhereUniqueInput>;
};

export type MainPageIntroParentUpdateWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpdateWithNestedWhereUniqueInput>;
  Homepage?: InputMaybe<HomepageUpdateWithNestedWhereUniqueInput>;
};

export type MainPageIntroParentUpsertWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpsertWithNestedWhereUniqueInput>;
  Homepage?: InputMaybe<HomepageUpsertWithNestedWhereUniqueInput>;
};

export type MainPageIntroParentWhereInput = {
  AboutPage?: InputMaybe<AboutPageWhereInput>;
  Homepage?: InputMaybe<HomepageWhereInput>;
};

export type MainPageIntroParentWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageWhereUniqueInput>;
  Homepage?: InputMaybe<HomepageWhereUniqueInput>;
};

export type MainPageIntroUpdateInput = {
  introSubheading?: InputMaybe<Scalars['RichTextAST']>;
  mainHeading?: InputMaybe<Scalars['String']>;
  showcaseImage?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type MainPageIntroUpdateManyInlineInput = {
  /** Create and connect multiple MainPageIntro component instances */
  create?: InputMaybe<Array<MainPageIntroCreateWithPositionInput>>;
  /** Delete multiple MainPageIntro documents */
  delete?: InputMaybe<Array<MainPageIntroWhereUniqueInput>>;
  /** Update multiple MainPageIntro component instances */
  update?: InputMaybe<Array<MainPageIntroUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple MainPageIntro component instances */
  upsert?: InputMaybe<Array<MainPageIntroUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type MainPageIntroUpdateManyInput = {
  introSubheading?: InputMaybe<Scalars['RichTextAST']>;
  mainHeading?: InputMaybe<Scalars['String']>;
};

export type MainPageIntroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MainPageIntroUpdateManyInput;
  /** Document search */
  where: MainPageIntroWhereInput;
};

export type MainPageIntroUpdateOneInlineInput = {
  /** Create and connect one MainPageIntro document */
  create?: InputMaybe<MainPageIntroCreateInput>;
  /** Delete currently connected MainPageIntro document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single MainPageIntro document */
  update?: InputMaybe<MainPageIntroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MainPageIntro document */
  upsert?: InputMaybe<MainPageIntroUpsertWithNestedWhereUniqueInput>;
};

export type MainPageIntroUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<MainPageIntroUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MainPageIntroWhereUniqueInput;
};

export type MainPageIntroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MainPageIntroUpdateInput;
  /** Unique document search */
  where: MainPageIntroWhereUniqueInput;
};

export type MainPageIntroUpsertInput = {
  /** Create document if it didn't exist */
  create: MainPageIntroCreateInput;
  /** Update document if it exists */
  update: MainPageIntroUpdateInput;
};

export type MainPageIntroUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<MainPageIntroUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MainPageIntroWhereUniqueInput;
};

export type MainPageIntroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MainPageIntroUpsertInput;
  /** Unique document search */
  where: MainPageIntroWhereUniqueInput;
};

/** Identifies documents */
export type MainPageIntroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MainPageIntroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MainPageIntroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MainPageIntroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mainHeading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mainHeading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mainHeading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mainHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mainHeading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mainHeading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mainHeading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mainHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mainHeading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mainHeading_starts_with?: InputMaybe<Scalars['String']>;
  showcaseImage?: InputMaybe<AssetWhereInput>;
};

/** References MainPageIntro record uniquely */
export type MainPageIntroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  /** Create one aboutPage */
  createAboutPage?: Maybe<AboutPage>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one contactPage */
  createContactPage?: Maybe<ContactPage>;
  /** Create one homepage */
  createHomepage?: Maybe<Homepage>;
  /** Create one portfolio */
  createPortfolio?: Maybe<Portfolio>;
  /** Create one portfolioCategory */
  createPortfolioCategory?: Maybe<PortfolioCategory>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one service */
  createService?: Maybe<Service>;
  /** Delete one aboutPage from _all_ existing stages. Returns deleted document. */
  deleteAboutPage?: Maybe<AboutPage>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one contactPage from _all_ existing stages. Returns deleted document. */
  deleteContactPage?: Maybe<ContactPage>;
  /** Delete one homepage from _all_ existing stages. Returns deleted document. */
  deleteHomepage?: Maybe<Homepage>;
  /**
   * Delete many AboutPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyAboutPagesConnection)
   */
  deleteManyAboutPages: BatchPayload;
  /** Delete many AboutPage documents, return deleted documents */
  deleteManyAboutPagesConnection: AboutPageConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many ContactPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyContactPagesConnection)
   */
  deleteManyContactPages: BatchPayload;
  /** Delete many ContactPage documents, return deleted documents */
  deleteManyContactPagesConnection: ContactPageConnection;
  /**
   * Delete many Homepage documents
   * @deprecated Please use the new paginated many mutation (deleteManyHomepagesConnection)
   */
  deleteManyHomepages: BatchPayload;
  /** Delete many Homepage documents, return deleted documents */
  deleteManyHomepagesConnection: HomepageConnection;
  /**
   * Delete many PortfolioCategory documents
   * @deprecated Please use the new paginated many mutation (deleteManyPortfolioCategoriesConnection)
   */
  deleteManyPortfolioCategories: BatchPayload;
  /** Delete many PortfolioCategory documents, return deleted documents */
  deleteManyPortfolioCategoriesConnection: PortfolioCategoryConnection;
  /**
   * Delete many Portfolio documents
   * @deprecated Please use the new paginated many mutation (deleteManyPortfoliosConnection)
   */
  deleteManyPortfolios: BatchPayload;
  /** Delete many Portfolio documents, return deleted documents */
  deleteManyPortfoliosConnection: PortfolioConnection;
  /**
   * Delete many Service documents
   * @deprecated Please use the new paginated many mutation (deleteManyServicesConnection)
   */
  deleteManyServices: BatchPayload;
  /** Delete many Service documents, return deleted documents */
  deleteManyServicesConnection: ServiceConnection;
  /** Delete one portfolio from _all_ existing stages. Returns deleted document. */
  deletePortfolio?: Maybe<Portfolio>;
  /** Delete one portfolioCategory from _all_ existing stages. Returns deleted document. */
  deletePortfolioCategory?: Maybe<PortfolioCategory>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one service from _all_ existing stages. Returns deleted document. */
  deleteService?: Maybe<Service>;
  /** Publish one aboutPage */
  publishAboutPage?: Maybe<AboutPage>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one contactPage */
  publishContactPage?: Maybe<ContactPage>;
  /** Publish one homepage */
  publishHomepage?: Maybe<Homepage>;
  /**
   * Publish many AboutPage documents
   * @deprecated Please use the new paginated many mutation (publishManyAboutPagesConnection)
   */
  publishManyAboutPages: BatchPayload;
  /** Publish many AboutPage documents */
  publishManyAboutPagesConnection: AboutPageConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many ContactPage documents
   * @deprecated Please use the new paginated many mutation (publishManyContactPagesConnection)
   */
  publishManyContactPages: BatchPayload;
  /** Publish many ContactPage documents */
  publishManyContactPagesConnection: ContactPageConnection;
  /**
   * Publish many Homepage documents
   * @deprecated Please use the new paginated many mutation (publishManyHomepagesConnection)
   */
  publishManyHomepages: BatchPayload;
  /** Publish many Homepage documents */
  publishManyHomepagesConnection: HomepageConnection;
  /**
   * Publish many PortfolioCategory documents
   * @deprecated Please use the new paginated many mutation (publishManyPortfolioCategoriesConnection)
   */
  publishManyPortfolioCategories: BatchPayload;
  /** Publish many PortfolioCategory documents */
  publishManyPortfolioCategoriesConnection: PortfolioCategoryConnection;
  /**
   * Publish many Portfolio documents
   * @deprecated Please use the new paginated many mutation (publishManyPortfoliosConnection)
   */
  publishManyPortfolios: BatchPayload;
  /** Publish many Portfolio documents */
  publishManyPortfoliosConnection: PortfolioConnection;
  /**
   * Publish many Service documents
   * @deprecated Please use the new paginated many mutation (publishManyServicesConnection)
   */
  publishManyServices: BatchPayload;
  /** Publish many Service documents */
  publishManyServicesConnection: ServiceConnection;
  /** Publish one portfolio */
  publishPortfolio?: Maybe<Portfolio>;
  /** Publish one portfolioCategory */
  publishPortfolioCategory?: Maybe<PortfolioCategory>;
  /** Publish one service */
  publishService?: Maybe<Service>;
  /** Schedule to publish one aboutPage */
  schedulePublishAboutPage?: Maybe<AboutPage>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one contactPage */
  schedulePublishContactPage?: Maybe<ContactPage>;
  /** Schedule to publish one homepage */
  schedulePublishHomepage?: Maybe<Homepage>;
  /** Schedule to publish one portfolio */
  schedulePublishPortfolio?: Maybe<Portfolio>;
  /** Schedule to publish one portfolioCategory */
  schedulePublishPortfolioCategory?: Maybe<PortfolioCategory>;
  /** Schedule to publish one service */
  schedulePublishService?: Maybe<Service>;
  /** Unpublish one aboutPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAboutPage?: Maybe<AboutPage>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one contactPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishContactPage?: Maybe<ContactPage>;
  /** Unpublish one homepage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHomepage?: Maybe<Homepage>;
  /** Unpublish one portfolio from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPortfolio?: Maybe<Portfolio>;
  /** Unpublish one portfolioCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPortfolioCategory?: Maybe<PortfolioCategory>;
  /** Unpublish one service from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishService?: Maybe<Service>;
  /** Unpublish one aboutPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAboutPage?: Maybe<AboutPage>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one contactPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishContactPage?: Maybe<ContactPage>;
  /** Unpublish one homepage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHomepage?: Maybe<Homepage>;
  /**
   * Unpublish many AboutPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAboutPagesConnection)
   */
  unpublishManyAboutPages: BatchPayload;
  /** Find many AboutPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAboutPagesConnection: AboutPageConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many ContactPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyContactPagesConnection)
   */
  unpublishManyContactPages: BatchPayload;
  /** Find many ContactPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyContactPagesConnection: ContactPageConnection;
  /**
   * Unpublish many Homepage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHomepagesConnection)
   */
  unpublishManyHomepages: BatchPayload;
  /** Find many Homepage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHomepagesConnection: HomepageConnection;
  /**
   * Unpublish many PortfolioCategory documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPortfolioCategoriesConnection)
   */
  unpublishManyPortfolioCategories: BatchPayload;
  /** Find many PortfolioCategory documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPortfolioCategoriesConnection: PortfolioCategoryConnection;
  /**
   * Unpublish many Portfolio documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPortfoliosConnection)
   */
  unpublishManyPortfolios: BatchPayload;
  /** Find many Portfolio documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPortfoliosConnection: PortfolioConnection;
  /**
   * Unpublish many Service documents
   * @deprecated Please use the new paginated many mutation (unpublishManyServicesConnection)
   */
  unpublishManyServices: BatchPayload;
  /** Find many Service documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyServicesConnection: ServiceConnection;
  /** Unpublish one portfolio from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPortfolio?: Maybe<Portfolio>;
  /** Unpublish one portfolioCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPortfolioCategory?: Maybe<PortfolioCategory>;
  /** Unpublish one service from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishService?: Maybe<Service>;
  /** Update one aboutPage */
  updateAboutPage?: Maybe<AboutPage>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one contactPage */
  updateContactPage?: Maybe<ContactPage>;
  /** Update one homepage */
  updateHomepage?: Maybe<Homepage>;
  /**
   * Update many aboutPages
   * @deprecated Please use the new paginated many mutation (updateManyAboutPagesConnection)
   */
  updateManyAboutPages: BatchPayload;
  /** Update many AboutPage documents */
  updateManyAboutPagesConnection: AboutPageConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many contactPages
   * @deprecated Please use the new paginated many mutation (updateManyContactPagesConnection)
   */
  updateManyContactPages: BatchPayload;
  /** Update many ContactPage documents */
  updateManyContactPagesConnection: ContactPageConnection;
  /**
   * Update many homepages
   * @deprecated Please use the new paginated many mutation (updateManyHomepagesConnection)
   */
  updateManyHomepages: BatchPayload;
  /** Update many Homepage documents */
  updateManyHomepagesConnection: HomepageConnection;
  /**
   * Update many portfolioCategories
   * @deprecated Please use the new paginated many mutation (updateManyPortfolioCategoriesConnection)
   */
  updateManyPortfolioCategories: BatchPayload;
  /** Update many PortfolioCategory documents */
  updateManyPortfolioCategoriesConnection: PortfolioCategoryConnection;
  /**
   * Update many portfolios
   * @deprecated Please use the new paginated many mutation (updateManyPortfoliosConnection)
   */
  updateManyPortfolios: BatchPayload;
  /** Update many Portfolio documents */
  updateManyPortfoliosConnection: PortfolioConnection;
  /**
   * Update many services
   * @deprecated Please use the new paginated many mutation (updateManyServicesConnection)
   */
  updateManyServices: BatchPayload;
  /** Update many Service documents */
  updateManyServicesConnection: ServiceConnection;
  /** Update one portfolio */
  updatePortfolio?: Maybe<Portfolio>;
  /** Update one portfolioCategory */
  updatePortfolioCategory?: Maybe<PortfolioCategory>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one service */
  updateService?: Maybe<Service>;
  /** Upsert one aboutPage */
  upsertAboutPage?: Maybe<AboutPage>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one contactPage */
  upsertContactPage?: Maybe<ContactPage>;
  /** Upsert one homepage */
  upsertHomepage?: Maybe<Homepage>;
  /** Upsert one portfolio */
  upsertPortfolio?: Maybe<Portfolio>;
  /** Upsert one portfolioCategory */
  upsertPortfolioCategory?: Maybe<PortfolioCategory>;
  /** Upsert one service */
  upsertService?: Maybe<Service>;
};


export type MutationCreateAboutPageArgs = {
  data: AboutPageCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateContactPageArgs = {
  data: ContactPageCreateInput;
};


export type MutationCreateHomepageArgs = {
  data: HomepageCreateInput;
};


export type MutationCreatePortfolioArgs = {
  data: PortfolioCreateInput;
};


export type MutationCreatePortfolioCategoryArgs = {
  data: PortfolioCategoryCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateServiceArgs = {
  data: ServiceCreateInput;
};


export type MutationDeleteAboutPageArgs = {
  where: AboutPageWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteContactPageArgs = {
  where: ContactPageWhereUniqueInput;
};


export type MutationDeleteHomepageArgs = {
  where: HomepageWhereUniqueInput;
};


export type MutationDeleteManyAboutPagesArgs = {
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationDeleteManyAboutPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyContactPagesArgs = {
  where?: InputMaybe<ContactPageManyWhereInput>;
};


export type MutationDeleteManyContactPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactPageManyWhereInput>;
};


export type MutationDeleteManyHomepagesArgs = {
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationDeleteManyHomepagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationDeleteManyPortfolioCategoriesArgs = {
  where?: InputMaybe<PortfolioCategoryManyWhereInput>;
};


export type MutationDeleteManyPortfolioCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PortfolioCategoryManyWhereInput>;
};


export type MutationDeleteManyPortfoliosArgs = {
  where?: InputMaybe<PortfolioManyWhereInput>;
};


export type MutationDeleteManyPortfoliosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PortfolioManyWhereInput>;
};


export type MutationDeleteManyServicesArgs = {
  where?: InputMaybe<ServiceManyWhereInput>;
};


export type MutationDeleteManyServicesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceManyWhereInput>;
};


export type MutationDeletePortfolioArgs = {
  where: PortfolioWhereUniqueInput;
};


export type MutationDeletePortfolioCategoryArgs = {
  where: PortfolioCategoryWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteServiceArgs = {
  where: ServiceWhereUniqueInput;
};


export type MutationPublishAboutPageArgs = {
  to?: Array<Stage>;
  where: AboutPageWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishContactPageArgs = {
  to?: Array<Stage>;
  where: ContactPageWhereUniqueInput;
};


export type MutationPublishHomepageArgs = {
  to?: Array<Stage>;
  where: HomepageWhereUniqueInput;
};


export type MutationPublishManyAboutPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationPublishManyAboutPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyContactPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ContactPageManyWhereInput>;
};


export type MutationPublishManyContactPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ContactPageManyWhereInput>;
};


export type MutationPublishManyHomepagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationPublishManyHomepagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationPublishManyPortfolioCategoriesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PortfolioCategoryManyWhereInput>;
};


export type MutationPublishManyPortfolioCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PortfolioCategoryManyWhereInput>;
};


export type MutationPublishManyPortfoliosArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PortfolioManyWhereInput>;
};


export type MutationPublishManyPortfoliosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PortfolioManyWhereInput>;
};


export type MutationPublishManyServicesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ServiceManyWhereInput>;
};


export type MutationPublishManyServicesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ServiceManyWhereInput>;
};


export type MutationPublishPortfolioArgs = {
  to?: Array<Stage>;
  where: PortfolioWhereUniqueInput;
};


export type MutationPublishPortfolioCategoryArgs = {
  to?: Array<Stage>;
  where: PortfolioCategoryWhereUniqueInput;
};


export type MutationPublishServiceArgs = {
  to?: Array<Stage>;
  where: ServiceWhereUniqueInput;
};


export type MutationSchedulePublishAboutPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AboutPageWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishContactPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ContactPageWhereUniqueInput;
};


export type MutationSchedulePublishHomepageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: HomepageWhereUniqueInput;
};


export type MutationSchedulePublishPortfolioArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PortfolioWhereUniqueInput;
};


export type MutationSchedulePublishPortfolioCategoryArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PortfolioCategoryWhereUniqueInput;
};


export type MutationSchedulePublishServiceArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ServiceWhereUniqueInput;
};


export type MutationScheduleUnpublishAboutPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: AboutPageWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishContactPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ContactPageWhereUniqueInput;
};


export type MutationScheduleUnpublishHomepageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: HomepageWhereUniqueInput;
};


export type MutationScheduleUnpublishPortfolioArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PortfolioWhereUniqueInput;
};


export type MutationScheduleUnpublishPortfolioCategoryArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PortfolioCategoryWhereUniqueInput;
};


export type MutationScheduleUnpublishServiceArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ServiceWhereUniqueInput;
};


export type MutationUnpublishAboutPageArgs = {
  from?: Array<Stage>;
  where: AboutPageWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishContactPageArgs = {
  from?: Array<Stage>;
  where: ContactPageWhereUniqueInput;
};


export type MutationUnpublishHomepageArgs = {
  from?: Array<Stage>;
  where: HomepageWhereUniqueInput;
};


export type MutationUnpublishManyAboutPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationUnpublishManyAboutPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyContactPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ContactPageManyWhereInput>;
};


export type MutationUnpublishManyContactPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ContactPageManyWhereInput>;
};


export type MutationUnpublishManyHomepagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationUnpublishManyHomepagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationUnpublishManyPortfolioCategoriesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PortfolioCategoryManyWhereInput>;
};


export type MutationUnpublishManyPortfolioCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PortfolioCategoryManyWhereInput>;
};


export type MutationUnpublishManyPortfoliosArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PortfolioManyWhereInput>;
};


export type MutationUnpublishManyPortfoliosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PortfolioManyWhereInput>;
};


export type MutationUnpublishManyServicesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ServiceManyWhereInput>;
};


export type MutationUnpublishManyServicesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ServiceManyWhereInput>;
};


export type MutationUnpublishPortfolioArgs = {
  from?: Array<Stage>;
  where: PortfolioWhereUniqueInput;
};


export type MutationUnpublishPortfolioCategoryArgs = {
  from?: Array<Stage>;
  where: PortfolioCategoryWhereUniqueInput;
};


export type MutationUnpublishServiceArgs = {
  from?: Array<Stage>;
  where: ServiceWhereUniqueInput;
};


export type MutationUpdateAboutPageArgs = {
  data: AboutPageUpdateInput;
  where: AboutPageWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateContactPageArgs = {
  data: ContactPageUpdateInput;
  where: ContactPageWhereUniqueInput;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageUpdateInput;
  where: HomepageWhereUniqueInput;
};


export type MutationUpdateManyAboutPagesArgs = {
  data: AboutPageUpdateManyInput;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationUpdateManyAboutPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AboutPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyContactPagesArgs = {
  data: ContactPageUpdateManyInput;
  where?: InputMaybe<ContactPageManyWhereInput>;
};


export type MutationUpdateManyContactPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ContactPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactPageManyWhereInput>;
};


export type MutationUpdateManyHomepagesArgs = {
  data: HomepageUpdateManyInput;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationUpdateManyHomepagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: HomepageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomepageManyWhereInput>;
};


export type MutationUpdateManyPortfolioCategoriesArgs = {
  data: PortfolioCategoryUpdateManyInput;
  where?: InputMaybe<PortfolioCategoryManyWhereInput>;
};


export type MutationUpdateManyPortfolioCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PortfolioCategoryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PortfolioCategoryManyWhereInput>;
};


export type MutationUpdateManyPortfoliosArgs = {
  data: PortfolioUpdateManyInput;
  where?: InputMaybe<PortfolioManyWhereInput>;
};


export type MutationUpdateManyPortfoliosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PortfolioUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PortfolioManyWhereInput>;
};


export type MutationUpdateManyServicesArgs = {
  data: ServiceUpdateManyInput;
  where?: InputMaybe<ServiceManyWhereInput>;
};


export type MutationUpdateManyServicesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ServiceUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceManyWhereInput>;
};


export type MutationUpdatePortfolioArgs = {
  data: PortfolioUpdateInput;
  where: PortfolioWhereUniqueInput;
};


export type MutationUpdatePortfolioCategoryArgs = {
  data: PortfolioCategoryUpdateInput;
  where: PortfolioCategoryWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateServiceArgs = {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};


export type MutationUpsertAboutPageArgs = {
  upsert: AboutPageUpsertInput;
  where: AboutPageWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertContactPageArgs = {
  upsert: ContactPageUpsertInput;
  where: ContactPageWhereUniqueInput;
};


export type MutationUpsertHomepageArgs = {
  upsert: HomepageUpsertInput;
  where: HomepageWhereUniqueInput;
};


export type MutationUpsertPortfolioArgs = {
  upsert: PortfolioUpsertInput;
  where: PortfolioWhereUniqueInput;
};


export type MutationUpsertPortfolioCategoryArgs = {
  upsert: PortfolioCategoryUpsertInput;
  where: PortfolioCategoryWhereUniqueInput;
};


export type MutationUpsertServiceArgs = {
  upsert: ServiceUpsertInput;
  where: ServiceWhereUniqueInput;
};

export type MyProcessList = Entity & {
  content?: Maybe<RichText>;
  icon?: Maybe<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** System stage field */
  stage: Stage;
};


export type MyProcessListIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type MyProcessListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MyProcessListWhereUniqueInput;
};

/** A connection to a list of items. */
export type MyProcessListConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MyProcessListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MyProcessListCreateInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  icon?: InputMaybe<AssetCreateOneInlineInput>;
  name: Scalars['String'];
};

export type MyProcessListCreateManyInlineInput = {
  /** Create and connect multiple existing MyProcessList documents */
  create?: InputMaybe<Array<MyProcessListCreateInput>>;
};

export type MyProcessListCreateOneInlineInput = {
  /** Create and connect one MyProcessList document */
  create?: InputMaybe<MyProcessListCreateInput>;
};

export type MyProcessListCreateWithPositionInput = {
  /** Document to create */
  data: MyProcessListCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type MyProcessListEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: MyProcessList;
};

/** Identifies documents */
export type MyProcessListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MyProcessListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MyProcessListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MyProcessListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
};

export enum MyProcessListOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC'
}

export type MyProcessListParent = AboutPage;

export type MyProcessListParentConnectInput = {
  AboutPage?: InputMaybe<AboutPageConnectInput>;
};

export type MyProcessListParentCreateInput = {
  AboutPage?: InputMaybe<AboutPageCreateInput>;
};

export type MyProcessListParentCreateManyInlineInput = {
  /** Connect multiple existing MyProcessListParent documents */
  connect?: InputMaybe<Array<MyProcessListParentWhereUniqueInput>>;
  /** Create and connect multiple existing MyProcessListParent documents */
  create?: InputMaybe<Array<MyProcessListParentCreateInput>>;
};

export type MyProcessListParentCreateOneInlineInput = {
  /** Connect one existing MyProcessListParent document */
  connect?: InputMaybe<MyProcessListParentWhereUniqueInput>;
  /** Create and connect one MyProcessListParent document */
  create?: InputMaybe<MyProcessListParentCreateInput>;
};

export type MyProcessListParentUpdateInput = {
  AboutPage?: InputMaybe<AboutPageUpdateInput>;
};

export type MyProcessListParentUpdateManyInlineInput = {
  /** Connect multiple existing MyProcessListParent documents */
  connect?: InputMaybe<Array<MyProcessListParentConnectInput>>;
  /** Create and connect multiple MyProcessListParent documents */
  create?: InputMaybe<Array<MyProcessListParentCreateInput>>;
  /** Delete multiple MyProcessListParent documents */
  delete?: InputMaybe<Array<MyProcessListParentWhereUniqueInput>>;
  /** Disconnect multiple MyProcessListParent documents */
  disconnect?: InputMaybe<Array<MyProcessListParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing MyProcessListParent documents */
  set?: InputMaybe<Array<MyProcessListParentWhereUniqueInput>>;
  /** Update multiple MyProcessListParent documents */
  update?: InputMaybe<Array<MyProcessListParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple MyProcessListParent documents */
  upsert?: InputMaybe<Array<MyProcessListParentUpsertWithNestedWhereUniqueInput>>;
};

export type MyProcessListParentUpdateManyWithNestedWhereInput = {
  AboutPage?: InputMaybe<AboutPageUpdateManyWithNestedWhereInput>;
};

export type MyProcessListParentUpdateOneInlineInput = {
  /** Connect existing MyProcessListParent document */
  connect?: InputMaybe<MyProcessListParentWhereUniqueInput>;
  /** Create and connect one MyProcessListParent document */
  create?: InputMaybe<MyProcessListParentCreateInput>;
  /** Delete currently connected MyProcessListParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected MyProcessListParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single MyProcessListParent document */
  update?: InputMaybe<MyProcessListParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MyProcessListParent document */
  upsert?: InputMaybe<MyProcessListParentUpsertWithNestedWhereUniqueInput>;
};

export type MyProcessListParentUpdateWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpdateWithNestedWhereUniqueInput>;
};

export type MyProcessListParentUpsertWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpsertWithNestedWhereUniqueInput>;
};

export type MyProcessListParentWhereInput = {
  AboutPage?: InputMaybe<AboutPageWhereInput>;
};

export type MyProcessListParentWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageWhereUniqueInput>;
};

export type MyProcessListUpdateInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  icon?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type MyProcessListUpdateManyInlineInput = {
  /** Create and connect multiple MyProcessList component instances */
  create?: InputMaybe<Array<MyProcessListCreateWithPositionInput>>;
  /** Delete multiple MyProcessList documents */
  delete?: InputMaybe<Array<MyProcessListWhereUniqueInput>>;
  /** Update multiple MyProcessList component instances */
  update?: InputMaybe<Array<MyProcessListUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple MyProcessList component instances */
  upsert?: InputMaybe<Array<MyProcessListUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type MyProcessListUpdateManyInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
};

export type MyProcessListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MyProcessListUpdateManyInput;
  /** Document search */
  where: MyProcessListWhereInput;
};

export type MyProcessListUpdateOneInlineInput = {
  /** Create and connect one MyProcessList document */
  create?: InputMaybe<MyProcessListCreateInput>;
  /** Delete currently connected MyProcessList document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single MyProcessList document */
  update?: InputMaybe<MyProcessListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MyProcessList document */
  upsert?: InputMaybe<MyProcessListUpsertWithNestedWhereUniqueInput>;
};

export type MyProcessListUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<MyProcessListUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MyProcessListWhereUniqueInput;
};

export type MyProcessListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MyProcessListUpdateInput;
  /** Unique document search */
  where: MyProcessListWhereUniqueInput;
};

export type MyProcessListUpsertInput = {
  /** Create document if it didn't exist */
  create: MyProcessListCreateInput;
  /** Update document if it exists */
  update: MyProcessListUpdateInput;
};

export type MyProcessListUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<MyProcessListUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MyProcessListWhereUniqueInput;
};

export type MyProcessListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MyProcessListUpsertInput;
  /** Unique document search */
  where: MyProcessListWhereUniqueInput;
};

/** Identifies documents */
export type MyProcessListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MyProcessListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MyProcessListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MyProcessListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
};

/** References MyProcessList record uniquely */
export type MyProcessListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MyProcessSection = Entity & {
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  showList?: Maybe<Scalars['Boolean']>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
};


export type MyProcessSectionImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type MyProcessSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MyProcessSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type MyProcessSectionConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MyProcessSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MyProcessSectionCreateInput = {
  image?: InputMaybe<AssetCreateOneInlineInput>;
  showList?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

export type MyProcessSectionCreateManyInlineInput = {
  /** Create and connect multiple existing MyProcessSection documents */
  create?: InputMaybe<Array<MyProcessSectionCreateInput>>;
};

export type MyProcessSectionCreateOneInlineInput = {
  /** Create and connect one MyProcessSection document */
  create?: InputMaybe<MyProcessSectionCreateInput>;
};

export type MyProcessSectionCreateWithPositionInput = {
  /** Document to create */
  data: MyProcessSectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type MyProcessSectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: MyProcessSection;
};

/** Identifies documents */
export type MyProcessSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MyProcessSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MyProcessSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MyProcessSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  showList?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  showList_not?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

export enum MyProcessSectionOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  SHOWLIST_ASC = 'showList_ASC',
  SHOWLIST_DESC = 'showList_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type MyProcessSectionUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  showList?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MyProcessSectionUpdateManyInlineInput = {
  /** Create and connect multiple MyProcessSection component instances */
  create?: InputMaybe<Array<MyProcessSectionCreateWithPositionInput>>;
  /** Delete multiple MyProcessSection documents */
  delete?: InputMaybe<Array<MyProcessSectionWhereUniqueInput>>;
  /** Update multiple MyProcessSection component instances */
  update?: InputMaybe<Array<MyProcessSectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple MyProcessSection component instances */
  upsert?: InputMaybe<Array<MyProcessSectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type MyProcessSectionUpdateManyInput = {
  showList?: InputMaybe<Scalars['Boolean']>;
};

export type MyProcessSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MyProcessSectionUpdateManyInput;
  /** Document search */
  where: MyProcessSectionWhereInput;
};

export type MyProcessSectionUpdateOneInlineInput = {
  /** Create and connect one MyProcessSection document */
  create?: InputMaybe<MyProcessSectionCreateInput>;
  /** Delete currently connected MyProcessSection document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single MyProcessSection document */
  update?: InputMaybe<MyProcessSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MyProcessSection document */
  upsert?: InputMaybe<MyProcessSectionUpsertWithNestedWhereUniqueInput>;
};

export type MyProcessSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<MyProcessSectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MyProcessSectionWhereUniqueInput;
};

export type MyProcessSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MyProcessSectionUpdateInput;
  /** Unique document search */
  where: MyProcessSectionWhereUniqueInput;
};

export type MyProcessSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: MyProcessSectionCreateInput;
  /** Update document if it exists */
  update: MyProcessSectionUpdateInput;
};

export type MyProcessSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<MyProcessSectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MyProcessSectionWhereUniqueInput;
};

export type MyProcessSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MyProcessSectionUpsertInput;
  /** Unique document search */
  where: MyProcessSectionWhereUniqueInput;
};

/** Identifies documents */
export type MyProcessSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MyProcessSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MyProcessSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MyProcessSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  showList?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  showList_not?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References MyProcessSection record uniquely */
export type MyProcessSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Overview = Entity & {
  /** The unique identifier */
  id: Scalars['ID'];
  output?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  skillsMethods?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
};

export type OverviewConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OverviewWhereUniqueInput;
};

/** A connection to a list of items. */
export type OverviewConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OverviewEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OverviewCreateInput = {
  output?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  skillsMethods?: InputMaybe<Scalars['String']>;
};

export type OverviewCreateManyInlineInput = {
  /** Create and connect multiple existing Overview documents */
  create?: InputMaybe<Array<OverviewCreateInput>>;
};

export type OverviewCreateOneInlineInput = {
  /** Create and connect one Overview document */
  create?: InputMaybe<OverviewCreateInput>;
};

export type OverviewCreateWithPositionInput = {
  /** Document to create */
  data: OverviewCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type OverviewEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Overview;
};

/** Identifies documents */
export type OverviewManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OverviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OverviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OverviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  output?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  output_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  output_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  output_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  output_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  output_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  output_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  output_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  output_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  output_starts_with?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  role_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars['String']>;
  skillsMethods?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  skillsMethods_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  skillsMethods_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  skillsMethods_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  skillsMethods_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  skillsMethods_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  skillsMethods_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  skillsMethods_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  skillsMethods_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  skillsMethods_starts_with?: InputMaybe<Scalars['String']>;
};

export enum OverviewOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  OUTPUT_ASC = 'output_ASC',
  OUTPUT_DESC = 'output_DESC',
  ROLE_ASC = 'role_ASC',
  ROLE_DESC = 'role_DESC',
  SKILLSMETHODS_ASC = 'skillsMethods_ASC',
  SKILLSMETHODS_DESC = 'skillsMethods_DESC'
}

export type OverviewParent = Portfolio;

export type OverviewParentConnectInput = {
  Portfolio?: InputMaybe<PortfolioConnectInput>;
};

export type OverviewParentCreateInput = {
  Portfolio?: InputMaybe<PortfolioCreateInput>;
};

export type OverviewParentCreateManyInlineInput = {
  /** Connect multiple existing OverviewParent documents */
  connect?: InputMaybe<Array<OverviewParentWhereUniqueInput>>;
  /** Create and connect multiple existing OverviewParent documents */
  create?: InputMaybe<Array<OverviewParentCreateInput>>;
};

export type OverviewParentCreateOneInlineInput = {
  /** Connect one existing OverviewParent document */
  connect?: InputMaybe<OverviewParentWhereUniqueInput>;
  /** Create and connect one OverviewParent document */
  create?: InputMaybe<OverviewParentCreateInput>;
};

export type OverviewParentUpdateInput = {
  Portfolio?: InputMaybe<PortfolioUpdateInput>;
};

export type OverviewParentUpdateManyInlineInput = {
  /** Connect multiple existing OverviewParent documents */
  connect?: InputMaybe<Array<OverviewParentConnectInput>>;
  /** Create and connect multiple OverviewParent documents */
  create?: InputMaybe<Array<OverviewParentCreateInput>>;
  /** Delete multiple OverviewParent documents */
  delete?: InputMaybe<Array<OverviewParentWhereUniqueInput>>;
  /** Disconnect multiple OverviewParent documents */
  disconnect?: InputMaybe<Array<OverviewParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing OverviewParent documents */
  set?: InputMaybe<Array<OverviewParentWhereUniqueInput>>;
  /** Update multiple OverviewParent documents */
  update?: InputMaybe<Array<OverviewParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple OverviewParent documents */
  upsert?: InputMaybe<Array<OverviewParentUpsertWithNestedWhereUniqueInput>>;
};

export type OverviewParentUpdateManyWithNestedWhereInput = {
  Portfolio?: InputMaybe<PortfolioUpdateManyWithNestedWhereInput>;
};

export type OverviewParentUpdateOneInlineInput = {
  /** Connect existing OverviewParent document */
  connect?: InputMaybe<OverviewParentWhereUniqueInput>;
  /** Create and connect one OverviewParent document */
  create?: InputMaybe<OverviewParentCreateInput>;
  /** Delete currently connected OverviewParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected OverviewParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single OverviewParent document */
  update?: InputMaybe<OverviewParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single OverviewParent document */
  upsert?: InputMaybe<OverviewParentUpsertWithNestedWhereUniqueInput>;
};

export type OverviewParentUpdateWithNestedWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioUpdateWithNestedWhereUniqueInput>;
};

export type OverviewParentUpsertWithNestedWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioUpsertWithNestedWhereUniqueInput>;
};

export type OverviewParentWhereInput = {
  Portfolio?: InputMaybe<PortfolioWhereInput>;
};

export type OverviewParentWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioWhereUniqueInput>;
};

export type OverviewUpdateInput = {
  output?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  skillsMethods?: InputMaybe<Scalars['String']>;
};

export type OverviewUpdateManyInlineInput = {
  /** Create and connect multiple Overview component instances */
  create?: InputMaybe<Array<OverviewCreateWithPositionInput>>;
  /** Delete multiple Overview documents */
  delete?: InputMaybe<Array<OverviewWhereUniqueInput>>;
  /** Update multiple Overview component instances */
  update?: InputMaybe<Array<OverviewUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Overview component instances */
  upsert?: InputMaybe<Array<OverviewUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type OverviewUpdateManyInput = {
  output?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  skillsMethods?: InputMaybe<Scalars['String']>;
};

export type OverviewUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OverviewUpdateManyInput;
  /** Document search */
  where: OverviewWhereInput;
};

export type OverviewUpdateOneInlineInput = {
  /** Create and connect one Overview document */
  create?: InputMaybe<OverviewCreateInput>;
  /** Delete currently connected Overview document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Overview document */
  update?: InputMaybe<OverviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Overview document */
  upsert?: InputMaybe<OverviewUpsertWithNestedWhereUniqueInput>;
};

export type OverviewUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<OverviewUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: OverviewWhereUniqueInput;
};

export type OverviewUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OverviewUpdateInput;
  /** Unique document search */
  where: OverviewWhereUniqueInput;
};

export type OverviewUpsertInput = {
  /** Create document if it didn't exist */
  create: OverviewCreateInput;
  /** Update document if it exists */
  update: OverviewUpdateInput;
};

export type OverviewUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<OverviewUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: OverviewWhereUniqueInput;
};

export type OverviewUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OverviewUpsertInput;
  /** Unique document search */
  where: OverviewWhereUniqueInput;
};

/** Identifies documents */
export type OverviewWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OverviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OverviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OverviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  output?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  output_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  output_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  output_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  output_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  output_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  output_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  output_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  output_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  output_starts_with?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  role_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  role_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  role_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  role_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  role_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  role_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  role_starts_with?: InputMaybe<Scalars['String']>;
  skillsMethods?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  skillsMethods_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  skillsMethods_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  skillsMethods_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  skillsMethods_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  skillsMethods_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  skillsMethods_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  skillsMethods_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  skillsMethods_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  skillsMethods_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Overview record uniquely */
export type OverviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Portfolio = Entity & Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Portfolio>;
  /** List of Portfolio versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  introduction?: Maybe<Scalars['String']>;
  overview?: Maybe<Overview>;
  pageContent: Array<PortfoliopageContentUnion>;
  portfolioCategories: Array<PortfolioCategory>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shortHeading?: Maybe<Scalars['String']>;
  showcaseImage?: Maybe<Asset>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  year?: Maybe<Scalars['String']>;
};


export type PortfolioCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PortfolioDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PortfolioHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PortfolioOverviewArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PortfolioPageContentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PortfolioPortfolioCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PortfolioCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PortfolioCategoryWhereInput>;
};


export type PortfolioPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PortfolioScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PortfolioShowcaseImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PortfolioUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PortfolioCategory = Entity & Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<PortfolioCategory>;
  /** List of PortfolioCategory versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PortfolioCategoryCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PortfolioCategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PortfolioCategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PortfolioCategoryPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PortfolioCategoryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PortfolioCategoryUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PortfolioCategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PortfolioCategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type PortfolioCategoryConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PortfolioCategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PortfolioCategoryCreateInput = {
  clq9z7z23ge0001um9uo59m39?: InputMaybe<ServiceCreateManyInlineInput>;
  clqefos6ogt1y01t80c5q30oq?: InputMaybe<ServicesListCreateManyInlineInput>;
  clr2c31exb79j01tc0z6r2bhn?: InputMaybe<PortfolioCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PortfolioCategoryCreateManyInlineInput = {
  /** Connect multiple existing PortfolioCategory documents */
  connect?: InputMaybe<Array<PortfolioCategoryWhereUniqueInput>>;
  /** Create and connect multiple existing PortfolioCategory documents */
  create?: InputMaybe<Array<PortfolioCategoryCreateInput>>;
};

export type PortfolioCategoryCreateOneInlineInput = {
  /** Connect one existing PortfolioCategory document */
  connect?: InputMaybe<PortfolioCategoryWhereUniqueInput>;
  /** Create and connect one PortfolioCategory document */
  create?: InputMaybe<PortfolioCategoryCreateInput>;
};

/** An edge in a connection. */
export type PortfolioCategoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PortfolioCategory;
};

/** Identifies documents */
export type PortfolioCategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PortfolioCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PortfolioCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PortfolioCategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PortfolioCategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<PortfolioCategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<PortfolioCategoryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PortfolioCategoryOrderByInput {
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  PUBLISHEDAT_ASC = 'publishedAt_ASC',
  PUBLISHEDAT_DESC = 'publishedAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

export type PortfolioCategoryUpdateInput = {
  clq9z7z23ge0001um9uo59m39?: InputMaybe<ServiceUpdateManyInlineInput>;
  clqefos6ogt1y01t80c5q30oq?: InputMaybe<ServicesListUpdateManyInlineInput>;
  clr2c31exb79j01tc0z6r2bhn?: InputMaybe<PortfolioUpdateManyInlineInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type PortfolioCategoryUpdateManyInlineInput = {
  /** Connect multiple existing PortfolioCategory documents */
  connect?: InputMaybe<Array<PortfolioCategoryConnectInput>>;
  /** Create and connect multiple PortfolioCategory documents */
  create?: InputMaybe<Array<PortfolioCategoryCreateInput>>;
  /** Delete multiple PortfolioCategory documents */
  delete?: InputMaybe<Array<PortfolioCategoryWhereUniqueInput>>;
  /** Disconnect multiple PortfolioCategory documents */
  disconnect?: InputMaybe<Array<PortfolioCategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PortfolioCategory documents */
  set?: InputMaybe<Array<PortfolioCategoryWhereUniqueInput>>;
  /** Update multiple PortfolioCategory documents */
  update?: InputMaybe<Array<PortfolioCategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PortfolioCategory documents */
  upsert?: InputMaybe<Array<PortfolioCategoryUpsertWithNestedWhereUniqueInput>>;
};

export type PortfolioCategoryUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type PortfolioCategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PortfolioCategoryUpdateManyInput;
  /** Document search */
  where: PortfolioCategoryWhereInput;
};

export type PortfolioCategoryUpdateOneInlineInput = {
  /** Connect existing PortfolioCategory document */
  connect?: InputMaybe<PortfolioCategoryWhereUniqueInput>;
  /** Create and connect one PortfolioCategory document */
  create?: InputMaybe<PortfolioCategoryCreateInput>;
  /** Delete currently connected PortfolioCategory document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PortfolioCategory document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PortfolioCategory document */
  update?: InputMaybe<PortfolioCategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PortfolioCategory document */
  upsert?: InputMaybe<PortfolioCategoryUpsertWithNestedWhereUniqueInput>;
};

export type PortfolioCategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PortfolioCategoryUpdateInput;
  /** Unique document search */
  where: PortfolioCategoryWhereUniqueInput;
};

export type PortfolioCategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: PortfolioCategoryCreateInput;
  /** Update document if it exists */
  update: PortfolioCategoryUpdateInput;
};

export type PortfolioCategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PortfolioCategoryUpsertInput;
  /** Unique document search */
  where: PortfolioCategoryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PortfolioCategoryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PortfolioCategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PortfolioCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PortfolioCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PortfolioCategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PortfolioCategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<PortfolioCategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<PortfolioCategoryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PortfolioCategoryWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PortfolioCategoryWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PortfolioCategoryWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PortfolioCategoryWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PortfolioCategoryWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References PortfolioCategory record uniquely */
export type PortfolioCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type PortfolioConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PortfolioWhereUniqueInput;
};

/** A connection to a list of items. */
export type PortfolioConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PortfolioEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PortfolioCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  introduction?: InputMaybe<Scalars['String']>;
  overview?: InputMaybe<OverviewCreateOneInlineInput>;
  pageContent?: InputMaybe<PortfoliopageContentUnionCreateManyInlineInput>;
  portfolioCategories?: InputMaybe<PortfolioCategoryCreateManyInlineInput>;
  shortHeading?: InputMaybe<Scalars['String']>;
  showcaseImage?: InputMaybe<AssetCreateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  year?: InputMaybe<Scalars['String']>;
};

export type PortfolioCreateManyInlineInput = {
  /** Connect multiple existing Portfolio documents */
  connect?: InputMaybe<Array<PortfolioWhereUniqueInput>>;
  /** Create and connect multiple existing Portfolio documents */
  create?: InputMaybe<Array<PortfolioCreateInput>>;
};

export type PortfolioCreateOneInlineInput = {
  /** Connect one existing Portfolio document */
  connect?: InputMaybe<PortfolioWhereUniqueInput>;
  /** Create and connect one Portfolio document */
  create?: InputMaybe<PortfolioCreateInput>;
};

/** An edge in a connection. */
export type PortfolioEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Portfolio;
};

/** Identifies documents */
export type PortfolioManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PortfolioWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PortfolioWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PortfolioWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PortfolioWhereStageInput>;
  documentInStages_none?: InputMaybe<PortfolioWhereStageInput>;
  documentInStages_some?: InputMaybe<PortfolioWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  introduction?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  introduction_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  introduction_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  introduction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  introduction_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  introduction_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  introduction_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  introduction_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  introduction_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  introduction_starts_with?: InputMaybe<Scalars['String']>;
  overview?: InputMaybe<OverviewWhereInput>;
  /** All values in which the union is empty. */
  pageContent_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  pageContent_some?: InputMaybe<PortfoliopageContentUnionWhereInput>;
  portfolioCategories_every?: InputMaybe<PortfolioCategoryWhereInput>;
  portfolioCategories_none?: InputMaybe<PortfolioCategoryWhereInput>;
  portfolioCategories_some?: InputMaybe<PortfolioCategoryWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shortHeading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  shortHeading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  shortHeading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  shortHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  shortHeading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  shortHeading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  shortHeading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  shortHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  shortHeading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  shortHeading_starts_with?: InputMaybe<Scalars['String']>;
  showcaseImage?: InputMaybe<AssetWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  year?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  year_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  year_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  year_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  year_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  year_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  year_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  year_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  year_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  year_starts_with?: InputMaybe<Scalars['String']>;
};

export enum PortfolioOrderByInput {
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  INTRODUCTION_ASC = 'introduction_ASC',
  INTRODUCTION_DESC = 'introduction_DESC',
  PUBLISHEDAT_ASC = 'publishedAt_ASC',
  PUBLISHEDAT_DESC = 'publishedAt_DESC',
  SHORTHEADING_ASC = 'shortHeading_ASC',
  SHORTHEADING_DESC = 'shortHeading_DESC',
  SLUG_ASC = 'slug_ASC',
  SLUG_DESC = 'slug_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  YEAR_ASC = 'year_ASC',
  YEAR_DESC = 'year_DESC'
}

export type PortfolioUpdateInput = {
  introduction?: InputMaybe<Scalars['String']>;
  overview?: InputMaybe<OverviewUpdateOneInlineInput>;
  pageContent?: InputMaybe<PortfoliopageContentUnionUpdateManyInlineInput>;
  portfolioCategories?: InputMaybe<PortfolioCategoryUpdateManyInlineInput>;
  shortHeading?: InputMaybe<Scalars['String']>;
  showcaseImage?: InputMaybe<AssetUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['String']>;
};

export type PortfolioUpdateManyInlineInput = {
  /** Connect multiple existing Portfolio documents */
  connect?: InputMaybe<Array<PortfolioConnectInput>>;
  /** Create and connect multiple Portfolio documents */
  create?: InputMaybe<Array<PortfolioCreateInput>>;
  /** Delete multiple Portfolio documents */
  delete?: InputMaybe<Array<PortfolioWhereUniqueInput>>;
  /** Disconnect multiple Portfolio documents */
  disconnect?: InputMaybe<Array<PortfolioWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Portfolio documents */
  set?: InputMaybe<Array<PortfolioWhereUniqueInput>>;
  /** Update multiple Portfolio documents */
  update?: InputMaybe<Array<PortfolioUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Portfolio documents */
  upsert?: InputMaybe<Array<PortfolioUpsertWithNestedWhereUniqueInput>>;
};

export type PortfolioUpdateManyInput = {
  introduction?: InputMaybe<Scalars['String']>;
  shortHeading?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['String']>;
};

export type PortfolioUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PortfolioUpdateManyInput;
  /** Document search */
  where: PortfolioWhereInput;
};

export type PortfolioUpdateOneInlineInput = {
  /** Connect existing Portfolio document */
  connect?: InputMaybe<PortfolioWhereUniqueInput>;
  /** Create and connect one Portfolio document */
  create?: InputMaybe<PortfolioCreateInput>;
  /** Delete currently connected Portfolio document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Portfolio document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Portfolio document */
  update?: InputMaybe<PortfolioUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Portfolio document */
  upsert?: InputMaybe<PortfolioUpsertWithNestedWhereUniqueInput>;
};

export type PortfolioUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PortfolioUpdateInput;
  /** Unique document search */
  where: PortfolioWhereUniqueInput;
};

export type PortfolioUpsertInput = {
  /** Create document if it didn't exist */
  create: PortfolioCreateInput;
  /** Update document if it exists */
  update: PortfolioUpdateInput;
};

export type PortfolioUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PortfolioUpsertInput;
  /** Unique document search */
  where: PortfolioWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PortfolioWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PortfolioWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PortfolioWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PortfolioWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PortfolioWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PortfolioWhereStageInput>;
  documentInStages_none?: InputMaybe<PortfolioWhereStageInput>;
  documentInStages_some?: InputMaybe<PortfolioWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  introduction?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  introduction_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  introduction_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  introduction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  introduction_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  introduction_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  introduction_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  introduction_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  introduction_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  introduction_starts_with?: InputMaybe<Scalars['String']>;
  overview?: InputMaybe<OverviewWhereInput>;
  /** All values in which the union is empty. */
  pageContent_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  pageContent_some?: InputMaybe<PortfoliopageContentUnionWhereInput>;
  portfolioCategories_every?: InputMaybe<PortfolioCategoryWhereInput>;
  portfolioCategories_none?: InputMaybe<PortfolioCategoryWhereInput>;
  portfolioCategories_some?: InputMaybe<PortfolioCategoryWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shortHeading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  shortHeading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  shortHeading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  shortHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  shortHeading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  shortHeading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  shortHeading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  shortHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  shortHeading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  shortHeading_starts_with?: InputMaybe<Scalars['String']>;
  showcaseImage?: InputMaybe<AssetWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  year?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  year_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  year_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  year_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  year_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  year_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  year_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  year_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  year_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  year_starts_with?: InputMaybe<Scalars['String']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PortfolioWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PortfolioWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PortfolioWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PortfolioWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PortfolioWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Portfolio record uniquely */
export type PortfolioWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PortfoliopageContentUnion = Divider | FullWidthImage | Quote | TextBlock;

export type PortfoliopageContentUnionConnectInput = {
  Divider?: InputMaybe<DividerConnectInput>;
  FullWidthImage?: InputMaybe<FullWidthImageConnectInput>;
  Quote?: InputMaybe<QuoteConnectInput>;
  TextBlock?: InputMaybe<TextBlockConnectInput>;
};

export type PortfoliopageContentUnionCreateInput = {
  Divider?: InputMaybe<DividerCreateInput>;
  FullWidthImage?: InputMaybe<FullWidthImageCreateInput>;
  Quote?: InputMaybe<QuoteCreateInput>;
  TextBlock?: InputMaybe<TextBlockCreateInput>;
};

export type PortfoliopageContentUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PortfoliopageContentUnion documents */
  create?: InputMaybe<Array<PortfoliopageContentUnionCreateInput>>;
};

export type PortfoliopageContentUnionCreateOneInlineInput = {
  /** Create and connect one PortfoliopageContentUnion document */
  create?: InputMaybe<PortfoliopageContentUnionCreateInput>;
};

export type PortfoliopageContentUnionCreateWithPositionInput = {
  Divider?: InputMaybe<DividerCreateWithPositionInput>;
  FullWidthImage?: InputMaybe<FullWidthImageCreateWithPositionInput>;
  Quote?: InputMaybe<QuoteCreateWithPositionInput>;
  TextBlock?: InputMaybe<TextBlockCreateWithPositionInput>;
};

export type PortfoliopageContentUnionUpdateInput = {
  Divider?: InputMaybe<DividerUpdateInput>;
  FullWidthImage?: InputMaybe<FullWidthImageUpdateInput>;
  Quote?: InputMaybe<QuoteUpdateInput>;
  TextBlock?: InputMaybe<TextBlockUpdateInput>;
};

export type PortfoliopageContentUnionUpdateManyInlineInput = {
  /** Create and connect multiple PortfoliopageContentUnion component instances */
  create?: InputMaybe<Array<PortfoliopageContentUnionCreateWithPositionInput>>;
  /** Delete multiple PortfoliopageContentUnion documents */
  delete?: InputMaybe<Array<PortfoliopageContentUnionWhereUniqueInput>>;
  /** Update multiple PortfoliopageContentUnion component instances */
  update?: InputMaybe<Array<PortfoliopageContentUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PortfoliopageContentUnion component instances */
  upsert?: InputMaybe<Array<PortfoliopageContentUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PortfoliopageContentUnionUpdateManyWithNestedWhereInput = {
  Divider?: InputMaybe<DividerUpdateManyWithNestedWhereInput>;
  FullWidthImage?: InputMaybe<FullWidthImageUpdateManyWithNestedWhereInput>;
  Quote?: InputMaybe<QuoteUpdateManyWithNestedWhereInput>;
  TextBlock?: InputMaybe<TextBlockUpdateManyWithNestedWhereInput>;
};

export type PortfoliopageContentUnionUpdateOneInlineInput = {
  /** Create and connect one PortfoliopageContentUnion document */
  create?: InputMaybe<PortfoliopageContentUnionCreateInput>;
  /** Delete currently connected PortfoliopageContentUnion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single PortfoliopageContentUnion document */
  update?: InputMaybe<PortfoliopageContentUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PortfoliopageContentUnion document */
  upsert?: InputMaybe<PortfoliopageContentUnionUpsertWithNestedWhereUniqueInput>;
};

export type PortfoliopageContentUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Divider?: InputMaybe<DividerUpdateWithNestedWhereUniqueAndPositionInput>;
  FullWidthImage?: InputMaybe<FullWidthImageUpdateWithNestedWhereUniqueAndPositionInput>;
  Quote?: InputMaybe<QuoteUpdateWithNestedWhereUniqueAndPositionInput>;
  TextBlock?: InputMaybe<TextBlockUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PortfoliopageContentUnionUpdateWithNestedWhereUniqueInput = {
  Divider?: InputMaybe<DividerUpdateWithNestedWhereUniqueInput>;
  FullWidthImage?: InputMaybe<FullWidthImageUpdateWithNestedWhereUniqueInput>;
  Quote?: InputMaybe<QuoteUpdateWithNestedWhereUniqueInput>;
  TextBlock?: InputMaybe<TextBlockUpdateWithNestedWhereUniqueInput>;
};

export type PortfoliopageContentUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Divider?: InputMaybe<DividerUpsertWithNestedWhereUniqueAndPositionInput>;
  FullWidthImage?: InputMaybe<FullWidthImageUpsertWithNestedWhereUniqueAndPositionInput>;
  Quote?: InputMaybe<QuoteUpsertWithNestedWhereUniqueAndPositionInput>;
  TextBlock?: InputMaybe<TextBlockUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PortfoliopageContentUnionUpsertWithNestedWhereUniqueInput = {
  Divider?: InputMaybe<DividerUpsertWithNestedWhereUniqueInput>;
  FullWidthImage?: InputMaybe<FullWidthImageUpsertWithNestedWhereUniqueInput>;
  Quote?: InputMaybe<QuoteUpsertWithNestedWhereUniqueInput>;
  TextBlock?: InputMaybe<TextBlockUpsertWithNestedWhereUniqueInput>;
};

export type PortfoliopageContentUnionWhereInput = {
  Divider?: InputMaybe<DividerWhereInput>;
  FullWidthImage?: InputMaybe<FullWidthImageWhereInput>;
  Quote?: InputMaybe<QuoteWhereInput>;
  TextBlock?: InputMaybe<TextBlockWhereInput>;
};

export type PortfoliopageContentUnionWhereUniqueInput = {
  Divider?: InputMaybe<DividerWhereUniqueInput>;
  FullWidthImage?: InputMaybe<FullWidthImageWhereUniqueInput>;
  Quote?: InputMaybe<QuoteWhereUniqueInput>;
  TextBlock?: InputMaybe<TextBlockWhereUniqueInput>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  /** Retrieve a single aboutPage */
  aboutPage?: Maybe<AboutPage>;
  /** Retrieve document version */
  aboutPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple aboutPages */
  aboutPages: Array<AboutPage>;
  /** Retrieve multiple aboutPages using the Relay connection interface */
  aboutPagesConnection: AboutPageConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single contactPage */
  contactPage?: Maybe<ContactPage>;
  /** Retrieve document version */
  contactPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple contactPages */
  contactPages: Array<ContactPage>;
  /** Retrieve multiple contactPages using the Relay connection interface */
  contactPagesConnection: ContactPageConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single homepage */
  homepage?: Maybe<Homepage>;
  /** Retrieve document version */
  homepageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple homepages */
  homepages: Array<Homepage>;
  /** Retrieve multiple homepages using the Relay connection interface */
  homepagesConnection: HomepageConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single portfolio */
  portfolio?: Maybe<Portfolio>;
  /** Retrieve multiple portfolioCategories */
  portfolioCategories: Array<PortfolioCategory>;
  /** Retrieve multiple portfolioCategories using the Relay connection interface */
  portfolioCategoriesConnection: PortfolioCategoryConnection;
  /** Retrieve a single portfolioCategory */
  portfolioCategory?: Maybe<PortfolioCategory>;
  /** Retrieve document version */
  portfolioCategoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve document version */
  portfolioVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple portfolios */
  portfolios: Array<Portfolio>;
  /** Retrieve multiple portfolios using the Relay connection interface */
  portfoliosConnection: PortfolioConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single service */
  service?: Maybe<Service>;
  /** Retrieve document version */
  serviceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple services */
  services: Array<Service>;
  /** Retrieve multiple services using the Relay connection interface */
  servicesConnection: ServiceConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAboutPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AboutPageWhereUniqueInput;
};


export type QueryAboutPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAboutPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AboutPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AboutPageWhereInput>;
};


export type QueryAboutPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AboutPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AboutPageWhereInput>;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryContactPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ContactPageWhereUniqueInput;
};


export type QueryContactPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryContactPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ContactPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ContactPageWhereInput>;
};


export type QueryContactPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ContactPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ContactPageWhereInput>;
};


export type QueryEntitiesArgs = {
  where: Array<EntityWhereInput>;
};


export type QueryHomepageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HomepageWhereUniqueInput;
};


export type QueryHomepageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryHomepagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomepageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<HomepageWhereInput>;
};


export type QueryHomepagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomepageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<HomepageWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPortfolioArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PortfolioWhereUniqueInput;
};


export type QueryPortfolioCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PortfolioCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PortfolioCategoryWhereInput>;
};


export type QueryPortfolioCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PortfolioCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PortfolioCategoryWhereInput>;
};


export type QueryPortfolioCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PortfolioCategoryWhereUniqueInput;
};


export type QueryPortfolioCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPortfolioVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPortfoliosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PortfolioOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PortfolioWhereInput>;
};


export type QueryPortfoliosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PortfolioOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PortfolioWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryServiceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ServiceWhereUniqueInput;
};


export type QueryServiceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryServicesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ServiceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QueryServicesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ServiceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type Quote = Entity & {
  author?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  quoteText?: Maybe<RichText>;
  /** System stage field */
  stage: Stage;
};

export type QuoteConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: QuoteWhereUniqueInput;
};

/** A connection to a list of items. */
export type QuoteConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<QuoteEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type QuoteCreateInput = {
  author?: InputMaybe<Scalars['String']>;
  quoteText?: InputMaybe<Scalars['RichTextAST']>;
};

export type QuoteCreateManyInlineInput = {
  /** Create and connect multiple existing Quote documents */
  create?: InputMaybe<Array<QuoteCreateInput>>;
};

export type QuoteCreateOneInlineInput = {
  /** Create and connect one Quote document */
  create?: InputMaybe<QuoteCreateInput>;
};

export type QuoteCreateWithPositionInput = {
  /** Document to create */
  data: QuoteCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type QuoteEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Quote;
};

/** Identifies documents */
export type QuoteManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<QuoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<QuoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<QuoteWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  author_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  author_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum QuoteOrderByInput {
  AUTHOR_ASC = 'author_ASC',
  AUTHOR_DESC = 'author_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC'
}

export type QuoteParent = Portfolio;

export type QuoteParentConnectInput = {
  Portfolio?: InputMaybe<PortfolioConnectInput>;
};

export type QuoteParentCreateInput = {
  Portfolio?: InputMaybe<PortfolioCreateInput>;
};

export type QuoteParentCreateManyInlineInput = {
  /** Connect multiple existing QuoteParent documents */
  connect?: InputMaybe<Array<QuoteParentWhereUniqueInput>>;
  /** Create and connect multiple existing QuoteParent documents */
  create?: InputMaybe<Array<QuoteParentCreateInput>>;
};

export type QuoteParentCreateOneInlineInput = {
  /** Connect one existing QuoteParent document */
  connect?: InputMaybe<QuoteParentWhereUniqueInput>;
  /** Create and connect one QuoteParent document */
  create?: InputMaybe<QuoteParentCreateInput>;
};

export type QuoteParentUpdateInput = {
  Portfolio?: InputMaybe<PortfolioUpdateInput>;
};

export type QuoteParentUpdateManyInlineInput = {
  /** Connect multiple existing QuoteParent documents */
  connect?: InputMaybe<Array<QuoteParentConnectInput>>;
  /** Create and connect multiple QuoteParent documents */
  create?: InputMaybe<Array<QuoteParentCreateInput>>;
  /** Delete multiple QuoteParent documents */
  delete?: InputMaybe<Array<QuoteParentWhereUniqueInput>>;
  /** Disconnect multiple QuoteParent documents */
  disconnect?: InputMaybe<Array<QuoteParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing QuoteParent documents */
  set?: InputMaybe<Array<QuoteParentWhereUniqueInput>>;
  /** Update multiple QuoteParent documents */
  update?: InputMaybe<Array<QuoteParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple QuoteParent documents */
  upsert?: InputMaybe<Array<QuoteParentUpsertWithNestedWhereUniqueInput>>;
};

export type QuoteParentUpdateManyWithNestedWhereInput = {
  Portfolio?: InputMaybe<PortfolioUpdateManyWithNestedWhereInput>;
};

export type QuoteParentUpdateOneInlineInput = {
  /** Connect existing QuoteParent document */
  connect?: InputMaybe<QuoteParentWhereUniqueInput>;
  /** Create and connect one QuoteParent document */
  create?: InputMaybe<QuoteParentCreateInput>;
  /** Delete currently connected QuoteParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected QuoteParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single QuoteParent document */
  update?: InputMaybe<QuoteParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single QuoteParent document */
  upsert?: InputMaybe<QuoteParentUpsertWithNestedWhereUniqueInput>;
};

export type QuoteParentUpdateWithNestedWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioUpdateWithNestedWhereUniqueInput>;
};

export type QuoteParentUpsertWithNestedWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioUpsertWithNestedWhereUniqueInput>;
};

export type QuoteParentWhereInput = {
  Portfolio?: InputMaybe<PortfolioWhereInput>;
};

export type QuoteParentWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioWhereUniqueInput>;
};

export type QuoteUpdateInput = {
  author?: InputMaybe<Scalars['String']>;
  quoteText?: InputMaybe<Scalars['RichTextAST']>;
};

export type QuoteUpdateManyInlineInput = {
  /** Create and connect multiple Quote component instances */
  create?: InputMaybe<Array<QuoteCreateWithPositionInput>>;
  /** Delete multiple Quote documents */
  delete?: InputMaybe<Array<QuoteWhereUniqueInput>>;
  /** Update multiple Quote component instances */
  update?: InputMaybe<Array<QuoteUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Quote component instances */
  upsert?: InputMaybe<Array<QuoteUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type QuoteUpdateManyInput = {
  author?: InputMaybe<Scalars['String']>;
  quoteText?: InputMaybe<Scalars['RichTextAST']>;
};

export type QuoteUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: QuoteUpdateManyInput;
  /** Document search */
  where: QuoteWhereInput;
};

export type QuoteUpdateOneInlineInput = {
  /** Create and connect one Quote document */
  create?: InputMaybe<QuoteCreateInput>;
  /** Delete currently connected Quote document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Quote document */
  update?: InputMaybe<QuoteUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Quote document */
  upsert?: InputMaybe<QuoteUpsertWithNestedWhereUniqueInput>;
};

export type QuoteUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<QuoteUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: QuoteWhereUniqueInput;
};

export type QuoteUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: QuoteUpdateInput;
  /** Unique document search */
  where: QuoteWhereUniqueInput;
};

export type QuoteUpsertInput = {
  /** Create document if it didn't exist */
  create: QuoteCreateInput;
  /** Update document if it exists */
  update: QuoteUpdateInput;
};

export type QuoteUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<QuoteUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: QuoteWhereUniqueInput;
};

export type QuoteUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: QuoteUpsertInput;
  /** Unique document search */
  where: QuoteWhereUniqueInput;
};

/** Identifies documents */
export type QuoteWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<QuoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<QuoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<QuoteWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  author_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  author_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References Quote record uniquely */
export type QuoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = AboutPage | Asset | ContactPage | Homepage | Portfolio | PortfolioCategory | Service;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  ERRORMESSAGE_ASC = 'errorMessage_ASC',
  ERRORMESSAGE_DESC = 'errorMessage_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  PUBLISHEDAT_ASC = 'publishedAt_ASC',
  PUBLISHEDAT_DESC = 'publishedAt_DESC',
  STATUS_ASC = 'status_ASC',
  STATUS_DESC = 'status_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  IN_PROGRESS = 'IN_PROGRESS',
  PENDING = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  ERRORMESSAGE_ASC = 'errorMessage_ASC',
  ERRORMESSAGE_DESC = 'errorMessage_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  ISACTIVE_ASC = 'isActive_ASC',
  ISACTIVE_DESC = 'isActive_DESC',
  ISIMPLICIT_ASC = 'isImplicit_ASC',
  ISIMPLICIT_DESC = 'isImplicit_DESC',
  PUBLISHEDAT_ASC = 'publishedAt_ASC',
  PUBLISHEDAT_DESC = 'publishedAt_DESC',
  RELEASEAT_ASC = 'releaseAt_ASC',
  RELEASEAT_DESC = 'releaseAt_DESC',
  STATUS_ASC = 'status_ASC',
  STATUS_DESC = 'status_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  IN_PROGRESS = 'IN_PROGRESS',
  PENDING = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Service = Entity & Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Service>;
  /** List of Service versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  portfolioCategory?: Maybe<PortfolioCategory>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ServiceCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ServiceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ServiceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ServicePortfolioCategoryArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ServicePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ServiceScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ServiceUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ServiceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ServiceWhereUniqueInput;
};

/** A connection to a list of items. */
export type ServiceConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ServiceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ServiceCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  portfolioCategory?: InputMaybe<PortfolioCategoryCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ServiceCreateManyInlineInput = {
  /** Connect multiple existing Service documents */
  connect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  /** Create and connect multiple existing Service documents */
  create?: InputMaybe<Array<ServiceCreateInput>>;
};

export type ServiceCreateOneInlineInput = {
  /** Connect one existing Service document */
  connect?: InputMaybe<ServiceWhereUniqueInput>;
  /** Create and connect one Service document */
  create?: InputMaybe<ServiceCreateInput>;
};

/** An edge in a connection. */
export type ServiceEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Service;
};

/** Identifies documents */
export type ServiceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ServiceWhereStageInput>;
  documentInStages_none?: InputMaybe<ServiceWhereStageInput>;
  documentInStages_some?: InputMaybe<ServiceWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  portfolioCategory?: InputMaybe<PortfolioCategoryWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ServiceOrderByInput {
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  PUBLISHEDAT_ASC = 'publishedAt_ASC',
  PUBLISHEDAT_DESC = 'publishedAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

export type ServiceUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  portfolioCategory?: InputMaybe<PortfolioCategoryUpdateOneInlineInput>;
};

export type ServiceUpdateManyInlineInput = {
  /** Connect multiple existing Service documents */
  connect?: InputMaybe<Array<ServiceConnectInput>>;
  /** Create and connect multiple Service documents */
  create?: InputMaybe<Array<ServiceCreateInput>>;
  /** Delete multiple Service documents */
  delete?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  /** Disconnect multiple Service documents */
  disconnect?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Service documents */
  set?: InputMaybe<Array<ServiceWhereUniqueInput>>;
  /** Update multiple Service documents */
  update?: InputMaybe<Array<ServiceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Service documents */
  upsert?: InputMaybe<Array<ServiceUpsertWithNestedWhereUniqueInput>>;
};

export type ServiceUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ServiceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ServiceUpdateManyInput;
  /** Document search */
  where: ServiceWhereInput;
};

export type ServiceUpdateOneInlineInput = {
  /** Connect existing Service document */
  connect?: InputMaybe<ServiceWhereUniqueInput>;
  /** Create and connect one Service document */
  create?: InputMaybe<ServiceCreateInput>;
  /** Delete currently connected Service document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Service document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Service document */
  update?: InputMaybe<ServiceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Service document */
  upsert?: InputMaybe<ServiceUpsertWithNestedWhereUniqueInput>;
};

export type ServiceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ServiceUpdateInput;
  /** Unique document search */
  where: ServiceWhereUniqueInput;
};

export type ServiceUpsertInput = {
  /** Create document if it didn't exist */
  create: ServiceCreateInput;
  /** Update document if it exists */
  update: ServiceUpdateInput;
};

export type ServiceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ServiceUpsertInput;
  /** Unique document search */
  where: ServiceWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ServiceWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ServiceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ServiceWhereStageInput>;
  documentInStages_none?: InputMaybe<ServiceWhereStageInput>;
  documentInStages_some?: InputMaybe<ServiceWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  portfolioCategory?: InputMaybe<PortfolioCategoryWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ServiceWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ServiceWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ServiceWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ServiceWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ServiceWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Service record uniquely */
export type ServiceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ServicesList = Entity & {
  /** The unique identifier */
  id: Scalars['ID'];
  portfolioCategory?: Maybe<PortfolioCategory>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
};


export type ServicesListPortfolioCategoryArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ServicesListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ServicesListWhereUniqueInput;
};

/** A connection to a list of items. */
export type ServicesListConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ServicesListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ServicesListCreateInput = {
  portfolioCategory?: InputMaybe<PortfolioCategoryCreateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ServicesListCreateManyInlineInput = {
  /** Create and connect multiple existing ServicesList documents */
  create?: InputMaybe<Array<ServicesListCreateInput>>;
};

export type ServicesListCreateOneInlineInput = {
  /** Create and connect one ServicesList document */
  create?: InputMaybe<ServicesListCreateInput>;
};

export type ServicesListCreateWithPositionInput = {
  /** Document to create */
  data: ServicesListCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ServicesListEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ServicesList;
};

/** Identifies documents */
export type ServicesListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ServicesListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ServicesListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ServicesListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  portfolioCategory?: InputMaybe<PortfolioCategoryWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ServicesListOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  TITLE_ASC = 'title_ASC',
  TITLE_DESC = 'title_DESC'
}

export type ServicesListParent = AboutPage;

export type ServicesListParentConnectInput = {
  AboutPage?: InputMaybe<AboutPageConnectInput>;
};

export type ServicesListParentCreateInput = {
  AboutPage?: InputMaybe<AboutPageCreateInput>;
};

export type ServicesListParentCreateManyInlineInput = {
  /** Connect multiple existing ServicesListParent documents */
  connect?: InputMaybe<Array<ServicesListParentWhereUniqueInput>>;
  /** Create and connect multiple existing ServicesListParent documents */
  create?: InputMaybe<Array<ServicesListParentCreateInput>>;
};

export type ServicesListParentCreateOneInlineInput = {
  /** Connect one existing ServicesListParent document */
  connect?: InputMaybe<ServicesListParentWhereUniqueInput>;
  /** Create and connect one ServicesListParent document */
  create?: InputMaybe<ServicesListParentCreateInput>;
};

export type ServicesListParentUpdateInput = {
  AboutPage?: InputMaybe<AboutPageUpdateInput>;
};

export type ServicesListParentUpdateManyInlineInput = {
  /** Connect multiple existing ServicesListParent documents */
  connect?: InputMaybe<Array<ServicesListParentConnectInput>>;
  /** Create and connect multiple ServicesListParent documents */
  create?: InputMaybe<Array<ServicesListParentCreateInput>>;
  /** Delete multiple ServicesListParent documents */
  delete?: InputMaybe<Array<ServicesListParentWhereUniqueInput>>;
  /** Disconnect multiple ServicesListParent documents */
  disconnect?: InputMaybe<Array<ServicesListParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ServicesListParent documents */
  set?: InputMaybe<Array<ServicesListParentWhereUniqueInput>>;
  /** Update multiple ServicesListParent documents */
  update?: InputMaybe<Array<ServicesListParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ServicesListParent documents */
  upsert?: InputMaybe<Array<ServicesListParentUpsertWithNestedWhereUniqueInput>>;
};

export type ServicesListParentUpdateManyWithNestedWhereInput = {
  AboutPage?: InputMaybe<AboutPageUpdateManyWithNestedWhereInput>;
};

export type ServicesListParentUpdateOneInlineInput = {
  /** Connect existing ServicesListParent document */
  connect?: InputMaybe<ServicesListParentWhereUniqueInput>;
  /** Create and connect one ServicesListParent document */
  create?: InputMaybe<ServicesListParentCreateInput>;
  /** Delete currently connected ServicesListParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ServicesListParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ServicesListParent document */
  update?: InputMaybe<ServicesListParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ServicesListParent document */
  upsert?: InputMaybe<ServicesListParentUpsertWithNestedWhereUniqueInput>;
};

export type ServicesListParentUpdateWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpdateWithNestedWhereUniqueInput>;
};

export type ServicesListParentUpsertWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpsertWithNestedWhereUniqueInput>;
};

export type ServicesListParentWhereInput = {
  AboutPage?: InputMaybe<AboutPageWhereInput>;
};

export type ServicesListParentWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageWhereUniqueInput>;
};

export type ServicesListUpdateInput = {
  portfolioCategory?: InputMaybe<PortfolioCategoryUpdateOneInlineInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ServicesListUpdateManyInlineInput = {
  /** Create and connect multiple ServicesList component instances */
  create?: InputMaybe<Array<ServicesListCreateWithPositionInput>>;
  /** Delete multiple ServicesList documents */
  delete?: InputMaybe<Array<ServicesListWhereUniqueInput>>;
  /** Update multiple ServicesList component instances */
  update?: InputMaybe<Array<ServicesListUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ServicesList component instances */
  upsert?: InputMaybe<Array<ServicesListUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ServicesListUpdateManyInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type ServicesListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ServicesListUpdateManyInput;
  /** Document search */
  where: ServicesListWhereInput;
};

export type ServicesListUpdateOneInlineInput = {
  /** Create and connect one ServicesList document */
  create?: InputMaybe<ServicesListCreateInput>;
  /** Delete currently connected ServicesList document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ServicesList document */
  update?: InputMaybe<ServicesListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ServicesList document */
  upsert?: InputMaybe<ServicesListUpsertWithNestedWhereUniqueInput>;
};

export type ServicesListUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ServicesListUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ServicesListWhereUniqueInput;
};

export type ServicesListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ServicesListUpdateInput;
  /** Unique document search */
  where: ServicesListWhereUniqueInput;
};

export type ServicesListUpsertInput = {
  /** Create document if it didn't exist */
  create: ServicesListCreateInput;
  /** Update document if it exists */
  update: ServicesListUpdateInput;
};

export type ServicesListUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ServicesListUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ServicesListWhereUniqueInput;
};

export type ServicesListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ServicesListUpsertInput;
  /** Unique document search */
  where: ServicesListWhereUniqueInput;
};

/** Identifies documents */
export type ServicesListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ServicesListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ServicesListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ServicesListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  portfolioCategory?: InputMaybe<PortfolioCategoryWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References ServicesList record uniquely */
export type ServicesListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  DRAFT = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  PUBLISHED = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  BASE = 'BASE',
  COMBINED = 'COMBINED',
  LOCALIZATION = 'LOCALIZATION'
}

export type TextBlock = Entity & {
  coloredHeading?: Maybe<Scalars['String']>;
  content?: Maybe<RichText>;
  heading?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
};

export type TextBlockConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TextBlockWhereUniqueInput;
};

/** A connection to a list of items. */
export type TextBlockConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TextBlockEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TextBlockCreateInput = {
  coloredHeading?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type TextBlockCreateManyInlineInput = {
  /** Create and connect multiple existing TextBlock documents */
  create?: InputMaybe<Array<TextBlockCreateInput>>;
};

export type TextBlockCreateOneInlineInput = {
  /** Create and connect one TextBlock document */
  create?: InputMaybe<TextBlockCreateInput>;
};

export type TextBlockCreateWithPositionInput = {
  /** Document to create */
  data: TextBlockCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TextBlockEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TextBlock;
};

/** Identifies documents */
export type TextBlockManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TextBlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TextBlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TextBlockWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  coloredHeading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  coloredHeading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  coloredHeading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  coloredHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  coloredHeading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  coloredHeading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  coloredHeading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  coloredHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  coloredHeading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  coloredHeading_starts_with?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum TextBlockOrderByInput {
  COLOREDHEADING_ASC = 'coloredHeading_ASC',
  COLOREDHEADING_DESC = 'coloredHeading_DESC',
  HEADING_ASC = 'heading_ASC',
  HEADING_DESC = 'heading_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC'
}

export type TextBlockParent = Portfolio;

export type TextBlockParentConnectInput = {
  Portfolio?: InputMaybe<PortfolioConnectInput>;
};

export type TextBlockParentCreateInput = {
  Portfolio?: InputMaybe<PortfolioCreateInput>;
};

export type TextBlockParentCreateManyInlineInput = {
  /** Connect multiple existing TextBlockParent documents */
  connect?: InputMaybe<Array<TextBlockParentWhereUniqueInput>>;
  /** Create and connect multiple existing TextBlockParent documents */
  create?: InputMaybe<Array<TextBlockParentCreateInput>>;
};

export type TextBlockParentCreateOneInlineInput = {
  /** Connect one existing TextBlockParent document */
  connect?: InputMaybe<TextBlockParentWhereUniqueInput>;
  /** Create and connect one TextBlockParent document */
  create?: InputMaybe<TextBlockParentCreateInput>;
};

export type TextBlockParentUpdateInput = {
  Portfolio?: InputMaybe<PortfolioUpdateInput>;
};

export type TextBlockParentUpdateManyInlineInput = {
  /** Connect multiple existing TextBlockParent documents */
  connect?: InputMaybe<Array<TextBlockParentConnectInput>>;
  /** Create and connect multiple TextBlockParent documents */
  create?: InputMaybe<Array<TextBlockParentCreateInput>>;
  /** Delete multiple TextBlockParent documents */
  delete?: InputMaybe<Array<TextBlockParentWhereUniqueInput>>;
  /** Disconnect multiple TextBlockParent documents */
  disconnect?: InputMaybe<Array<TextBlockParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TextBlockParent documents */
  set?: InputMaybe<Array<TextBlockParentWhereUniqueInput>>;
  /** Update multiple TextBlockParent documents */
  update?: InputMaybe<Array<TextBlockParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TextBlockParent documents */
  upsert?: InputMaybe<Array<TextBlockParentUpsertWithNestedWhereUniqueInput>>;
};

export type TextBlockParentUpdateManyWithNestedWhereInput = {
  Portfolio?: InputMaybe<PortfolioUpdateManyWithNestedWhereInput>;
};

export type TextBlockParentUpdateOneInlineInput = {
  /** Connect existing TextBlockParent document */
  connect?: InputMaybe<TextBlockParentWhereUniqueInput>;
  /** Create and connect one TextBlockParent document */
  create?: InputMaybe<TextBlockParentCreateInput>;
  /** Delete currently connected TextBlockParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected TextBlockParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single TextBlockParent document */
  update?: InputMaybe<TextBlockParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TextBlockParent document */
  upsert?: InputMaybe<TextBlockParentUpsertWithNestedWhereUniqueInput>;
};

export type TextBlockParentUpdateWithNestedWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioUpdateWithNestedWhereUniqueInput>;
};

export type TextBlockParentUpsertWithNestedWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioUpsertWithNestedWhereUniqueInput>;
};

export type TextBlockParentWhereInput = {
  Portfolio?: InputMaybe<PortfolioWhereInput>;
};

export type TextBlockParentWhereUniqueInput = {
  Portfolio?: InputMaybe<PortfolioWhereUniqueInput>;
};

export type TextBlockUpdateInput = {
  coloredHeading?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type TextBlockUpdateManyInlineInput = {
  /** Create and connect multiple TextBlock component instances */
  create?: InputMaybe<Array<TextBlockCreateWithPositionInput>>;
  /** Delete multiple TextBlock documents */
  delete?: InputMaybe<Array<TextBlockWhereUniqueInput>>;
  /** Update multiple TextBlock component instances */
  update?: InputMaybe<Array<TextBlockUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TextBlock component instances */
  upsert?: InputMaybe<Array<TextBlockUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TextBlockUpdateManyInput = {
  coloredHeading?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type TextBlockUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TextBlockUpdateManyInput;
  /** Document search */
  where: TextBlockWhereInput;
};

export type TextBlockUpdateOneInlineInput = {
  /** Create and connect one TextBlock document */
  create?: InputMaybe<TextBlockCreateInput>;
  /** Delete currently connected TextBlock document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single TextBlock document */
  update?: InputMaybe<TextBlockUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TextBlock document */
  upsert?: InputMaybe<TextBlockUpsertWithNestedWhereUniqueInput>;
};

export type TextBlockUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TextBlockUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TextBlockWhereUniqueInput;
};

export type TextBlockUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TextBlockUpdateInput;
  /** Unique document search */
  where: TextBlockWhereUniqueInput;
};

export type TextBlockUpsertInput = {
  /** Create document if it didn't exist */
  create: TextBlockCreateInput;
  /** Update document if it exists */
  update: TextBlockUpdateInput;
};

export type TextBlockUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TextBlockUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TextBlockWhereUniqueInput;
};

export type TextBlockUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TextBlockUpsertInput;
  /** Unique document search */
  where: TextBlockWhereUniqueInput;
};

/** Identifies documents */
export type TextBlockWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TextBlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TextBlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TextBlockWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  coloredHeading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  coloredHeading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  coloredHeading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  coloredHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  coloredHeading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  coloredHeading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  coloredHeading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  coloredHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  coloredHeading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  coloredHeading_starts_with?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References TextBlock record uniquely */
export type TextBlockWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  APP_TOKEN = 'APP_TOKEN',
  MEMBER = 'MEMBER',
  PAT = 'PAT',
  PUBLIC = 'PUBLIC',
  WEBHOOK = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  ISACTIVE_ASC = 'isActive_ASC',
  ISACTIVE_DESC = 'isActive_DESC',
  KIND_ASC = 'kind_ASC',
  KIND_DESC = 'kind_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  PICTURE_ASC = 'picture_ASC',
  PICTURE_DESC = 'picture_DESC',
  PUBLISHEDAT_ASC = 'publishedAt_ASC',
  PUBLISHEDAT_DESC = 'publishedAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  AND = 'AND',
  NOT = 'NOT',
  OR = 'OR',
  CONTAINS = 'contains',
  CONTAINS_ALL = 'contains_all',
  CONTAINS_NONE = 'contains_none',
  CONTAINS_SOME = 'contains_some',
  ENDS_WITH = 'ends_with',
  EQ = 'eq',
  EQ_NOT = 'eq_not',
  GT = 'gt',
  GTE = 'gte',
  IN = 'in',
  JSON_PATH_EXISTS = 'json_path_exists',
  JSON_VALUE_RECURSIVE = 'json_value_recursive',
  LT = 'lt',
  LTE = 'lte',
  NOT_CONTAINS = 'not_contains',
  NOT_ENDS_WITH = 'not_ends_with',
  NOT_IN = 'not_in',
  NOT_STARTS_WITH = 'not_starts_with',
  RELATIONAL_EVERY = 'relational_every',
  RELATIONAL_NONE = 'relational_none',
  RELATIONAL_SINGLE = 'relational_single',
  RELATIONAL_SOME = 'relational_some',
  SEARCH = 'search',
  STARTS_WITH = 'starts_with',
  UNION_EMPTY = 'union_empty',
  UNION_EVERY = 'union_every',
  UNION_NONE = 'union_none',
  UNION_SINGLE = 'union_single',
  UNION_SOME = 'union_some'
}

export enum _MutationInputFieldKind {
  ENUM = 'enum',
  RELATION = 'relation',
  RICHTEXT = 'richText',
  RICHTEXTWITHEMBEDS = 'richTextWithEmbeds',
  SCALAR = 'scalar',
  UNION = 'union',
  VIRTUAL = 'virtual'
}

export enum _MutationKind {
  CREATE = 'create',
  DELETE = 'delete',
  DELETEMANY = 'deleteMany',
  PUBLISH = 'publish',
  PUBLISHMANY = 'publishMany',
  SCHEDULEPUBLISH = 'schedulePublish',
  SCHEDULEUNPUBLISH = 'scheduleUnpublish',
  UNPUBLISH = 'unpublish',
  UNPUBLISHMANY = 'unpublishMany',
  UPDATE = 'update',
  UPDATEMANY = 'updateMany',
  UPSERT = 'upsert'
}

export enum _OrderDirection {
  ASC = 'asc',
  DESC = 'desc'
}

export enum _RelationInputCardinality {
  MANY = 'many',
  ONE = 'one'
}

export enum _RelationInputKind {
  CREATE = 'create',
  UPDATE = 'update'
}

export enum _RelationKind {
  REGULAR = 'regular',
  UNION = 'union'
}

export enum _SystemDateTimeFieldVariation {
  BASE = 'base',
  COMBINED = 'combined',
  LOCALIZATION = 'localization'
}

export type GetAboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutPageQuery = { aboutPage?: { id: string, processTitle?: string | null, contactSectionTitle?: string | null, pageHero?: { mainHeading?: string | null, showcaseImage?: { url: string } | null, introSubheading?: { html: string } | null } | null, servicesList: Array<{ title?: string | null, portfolioCategory?: { id: string, name: string } | null }>, myProcessSection: Array<{ id: string, name: string, icon?: { url: string, fileName: string } | null, content?: { html: string } | null }>, pageContactSection: Array<{ id: string, title: string, link?: string | null, isExternal?: boolean | null, file?: { fileName: string, url: string } | null, icon?: { url: string, fileName: string } | null }> } | null };

export type AboutPageMainFieldsFragment = { id: string, processTitle?: string | null, contactSectionTitle?: string | null, pageHero?: { mainHeading?: string | null, showcaseImage?: { url: string } | null, introSubheading?: { html: string } | null } | null, servicesList: Array<{ title?: string | null, portfolioCategory?: { id: string, name: string } | null }>, myProcessSection: Array<{ id: string, name: string, icon?: { url: string, fileName: string } | null, content?: { html: string } | null }>, pageContactSection: Array<{ id: string, title: string, link?: string | null, isExternal?: boolean | null, file?: { fileName: string, url: string } | null, icon?: { url: string, fileName: string } | null }> };

export type GetContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactPageQuery = { contactPage?: { id: string, contactMainHeading?: string | null, enableForm?: boolean | null, title: string, contactLinks: Array<{ id: string, emailLink?: string | null, isExternal?: boolean | null, link?: string | null, title: string, file?: { url: string } | null }>, subheading?: { html: string } | null } | null };

export type ContactPageMainFieldsFragment = { id: string, contactMainHeading?: string | null, enableForm?: boolean | null, title: string, contactLinks: Array<{ id: string, emailLink?: string | null, isExternal?: boolean | null, link?: string | null, title: string, file?: { url: string } | null }>, subheading?: { html: string } | null };

export type GetHomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomepageQuery = { homepage?: { slug?: string | null, title?: string | null, variant: HomepageVariant, bannerImage?: { url: string } | null, general?: { mainHeading?: string | null, introSubheading?: { html: string } | null, showcaseImage?: { url: string, fileName: string } | null } | null } | null };

export type HomepageFragmentFieldsFragment = { slug?: string | null, title?: string | null, variant: HomepageVariant, bannerImage?: { url: string } | null, general?: { mainHeading?: string | null, introSubheading?: { html: string } | null, showcaseImage?: { url: string, fileName: string } | null } | null };

export type GetPortoflioQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPortoflioQuery = { portfolio?: { id: string, shortHeading?: string | null, introduction?: string | null, title?: string | null, slug?: string | null, year?: string | null, overview?: { skillsMethods?: string | null, role?: string | null, output?: string | null } | null, showcaseImage?: { url: string } | null, pageContent: Array<{ id: string, enable?: boolean | null } | { id: string, image?: { url: string, fileName: string } | null } | { id: string, author?: string | null, quoteText?: { html: string } | null } | { id: string, coloredHeading?: string | null, heading?: string | null, content?: { html: string } | null }>, portfolioCategories: Array<{ name: string }> } | null };

export type PortfolioPageFragmentFieldsFragment = { id: string, shortHeading?: string | null, introduction?: string | null, title?: string | null, slug?: string | null, year?: string | null, overview?: { skillsMethods?: string | null, role?: string | null, output?: string | null } | null, showcaseImage?: { url: string } | null, pageContent: Array<{ id: string, enable?: boolean | null } | { id: string, image?: { url: string, fileName: string } | null } | { id: string, author?: string | null, quoteText?: { html: string } | null } | { id: string, coloredHeading?: string | null, heading?: string | null, content?: { html: string } | null }>, portfolioCategories: Array<{ name: string }> };

export type GetAllPortfoliosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPortfoliosQuery = { portfolios: Array<{ id: string, slug?: string | null, title?: string | null, updatedAt: any, year?: string | null, shortHeading?: string | null, showcaseImage?: { id: string, fileName: string, url: string } | null, portfolioCategories: Array<{ id: string, name: string }> }> };

export type GetPortfolioCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPortfolioCategoriesQuery = { portfolioCategories: Array<{ id: string, name: string }> };

export type GetPortfoliosByCategoryNameQueryVariables = Exact<{
  category: Scalars['String'];
}>;


export type GetPortfoliosByCategoryNameQuery = { portfolios: Array<{ title?: string | null, slug?: string | null, portfolioCategories: Array<{ name: string }> }> };

export type PortfolioFragmentFieldsFragment = { id: string, slug?: string | null, title?: string | null, updatedAt: any, year?: string | null, shortHeading?: string | null, showcaseImage?: { id: string, fileName: string, url: string } | null, portfolioCategories: Array<{ id: string, name: string }> };

export type GetAllServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllServicesQuery = { services: Array<{ name?: string | null, portfolioCategory?: { id: string, name: string } | null }> };

export type ServicesFragmentFieldsFragment = { name?: string | null, portfolioCategory?: { id: string, name: string } | null };

export const AboutPageMainFieldsFragmentDoc = gql`
    fragment AboutPageMainFields on AboutPage {
  id
  pageHero {
    mainHeading
    showcaseImage {
      url
    }
    introSubheading {
      html
    }
  }
  servicesList(first: 12) {
    title
    portfolioCategory {
      id
      name
    }
  }
  processTitle
  myProcessSection(first: 9) {
    id
    name
    icon {
      url
      fileName
    }
    content {
      html
    }
  }
  contactSectionTitle
  pageContactSection {
    id
    title
    link
    file {
      fileName
      url
    }
    icon {
      url
      fileName
    }
    isExternal
  }
}
    `;
export const ContactPageMainFieldsFragmentDoc = gql`
    fragment ContactPageMainFields on ContactPage {
  id
  contactMainHeading
  contactLinks {
    id
    emailLink
    isExternal
    link
    title
    file {
      url
    }
  }
  enableForm
  title
  subheading {
    html
  }
}
    `;
export const HomepageFragmentFieldsFragmentDoc = gql`
    fragment HomepageFragmentFields on Homepage {
  slug
  title
  variant
  bannerImage {
    url
  }
  general {
    mainHeading
    introSubheading {
      html
    }
    showcaseImage {
      url
      fileName
    }
  }
}
    `;
export const PortfolioPageFragmentFieldsFragmentDoc = gql`
    fragment PortfolioPageFragmentFields on Portfolio {
  id
  overview {
    skillsMethods
    role
    output
  }
  shortHeading
  showcaseImage {
    url
  }
  introduction
  pageContent(first: 50) {
    ... on Divider {
      id
      enable
    }
    ... on FullWidthImage {
      id
      image {
        url
        fileName
      }
    }
    ... on Quote {
      id
      quoteText {
        html
      }
      author
    }
    ... on TextBlock {
      id
      coloredHeading
      heading
      content {
        html
      }
    }
  }
  portfolioCategories {
    name
  }
  title
  slug
  year
}
    `;
export const PortfolioFragmentFieldsFragmentDoc = gql`
    fragment PortfolioFragmentFields on Portfolio {
  id
  slug
  title
  updatedAt
  year
  shortHeading
  showcaseImage {
    id
    fileName
    url
  }
  portfolioCategories {
    id
    name
  }
}
    `;
export const ServicesFragmentFieldsFragmentDoc = gql`
    fragment ServicesFragmentFields on Service {
  name
  portfolioCategory {
    id
    name
  }
}
    `;
export const GetAboutPageDocument = gql`
    query GetAboutPage {
  aboutPage(where: {title: "About me"}) {
    ...AboutPageMainFields
  }
}
    ${AboutPageMainFieldsFragmentDoc}`;

/**
 * __useGetAboutPageQuery__
 *
 * To run a query within a React component, call `useGetAboutPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAboutPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAboutPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAboutPageQuery(baseOptions?: Apollo.QueryHookOptions<GetAboutPageQuery, GetAboutPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAboutPageQuery, GetAboutPageQueryVariables>(GetAboutPageDocument, options);
      }
export function useGetAboutPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAboutPageQuery, GetAboutPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAboutPageQuery, GetAboutPageQueryVariables>(GetAboutPageDocument, options);
        }
export type GetAboutPageQueryHookResult = ReturnType<typeof useGetAboutPageQuery>;
export type GetAboutPageLazyQueryHookResult = ReturnType<typeof useGetAboutPageLazyQuery>;
export type GetAboutPageQueryResult = Apollo.QueryResult<GetAboutPageQuery, GetAboutPageQueryVariables>;
export const GetContactPageDocument = gql`
    query GetContactPage {
  contactPage(where: {title: "Contact"}) {
    ...ContactPageMainFields
  }
}
    ${ContactPageMainFieldsFragmentDoc}`;

/**
 * __useGetContactPageQuery__
 *
 * To run a query within a React component, call `useGetContactPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContactPageQuery(baseOptions?: Apollo.QueryHookOptions<GetContactPageQuery, GetContactPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactPageQuery, GetContactPageQueryVariables>(GetContactPageDocument, options);
      }
export function useGetContactPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactPageQuery, GetContactPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactPageQuery, GetContactPageQueryVariables>(GetContactPageDocument, options);
        }
export type GetContactPageQueryHookResult = ReturnType<typeof useGetContactPageQuery>;
export type GetContactPageLazyQueryHookResult = ReturnType<typeof useGetContactPageLazyQuery>;
export type GetContactPageQueryResult = Apollo.QueryResult<GetContactPageQuery, GetContactPageQueryVariables>;
export const GetHomepageDocument = gql`
    query GetHomepage {
  homepage(where: {title: "Homepage"}, stage: PUBLISHED) {
    ...HomepageFragmentFields
  }
}
    ${HomepageFragmentFieldsFragmentDoc}`;

/**
 * __useGetHomepageQuery__
 *
 * To run a query within a React component, call `useGetHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomepageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomepageQuery(baseOptions?: Apollo.QueryHookOptions<GetHomepageQuery, GetHomepageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomepageQuery, GetHomepageQueryVariables>(GetHomepageDocument, options);
      }
export function useGetHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomepageQuery, GetHomepageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomepageQuery, GetHomepageQueryVariables>(GetHomepageDocument, options);
        }
export type GetHomepageQueryHookResult = ReturnType<typeof useGetHomepageQuery>;
export type GetHomepageLazyQueryHookResult = ReturnType<typeof useGetHomepageLazyQuery>;
export type GetHomepageQueryResult = Apollo.QueryResult<GetHomepageQuery, GetHomepageQueryVariables>;
export const GetPortoflioDocument = gql`
    query GetPortoflio($slug: String!) {
  portfolio(where: {slug: $slug}) {
    ...PortfolioPageFragmentFields
  }
}
    ${PortfolioPageFragmentFieldsFragmentDoc}`;

/**
 * __useGetPortoflioQuery__
 *
 * To run a query within a React component, call `useGetPortoflioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortoflioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortoflioQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPortoflioQuery(baseOptions: Apollo.QueryHookOptions<GetPortoflioQuery, GetPortoflioQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPortoflioQuery, GetPortoflioQueryVariables>(GetPortoflioDocument, options);
      }
export function useGetPortoflioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPortoflioQuery, GetPortoflioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPortoflioQuery, GetPortoflioQueryVariables>(GetPortoflioDocument, options);
        }
export type GetPortoflioQueryHookResult = ReturnType<typeof useGetPortoflioQuery>;
export type GetPortoflioLazyQueryHookResult = ReturnType<typeof useGetPortoflioLazyQuery>;
export type GetPortoflioQueryResult = Apollo.QueryResult<GetPortoflioQuery, GetPortoflioQueryVariables>;
export const GetAllPortfoliosDocument = gql`
    query GetAllPortfolios {
  portfolios(orderBy: createdAt_ASC, stage: PUBLISHED) {
    ...PortfolioFragmentFields
  }
}
    ${PortfolioFragmentFieldsFragmentDoc}`;

/**
 * __useGetAllPortfoliosQuery__
 *
 * To run a query within a React component, call `useGetAllPortfoliosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPortfoliosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPortfoliosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPortfoliosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPortfoliosQuery, GetAllPortfoliosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPortfoliosQuery, GetAllPortfoliosQueryVariables>(GetAllPortfoliosDocument, options);
      }
export function useGetAllPortfoliosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPortfoliosQuery, GetAllPortfoliosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPortfoliosQuery, GetAllPortfoliosQueryVariables>(GetAllPortfoliosDocument, options);
        }
export type GetAllPortfoliosQueryHookResult = ReturnType<typeof useGetAllPortfoliosQuery>;
export type GetAllPortfoliosLazyQueryHookResult = ReturnType<typeof useGetAllPortfoliosLazyQuery>;
export type GetAllPortfoliosQueryResult = Apollo.QueryResult<GetAllPortfoliosQuery, GetAllPortfoliosQueryVariables>;
export const GetPortfolioCategoriesDocument = gql`
    query GetPortfolioCategories {
  portfolioCategories(first: 2, stage: PUBLISHED) {
    id
    name
  }
}
    `;

/**
 * __useGetPortfolioCategoriesQuery__
 *
 * To run a query within a React component, call `useGetPortfolioCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortfolioCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortfolioCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPortfolioCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetPortfolioCategoriesQuery, GetPortfolioCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPortfolioCategoriesQuery, GetPortfolioCategoriesQueryVariables>(GetPortfolioCategoriesDocument, options);
      }
export function useGetPortfolioCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPortfolioCategoriesQuery, GetPortfolioCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPortfolioCategoriesQuery, GetPortfolioCategoriesQueryVariables>(GetPortfolioCategoriesDocument, options);
        }
export type GetPortfolioCategoriesQueryHookResult = ReturnType<typeof useGetPortfolioCategoriesQuery>;
export type GetPortfolioCategoriesLazyQueryHookResult = ReturnType<typeof useGetPortfolioCategoriesLazyQuery>;
export type GetPortfolioCategoriesQueryResult = Apollo.QueryResult<GetPortfolioCategoriesQuery, GetPortfolioCategoriesQueryVariables>;
export const GetPortfoliosByCategoryNameDocument = gql`
    query GetPortfoliosByCategoryName($category: String!) {
  portfolios(where: {portfolioCategories_some: {name: $category}}) {
    portfolioCategories {
      name
    }
    title
    slug
  }
}
    `;

/**
 * __useGetPortfoliosByCategoryNameQuery__
 *
 * To run a query within a React component, call `useGetPortfoliosByCategoryNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortfoliosByCategoryNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortfoliosByCategoryNameQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useGetPortfoliosByCategoryNameQuery(baseOptions: Apollo.QueryHookOptions<GetPortfoliosByCategoryNameQuery, GetPortfoliosByCategoryNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPortfoliosByCategoryNameQuery, GetPortfoliosByCategoryNameQueryVariables>(GetPortfoliosByCategoryNameDocument, options);
      }
export function useGetPortfoliosByCategoryNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPortfoliosByCategoryNameQuery, GetPortfoliosByCategoryNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPortfoliosByCategoryNameQuery, GetPortfoliosByCategoryNameQueryVariables>(GetPortfoliosByCategoryNameDocument, options);
        }
export type GetPortfoliosByCategoryNameQueryHookResult = ReturnType<typeof useGetPortfoliosByCategoryNameQuery>;
export type GetPortfoliosByCategoryNameLazyQueryHookResult = ReturnType<typeof useGetPortfoliosByCategoryNameLazyQuery>;
export type GetPortfoliosByCategoryNameQueryResult = Apollo.QueryResult<GetPortfoliosByCategoryNameQuery, GetPortfoliosByCategoryNameQueryVariables>;
export const GetAllServicesDocument = gql`
    query GetAllServices {
  services(first: 20, orderBy: createdAt_ASC, stage: PUBLISHED) {
    ...ServicesFragmentFields
  }
}
    ${ServicesFragmentFieldsFragmentDoc}`;

/**
 * __useGetAllServicesQuery__
 *
 * To run a query within a React component, call `useGetAllServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllServicesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllServicesQuery, GetAllServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllServicesQuery, GetAllServicesQueryVariables>(GetAllServicesDocument, options);
      }
export function useGetAllServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllServicesQuery, GetAllServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllServicesQuery, GetAllServicesQueryVariables>(GetAllServicesDocument, options);
        }
export type GetAllServicesQueryHookResult = ReturnType<typeof useGetAllServicesQuery>;
export type GetAllServicesLazyQueryHookResult = ReturnType<typeof useGetAllServicesLazyQuery>;
export type GetAllServicesQueryResult = Apollo.QueryResult<GetAllServicesQuery, GetAllServicesQueryVariables>;
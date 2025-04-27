
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Chapter
 * 
 */
export type Chapter = $Result.DefaultSelection<Prisma.$ChapterPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>
/**
 * Model WrittenAnswer
 * 
 */
export type WrittenAnswer = $Result.DefaultSelection<Prisma.$WrittenAnswerPayload>
/**
 * Model UserCourseProgress
 * 
 */
export type UserCourseProgress = $Result.DefaultSelection<Prisma.$UserCourseProgressPayload>
/**
 * Model UserChapterProgress
 * 
 */
export type UserChapterProgress = $Result.DefaultSelection<Prisma.$UserChapterProgressPayload>
/**
 * Model UserQuizAttempt
 * 
 */
export type UserQuizAttempt = $Result.DefaultSelection<Prisma.$UserQuizAttemptPayload>
/**
 * Model UserResponse
 * 
 */
export type UserResponse = $Result.DefaultSelection<Prisma.$UserResponsePayload>
/**
 * Model CoursePdf
 * 
 */
export type CoursePdf = $Result.DefaultSelection<Prisma.$CoursePdfPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const QuestionType: {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  SINGLE_CHOICE: 'SINGLE_CHOICE',
  TRUE_FALSE: 'TRUE_FALSE',
  WRITTEN: 'WRITTEN'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]

}

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.writtenAnswer`: Exposes CRUD operations for the **WrittenAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WrittenAnswers
    * const writtenAnswers = await prisma.writtenAnswer.findMany()
    * ```
    */
  get writtenAnswer(): Prisma.WrittenAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCourseProgress`: Exposes CRUD operations for the **UserCourseProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCourseProgresses
    * const userCourseProgresses = await prisma.userCourseProgress.findMany()
    * ```
    */
  get userCourseProgress(): Prisma.UserCourseProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userChapterProgress`: Exposes CRUD operations for the **UserChapterProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserChapterProgresses
    * const userChapterProgresses = await prisma.userChapterProgress.findMany()
    * ```
    */
  get userChapterProgress(): Prisma.UserChapterProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userQuizAttempt`: Exposes CRUD operations for the **UserQuizAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuizAttempts
    * const userQuizAttempts = await prisma.userQuizAttempt.findMany()
    * ```
    */
  get userQuizAttempt(): Prisma.UserQuizAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userResponse`: Exposes CRUD operations for the **UserResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserResponses
    * const userResponses = await prisma.userResponse.findMany()
    * ```
    */
  get userResponse(): Prisma.UserResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coursePdf`: Exposes CRUD operations for the **CoursePdf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoursePdfs
    * const coursePdfs = await prisma.coursePdf.findMany()
    * ```
    */
  get coursePdf(): Prisma.CoursePdfDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Course: 'Course',
    Chapter: 'Chapter',
    Quiz: 'Quiz',
    Question: 'Question',
    Option: 'Option',
    WrittenAnswer: 'WrittenAnswer',
    UserCourseProgress: 'UserCourseProgress',
    UserChapterProgress: 'UserChapterProgress',
    UserQuizAttempt: 'UserQuizAttempt',
    UserResponse: 'UserResponse',
    CoursePdf: 'CoursePdf'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "course" | "chapter" | "quiz" | "question" | "option" | "writtenAnswer" | "userCourseProgress" | "userChapterProgress" | "userQuizAttempt" | "userResponse" | "coursePdf"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Chapter: {
        payload: Prisma.$ChapterPayload<ExtArgs>
        fields: Prisma.ChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findFirst: {
            args: Prisma.ChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          findMany: {
            args: Prisma.ChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>[]
          }
          create: {
            args: Prisma.ChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          createMany: {
            args: Prisma.ChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          update: {
            args: Prisma.ChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          deleteMany: {
            args: Prisma.ChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.ChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      WrittenAnswer: {
        payload: Prisma.$WrittenAnswerPayload<ExtArgs>
        fields: Prisma.WrittenAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WrittenAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WrittenAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenAnswerPayload>
          }
          findFirst: {
            args: Prisma.WrittenAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WrittenAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenAnswerPayload>
          }
          findMany: {
            args: Prisma.WrittenAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenAnswerPayload>[]
          }
          create: {
            args: Prisma.WrittenAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenAnswerPayload>
          }
          createMany: {
            args: Prisma.WrittenAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WrittenAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenAnswerPayload>
          }
          update: {
            args: Prisma.WrittenAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenAnswerPayload>
          }
          deleteMany: {
            args: Prisma.WrittenAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WrittenAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WrittenAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenAnswerPayload>
          }
          aggregate: {
            args: Prisma.WrittenAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWrittenAnswer>
          }
          groupBy: {
            args: Prisma.WrittenAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WrittenAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WrittenAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<WrittenAnswerCountAggregateOutputType> | number
          }
        }
      }
      UserCourseProgress: {
        payload: Prisma.$UserCourseProgressPayload<ExtArgs>
        fields: Prisma.UserCourseProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCourseProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCourseProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          findFirst: {
            args: Prisma.UserCourseProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCourseProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          findMany: {
            args: Prisma.UserCourseProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>[]
          }
          create: {
            args: Prisma.UserCourseProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          createMany: {
            args: Prisma.UserCourseProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserCourseProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          update: {
            args: Prisma.UserCourseProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserCourseProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCourseProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCourseProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCourseProgressPayload>
          }
          aggregate: {
            args: Prisma.UserCourseProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCourseProgress>
          }
          groupBy: {
            args: Prisma.UserCourseProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCourseProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCourseProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserCourseProgressCountAggregateOutputType> | number
          }
        }
      }
      UserChapterProgress: {
        payload: Prisma.$UserChapterProgressPayload<ExtArgs>
        fields: Prisma.UserChapterProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserChapterProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChapterProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserChapterProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChapterProgressPayload>
          }
          findFirst: {
            args: Prisma.UserChapterProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChapterProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserChapterProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChapterProgressPayload>
          }
          findMany: {
            args: Prisma.UserChapterProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChapterProgressPayload>[]
          }
          create: {
            args: Prisma.UserChapterProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChapterProgressPayload>
          }
          createMany: {
            args: Prisma.UserChapterProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserChapterProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChapterProgressPayload>
          }
          update: {
            args: Prisma.UserChapterProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChapterProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserChapterProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserChapterProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserChapterProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChapterProgressPayload>
          }
          aggregate: {
            args: Prisma.UserChapterProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserChapterProgress>
          }
          groupBy: {
            args: Prisma.UserChapterProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserChapterProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserChapterProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserChapterProgressCountAggregateOutputType> | number
          }
        }
      }
      UserQuizAttempt: {
        payload: Prisma.$UserQuizAttemptPayload<ExtArgs>
        fields: Prisma.UserQuizAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuizAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuizAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>
          }
          findFirst: {
            args: Prisma.UserQuizAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuizAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>
          }
          findMany: {
            args: Prisma.UserQuizAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>[]
          }
          create: {
            args: Prisma.UserQuizAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>
          }
          createMany: {
            args: Prisma.UserQuizAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserQuizAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>
          }
          update: {
            args: Prisma.UserQuizAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>
          }
          deleteMany: {
            args: Prisma.UserQuizAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuizAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserQuizAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuizAttemptPayload>
          }
          aggregate: {
            args: Prisma.UserQuizAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserQuizAttempt>
          }
          groupBy: {
            args: Prisma.UserQuizAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserQuizAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuizAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<UserQuizAttemptCountAggregateOutputType> | number
          }
        }
      }
      UserResponse: {
        payload: Prisma.$UserResponsePayload<ExtArgs>
        fields: Prisma.UserResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>
          }
          findFirst: {
            args: Prisma.UserResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>
          }
          findMany: {
            args: Prisma.UserResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>[]
          }
          create: {
            args: Prisma.UserResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>
          }
          createMany: {
            args: Prisma.UserResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>
          }
          update: {
            args: Prisma.UserResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>
          }
          deleteMany: {
            args: Prisma.UserResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>
          }
          aggregate: {
            args: Prisma.UserResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserResponse>
          }
          groupBy: {
            args: Prisma.UserResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserResponseCountArgs<ExtArgs>
            result: $Utils.Optional<UserResponseCountAggregateOutputType> | number
          }
        }
      }
      CoursePdf: {
        payload: Prisma.$CoursePdfPayload<ExtArgs>
        fields: Prisma.CoursePdfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursePdfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePdfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursePdfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePdfPayload>
          }
          findFirst: {
            args: Prisma.CoursePdfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePdfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursePdfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePdfPayload>
          }
          findMany: {
            args: Prisma.CoursePdfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePdfPayload>[]
          }
          create: {
            args: Prisma.CoursePdfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePdfPayload>
          }
          createMany: {
            args: Prisma.CoursePdfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CoursePdfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePdfPayload>
          }
          update: {
            args: Prisma.CoursePdfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePdfPayload>
          }
          deleteMany: {
            args: Prisma.CoursePdfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursePdfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoursePdfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePdfPayload>
          }
          aggregate: {
            args: Prisma.CoursePdfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoursePdf>
          }
          groupBy: {
            args: Prisma.CoursePdfGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursePdfGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursePdfCountArgs<ExtArgs>
            result: $Utils.Optional<CoursePdfCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    course?: CourseOmit
    chapter?: ChapterOmit
    quiz?: QuizOmit
    question?: QuestionOmit
    option?: OptionOmit
    writtenAnswer?: WrittenAnswerOmit
    userCourseProgress?: UserCourseProgressOmit
    userChapterProgress?: UserChapterProgressOmit
    userQuizAttempt?: UserQuizAttemptOmit
    userResponse?: UserResponseOmit
    coursePdf?: CoursePdfOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    courses: number
    course_pdfs: number
    user_course_progress: number
    user_chapter_progress: number
    user_quiz_attempts: number
    user_responses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | UserCountOutputTypeCountCoursesArgs
    course_pdfs?: boolean | UserCountOutputTypeCountCourse_pdfsArgs
    user_course_progress?: boolean | UserCountOutputTypeCountUser_course_progressArgs
    user_chapter_progress?: boolean | UserCountOutputTypeCountUser_chapter_progressArgs
    user_quiz_attempts?: boolean | UserCountOutputTypeCountUser_quiz_attemptsArgs
    user_responses?: boolean | UserCountOutputTypeCountUser_responsesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourse_pdfsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePdfWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_course_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_chapter_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChapterProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_quiz_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuizAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResponseWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    chapters: number
    course_pdfs: number
    user_course_progress: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | CourseCountOutputTypeCountChaptersArgs
    course_pdfs?: boolean | CourseCountOutputTypeCountCourse_pdfsArgs
    user_course_progress?: boolean | CourseCountOutputTypeCountUser_course_progressArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourse_pdfsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePdfWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountUser_course_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseProgressWhereInput
  }


  /**
   * Count Type ChapterCountOutputType
   */

  export type ChapterCountOutputType = {
    quizzes: number
    user_chapter_progress: number
  }

  export type ChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | ChapterCountOutputTypeCountQuizzesArgs
    user_chapter_progress?: boolean | ChapterCountOutputTypeCountUser_chapter_progressArgs
  }

  // Custom InputTypes
  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: ChapterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountUser_chapter_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChapterProgressWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    questions: number
    user_quiz_attempts: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizCountOutputTypeCountQuestionsArgs
    user_quiz_attempts?: boolean | QuizCountOutputTypeCountUser_quiz_attemptsArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountUser_quiz_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuizAttemptWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    options: number
    user_responses: number
    written_answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuestionCountOutputTypeCountOptionsArgs
    user_responses?: boolean | QuestionCountOutputTypeCountUser_responsesArgs
    written_answers?: boolean | QuestionCountOutputTypeCountWritten_answersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountUser_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResponseWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountWritten_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WrittenAnswerWhereInput
  }


  /**
   * Count Type OptionCountOutputType
   */

  export type OptionCountOutputType = {
    user_responses: number
  }

  export type OptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_responses?: boolean | OptionCountOutputTypeCountUser_responsesArgs
  }

  // Custom InputTypes
  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCountOutputType
     */
    select?: OptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeCountUser_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResponseWhereInput
  }


  /**
   * Count Type UserQuizAttemptCountOutputType
   */

  export type UserQuizAttemptCountOutputType = {
    user_responses: number
  }

  export type UserQuizAttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_responses?: boolean | UserQuizAttemptCountOutputTypeCountUser_responsesArgs
  }

  // Custom InputTypes
  /**
   * UserQuizAttemptCountOutputType without action
   */
  export type UserQuizAttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttemptCountOutputType
     */
    select?: UserQuizAttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserQuizAttemptCountOutputType without action
   */
  export type UserQuizAttemptCountOutputTypeCountUser_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    fullname: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    fullname: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    password: number
    created_at: number
    updated_at: number
    deleted: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    deleted?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    deleted?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    deleted?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    fullname: string
    email: string
    password: string
    created_at: Date
    updated_at: Date
    deleted: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted?: boolean
    courses?: boolean | User$coursesArgs<ExtArgs>
    course_pdfs?: boolean | User$course_pdfsArgs<ExtArgs>
    user_course_progress?: boolean | User$user_course_progressArgs<ExtArgs>
    user_chapter_progress?: boolean | User$user_chapter_progressArgs<ExtArgs>
    user_quiz_attempts?: boolean | User$user_quiz_attemptsArgs<ExtArgs>
    user_responses?: boolean | User$user_responsesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "password" | "created_at" | "updated_at" | "deleted", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | User$coursesArgs<ExtArgs>
    course_pdfs?: boolean | User$course_pdfsArgs<ExtArgs>
    user_course_progress?: boolean | User$user_course_progressArgs<ExtArgs>
    user_chapter_progress?: boolean | User$user_chapter_progressArgs<ExtArgs>
    user_quiz_attempts?: boolean | User$user_quiz_attemptsArgs<ExtArgs>
    user_responses?: boolean | User$user_responsesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
      course_pdfs: Prisma.$CoursePdfPayload<ExtArgs>[]
      user_course_progress: Prisma.$UserCourseProgressPayload<ExtArgs>[]
      user_chapter_progress: Prisma.$UserChapterProgressPayload<ExtArgs>[]
      user_quiz_attempts: Prisma.$UserQuizAttemptPayload<ExtArgs>[]
      user_responses: Prisma.$UserResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      fullname: string
      email: string
      password: string
      created_at: Date
      updated_at: Date
      deleted: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends User$coursesArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course_pdfs<T extends User$course_pdfsArgs<ExtArgs> = {}>(args?: Subset<T, User$course_pdfsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_course_progress<T extends User$user_course_progressArgs<ExtArgs> = {}>(args?: Subset<T, User$user_course_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_chapter_progress<T extends User$user_chapter_progressArgs<ExtArgs> = {}>(args?: Subset<T, User$user_chapter_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChapterProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_quiz_attempts<T extends User$user_quiz_attemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$user_quiz_attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_responses<T extends User$user_responsesArgs<ExtArgs> = {}>(args?: Subset<T, User$user_responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly deleted: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.courses
   */
  export type User$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.course_pdfs
   */
  export type User$course_pdfsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePdf
     */
    select?: CoursePdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePdf
     */
    omit?: CoursePdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePdfInclude<ExtArgs> | null
    where?: CoursePdfWhereInput
    orderBy?: CoursePdfOrderByWithRelationInput | CoursePdfOrderByWithRelationInput[]
    cursor?: CoursePdfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursePdfScalarFieldEnum | CoursePdfScalarFieldEnum[]
  }

  /**
   * User.user_course_progress
   */
  export type User$user_course_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    where?: UserCourseProgressWhereInput
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    cursor?: UserCourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * User.user_chapter_progress
   */
  export type User$user_chapter_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChapterProgress
     */
    select?: UserChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChapterProgress
     */
    omit?: UserChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChapterProgressInclude<ExtArgs> | null
    where?: UserChapterProgressWhereInput
    orderBy?: UserChapterProgressOrderByWithRelationInput | UserChapterProgressOrderByWithRelationInput[]
    cursor?: UserChapterProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserChapterProgressScalarFieldEnum | UserChapterProgressScalarFieldEnum[]
  }

  /**
   * User.user_quiz_attempts
   */
  export type User$user_quiz_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    where?: UserQuizAttemptWhereInput
    orderBy?: UserQuizAttemptOrderByWithRelationInput | UserQuizAttemptOrderByWithRelationInput[]
    cursor?: UserQuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuizAttemptScalarFieldEnum | UserQuizAttemptScalarFieldEnum[]
  }

  /**
   * User.user_responses
   */
  export type User$user_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    where?: UserResponseWhereInput
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    cursor?: UserResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type CourseMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    title: string | null
    youtube_url: string | null
    created_at: Date | null
    completed_at: Date | null
    updated_at: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    title: string | null
    youtube_url: string | null
    created_at: Date | null
    completed_at: Date | null
    updated_at: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    youtube_url: number
    created_at: number
    completed_at: number
    updated_at: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    youtube_url?: true
    created_at?: true
    completed_at?: true
    updated_at?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    youtube_url?: true
    created_at?: true
    completed_at?: true
    updated_at?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    youtube_url?: true
    created_at?: true
    completed_at?: true
    updated_at?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: bigint
    user_id: bigint
    title: string
    youtube_url: string
    created_at: Date
    completed_at: Date | null
    updated_at: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    youtube_url?: boolean
    created_at?: boolean
    completed_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapters?: boolean | Course$chaptersArgs<ExtArgs>
    course_pdfs?: boolean | Course$course_pdfsArgs<ExtArgs>
    user_course_progress?: boolean | Course$user_course_progressArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>



  export type CourseSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    youtube_url?: boolean
    created_at?: boolean
    completed_at?: boolean
    updated_at?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "youtube_url" | "created_at" | "completed_at" | "updated_at", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapters?: boolean | Course$chaptersArgs<ExtArgs>
    course_pdfs?: boolean | Course$course_pdfsArgs<ExtArgs>
    user_course_progress?: boolean | Course$user_course_progressArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chapters: Prisma.$ChapterPayload<ExtArgs>[]
      course_pdfs: Prisma.$CoursePdfPayload<ExtArgs>[]
      user_course_progress: Prisma.$UserCourseProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      title: string
      youtube_url: string
      created_at: Date
      completed_at: Date | null
      updated_at: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapters<T extends Course$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, Course$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course_pdfs<T extends Course$course_pdfsArgs<ExtArgs> = {}>(args?: Subset<T, Course$course_pdfsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_course_progress<T extends Course$user_course_progressArgs<ExtArgs> = {}>(args?: Subset<T, Course$user_course_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'BigInt'>
    readonly user_id: FieldRef<"Course", 'BigInt'>
    readonly title: FieldRef<"Course", 'String'>
    readonly youtube_url: FieldRef<"Course", 'String'>
    readonly created_at: FieldRef<"Course", 'DateTime'>
    readonly completed_at: FieldRef<"Course", 'DateTime'>
    readonly updated_at: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.chapters
   */
  export type Course$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    cursor?: ChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Course.course_pdfs
   */
  export type Course$course_pdfsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePdf
     */
    select?: CoursePdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePdf
     */
    omit?: CoursePdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePdfInclude<ExtArgs> | null
    where?: CoursePdfWhereInput
    orderBy?: CoursePdfOrderByWithRelationInput | CoursePdfOrderByWithRelationInput[]
    cursor?: CoursePdfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursePdfScalarFieldEnum | CoursePdfScalarFieldEnum[]
  }

  /**
   * Course.user_course_progress
   */
  export type Course$user_course_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    where?: UserCourseProgressWhereInput
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    cursor?: UserCourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    id: number | null
    course_id: number | null
    chapter_number: number | null
  }

  export type ChapterSumAggregateOutputType = {
    id: bigint | null
    course_id: bigint | null
    chapter_number: bigint | null
  }

  export type ChapterMinAggregateOutputType = {
    id: bigint | null
    course_id: bigint | null
    title: string | null
    description: string | null
    chapter_number: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: bigint | null
    course_id: bigint | null
    title: string | null
    description: string | null
    chapter_number: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    course_id: number
    title: number
    description: number
    chapter_number: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    id?: true
    course_id?: true
    chapter_number?: true
  }

  export type ChapterSumAggregateInputType = {
    id?: true
    course_id?: true
    chapter_number?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    course_id?: true
    title?: true
    description?: true
    chapter_number?: true
    created_at?: true
    updated_at?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    course_id?: true
    title?: true
    description?: true
    chapter_number?: true
    created_at?: true
    updated_at?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    course_id?: true
    title?: true
    description?: true
    chapter_number?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChapterWhereInput
    orderBy?: ChapterOrderByWithAggregationInput | ChapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: bigint
    course_id: bigint
    title: string
    description: string | null
    chapter_number: bigint
    created_at: Date
    updated_at: Date
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    title?: boolean
    description?: boolean
    chapter_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    quizzes?: boolean | Chapter$quizzesArgs<ExtArgs>
    user_chapter_progress?: boolean | Chapter$user_chapter_progressArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>



  export type ChapterSelectScalar = {
    id?: boolean
    course_id?: boolean
    title?: boolean
    description?: boolean
    chapter_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "course_id" | "title" | "description" | "chapter_number" | "created_at" | "updated_at", ExtArgs["result"]["chapter"]>
  export type ChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    quizzes?: boolean | Chapter$quizzesArgs<ExtArgs>
    user_chapter_progress?: boolean | Chapter$user_chapter_progressArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chapter"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
      user_chapter_progress: Prisma.$UserChapterProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      course_id: bigint
      title: string
      description: string | null
      chapter_number: bigint
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = $Result.GetResult<Prisma.$ChapterPayload, S>

  type ChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface ChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chapter'], meta: { name: 'Chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChapterFindManyArgs>(args?: SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends ChapterCreateArgs>(args: SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChapterCreateManyArgs>(args?: SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends ChapterDeleteArgs>(args: SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChapterUpdateArgs>(args: SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chapter model
   */
  readonly fields: ChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quizzes<T extends Chapter$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_chapter_progress<T extends Chapter$user_chapter_progressArgs<ExtArgs> = {}>(args?: Subset<T, Chapter$user_chapter_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChapterProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chapter model
   */
  interface ChapterFieldRefs {
    readonly id: FieldRef<"Chapter", 'BigInt'>
    readonly course_id: FieldRef<"Chapter", 'BigInt'>
    readonly title: FieldRef<"Chapter", 'String'>
    readonly description: FieldRef<"Chapter", 'String'>
    readonly chapter_number: FieldRef<"Chapter", 'BigInt'>
    readonly created_at: FieldRef<"Chapter", 'DateTime'>
    readonly updated_at: FieldRef<"Chapter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findUniqueOrThrow
   */
  export type ChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findFirstOrThrow
   */
  export type ChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapter to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter, which Chapters to fetch.
     */
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     */
    orderBy?: ChapterOrderByWithRelationInput | ChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     */
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     */
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * Chapter create
   */
  export type ChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a Chapter.
     */
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }

  /**
   * Chapter createMany
   */
  export type ChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: ChapterCreateManyInput | ChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chapter update
   */
  export type ChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a Chapter.
     */
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to update.
     */
    limit?: number
  }

  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }

  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
    /**
     * Filter which Chapter to delete.
     */
    where: ChapterWhereUniqueInput
  }

  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: ChapterWhereInput
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number
  }

  /**
   * Chapter.quizzes
   */
  export type Chapter$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Chapter.user_chapter_progress
   */
  export type Chapter$user_chapter_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChapterProgress
     */
    select?: UserChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChapterProgress
     */
    omit?: UserChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChapterProgressInclude<ExtArgs> | null
    where?: UserChapterProgressWhereInput
    orderBy?: UserChapterProgressOrderByWithRelationInput | UserChapterProgressOrderByWithRelationInput[]
    cursor?: UserChapterProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserChapterProgressScalarFieldEnum | UserChapterProgressScalarFieldEnum[]
  }

  /**
   * Chapter without action
   */
  export type ChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: ChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chapter
     */
    omit?: ChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChapterInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    id: number | null
    chapter_id: number | null
    passing_score: number | null
    time_limit_secs: number | null
  }

  export type QuizSumAggregateOutputType = {
    id: bigint | null
    chapter_id: bigint | null
    passing_score: bigint | null
    time_limit_secs: bigint | null
  }

  export type QuizMinAggregateOutputType = {
    id: bigint | null
    chapter_id: bigint | null
    passing_score: bigint | null
    time_limit_secs: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: bigint | null
    chapter_id: bigint | null
    passing_score: bigint | null
    time_limit_secs: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    chapter_id: number
    passing_score: number
    time_limit_secs: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    id?: true
    chapter_id?: true
    passing_score?: true
    time_limit_secs?: true
  }

  export type QuizSumAggregateInputType = {
    id?: true
    chapter_id?: true
    passing_score?: true
    time_limit_secs?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    chapter_id?: true
    passing_score?: true
    time_limit_secs?: true
    created_at?: true
    updated_at?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    chapter_id?: true
    passing_score?: true
    time_limit_secs?: true
    created_at?: true
    updated_at?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    chapter_id?: true
    passing_score?: true
    time_limit_secs?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: bigint
    chapter_id: bigint
    passing_score: bigint
    time_limit_secs: bigint
    created_at: Date
    updated_at: Date
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chapter_id?: boolean
    passing_score?: boolean
    time_limit_secs?: boolean
    created_at?: boolean
    updated_at?: boolean
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    user_quiz_attempts?: boolean | Quiz$user_quiz_attemptsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>



  export type QuizSelectScalar = {
    id?: boolean
    chapter_id?: boolean
    passing_score?: boolean
    time_limit_secs?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chapter_id" | "passing_score" | "time_limit_secs" | "created_at" | "updated_at", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    user_quiz_attempts?: boolean | Quiz$user_quiz_attemptsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      chapter: Prisma.$ChapterPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      user_quiz_attempts: Prisma.$UserQuizAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      chapter_id: bigint
      passing_score: bigint
      time_limit_secs: bigint
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Quiz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_quiz_attempts<T extends Quiz$user_quiz_attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$user_quiz_attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'BigInt'>
    readonly chapter_id: FieldRef<"Quiz", 'BigInt'>
    readonly passing_score: FieldRef<"Quiz", 'BigInt'>
    readonly time_limit_secs: FieldRef<"Quiz", 'BigInt'>
    readonly created_at: FieldRef<"Quiz", 'DateTime'>
    readonly updated_at: FieldRef<"Quiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.questions
   */
  export type Quiz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Quiz.user_quiz_attempts
   */
  export type Quiz$user_quiz_attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    where?: UserQuizAttemptWhereInput
    orderBy?: UserQuizAttemptOrderByWithRelationInput | UserQuizAttemptOrderByWithRelationInput[]
    cursor?: UserQuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuizAttemptScalarFieldEnum | UserQuizAttemptScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    quiz_id: number | null
    points: number | null
    question_number: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: bigint | null
    quiz_id: bigint | null
    points: bigint | null
    question_number: bigint | null
  }

  export type QuestionMinAggregateOutputType = {
    id: bigint | null
    quiz_id: bigint | null
    question_text: string | null
    question_type: $Enums.QuestionType | null
    points: bigint | null
    question_number: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: bigint | null
    quiz_id: bigint | null
    question_text: string | null
    question_type: $Enums.QuestionType | null
    points: bigint | null
    question_number: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    quiz_id: number
    question_text: number
    question_type: number
    points: number
    question_number: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    quiz_id?: true
    points?: true
    question_number?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    quiz_id?: true
    points?: true
    question_number?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    quiz_id?: true
    question_text?: true
    question_type?: true
    points?: true
    question_number?: true
    created_at?: true
    updated_at?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    quiz_id?: true
    question_text?: true
    question_type?: true
    points?: true
    question_number?: true
    created_at?: true
    updated_at?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    quiz_id?: true
    question_text?: true
    question_type?: true
    points?: true
    question_number?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: bigint
    quiz_id: bigint
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint
    question_number: bigint
    created_at: Date
    updated_at: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quiz_id?: boolean
    question_text?: boolean
    question_type?: boolean
    points?: boolean
    question_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    options?: boolean | Question$optionsArgs<ExtArgs>
    user_responses?: boolean | Question$user_responsesArgs<ExtArgs>
    written_answers?: boolean | Question$written_answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    id?: boolean
    quiz_id?: boolean
    question_text?: boolean
    question_type?: boolean
    points?: boolean
    question_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quiz_id" | "question_text" | "question_type" | "points" | "question_number" | "created_at" | "updated_at", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    options?: boolean | Question$optionsArgs<ExtArgs>
    user_responses?: boolean | Question$user_responsesArgs<ExtArgs>
    written_answers?: boolean | Question$written_answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      options: Prisma.$OptionPayload<ExtArgs>[]
      user_responses: Prisma.$UserResponsePayload<ExtArgs>[]
      written_answers: Prisma.$WrittenAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      quiz_id: bigint
      question_text: string
      question_type: $Enums.QuestionType
      points: bigint
      question_number: bigint
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Question$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_responses<T extends Question$user_responsesArgs<ExtArgs> = {}>(args?: Subset<T, Question$user_responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    written_answers<T extends Question$written_answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$written_answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrittenAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'BigInt'>
    readonly quiz_id: FieldRef<"Question", 'BigInt'>
    readonly question_text: FieldRef<"Question", 'String'>
    readonly question_type: FieldRef<"Question", 'QuestionType'>
    readonly points: FieldRef<"Question", 'BigInt'>
    readonly question_number: FieldRef<"Question", 'BigInt'>
    readonly created_at: FieldRef<"Question", 'DateTime'>
    readonly updated_at: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.options
   */
  export type Question$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Question.user_responses
   */
  export type Question$user_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    where?: UserResponseWhereInput
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    cursor?: UserResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * Question.written_answers
   */
  export type Question$written_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenAnswer
     */
    select?: WrittenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenAnswer
     */
    omit?: WrittenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenAnswerInclude<ExtArgs> | null
    where?: WrittenAnswerWhereInput
    orderBy?: WrittenAnswerOrderByWithRelationInput | WrittenAnswerOrderByWithRelationInput[]
    cursor?: WrittenAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WrittenAnswerScalarFieldEnum | WrittenAnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionAvgAggregateOutputType = {
    id: number | null
    question_id: number | null
    options_number: number | null
  }

  export type OptionSumAggregateOutputType = {
    id: bigint | null
    question_id: bigint | null
    options_number: bigint | null
  }

  export type OptionMinAggregateOutputType = {
    id: bigint | null
    question_id: bigint | null
    option_text: string | null
    options_number: bigint | null
    is_correct: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OptionMaxAggregateOutputType = {
    id: bigint | null
    question_id: bigint | null
    option_text: string | null
    options_number: bigint | null
    is_correct: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OptionCountAggregateOutputType = {
    id: number
    question_id: number
    option_text: number
    options_number: number
    is_correct: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OptionAvgAggregateInputType = {
    id?: true
    question_id?: true
    options_number?: true
  }

  export type OptionSumAggregateInputType = {
    id?: true
    question_id?: true
    options_number?: true
  }

  export type OptionMinAggregateInputType = {
    id?: true
    question_id?: true
    option_text?: true
    options_number?: true
    is_correct?: true
    created_at?: true
    updated_at?: true
  }

  export type OptionMaxAggregateInputType = {
    id?: true
    question_id?: true
    option_text?: true
    options_number?: true
    is_correct?: true
    created_at?: true
    updated_at?: true
  }

  export type OptionCountAggregateInputType = {
    id?: true
    question_id?: true
    option_text?: true
    options_number?: true
    is_correct?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _avg?: OptionAvgAggregateInputType
    _sum?: OptionSumAggregateInputType
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    id: bigint
    question_id: bigint
    option_text: string
    options_number: bigint
    is_correct: boolean
    created_at: Date
    updated_at: Date
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    option_text?: boolean
    options_number?: boolean
    is_correct?: boolean
    created_at?: boolean
    updated_at?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user_responses?: boolean | Option$user_responsesArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>



  export type OptionSelectScalar = {
    id?: boolean
    question_id?: boolean
    option_text?: boolean
    options_number?: boolean
    is_correct?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question_id" | "option_text" | "options_number" | "is_correct" | "created_at" | "updated_at", ExtArgs["result"]["option"]>
  export type OptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user_responses?: boolean | Option$user_responsesArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      user_responses: Prisma.$UserResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      question_id: bigint
      option_text: string
      options_number: bigint
      is_correct: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["option"]>
    composites: {}
  }

  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionFindUniqueArgs>(args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Option that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionFindFirstArgs>(args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionWithIdOnly = await prisma.option.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionFindManyArgs>(args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
     */
    create<T extends OptionCreateArgs>(args: SelectSubset<T, OptionCreateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Options.
     * @param {OptionCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionCreateManyArgs>(args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
     */
    delete<T extends OptionDeleteArgs>(args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionUpdateArgs>(args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionDeleteManyArgs>(args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionUpdateManyArgs>(args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
     */
    upsert<T extends OptionUpsertArgs>(args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_responses<T extends Option$user_responsesArgs<ExtArgs> = {}>(args?: Subset<T, Option$user_responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Option model
   */
  interface OptionFieldRefs {
    readonly id: FieldRef<"Option", 'BigInt'>
    readonly question_id: FieldRef<"Option", 'BigInt'>
    readonly option_text: FieldRef<"Option", 'String'>
    readonly options_number: FieldRef<"Option", 'BigInt'>
    readonly is_correct: FieldRef<"Option", 'Boolean'>
    readonly created_at: FieldRef<"Option", 'DateTime'>
    readonly updated_at: FieldRef<"Option", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }

  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }

  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to delete.
     */
    limit?: number
  }

  /**
   * Option.user_responses
   */
  export type Option$user_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    where?: UserResponseWhereInput
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    cursor?: UserResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
  }


  /**
   * Model WrittenAnswer
   */

  export type AggregateWrittenAnswer = {
    _count: WrittenAnswerCountAggregateOutputType | null
    _avg: WrittenAnswerAvgAggregateOutputType | null
    _sum: WrittenAnswerSumAggregateOutputType | null
    _min: WrittenAnswerMinAggregateOutputType | null
    _max: WrittenAnswerMaxAggregateOutputType | null
  }

  export type WrittenAnswerAvgAggregateOutputType = {
    id: number | null
    question_id: number | null
    match_percentage: number | null
  }

  export type WrittenAnswerSumAggregateOutputType = {
    id: bigint | null
    question_id: bigint | null
    match_percentage: number | null
  }

  export type WrittenAnswerMinAggregateOutputType = {
    id: bigint | null
    question_id: bigint | null
    answer: string | null
    match_percentage: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WrittenAnswerMaxAggregateOutputType = {
    id: bigint | null
    question_id: bigint | null
    answer: string | null
    match_percentage: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WrittenAnswerCountAggregateOutputType = {
    id: number
    question_id: number
    answer: number
    match_percentage: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WrittenAnswerAvgAggregateInputType = {
    id?: true
    question_id?: true
    match_percentage?: true
  }

  export type WrittenAnswerSumAggregateInputType = {
    id?: true
    question_id?: true
    match_percentage?: true
  }

  export type WrittenAnswerMinAggregateInputType = {
    id?: true
    question_id?: true
    answer?: true
    match_percentage?: true
    created_at?: true
    updated_at?: true
  }

  export type WrittenAnswerMaxAggregateInputType = {
    id?: true
    question_id?: true
    answer?: true
    match_percentage?: true
    created_at?: true
    updated_at?: true
  }

  export type WrittenAnswerCountAggregateInputType = {
    id?: true
    question_id?: true
    answer?: true
    match_percentage?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WrittenAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WrittenAnswer to aggregate.
     */
    where?: WrittenAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WrittenAnswers to fetch.
     */
    orderBy?: WrittenAnswerOrderByWithRelationInput | WrittenAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WrittenAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WrittenAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WrittenAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WrittenAnswers
    **/
    _count?: true | WrittenAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WrittenAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WrittenAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WrittenAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WrittenAnswerMaxAggregateInputType
  }

  export type GetWrittenAnswerAggregateType<T extends WrittenAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateWrittenAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWrittenAnswer[P]>
      : GetScalarType<T[P], AggregateWrittenAnswer[P]>
  }




  export type WrittenAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WrittenAnswerWhereInput
    orderBy?: WrittenAnswerOrderByWithAggregationInput | WrittenAnswerOrderByWithAggregationInput[]
    by: WrittenAnswerScalarFieldEnum[] | WrittenAnswerScalarFieldEnum
    having?: WrittenAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WrittenAnswerCountAggregateInputType | true
    _avg?: WrittenAnswerAvgAggregateInputType
    _sum?: WrittenAnswerSumAggregateInputType
    _min?: WrittenAnswerMinAggregateInputType
    _max?: WrittenAnswerMaxAggregateInputType
  }

  export type WrittenAnswerGroupByOutputType = {
    id: bigint
    question_id: bigint
    answer: string
    match_percentage: number
    created_at: Date
    updated_at: Date
    _count: WrittenAnswerCountAggregateOutputType | null
    _avg: WrittenAnswerAvgAggregateOutputType | null
    _sum: WrittenAnswerSumAggregateOutputType | null
    _min: WrittenAnswerMinAggregateOutputType | null
    _max: WrittenAnswerMaxAggregateOutputType | null
  }

  type GetWrittenAnswerGroupByPayload<T extends WrittenAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WrittenAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WrittenAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WrittenAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], WrittenAnswerGroupByOutputType[P]>
        }
      >
    >


  export type WrittenAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_id?: boolean
    answer?: boolean
    match_percentage?: boolean
    created_at?: boolean
    updated_at?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["writtenAnswer"]>



  export type WrittenAnswerSelectScalar = {
    id?: boolean
    question_id?: boolean
    answer?: boolean
    match_percentage?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WrittenAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question_id" | "answer" | "match_percentage" | "created_at" | "updated_at", ExtArgs["result"]["writtenAnswer"]>
  export type WrittenAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $WrittenAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WrittenAnswer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      question_id: bigint
      answer: string
      match_percentage: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["writtenAnswer"]>
    composites: {}
  }

  type WrittenAnswerGetPayload<S extends boolean | null | undefined | WrittenAnswerDefaultArgs> = $Result.GetResult<Prisma.$WrittenAnswerPayload, S>

  type WrittenAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WrittenAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WrittenAnswerCountAggregateInputType | true
    }

  export interface WrittenAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WrittenAnswer'], meta: { name: 'WrittenAnswer' } }
    /**
     * Find zero or one WrittenAnswer that matches the filter.
     * @param {WrittenAnswerFindUniqueArgs} args - Arguments to find a WrittenAnswer
     * @example
     * // Get one WrittenAnswer
     * const writtenAnswer = await prisma.writtenAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WrittenAnswerFindUniqueArgs>(args: SelectSubset<T, WrittenAnswerFindUniqueArgs<ExtArgs>>): Prisma__WrittenAnswerClient<$Result.GetResult<Prisma.$WrittenAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WrittenAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WrittenAnswerFindUniqueOrThrowArgs} args - Arguments to find a WrittenAnswer
     * @example
     * // Get one WrittenAnswer
     * const writtenAnswer = await prisma.writtenAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WrittenAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, WrittenAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WrittenAnswerClient<$Result.GetResult<Prisma.$WrittenAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WrittenAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenAnswerFindFirstArgs} args - Arguments to find a WrittenAnswer
     * @example
     * // Get one WrittenAnswer
     * const writtenAnswer = await prisma.writtenAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WrittenAnswerFindFirstArgs>(args?: SelectSubset<T, WrittenAnswerFindFirstArgs<ExtArgs>>): Prisma__WrittenAnswerClient<$Result.GetResult<Prisma.$WrittenAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WrittenAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenAnswerFindFirstOrThrowArgs} args - Arguments to find a WrittenAnswer
     * @example
     * // Get one WrittenAnswer
     * const writtenAnswer = await prisma.writtenAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WrittenAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, WrittenAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WrittenAnswerClient<$Result.GetResult<Prisma.$WrittenAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WrittenAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WrittenAnswers
     * const writtenAnswers = await prisma.writtenAnswer.findMany()
     * 
     * // Get first 10 WrittenAnswers
     * const writtenAnswers = await prisma.writtenAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const writtenAnswerWithIdOnly = await prisma.writtenAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WrittenAnswerFindManyArgs>(args?: SelectSubset<T, WrittenAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrittenAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WrittenAnswer.
     * @param {WrittenAnswerCreateArgs} args - Arguments to create a WrittenAnswer.
     * @example
     * // Create one WrittenAnswer
     * const WrittenAnswer = await prisma.writtenAnswer.create({
     *   data: {
     *     // ... data to create a WrittenAnswer
     *   }
     * })
     * 
     */
    create<T extends WrittenAnswerCreateArgs>(args: SelectSubset<T, WrittenAnswerCreateArgs<ExtArgs>>): Prisma__WrittenAnswerClient<$Result.GetResult<Prisma.$WrittenAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WrittenAnswers.
     * @param {WrittenAnswerCreateManyArgs} args - Arguments to create many WrittenAnswers.
     * @example
     * // Create many WrittenAnswers
     * const writtenAnswer = await prisma.writtenAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WrittenAnswerCreateManyArgs>(args?: SelectSubset<T, WrittenAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WrittenAnswer.
     * @param {WrittenAnswerDeleteArgs} args - Arguments to delete one WrittenAnswer.
     * @example
     * // Delete one WrittenAnswer
     * const WrittenAnswer = await prisma.writtenAnswer.delete({
     *   where: {
     *     // ... filter to delete one WrittenAnswer
     *   }
     * })
     * 
     */
    delete<T extends WrittenAnswerDeleteArgs>(args: SelectSubset<T, WrittenAnswerDeleteArgs<ExtArgs>>): Prisma__WrittenAnswerClient<$Result.GetResult<Prisma.$WrittenAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WrittenAnswer.
     * @param {WrittenAnswerUpdateArgs} args - Arguments to update one WrittenAnswer.
     * @example
     * // Update one WrittenAnswer
     * const writtenAnswer = await prisma.writtenAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WrittenAnswerUpdateArgs>(args: SelectSubset<T, WrittenAnswerUpdateArgs<ExtArgs>>): Prisma__WrittenAnswerClient<$Result.GetResult<Prisma.$WrittenAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WrittenAnswers.
     * @param {WrittenAnswerDeleteManyArgs} args - Arguments to filter WrittenAnswers to delete.
     * @example
     * // Delete a few WrittenAnswers
     * const { count } = await prisma.writtenAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WrittenAnswerDeleteManyArgs>(args?: SelectSubset<T, WrittenAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WrittenAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WrittenAnswers
     * const writtenAnswer = await prisma.writtenAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WrittenAnswerUpdateManyArgs>(args: SelectSubset<T, WrittenAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WrittenAnswer.
     * @param {WrittenAnswerUpsertArgs} args - Arguments to update or create a WrittenAnswer.
     * @example
     * // Update or create a WrittenAnswer
     * const writtenAnswer = await prisma.writtenAnswer.upsert({
     *   create: {
     *     // ... data to create a WrittenAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WrittenAnswer we want to update
     *   }
     * })
     */
    upsert<T extends WrittenAnswerUpsertArgs>(args: SelectSubset<T, WrittenAnswerUpsertArgs<ExtArgs>>): Prisma__WrittenAnswerClient<$Result.GetResult<Prisma.$WrittenAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WrittenAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenAnswerCountArgs} args - Arguments to filter WrittenAnswers to count.
     * @example
     * // Count the number of WrittenAnswers
     * const count = await prisma.writtenAnswer.count({
     *   where: {
     *     // ... the filter for the WrittenAnswers we want to count
     *   }
     * })
    **/
    count<T extends WrittenAnswerCountArgs>(
      args?: Subset<T, WrittenAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WrittenAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WrittenAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WrittenAnswerAggregateArgs>(args: Subset<T, WrittenAnswerAggregateArgs>): Prisma.PrismaPromise<GetWrittenAnswerAggregateType<T>>

    /**
     * Group by WrittenAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WrittenAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WrittenAnswerGroupByArgs['orderBy'] }
        : { orderBy?: WrittenAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WrittenAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWrittenAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WrittenAnswer model
   */
  readonly fields: WrittenAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WrittenAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WrittenAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WrittenAnswer model
   */
  interface WrittenAnswerFieldRefs {
    readonly id: FieldRef<"WrittenAnswer", 'BigInt'>
    readonly question_id: FieldRef<"WrittenAnswer", 'BigInt'>
    readonly answer: FieldRef<"WrittenAnswer", 'String'>
    readonly match_percentage: FieldRef<"WrittenAnswer", 'Float'>
    readonly created_at: FieldRef<"WrittenAnswer", 'DateTime'>
    readonly updated_at: FieldRef<"WrittenAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WrittenAnswer findUnique
   */
  export type WrittenAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenAnswer
     */
    select?: WrittenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenAnswer
     */
    omit?: WrittenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenAnswerInclude<ExtArgs> | null
    /**
     * Filter, which WrittenAnswer to fetch.
     */
    where: WrittenAnswerWhereUniqueInput
  }

  /**
   * WrittenAnswer findUniqueOrThrow
   */
  export type WrittenAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenAnswer
     */
    select?: WrittenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenAnswer
     */
    omit?: WrittenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenAnswerInclude<ExtArgs> | null
    /**
     * Filter, which WrittenAnswer to fetch.
     */
    where: WrittenAnswerWhereUniqueInput
  }

  /**
   * WrittenAnswer findFirst
   */
  export type WrittenAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenAnswer
     */
    select?: WrittenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenAnswer
     */
    omit?: WrittenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenAnswerInclude<ExtArgs> | null
    /**
     * Filter, which WrittenAnswer to fetch.
     */
    where?: WrittenAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WrittenAnswers to fetch.
     */
    orderBy?: WrittenAnswerOrderByWithRelationInput | WrittenAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WrittenAnswers.
     */
    cursor?: WrittenAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WrittenAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WrittenAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WrittenAnswers.
     */
    distinct?: WrittenAnswerScalarFieldEnum | WrittenAnswerScalarFieldEnum[]
  }

  /**
   * WrittenAnswer findFirstOrThrow
   */
  export type WrittenAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenAnswer
     */
    select?: WrittenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenAnswer
     */
    omit?: WrittenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenAnswerInclude<ExtArgs> | null
    /**
     * Filter, which WrittenAnswer to fetch.
     */
    where?: WrittenAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WrittenAnswers to fetch.
     */
    orderBy?: WrittenAnswerOrderByWithRelationInput | WrittenAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WrittenAnswers.
     */
    cursor?: WrittenAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WrittenAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WrittenAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WrittenAnswers.
     */
    distinct?: WrittenAnswerScalarFieldEnum | WrittenAnswerScalarFieldEnum[]
  }

  /**
   * WrittenAnswer findMany
   */
  export type WrittenAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenAnswer
     */
    select?: WrittenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenAnswer
     */
    omit?: WrittenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenAnswerInclude<ExtArgs> | null
    /**
     * Filter, which WrittenAnswers to fetch.
     */
    where?: WrittenAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WrittenAnswers to fetch.
     */
    orderBy?: WrittenAnswerOrderByWithRelationInput | WrittenAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WrittenAnswers.
     */
    cursor?: WrittenAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WrittenAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WrittenAnswers.
     */
    skip?: number
    distinct?: WrittenAnswerScalarFieldEnum | WrittenAnswerScalarFieldEnum[]
  }

  /**
   * WrittenAnswer create
   */
  export type WrittenAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenAnswer
     */
    select?: WrittenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenAnswer
     */
    omit?: WrittenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a WrittenAnswer.
     */
    data: XOR<WrittenAnswerCreateInput, WrittenAnswerUncheckedCreateInput>
  }

  /**
   * WrittenAnswer createMany
   */
  export type WrittenAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WrittenAnswers.
     */
    data: WrittenAnswerCreateManyInput | WrittenAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WrittenAnswer update
   */
  export type WrittenAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenAnswer
     */
    select?: WrittenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenAnswer
     */
    omit?: WrittenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a WrittenAnswer.
     */
    data: XOR<WrittenAnswerUpdateInput, WrittenAnswerUncheckedUpdateInput>
    /**
     * Choose, which WrittenAnswer to update.
     */
    where: WrittenAnswerWhereUniqueInput
  }

  /**
   * WrittenAnswer updateMany
   */
  export type WrittenAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WrittenAnswers.
     */
    data: XOR<WrittenAnswerUpdateManyMutationInput, WrittenAnswerUncheckedUpdateManyInput>
    /**
     * Filter which WrittenAnswers to update
     */
    where?: WrittenAnswerWhereInput
    /**
     * Limit how many WrittenAnswers to update.
     */
    limit?: number
  }

  /**
   * WrittenAnswer upsert
   */
  export type WrittenAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenAnswer
     */
    select?: WrittenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenAnswer
     */
    omit?: WrittenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the WrittenAnswer to update in case it exists.
     */
    where: WrittenAnswerWhereUniqueInput
    /**
     * In case the WrittenAnswer found by the `where` argument doesn't exist, create a new WrittenAnswer with this data.
     */
    create: XOR<WrittenAnswerCreateInput, WrittenAnswerUncheckedCreateInput>
    /**
     * In case the WrittenAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WrittenAnswerUpdateInput, WrittenAnswerUncheckedUpdateInput>
  }

  /**
   * WrittenAnswer delete
   */
  export type WrittenAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenAnswer
     */
    select?: WrittenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenAnswer
     */
    omit?: WrittenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenAnswerInclude<ExtArgs> | null
    /**
     * Filter which WrittenAnswer to delete.
     */
    where: WrittenAnswerWhereUniqueInput
  }

  /**
   * WrittenAnswer deleteMany
   */
  export type WrittenAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WrittenAnswers to delete
     */
    where?: WrittenAnswerWhereInput
    /**
     * Limit how many WrittenAnswers to delete.
     */
    limit?: number
  }

  /**
   * WrittenAnswer without action
   */
  export type WrittenAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenAnswer
     */
    select?: WrittenAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenAnswer
     */
    omit?: WrittenAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenAnswerInclude<ExtArgs> | null
  }


  /**
   * Model UserCourseProgress
   */

  export type AggregateUserCourseProgress = {
    _count: UserCourseProgressCountAggregateOutputType | null
    _avg: UserCourseProgressAvgAggregateOutputType | null
    _sum: UserCourseProgressSumAggregateOutputType | null
    _min: UserCourseProgressMinAggregateOutputType | null
    _max: UserCourseProgressMaxAggregateOutputType | null
  }

  export type UserCourseProgressAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    course_id: number | null
    completion_percentage: number | null
    current_chapter_id: number | null
  }

  export type UserCourseProgressSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    course_id: bigint | null
    completion_percentage: number | null
    current_chapter_id: bigint | null
  }

  export type UserCourseProgressMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    course_id: bigint | null
    completion_percentage: number | null
    is_complete: boolean | null
    current_chapter_id: bigint | null
    completed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCourseProgressMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    course_id: bigint | null
    completion_percentage: number | null
    is_complete: boolean | null
    current_chapter_id: bigint | null
    completed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCourseProgressCountAggregateOutputType = {
    id: number
    user_id: number
    course_id: number
    completion_percentage: number
    is_complete: number
    current_chapter_id: number
    completed_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserCourseProgressAvgAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    completion_percentage?: true
    current_chapter_id?: true
  }

  export type UserCourseProgressSumAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    completion_percentage?: true
    current_chapter_id?: true
  }

  export type UserCourseProgressMinAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    completion_percentage?: true
    is_complete?: true
    current_chapter_id?: true
    completed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCourseProgressMaxAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    completion_percentage?: true
    is_complete?: true
    current_chapter_id?: true
    completed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCourseProgressCountAggregateInputType = {
    id?: true
    user_id?: true
    course_id?: true
    completion_percentage?: true
    is_complete?: true
    current_chapter_id?: true
    completed_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserCourseProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourseProgress to aggregate.
     */
    where?: UserCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseProgresses to fetch.
     */
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCourseProgresses
    **/
    _count?: true | UserCourseProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCourseProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCourseProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCourseProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCourseProgressMaxAggregateInputType
  }

  export type GetUserCourseProgressAggregateType<T extends UserCourseProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCourseProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCourseProgress[P]>
      : GetScalarType<T[P], AggregateUserCourseProgress[P]>
  }




  export type UserCourseProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCourseProgressWhereInput
    orderBy?: UserCourseProgressOrderByWithAggregationInput | UserCourseProgressOrderByWithAggregationInput[]
    by: UserCourseProgressScalarFieldEnum[] | UserCourseProgressScalarFieldEnum
    having?: UserCourseProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCourseProgressCountAggregateInputType | true
    _avg?: UserCourseProgressAvgAggregateInputType
    _sum?: UserCourseProgressSumAggregateInputType
    _min?: UserCourseProgressMinAggregateInputType
    _max?: UserCourseProgressMaxAggregateInputType
  }

  export type UserCourseProgressGroupByOutputType = {
    id: bigint
    user_id: bigint
    course_id: bigint
    completion_percentage: number
    is_complete: boolean
    current_chapter_id: bigint | null
    completed_at: Date | null
    created_at: Date
    updated_at: Date
    _count: UserCourseProgressCountAggregateOutputType | null
    _avg: UserCourseProgressAvgAggregateOutputType | null
    _sum: UserCourseProgressSumAggregateOutputType | null
    _min: UserCourseProgressMinAggregateOutputType | null
    _max: UserCourseProgressMaxAggregateOutputType | null
  }

  type GetUserCourseProgressGroupByPayload<T extends UserCourseProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCourseProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCourseProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCourseProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserCourseProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserCourseProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    completion_percentage?: boolean
    is_complete?: boolean
    current_chapter_id?: boolean
    completed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCourseProgress"]>



  export type UserCourseProgressSelectScalar = {
    id?: boolean
    user_id?: boolean
    course_id?: boolean
    completion_percentage?: boolean
    is_complete?: boolean
    current_chapter_id?: boolean
    completed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserCourseProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "course_id" | "completion_percentage" | "is_complete" | "current_chapter_id" | "completed_at" | "created_at" | "updated_at", ExtArgs["result"]["userCourseProgress"]>
  export type UserCourseProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $UserCourseProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCourseProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      course_id: bigint
      completion_percentage: number
      is_complete: boolean
      current_chapter_id: bigint | null
      completed_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userCourseProgress"]>
    composites: {}
  }

  type UserCourseProgressGetPayload<S extends boolean | null | undefined | UserCourseProgressDefaultArgs> = $Result.GetResult<Prisma.$UserCourseProgressPayload, S>

  type UserCourseProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCourseProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCourseProgressCountAggregateInputType | true
    }

  export interface UserCourseProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCourseProgress'], meta: { name: 'UserCourseProgress' } }
    /**
     * Find zero or one UserCourseProgress that matches the filter.
     * @param {UserCourseProgressFindUniqueArgs} args - Arguments to find a UserCourseProgress
     * @example
     * // Get one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCourseProgressFindUniqueArgs>(args: SelectSubset<T, UserCourseProgressFindUniqueArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCourseProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCourseProgressFindUniqueOrThrowArgs} args - Arguments to find a UserCourseProgress
     * @example
     * // Get one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCourseProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCourseProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourseProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressFindFirstArgs} args - Arguments to find a UserCourseProgress
     * @example
     * // Get one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCourseProgressFindFirstArgs>(args?: SelectSubset<T, UserCourseProgressFindFirstArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCourseProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressFindFirstOrThrowArgs} args - Arguments to find a UserCourseProgress
     * @example
     * // Get one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCourseProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCourseProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCourseProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCourseProgresses
     * const userCourseProgresses = await prisma.userCourseProgress.findMany()
     * 
     * // Get first 10 UserCourseProgresses
     * const userCourseProgresses = await prisma.userCourseProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCourseProgressWithIdOnly = await prisma.userCourseProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCourseProgressFindManyArgs>(args?: SelectSubset<T, UserCourseProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCourseProgress.
     * @param {UserCourseProgressCreateArgs} args - Arguments to create a UserCourseProgress.
     * @example
     * // Create one UserCourseProgress
     * const UserCourseProgress = await prisma.userCourseProgress.create({
     *   data: {
     *     // ... data to create a UserCourseProgress
     *   }
     * })
     * 
     */
    create<T extends UserCourseProgressCreateArgs>(args: SelectSubset<T, UserCourseProgressCreateArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCourseProgresses.
     * @param {UserCourseProgressCreateManyArgs} args - Arguments to create many UserCourseProgresses.
     * @example
     * // Create many UserCourseProgresses
     * const userCourseProgress = await prisma.userCourseProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCourseProgressCreateManyArgs>(args?: SelectSubset<T, UserCourseProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCourseProgress.
     * @param {UserCourseProgressDeleteArgs} args - Arguments to delete one UserCourseProgress.
     * @example
     * // Delete one UserCourseProgress
     * const UserCourseProgress = await prisma.userCourseProgress.delete({
     *   where: {
     *     // ... filter to delete one UserCourseProgress
     *   }
     * })
     * 
     */
    delete<T extends UserCourseProgressDeleteArgs>(args: SelectSubset<T, UserCourseProgressDeleteArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCourseProgress.
     * @param {UserCourseProgressUpdateArgs} args - Arguments to update one UserCourseProgress.
     * @example
     * // Update one UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCourseProgressUpdateArgs>(args: SelectSubset<T, UserCourseProgressUpdateArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCourseProgresses.
     * @param {UserCourseProgressDeleteManyArgs} args - Arguments to filter UserCourseProgresses to delete.
     * @example
     * // Delete a few UserCourseProgresses
     * const { count } = await prisma.userCourseProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCourseProgressDeleteManyArgs>(args?: SelectSubset<T, UserCourseProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCourseProgresses
     * const userCourseProgress = await prisma.userCourseProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCourseProgressUpdateManyArgs>(args: SelectSubset<T, UserCourseProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCourseProgress.
     * @param {UserCourseProgressUpsertArgs} args - Arguments to update or create a UserCourseProgress.
     * @example
     * // Update or create a UserCourseProgress
     * const userCourseProgress = await prisma.userCourseProgress.upsert({
     *   create: {
     *     // ... data to create a UserCourseProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCourseProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserCourseProgressUpsertArgs>(args: SelectSubset<T, UserCourseProgressUpsertArgs<ExtArgs>>): Prisma__UserCourseProgressClient<$Result.GetResult<Prisma.$UserCourseProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressCountArgs} args - Arguments to filter UserCourseProgresses to count.
     * @example
     * // Count the number of UserCourseProgresses
     * const count = await prisma.userCourseProgress.count({
     *   where: {
     *     // ... the filter for the UserCourseProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserCourseProgressCountArgs>(
      args?: Subset<T, UserCourseProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCourseProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCourseProgressAggregateArgs>(args: Subset<T, UserCourseProgressAggregateArgs>): Prisma.PrismaPromise<GetUserCourseProgressAggregateType<T>>

    /**
     * Group by UserCourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCourseProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCourseProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCourseProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserCourseProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCourseProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCourseProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCourseProgress model
   */
  readonly fields: UserCourseProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCourseProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCourseProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCourseProgress model
   */
  interface UserCourseProgressFieldRefs {
    readonly id: FieldRef<"UserCourseProgress", 'BigInt'>
    readonly user_id: FieldRef<"UserCourseProgress", 'BigInt'>
    readonly course_id: FieldRef<"UserCourseProgress", 'BigInt'>
    readonly completion_percentage: FieldRef<"UserCourseProgress", 'Float'>
    readonly is_complete: FieldRef<"UserCourseProgress", 'Boolean'>
    readonly current_chapter_id: FieldRef<"UserCourseProgress", 'BigInt'>
    readonly completed_at: FieldRef<"UserCourseProgress", 'DateTime'>
    readonly created_at: FieldRef<"UserCourseProgress", 'DateTime'>
    readonly updated_at: FieldRef<"UserCourseProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCourseProgress findUnique
   */
  export type UserCourseProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgress to fetch.
     */
    where: UserCourseProgressWhereUniqueInput
  }

  /**
   * UserCourseProgress findUniqueOrThrow
   */
  export type UserCourseProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgress to fetch.
     */
    where: UserCourseProgressWhereUniqueInput
  }

  /**
   * UserCourseProgress findFirst
   */
  export type UserCourseProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgress to fetch.
     */
    where?: UserCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseProgresses to fetch.
     */
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourseProgresses.
     */
    cursor?: UserCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourseProgresses.
     */
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * UserCourseProgress findFirstOrThrow
   */
  export type UserCourseProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgress to fetch.
     */
    where?: UserCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseProgresses to fetch.
     */
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCourseProgresses.
     */
    cursor?: UserCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCourseProgresses.
     */
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * UserCourseProgress findMany
   */
  export type UserCourseProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCourseProgresses to fetch.
     */
    where?: UserCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCourseProgresses to fetch.
     */
    orderBy?: UserCourseProgressOrderByWithRelationInput | UserCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCourseProgresses.
     */
    cursor?: UserCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCourseProgresses.
     */
    skip?: number
    distinct?: UserCourseProgressScalarFieldEnum | UserCourseProgressScalarFieldEnum[]
  }

  /**
   * UserCourseProgress create
   */
  export type UserCourseProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCourseProgress.
     */
    data: XOR<UserCourseProgressCreateInput, UserCourseProgressUncheckedCreateInput>
  }

  /**
   * UserCourseProgress createMany
   */
  export type UserCourseProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCourseProgresses.
     */
    data: UserCourseProgressCreateManyInput | UserCourseProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCourseProgress update
   */
  export type UserCourseProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCourseProgress.
     */
    data: XOR<UserCourseProgressUpdateInput, UserCourseProgressUncheckedUpdateInput>
    /**
     * Choose, which UserCourseProgress to update.
     */
    where: UserCourseProgressWhereUniqueInput
  }

  /**
   * UserCourseProgress updateMany
   */
  export type UserCourseProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCourseProgresses.
     */
    data: XOR<UserCourseProgressUpdateManyMutationInput, UserCourseProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserCourseProgresses to update
     */
    where?: UserCourseProgressWhereInput
    /**
     * Limit how many UserCourseProgresses to update.
     */
    limit?: number
  }

  /**
   * UserCourseProgress upsert
   */
  export type UserCourseProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCourseProgress to update in case it exists.
     */
    where: UserCourseProgressWhereUniqueInput
    /**
     * In case the UserCourseProgress found by the `where` argument doesn't exist, create a new UserCourseProgress with this data.
     */
    create: XOR<UserCourseProgressCreateInput, UserCourseProgressUncheckedCreateInput>
    /**
     * In case the UserCourseProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCourseProgressUpdateInput, UserCourseProgressUncheckedUpdateInput>
  }

  /**
   * UserCourseProgress delete
   */
  export type UserCourseProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
    /**
     * Filter which UserCourseProgress to delete.
     */
    where: UserCourseProgressWhereUniqueInput
  }

  /**
   * UserCourseProgress deleteMany
   */
  export type UserCourseProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCourseProgresses to delete
     */
    where?: UserCourseProgressWhereInput
    /**
     * Limit how many UserCourseProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserCourseProgress without action
   */
  export type UserCourseProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCourseProgress
     */
    select?: UserCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCourseProgress
     */
    omit?: UserCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCourseProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserChapterProgress
   */

  export type AggregateUserChapterProgress = {
    _count: UserChapterProgressCountAggregateOutputType | null
    _avg: UserChapterProgressAvgAggregateOutputType | null
    _sum: UserChapterProgressSumAggregateOutputType | null
    _min: UserChapterProgressMinAggregateOutputType | null
    _max: UserChapterProgressMaxAggregateOutputType | null
  }

  export type UserChapterProgressAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    chapter_id: number | null
    completion_percentage: number | null
  }

  export type UserChapterProgressSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    chapter_id: bigint | null
    completion_percentage: bigint | null
  }

  export type UserChapterProgressMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    chapter_id: bigint | null
    completion_percentage: bigint | null
    is_complete: boolean | null
    completed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserChapterProgressMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    chapter_id: bigint | null
    completion_percentage: bigint | null
    is_complete: boolean | null
    completed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserChapterProgressCountAggregateOutputType = {
    id: number
    user_id: number
    chapter_id: number
    completion_percentage: number
    is_complete: number
    completed_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserChapterProgressAvgAggregateInputType = {
    id?: true
    user_id?: true
    chapter_id?: true
    completion_percentage?: true
  }

  export type UserChapterProgressSumAggregateInputType = {
    id?: true
    user_id?: true
    chapter_id?: true
    completion_percentage?: true
  }

  export type UserChapterProgressMinAggregateInputType = {
    id?: true
    user_id?: true
    chapter_id?: true
    completion_percentage?: true
    is_complete?: true
    completed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UserChapterProgressMaxAggregateInputType = {
    id?: true
    user_id?: true
    chapter_id?: true
    completion_percentage?: true
    is_complete?: true
    completed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UserChapterProgressCountAggregateInputType = {
    id?: true
    user_id?: true
    chapter_id?: true
    completion_percentage?: true
    is_complete?: true
    completed_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserChapterProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChapterProgress to aggregate.
     */
    where?: UserChapterProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChapterProgresses to fetch.
     */
    orderBy?: UserChapterProgressOrderByWithRelationInput | UserChapterProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserChapterProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChapterProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChapterProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserChapterProgresses
    **/
    _count?: true | UserChapterProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserChapterProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserChapterProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserChapterProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserChapterProgressMaxAggregateInputType
  }

  export type GetUserChapterProgressAggregateType<T extends UserChapterProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserChapterProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserChapterProgress[P]>
      : GetScalarType<T[P], AggregateUserChapterProgress[P]>
  }




  export type UserChapterProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChapterProgressWhereInput
    orderBy?: UserChapterProgressOrderByWithAggregationInput | UserChapterProgressOrderByWithAggregationInput[]
    by: UserChapterProgressScalarFieldEnum[] | UserChapterProgressScalarFieldEnum
    having?: UserChapterProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserChapterProgressCountAggregateInputType | true
    _avg?: UserChapterProgressAvgAggregateInputType
    _sum?: UserChapterProgressSumAggregateInputType
    _min?: UserChapterProgressMinAggregateInputType
    _max?: UserChapterProgressMaxAggregateInputType
  }

  export type UserChapterProgressGroupByOutputType = {
    id: bigint
    user_id: bigint
    chapter_id: bigint
    completion_percentage: bigint
    is_complete: boolean
    completed_at: Date | null
    created_at: Date
    updated_at: Date
    _count: UserChapterProgressCountAggregateOutputType | null
    _avg: UserChapterProgressAvgAggregateOutputType | null
    _sum: UserChapterProgressSumAggregateOutputType | null
    _min: UserChapterProgressMinAggregateOutputType | null
    _max: UserChapterProgressMaxAggregateOutputType | null
  }

  type GetUserChapterProgressGroupByPayload<T extends UserChapterProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserChapterProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserChapterProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserChapterProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserChapterProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserChapterProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    chapter_id?: boolean
    completion_percentage?: boolean
    is_complete?: boolean
    completed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userChapterProgress"]>



  export type UserChapterProgressSelectScalar = {
    id?: boolean
    user_id?: boolean
    chapter_id?: boolean
    completion_percentage?: boolean
    is_complete?: boolean
    completed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserChapterProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "chapter_id" | "completion_percentage" | "is_complete" | "completed_at" | "created_at" | "updated_at", ExtArgs["result"]["userChapterProgress"]>
  export type UserChapterProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chapter?: boolean | ChapterDefaultArgs<ExtArgs>
  }

  export type $UserChapterProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserChapterProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chapter: Prisma.$ChapterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      chapter_id: bigint
      completion_percentage: bigint
      is_complete: boolean
      completed_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userChapterProgress"]>
    composites: {}
  }

  type UserChapterProgressGetPayload<S extends boolean | null | undefined | UserChapterProgressDefaultArgs> = $Result.GetResult<Prisma.$UserChapterProgressPayload, S>

  type UserChapterProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserChapterProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserChapterProgressCountAggregateInputType | true
    }

  export interface UserChapterProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserChapterProgress'], meta: { name: 'UserChapterProgress' } }
    /**
     * Find zero or one UserChapterProgress that matches the filter.
     * @param {UserChapterProgressFindUniqueArgs} args - Arguments to find a UserChapterProgress
     * @example
     * // Get one UserChapterProgress
     * const userChapterProgress = await prisma.userChapterProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserChapterProgressFindUniqueArgs>(args: SelectSubset<T, UserChapterProgressFindUniqueArgs<ExtArgs>>): Prisma__UserChapterProgressClient<$Result.GetResult<Prisma.$UserChapterProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserChapterProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserChapterProgressFindUniqueOrThrowArgs} args - Arguments to find a UserChapterProgress
     * @example
     * // Get one UserChapterProgress
     * const userChapterProgress = await prisma.userChapterProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserChapterProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserChapterProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserChapterProgressClient<$Result.GetResult<Prisma.$UserChapterProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserChapterProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChapterProgressFindFirstArgs} args - Arguments to find a UserChapterProgress
     * @example
     * // Get one UserChapterProgress
     * const userChapterProgress = await prisma.userChapterProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserChapterProgressFindFirstArgs>(args?: SelectSubset<T, UserChapterProgressFindFirstArgs<ExtArgs>>): Prisma__UserChapterProgressClient<$Result.GetResult<Prisma.$UserChapterProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserChapterProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChapterProgressFindFirstOrThrowArgs} args - Arguments to find a UserChapterProgress
     * @example
     * // Get one UserChapterProgress
     * const userChapterProgress = await prisma.userChapterProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserChapterProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserChapterProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserChapterProgressClient<$Result.GetResult<Prisma.$UserChapterProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserChapterProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChapterProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserChapterProgresses
     * const userChapterProgresses = await prisma.userChapterProgress.findMany()
     * 
     * // Get first 10 UserChapterProgresses
     * const userChapterProgresses = await prisma.userChapterProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userChapterProgressWithIdOnly = await prisma.userChapterProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserChapterProgressFindManyArgs>(args?: SelectSubset<T, UserChapterProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChapterProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserChapterProgress.
     * @param {UserChapterProgressCreateArgs} args - Arguments to create a UserChapterProgress.
     * @example
     * // Create one UserChapterProgress
     * const UserChapterProgress = await prisma.userChapterProgress.create({
     *   data: {
     *     // ... data to create a UserChapterProgress
     *   }
     * })
     * 
     */
    create<T extends UserChapterProgressCreateArgs>(args: SelectSubset<T, UserChapterProgressCreateArgs<ExtArgs>>): Prisma__UserChapterProgressClient<$Result.GetResult<Prisma.$UserChapterProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserChapterProgresses.
     * @param {UserChapterProgressCreateManyArgs} args - Arguments to create many UserChapterProgresses.
     * @example
     * // Create many UserChapterProgresses
     * const userChapterProgress = await prisma.userChapterProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserChapterProgressCreateManyArgs>(args?: SelectSubset<T, UserChapterProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserChapterProgress.
     * @param {UserChapterProgressDeleteArgs} args - Arguments to delete one UserChapterProgress.
     * @example
     * // Delete one UserChapterProgress
     * const UserChapterProgress = await prisma.userChapterProgress.delete({
     *   where: {
     *     // ... filter to delete one UserChapterProgress
     *   }
     * })
     * 
     */
    delete<T extends UserChapterProgressDeleteArgs>(args: SelectSubset<T, UserChapterProgressDeleteArgs<ExtArgs>>): Prisma__UserChapterProgressClient<$Result.GetResult<Prisma.$UserChapterProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserChapterProgress.
     * @param {UserChapterProgressUpdateArgs} args - Arguments to update one UserChapterProgress.
     * @example
     * // Update one UserChapterProgress
     * const userChapterProgress = await prisma.userChapterProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserChapterProgressUpdateArgs>(args: SelectSubset<T, UserChapterProgressUpdateArgs<ExtArgs>>): Prisma__UserChapterProgressClient<$Result.GetResult<Prisma.$UserChapterProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserChapterProgresses.
     * @param {UserChapterProgressDeleteManyArgs} args - Arguments to filter UserChapterProgresses to delete.
     * @example
     * // Delete a few UserChapterProgresses
     * const { count } = await prisma.userChapterProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserChapterProgressDeleteManyArgs>(args?: SelectSubset<T, UserChapterProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserChapterProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChapterProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserChapterProgresses
     * const userChapterProgress = await prisma.userChapterProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserChapterProgressUpdateManyArgs>(args: SelectSubset<T, UserChapterProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserChapterProgress.
     * @param {UserChapterProgressUpsertArgs} args - Arguments to update or create a UserChapterProgress.
     * @example
     * // Update or create a UserChapterProgress
     * const userChapterProgress = await prisma.userChapterProgress.upsert({
     *   create: {
     *     // ... data to create a UserChapterProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserChapterProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserChapterProgressUpsertArgs>(args: SelectSubset<T, UserChapterProgressUpsertArgs<ExtArgs>>): Prisma__UserChapterProgressClient<$Result.GetResult<Prisma.$UserChapterProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserChapterProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChapterProgressCountArgs} args - Arguments to filter UserChapterProgresses to count.
     * @example
     * // Count the number of UserChapterProgresses
     * const count = await prisma.userChapterProgress.count({
     *   where: {
     *     // ... the filter for the UserChapterProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserChapterProgressCountArgs>(
      args?: Subset<T, UserChapterProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserChapterProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserChapterProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChapterProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserChapterProgressAggregateArgs>(args: Subset<T, UserChapterProgressAggregateArgs>): Prisma.PrismaPromise<GetUserChapterProgressAggregateType<T>>

    /**
     * Group by UserChapterProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChapterProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserChapterProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserChapterProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserChapterProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserChapterProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserChapterProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserChapterProgress model
   */
  readonly fields: UserChapterProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserChapterProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserChapterProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapter<T extends ChapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChapterDefaultArgs<ExtArgs>>): Prisma__ChapterClient<$Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserChapterProgress model
   */
  interface UserChapterProgressFieldRefs {
    readonly id: FieldRef<"UserChapterProgress", 'BigInt'>
    readonly user_id: FieldRef<"UserChapterProgress", 'BigInt'>
    readonly chapter_id: FieldRef<"UserChapterProgress", 'BigInt'>
    readonly completion_percentage: FieldRef<"UserChapterProgress", 'BigInt'>
    readonly is_complete: FieldRef<"UserChapterProgress", 'Boolean'>
    readonly completed_at: FieldRef<"UserChapterProgress", 'DateTime'>
    readonly created_at: FieldRef<"UserChapterProgress", 'DateTime'>
    readonly updated_at: FieldRef<"UserChapterProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserChapterProgress findUnique
   */
  export type UserChapterProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChapterProgress
     */
    select?: UserChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChapterProgress
     */
    omit?: UserChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChapterProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserChapterProgress to fetch.
     */
    where: UserChapterProgressWhereUniqueInput
  }

  /**
   * UserChapterProgress findUniqueOrThrow
   */
  export type UserChapterProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChapterProgress
     */
    select?: UserChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChapterProgress
     */
    omit?: UserChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChapterProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserChapterProgress to fetch.
     */
    where: UserChapterProgressWhereUniqueInput
  }

  /**
   * UserChapterProgress findFirst
   */
  export type UserChapterProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChapterProgress
     */
    select?: UserChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChapterProgress
     */
    omit?: UserChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChapterProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserChapterProgress to fetch.
     */
    where?: UserChapterProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChapterProgresses to fetch.
     */
    orderBy?: UserChapterProgressOrderByWithRelationInput | UserChapterProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChapterProgresses.
     */
    cursor?: UserChapterProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChapterProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChapterProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChapterProgresses.
     */
    distinct?: UserChapterProgressScalarFieldEnum | UserChapterProgressScalarFieldEnum[]
  }

  /**
   * UserChapterProgress findFirstOrThrow
   */
  export type UserChapterProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChapterProgress
     */
    select?: UserChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChapterProgress
     */
    omit?: UserChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChapterProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserChapterProgress to fetch.
     */
    where?: UserChapterProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChapterProgresses to fetch.
     */
    orderBy?: UserChapterProgressOrderByWithRelationInput | UserChapterProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChapterProgresses.
     */
    cursor?: UserChapterProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChapterProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChapterProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChapterProgresses.
     */
    distinct?: UserChapterProgressScalarFieldEnum | UserChapterProgressScalarFieldEnum[]
  }

  /**
   * UserChapterProgress findMany
   */
  export type UserChapterProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChapterProgress
     */
    select?: UserChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChapterProgress
     */
    omit?: UserChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChapterProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserChapterProgresses to fetch.
     */
    where?: UserChapterProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChapterProgresses to fetch.
     */
    orderBy?: UserChapterProgressOrderByWithRelationInput | UserChapterProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserChapterProgresses.
     */
    cursor?: UserChapterProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChapterProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChapterProgresses.
     */
    skip?: number
    distinct?: UserChapterProgressScalarFieldEnum | UserChapterProgressScalarFieldEnum[]
  }

  /**
   * UserChapterProgress create
   */
  export type UserChapterProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChapterProgress
     */
    select?: UserChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChapterProgress
     */
    omit?: UserChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChapterProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserChapterProgress.
     */
    data: XOR<UserChapterProgressCreateInput, UserChapterProgressUncheckedCreateInput>
  }

  /**
   * UserChapterProgress createMany
   */
  export type UserChapterProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserChapterProgresses.
     */
    data: UserChapterProgressCreateManyInput | UserChapterProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserChapterProgress update
   */
  export type UserChapterProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChapterProgress
     */
    select?: UserChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChapterProgress
     */
    omit?: UserChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChapterProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserChapterProgress.
     */
    data: XOR<UserChapterProgressUpdateInput, UserChapterProgressUncheckedUpdateInput>
    /**
     * Choose, which UserChapterProgress to update.
     */
    where: UserChapterProgressWhereUniqueInput
  }

  /**
   * UserChapterProgress updateMany
   */
  export type UserChapterProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserChapterProgresses.
     */
    data: XOR<UserChapterProgressUpdateManyMutationInput, UserChapterProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserChapterProgresses to update
     */
    where?: UserChapterProgressWhereInput
    /**
     * Limit how many UserChapterProgresses to update.
     */
    limit?: number
  }

  /**
   * UserChapterProgress upsert
   */
  export type UserChapterProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChapterProgress
     */
    select?: UserChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChapterProgress
     */
    omit?: UserChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChapterProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserChapterProgress to update in case it exists.
     */
    where: UserChapterProgressWhereUniqueInput
    /**
     * In case the UserChapterProgress found by the `where` argument doesn't exist, create a new UserChapterProgress with this data.
     */
    create: XOR<UserChapterProgressCreateInput, UserChapterProgressUncheckedCreateInput>
    /**
     * In case the UserChapterProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserChapterProgressUpdateInput, UserChapterProgressUncheckedUpdateInput>
  }

  /**
   * UserChapterProgress delete
   */
  export type UserChapterProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChapterProgress
     */
    select?: UserChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChapterProgress
     */
    omit?: UserChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChapterProgressInclude<ExtArgs> | null
    /**
     * Filter which UserChapterProgress to delete.
     */
    where: UserChapterProgressWhereUniqueInput
  }

  /**
   * UserChapterProgress deleteMany
   */
  export type UserChapterProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChapterProgresses to delete
     */
    where?: UserChapterProgressWhereInput
    /**
     * Limit how many UserChapterProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserChapterProgress without action
   */
  export type UserChapterProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChapterProgress
     */
    select?: UserChapterProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChapterProgress
     */
    omit?: UserChapterProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChapterProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserQuizAttempt
   */

  export type AggregateUserQuizAttempt = {
    _count: UserQuizAttemptCountAggregateOutputType | null
    _avg: UserQuizAttemptAvgAggregateOutputType | null
    _sum: UserQuizAttemptSumAggregateOutputType | null
    _min: UserQuizAttemptMinAggregateOutputType | null
    _max: UserQuizAttemptMaxAggregateOutputType | null
  }

  export type UserQuizAttemptAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    quiz_id: number | null
    score: number | null
  }

  export type UserQuizAttemptSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    quiz_id: bigint | null
    score: number | null
  }

  export type UserQuizAttemptMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    quiz_id: bigint | null
    score: number | null
    passed: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserQuizAttemptMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    quiz_id: bigint | null
    score: number | null
    passed: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserQuizAttemptCountAggregateOutputType = {
    id: number
    user_id: number
    quiz_id: number
    score: number
    passed: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserQuizAttemptAvgAggregateInputType = {
    id?: true
    user_id?: true
    quiz_id?: true
    score?: true
  }

  export type UserQuizAttemptSumAggregateInputType = {
    id?: true
    user_id?: true
    quiz_id?: true
    score?: true
  }

  export type UserQuizAttemptMinAggregateInputType = {
    id?: true
    user_id?: true
    quiz_id?: true
    score?: true
    passed?: true
    created_at?: true
    updated_at?: true
  }

  export type UserQuizAttemptMaxAggregateInputType = {
    id?: true
    user_id?: true
    quiz_id?: true
    score?: true
    passed?: true
    created_at?: true
    updated_at?: true
  }

  export type UserQuizAttemptCountAggregateInputType = {
    id?: true
    user_id?: true
    quiz_id?: true
    score?: true
    passed?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserQuizAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuizAttempt to aggregate.
     */
    where?: UserQuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizAttempts to fetch.
     */
    orderBy?: UserQuizAttemptOrderByWithRelationInput | UserQuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuizAttempts
    **/
    _count?: true | UserQuizAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserQuizAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserQuizAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuizAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuizAttemptMaxAggregateInputType
  }

  export type GetUserQuizAttemptAggregateType<T extends UserQuizAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuizAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuizAttempt[P]>
      : GetScalarType<T[P], AggregateUserQuizAttempt[P]>
  }




  export type UserQuizAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuizAttemptWhereInput
    orderBy?: UserQuizAttemptOrderByWithAggregationInput | UserQuizAttemptOrderByWithAggregationInput[]
    by: UserQuizAttemptScalarFieldEnum[] | UserQuizAttemptScalarFieldEnum
    having?: UserQuizAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuizAttemptCountAggregateInputType | true
    _avg?: UserQuizAttemptAvgAggregateInputType
    _sum?: UserQuizAttemptSumAggregateInputType
    _min?: UserQuizAttemptMinAggregateInputType
    _max?: UserQuizAttemptMaxAggregateInputType
  }

  export type UserQuizAttemptGroupByOutputType = {
    id: bigint
    user_id: bigint
    quiz_id: bigint
    score: number
    passed: boolean
    created_at: Date
    updated_at: Date
    _count: UserQuizAttemptCountAggregateOutputType | null
    _avg: UserQuizAttemptAvgAggregateOutputType | null
    _sum: UserQuizAttemptSumAggregateOutputType | null
    _min: UserQuizAttemptMinAggregateOutputType | null
    _max: UserQuizAttemptMaxAggregateOutputType | null
  }

  type GetUserQuizAttemptGroupByPayload<T extends UserQuizAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuizAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuizAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuizAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuizAttemptGroupByOutputType[P]>
        }
      >
    >


  export type UserQuizAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    quiz_id?: boolean
    score?: boolean
    passed?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    user_responses?: boolean | UserQuizAttempt$user_responsesArgs<ExtArgs>
    _count?: boolean | UserQuizAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuizAttempt"]>



  export type UserQuizAttemptSelectScalar = {
    id?: boolean
    user_id?: boolean
    quiz_id?: boolean
    score?: boolean
    passed?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserQuizAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "quiz_id" | "score" | "passed" | "created_at" | "updated_at", ExtArgs["result"]["userQuizAttempt"]>
  export type UserQuizAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    user_responses?: boolean | UserQuizAttempt$user_responsesArgs<ExtArgs>
    _count?: boolean | UserQuizAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserQuizAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuizAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
      user_responses: Prisma.$UserResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      quiz_id: bigint
      score: number
      passed: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userQuizAttempt"]>
    composites: {}
  }

  type UserQuizAttemptGetPayload<S extends boolean | null | undefined | UserQuizAttemptDefaultArgs> = $Result.GetResult<Prisma.$UserQuizAttemptPayload, S>

  type UserQuizAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserQuizAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserQuizAttemptCountAggregateInputType | true
    }

  export interface UserQuizAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuizAttempt'], meta: { name: 'UserQuizAttempt' } }
    /**
     * Find zero or one UserQuizAttempt that matches the filter.
     * @param {UserQuizAttemptFindUniqueArgs} args - Arguments to find a UserQuizAttempt
     * @example
     * // Get one UserQuizAttempt
     * const userQuizAttempt = await prisma.userQuizAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserQuizAttemptFindUniqueArgs>(args: SelectSubset<T, UserQuizAttemptFindUniqueArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserQuizAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserQuizAttemptFindUniqueOrThrowArgs} args - Arguments to find a UserQuizAttempt
     * @example
     * // Get one UserQuizAttempt
     * const userQuizAttempt = await prisma.userQuizAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserQuizAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, UserQuizAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuizAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptFindFirstArgs} args - Arguments to find a UserQuizAttempt
     * @example
     * // Get one UserQuizAttempt
     * const userQuizAttempt = await prisma.userQuizAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserQuizAttemptFindFirstArgs>(args?: SelectSubset<T, UserQuizAttemptFindFirstArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuizAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptFindFirstOrThrowArgs} args - Arguments to find a UserQuizAttempt
     * @example
     * // Get one UserQuizAttempt
     * const userQuizAttempt = await prisma.userQuizAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserQuizAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, UserQuizAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserQuizAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuizAttempts
     * const userQuizAttempts = await prisma.userQuizAttempt.findMany()
     * 
     * // Get first 10 UserQuizAttempts
     * const userQuizAttempts = await prisma.userQuizAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userQuizAttemptWithIdOnly = await prisma.userQuizAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserQuizAttemptFindManyArgs>(args?: SelectSubset<T, UserQuizAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserQuizAttempt.
     * @param {UserQuizAttemptCreateArgs} args - Arguments to create a UserQuizAttempt.
     * @example
     * // Create one UserQuizAttempt
     * const UserQuizAttempt = await prisma.userQuizAttempt.create({
     *   data: {
     *     // ... data to create a UserQuizAttempt
     *   }
     * })
     * 
     */
    create<T extends UserQuizAttemptCreateArgs>(args: SelectSubset<T, UserQuizAttemptCreateArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserQuizAttempts.
     * @param {UserQuizAttemptCreateManyArgs} args - Arguments to create many UserQuizAttempts.
     * @example
     * // Create many UserQuizAttempts
     * const userQuizAttempt = await prisma.userQuizAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserQuizAttemptCreateManyArgs>(args?: SelectSubset<T, UserQuizAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserQuizAttempt.
     * @param {UserQuizAttemptDeleteArgs} args - Arguments to delete one UserQuizAttempt.
     * @example
     * // Delete one UserQuizAttempt
     * const UserQuizAttempt = await prisma.userQuizAttempt.delete({
     *   where: {
     *     // ... filter to delete one UserQuizAttempt
     *   }
     * })
     * 
     */
    delete<T extends UserQuizAttemptDeleteArgs>(args: SelectSubset<T, UserQuizAttemptDeleteArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserQuizAttempt.
     * @param {UserQuizAttemptUpdateArgs} args - Arguments to update one UserQuizAttempt.
     * @example
     * // Update one UserQuizAttempt
     * const userQuizAttempt = await prisma.userQuizAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserQuizAttemptUpdateArgs>(args: SelectSubset<T, UserQuizAttemptUpdateArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserQuizAttempts.
     * @param {UserQuizAttemptDeleteManyArgs} args - Arguments to filter UserQuizAttempts to delete.
     * @example
     * // Delete a few UserQuizAttempts
     * const { count } = await prisma.userQuizAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserQuizAttemptDeleteManyArgs>(args?: SelectSubset<T, UserQuizAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuizAttempts
     * const userQuizAttempt = await prisma.userQuizAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserQuizAttemptUpdateManyArgs>(args: SelectSubset<T, UserQuizAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserQuizAttempt.
     * @param {UserQuizAttemptUpsertArgs} args - Arguments to update or create a UserQuizAttempt.
     * @example
     * // Update or create a UserQuizAttempt
     * const userQuizAttempt = await prisma.userQuizAttempt.upsert({
     *   create: {
     *     // ... data to create a UserQuizAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuizAttempt we want to update
     *   }
     * })
     */
    upsert<T extends UserQuizAttemptUpsertArgs>(args: SelectSubset<T, UserQuizAttemptUpsertArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserQuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptCountArgs} args - Arguments to filter UserQuizAttempts to count.
     * @example
     * // Count the number of UserQuizAttempts
     * const count = await prisma.userQuizAttempt.count({
     *   where: {
     *     // ... the filter for the UserQuizAttempts we want to count
     *   }
     * })
    **/
    count<T extends UserQuizAttemptCountArgs>(
      args?: Subset<T, UserQuizAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuizAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserQuizAttemptAggregateArgs>(args: Subset<T, UserQuizAttemptAggregateArgs>): Prisma.PrismaPromise<GetUserQuizAttemptAggregateType<T>>

    /**
     * Group by UserQuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuizAttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserQuizAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuizAttemptGroupByArgs['orderBy'] }
        : { orderBy?: UserQuizAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserQuizAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuizAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuizAttempt model
   */
  readonly fields: UserQuizAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuizAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuizAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_responses<T extends UserQuizAttempt$user_responsesArgs<ExtArgs> = {}>(args?: Subset<T, UserQuizAttempt$user_responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserQuizAttempt model
   */
  interface UserQuizAttemptFieldRefs {
    readonly id: FieldRef<"UserQuizAttempt", 'BigInt'>
    readonly user_id: FieldRef<"UserQuizAttempt", 'BigInt'>
    readonly quiz_id: FieldRef<"UserQuizAttempt", 'BigInt'>
    readonly score: FieldRef<"UserQuizAttempt", 'Float'>
    readonly passed: FieldRef<"UserQuizAttempt", 'Boolean'>
    readonly created_at: FieldRef<"UserQuizAttempt", 'DateTime'>
    readonly updated_at: FieldRef<"UserQuizAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserQuizAttempt findUnique
   */
  export type UserQuizAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizAttempt to fetch.
     */
    where: UserQuizAttemptWhereUniqueInput
  }

  /**
   * UserQuizAttempt findUniqueOrThrow
   */
  export type UserQuizAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizAttempt to fetch.
     */
    where: UserQuizAttemptWhereUniqueInput
  }

  /**
   * UserQuizAttempt findFirst
   */
  export type UserQuizAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizAttempt to fetch.
     */
    where?: UserQuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizAttempts to fetch.
     */
    orderBy?: UserQuizAttemptOrderByWithRelationInput | UserQuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuizAttempts.
     */
    cursor?: UserQuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuizAttempts.
     */
    distinct?: UserQuizAttemptScalarFieldEnum | UserQuizAttemptScalarFieldEnum[]
  }

  /**
   * UserQuizAttempt findFirstOrThrow
   */
  export type UserQuizAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizAttempt to fetch.
     */
    where?: UserQuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizAttempts to fetch.
     */
    orderBy?: UserQuizAttemptOrderByWithRelationInput | UserQuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuizAttempts.
     */
    cursor?: UserQuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuizAttempts.
     */
    distinct?: UserQuizAttemptScalarFieldEnum | UserQuizAttemptScalarFieldEnum[]
  }

  /**
   * UserQuizAttempt findMany
   */
  export type UserQuizAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which UserQuizAttempts to fetch.
     */
    where?: UserQuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuizAttempts to fetch.
     */
    orderBy?: UserQuizAttemptOrderByWithRelationInput | UserQuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuizAttempts.
     */
    cursor?: UserQuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuizAttempts.
     */
    skip?: number
    distinct?: UserQuizAttemptScalarFieldEnum | UserQuizAttemptScalarFieldEnum[]
  }

  /**
   * UserQuizAttempt create
   */
  export type UserQuizAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a UserQuizAttempt.
     */
    data: XOR<UserQuizAttemptCreateInput, UserQuizAttemptUncheckedCreateInput>
  }

  /**
   * UserQuizAttempt createMany
   */
  export type UserQuizAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuizAttempts.
     */
    data: UserQuizAttemptCreateManyInput | UserQuizAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuizAttempt update
   */
  export type UserQuizAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a UserQuizAttempt.
     */
    data: XOR<UserQuizAttemptUpdateInput, UserQuizAttemptUncheckedUpdateInput>
    /**
     * Choose, which UserQuizAttempt to update.
     */
    where: UserQuizAttemptWhereUniqueInput
  }

  /**
   * UserQuizAttempt updateMany
   */
  export type UserQuizAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuizAttempts.
     */
    data: XOR<UserQuizAttemptUpdateManyMutationInput, UserQuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which UserQuizAttempts to update
     */
    where?: UserQuizAttemptWhereInput
    /**
     * Limit how many UserQuizAttempts to update.
     */
    limit?: number
  }

  /**
   * UserQuizAttempt upsert
   */
  export type UserQuizAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the UserQuizAttempt to update in case it exists.
     */
    where: UserQuizAttemptWhereUniqueInput
    /**
     * In case the UserQuizAttempt found by the `where` argument doesn't exist, create a new UserQuizAttempt with this data.
     */
    create: XOR<UserQuizAttemptCreateInput, UserQuizAttemptUncheckedCreateInput>
    /**
     * In case the UserQuizAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuizAttemptUpdateInput, UserQuizAttemptUncheckedUpdateInput>
  }

  /**
   * UserQuizAttempt delete
   */
  export type UserQuizAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
    /**
     * Filter which UserQuizAttempt to delete.
     */
    where: UserQuizAttemptWhereUniqueInput
  }

  /**
   * UserQuizAttempt deleteMany
   */
  export type UserQuizAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuizAttempts to delete
     */
    where?: UserQuizAttemptWhereInput
    /**
     * Limit how many UserQuizAttempts to delete.
     */
    limit?: number
  }

  /**
   * UserQuizAttempt.user_responses
   */
  export type UserQuizAttempt$user_responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    where?: UserResponseWhereInput
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    cursor?: UserResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * UserQuizAttempt without action
   */
  export type UserQuizAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuizAttempt
     */
    select?: UserQuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuizAttempt
     */
    omit?: UserQuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuizAttemptInclude<ExtArgs> | null
  }


  /**
   * Model UserResponse
   */

  export type AggregateUserResponse = {
    _count: UserResponseCountAggregateOutputType | null
    _avg: UserResponseAvgAggregateOutputType | null
    _sum: UserResponseSumAggregateOutputType | null
    _min: UserResponseMinAggregateOutputType | null
    _max: UserResponseMaxAggregateOutputType | null
  }

  export type UserResponseAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    attempt_id: number | null
    question_id: number | null
    selected_option_id: number | null
    points_awarded: number | null
  }

  export type UserResponseSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    attempt_id: bigint | null
    question_id: bigint | null
    selected_option_id: bigint | null
    points_awarded: bigint | null
  }

  export type UserResponseMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    attempt_id: bigint | null
    question_id: bigint | null
    selected_option_id: bigint | null
    written_response: string | null
    is_correct: boolean | null
    points_awarded: bigint | null
    graded_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserResponseMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    attempt_id: bigint | null
    question_id: bigint | null
    selected_option_id: bigint | null
    written_response: string | null
    is_correct: boolean | null
    points_awarded: bigint | null
    graded_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserResponseCountAggregateOutputType = {
    id: number
    user_id: number
    attempt_id: number
    question_id: number
    selected_option_id: number
    written_response: number
    is_correct: number
    points_awarded: number
    graded_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserResponseAvgAggregateInputType = {
    id?: true
    user_id?: true
    attempt_id?: true
    question_id?: true
    selected_option_id?: true
    points_awarded?: true
  }

  export type UserResponseSumAggregateInputType = {
    id?: true
    user_id?: true
    attempt_id?: true
    question_id?: true
    selected_option_id?: true
    points_awarded?: true
  }

  export type UserResponseMinAggregateInputType = {
    id?: true
    user_id?: true
    attempt_id?: true
    question_id?: true
    selected_option_id?: true
    written_response?: true
    is_correct?: true
    points_awarded?: true
    graded_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UserResponseMaxAggregateInputType = {
    id?: true
    user_id?: true
    attempt_id?: true
    question_id?: true
    selected_option_id?: true
    written_response?: true
    is_correct?: true
    points_awarded?: true
    graded_at?: true
    created_at?: true
    updated_at?: true
  }

  export type UserResponseCountAggregateInputType = {
    id?: true
    user_id?: true
    attempt_id?: true
    question_id?: true
    selected_option_id?: true
    written_response?: true
    is_correct?: true
    points_awarded?: true
    graded_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserResponse to aggregate.
     */
    where?: UserResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserResponses to fetch.
     */
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserResponses
    **/
    _count?: true | UserResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserResponseMaxAggregateInputType
  }

  export type GetUserResponseAggregateType<T extends UserResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateUserResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserResponse[P]>
      : GetScalarType<T[P], AggregateUserResponse[P]>
  }




  export type UserResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResponseWhereInput
    orderBy?: UserResponseOrderByWithAggregationInput | UserResponseOrderByWithAggregationInput[]
    by: UserResponseScalarFieldEnum[] | UserResponseScalarFieldEnum
    having?: UserResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserResponseCountAggregateInputType | true
    _avg?: UserResponseAvgAggregateInputType
    _sum?: UserResponseSumAggregateInputType
    _min?: UserResponseMinAggregateInputType
    _max?: UserResponseMaxAggregateInputType
  }

  export type UserResponseGroupByOutputType = {
    id: bigint
    user_id: bigint
    attempt_id: bigint
    question_id: bigint
    selected_option_id: bigint | null
    written_response: string | null
    is_correct: boolean
    points_awarded: bigint
    graded_at: Date | null
    created_at: Date
    updated_at: Date
    _count: UserResponseCountAggregateOutputType | null
    _avg: UserResponseAvgAggregateOutputType | null
    _sum: UserResponseSumAggregateOutputType | null
    _min: UserResponseMinAggregateOutputType | null
    _max: UserResponseMaxAggregateOutputType | null
  }

  type GetUserResponseGroupByPayload<T extends UserResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserResponseGroupByOutputType[P]>
            : GetScalarType<T[P], UserResponseGroupByOutputType[P]>
        }
      >
    >


  export type UserResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    attempt_id?: boolean
    question_id?: boolean
    selected_option_id?: boolean
    written_response?: boolean
    is_correct?: boolean
    points_awarded?: boolean
    graded_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    attempt?: boolean | UserQuizAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    selected_option?: boolean | UserResponse$selected_optionArgs<ExtArgs>
  }, ExtArgs["result"]["userResponse"]>



  export type UserResponseSelectScalar = {
    id?: boolean
    user_id?: boolean
    attempt_id?: boolean
    question_id?: boolean
    selected_option_id?: boolean
    written_response?: boolean
    is_correct?: boolean
    points_awarded?: boolean
    graded_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "attempt_id" | "question_id" | "selected_option_id" | "written_response" | "is_correct" | "points_awarded" | "graded_at" | "created_at" | "updated_at", ExtArgs["result"]["userResponse"]>
  export type UserResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    attempt?: boolean | UserQuizAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    selected_option?: boolean | UserResponse$selected_optionArgs<ExtArgs>
  }

  export type $UserResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserResponse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      attempt: Prisma.$UserQuizAttemptPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
      selected_option: Prisma.$OptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      attempt_id: bigint
      question_id: bigint
      selected_option_id: bigint | null
      written_response: string | null
      is_correct: boolean
      points_awarded: bigint
      graded_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userResponse"]>
    composites: {}
  }

  type UserResponseGetPayload<S extends boolean | null | undefined | UserResponseDefaultArgs> = $Result.GetResult<Prisma.$UserResponsePayload, S>

  type UserResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserResponseCountAggregateInputType | true
    }

  export interface UserResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserResponse'], meta: { name: 'UserResponse' } }
    /**
     * Find zero or one UserResponse that matches the filter.
     * @param {UserResponseFindUniqueArgs} args - Arguments to find a UserResponse
     * @example
     * // Get one UserResponse
     * const userResponse = await prisma.userResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserResponseFindUniqueArgs>(args: SelectSubset<T, UserResponseFindUniqueArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserResponseFindUniqueOrThrowArgs} args - Arguments to find a UserResponse
     * @example
     * // Get one UserResponse
     * const userResponse = await prisma.userResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, UserResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseFindFirstArgs} args - Arguments to find a UserResponse
     * @example
     * // Get one UserResponse
     * const userResponse = await prisma.userResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserResponseFindFirstArgs>(args?: SelectSubset<T, UserResponseFindFirstArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseFindFirstOrThrowArgs} args - Arguments to find a UserResponse
     * @example
     * // Get one UserResponse
     * const userResponse = await prisma.userResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, UserResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserResponses
     * const userResponses = await prisma.userResponse.findMany()
     * 
     * // Get first 10 UserResponses
     * const userResponses = await prisma.userResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userResponseWithIdOnly = await prisma.userResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserResponseFindManyArgs>(args?: SelectSubset<T, UserResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserResponse.
     * @param {UserResponseCreateArgs} args - Arguments to create a UserResponse.
     * @example
     * // Create one UserResponse
     * const UserResponse = await prisma.userResponse.create({
     *   data: {
     *     // ... data to create a UserResponse
     *   }
     * })
     * 
     */
    create<T extends UserResponseCreateArgs>(args: SelectSubset<T, UserResponseCreateArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserResponses.
     * @param {UserResponseCreateManyArgs} args - Arguments to create many UserResponses.
     * @example
     * // Create many UserResponses
     * const userResponse = await prisma.userResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserResponseCreateManyArgs>(args?: SelectSubset<T, UserResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserResponse.
     * @param {UserResponseDeleteArgs} args - Arguments to delete one UserResponse.
     * @example
     * // Delete one UserResponse
     * const UserResponse = await prisma.userResponse.delete({
     *   where: {
     *     // ... filter to delete one UserResponse
     *   }
     * })
     * 
     */
    delete<T extends UserResponseDeleteArgs>(args: SelectSubset<T, UserResponseDeleteArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserResponse.
     * @param {UserResponseUpdateArgs} args - Arguments to update one UserResponse.
     * @example
     * // Update one UserResponse
     * const userResponse = await prisma.userResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserResponseUpdateArgs>(args: SelectSubset<T, UserResponseUpdateArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserResponses.
     * @param {UserResponseDeleteManyArgs} args - Arguments to filter UserResponses to delete.
     * @example
     * // Delete a few UserResponses
     * const { count } = await prisma.userResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserResponseDeleteManyArgs>(args?: SelectSubset<T, UserResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserResponses
     * const userResponse = await prisma.userResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserResponseUpdateManyArgs>(args: SelectSubset<T, UserResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserResponse.
     * @param {UserResponseUpsertArgs} args - Arguments to update or create a UserResponse.
     * @example
     * // Update or create a UserResponse
     * const userResponse = await prisma.userResponse.upsert({
     *   create: {
     *     // ... data to create a UserResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserResponse we want to update
     *   }
     * })
     */
    upsert<T extends UserResponseUpsertArgs>(args: SelectSubset<T, UserResponseUpsertArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseCountArgs} args - Arguments to filter UserResponses to count.
     * @example
     * // Count the number of UserResponses
     * const count = await prisma.userResponse.count({
     *   where: {
     *     // ... the filter for the UserResponses we want to count
     *   }
     * })
    **/
    count<T extends UserResponseCountArgs>(
      args?: Subset<T, UserResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserResponseAggregateArgs>(args: Subset<T, UserResponseAggregateArgs>): Prisma.PrismaPromise<GetUserResponseAggregateType<T>>

    /**
     * Group by UserResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserResponseGroupByArgs['orderBy'] }
        : { orderBy?: UserResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserResponse model
   */
  readonly fields: UserResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attempt<T extends UserQuizAttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserQuizAttemptDefaultArgs<ExtArgs>>): Prisma__UserQuizAttemptClient<$Result.GetResult<Prisma.$UserQuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    selected_option<T extends UserResponse$selected_optionArgs<ExtArgs> = {}>(args?: Subset<T, UserResponse$selected_optionArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserResponse model
   */
  interface UserResponseFieldRefs {
    readonly id: FieldRef<"UserResponse", 'BigInt'>
    readonly user_id: FieldRef<"UserResponse", 'BigInt'>
    readonly attempt_id: FieldRef<"UserResponse", 'BigInt'>
    readonly question_id: FieldRef<"UserResponse", 'BigInt'>
    readonly selected_option_id: FieldRef<"UserResponse", 'BigInt'>
    readonly written_response: FieldRef<"UserResponse", 'String'>
    readonly is_correct: FieldRef<"UserResponse", 'Boolean'>
    readonly points_awarded: FieldRef<"UserResponse", 'BigInt'>
    readonly graded_at: FieldRef<"UserResponse", 'DateTime'>
    readonly created_at: FieldRef<"UserResponse", 'DateTime'>
    readonly updated_at: FieldRef<"UserResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserResponse findUnique
   */
  export type UserResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserResponse to fetch.
     */
    where: UserResponseWhereUniqueInput
  }

  /**
   * UserResponse findUniqueOrThrow
   */
  export type UserResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserResponse to fetch.
     */
    where: UserResponseWhereUniqueInput
  }

  /**
   * UserResponse findFirst
   */
  export type UserResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserResponse to fetch.
     */
    where?: UserResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserResponses to fetch.
     */
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserResponses.
     */
    cursor?: UserResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserResponses.
     */
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * UserResponse findFirstOrThrow
   */
  export type UserResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserResponse to fetch.
     */
    where?: UserResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserResponses to fetch.
     */
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserResponses.
     */
    cursor?: UserResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserResponses.
     */
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * UserResponse findMany
   */
  export type UserResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserResponses to fetch.
     */
    where?: UserResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserResponses to fetch.
     */
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserResponses.
     */
    cursor?: UserResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserResponses.
     */
    skip?: number
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * UserResponse create
   */
  export type UserResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a UserResponse.
     */
    data: XOR<UserResponseCreateInput, UserResponseUncheckedCreateInput>
  }

  /**
   * UserResponse createMany
   */
  export type UserResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserResponses.
     */
    data: UserResponseCreateManyInput | UserResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserResponse update
   */
  export type UserResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a UserResponse.
     */
    data: XOR<UserResponseUpdateInput, UserResponseUncheckedUpdateInput>
    /**
     * Choose, which UserResponse to update.
     */
    where: UserResponseWhereUniqueInput
  }

  /**
   * UserResponse updateMany
   */
  export type UserResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserResponses.
     */
    data: XOR<UserResponseUpdateManyMutationInput, UserResponseUncheckedUpdateManyInput>
    /**
     * Filter which UserResponses to update
     */
    where?: UserResponseWhereInput
    /**
     * Limit how many UserResponses to update.
     */
    limit?: number
  }

  /**
   * UserResponse upsert
   */
  export type UserResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the UserResponse to update in case it exists.
     */
    where: UserResponseWhereUniqueInput
    /**
     * In case the UserResponse found by the `where` argument doesn't exist, create a new UserResponse with this data.
     */
    create: XOR<UserResponseCreateInput, UserResponseUncheckedCreateInput>
    /**
     * In case the UserResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserResponseUpdateInput, UserResponseUncheckedUpdateInput>
  }

  /**
   * UserResponse delete
   */
  export type UserResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * Filter which UserResponse to delete.
     */
    where: UserResponseWhereUniqueInput
  }

  /**
   * UserResponse deleteMany
   */
  export type UserResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserResponses to delete
     */
    where?: UserResponseWhereInput
    /**
     * Limit how many UserResponses to delete.
     */
    limit?: number
  }

  /**
   * UserResponse.selected_option
   */
  export type UserResponse$selected_optionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
  }

  /**
   * UserResponse without action
   */
  export type UserResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
  }


  /**
   * Model CoursePdf
   */

  export type AggregateCoursePdf = {
    _count: CoursePdfCountAggregateOutputType | null
    _avg: CoursePdfAvgAggregateOutputType | null
    _sum: CoursePdfSumAggregateOutputType | null
    _min: CoursePdfMinAggregateOutputType | null
    _max: CoursePdfMaxAggregateOutputType | null
  }

  export type CoursePdfAvgAggregateOutputType = {
    id: number | null
    course_id: number | null
    user_id: number | null
  }

  export type CoursePdfSumAggregateOutputType = {
    id: bigint | null
    course_id: bigint | null
    user_id: bigint | null
  }

  export type CoursePdfMinAggregateOutputType = {
    id: bigint | null
    course_id: bigint | null
    user_id: bigint | null
    pdf_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CoursePdfMaxAggregateOutputType = {
    id: bigint | null
    course_id: bigint | null
    user_id: bigint | null
    pdf_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CoursePdfCountAggregateOutputType = {
    id: number
    course_id: number
    user_id: number
    pdf_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CoursePdfAvgAggregateInputType = {
    id?: true
    course_id?: true
    user_id?: true
  }

  export type CoursePdfSumAggregateInputType = {
    id?: true
    course_id?: true
    user_id?: true
  }

  export type CoursePdfMinAggregateInputType = {
    id?: true
    course_id?: true
    user_id?: true
    pdf_url?: true
    created_at?: true
    updated_at?: true
  }

  export type CoursePdfMaxAggregateInputType = {
    id?: true
    course_id?: true
    user_id?: true
    pdf_url?: true
    created_at?: true
    updated_at?: true
  }

  export type CoursePdfCountAggregateInputType = {
    id?: true
    course_id?: true
    user_id?: true
    pdf_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CoursePdfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursePdf to aggregate.
     */
    where?: CoursePdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePdfs to fetch.
     */
    orderBy?: CoursePdfOrderByWithRelationInput | CoursePdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursePdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoursePdfs
    **/
    _count?: true | CoursePdfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursePdfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursePdfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursePdfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursePdfMaxAggregateInputType
  }

  export type GetCoursePdfAggregateType<T extends CoursePdfAggregateArgs> = {
        [P in keyof T & keyof AggregateCoursePdf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoursePdf[P]>
      : GetScalarType<T[P], AggregateCoursePdf[P]>
  }




  export type CoursePdfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePdfWhereInput
    orderBy?: CoursePdfOrderByWithAggregationInput | CoursePdfOrderByWithAggregationInput[]
    by: CoursePdfScalarFieldEnum[] | CoursePdfScalarFieldEnum
    having?: CoursePdfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursePdfCountAggregateInputType | true
    _avg?: CoursePdfAvgAggregateInputType
    _sum?: CoursePdfSumAggregateInputType
    _min?: CoursePdfMinAggregateInputType
    _max?: CoursePdfMaxAggregateInputType
  }

  export type CoursePdfGroupByOutputType = {
    id: bigint
    course_id: bigint
    user_id: bigint
    pdf_url: string
    created_at: Date
    updated_at: Date
    _count: CoursePdfCountAggregateOutputType | null
    _avg: CoursePdfAvgAggregateOutputType | null
    _sum: CoursePdfSumAggregateOutputType | null
    _min: CoursePdfMinAggregateOutputType | null
    _max: CoursePdfMaxAggregateOutputType | null
  }

  type GetCoursePdfGroupByPayload<T extends CoursePdfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursePdfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursePdfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursePdfGroupByOutputType[P]>
            : GetScalarType<T[P], CoursePdfGroupByOutputType[P]>
        }
      >
    >


  export type CoursePdfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    user_id?: boolean
    pdf_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursePdf"]>



  export type CoursePdfSelectScalar = {
    id?: boolean
    course_id?: boolean
    user_id?: boolean
    pdf_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CoursePdfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "course_id" | "user_id" | "pdf_url" | "created_at" | "updated_at", ExtArgs["result"]["coursePdf"]>
  export type CoursePdfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoursePdfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoursePdf"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      course_id: bigint
      user_id: bigint
      pdf_url: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["coursePdf"]>
    composites: {}
  }

  type CoursePdfGetPayload<S extends boolean | null | undefined | CoursePdfDefaultArgs> = $Result.GetResult<Prisma.$CoursePdfPayload, S>

  type CoursePdfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursePdfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursePdfCountAggregateInputType | true
    }

  export interface CoursePdfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoursePdf'], meta: { name: 'CoursePdf' } }
    /**
     * Find zero or one CoursePdf that matches the filter.
     * @param {CoursePdfFindUniqueArgs} args - Arguments to find a CoursePdf
     * @example
     * // Get one CoursePdf
     * const coursePdf = await prisma.coursePdf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursePdfFindUniqueArgs>(args: SelectSubset<T, CoursePdfFindUniqueArgs<ExtArgs>>): Prisma__CoursePdfClient<$Result.GetResult<Prisma.$CoursePdfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoursePdf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursePdfFindUniqueOrThrowArgs} args - Arguments to find a CoursePdf
     * @example
     * // Get one CoursePdf
     * const coursePdf = await prisma.coursePdf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursePdfFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursePdfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursePdfClient<$Result.GetResult<Prisma.$CoursePdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoursePdf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePdfFindFirstArgs} args - Arguments to find a CoursePdf
     * @example
     * // Get one CoursePdf
     * const coursePdf = await prisma.coursePdf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursePdfFindFirstArgs>(args?: SelectSubset<T, CoursePdfFindFirstArgs<ExtArgs>>): Prisma__CoursePdfClient<$Result.GetResult<Prisma.$CoursePdfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoursePdf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePdfFindFirstOrThrowArgs} args - Arguments to find a CoursePdf
     * @example
     * // Get one CoursePdf
     * const coursePdf = await prisma.coursePdf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursePdfFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursePdfFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursePdfClient<$Result.GetResult<Prisma.$CoursePdfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoursePdfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePdfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoursePdfs
     * const coursePdfs = await prisma.coursePdf.findMany()
     * 
     * // Get first 10 CoursePdfs
     * const coursePdfs = await prisma.coursePdf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursePdfWithIdOnly = await prisma.coursePdf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursePdfFindManyArgs>(args?: SelectSubset<T, CoursePdfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoursePdf.
     * @param {CoursePdfCreateArgs} args - Arguments to create a CoursePdf.
     * @example
     * // Create one CoursePdf
     * const CoursePdf = await prisma.coursePdf.create({
     *   data: {
     *     // ... data to create a CoursePdf
     *   }
     * })
     * 
     */
    create<T extends CoursePdfCreateArgs>(args: SelectSubset<T, CoursePdfCreateArgs<ExtArgs>>): Prisma__CoursePdfClient<$Result.GetResult<Prisma.$CoursePdfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoursePdfs.
     * @param {CoursePdfCreateManyArgs} args - Arguments to create many CoursePdfs.
     * @example
     * // Create many CoursePdfs
     * const coursePdf = await prisma.coursePdf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursePdfCreateManyArgs>(args?: SelectSubset<T, CoursePdfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CoursePdf.
     * @param {CoursePdfDeleteArgs} args - Arguments to delete one CoursePdf.
     * @example
     * // Delete one CoursePdf
     * const CoursePdf = await prisma.coursePdf.delete({
     *   where: {
     *     // ... filter to delete one CoursePdf
     *   }
     * })
     * 
     */
    delete<T extends CoursePdfDeleteArgs>(args: SelectSubset<T, CoursePdfDeleteArgs<ExtArgs>>): Prisma__CoursePdfClient<$Result.GetResult<Prisma.$CoursePdfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoursePdf.
     * @param {CoursePdfUpdateArgs} args - Arguments to update one CoursePdf.
     * @example
     * // Update one CoursePdf
     * const coursePdf = await prisma.coursePdf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursePdfUpdateArgs>(args: SelectSubset<T, CoursePdfUpdateArgs<ExtArgs>>): Prisma__CoursePdfClient<$Result.GetResult<Prisma.$CoursePdfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoursePdfs.
     * @param {CoursePdfDeleteManyArgs} args - Arguments to filter CoursePdfs to delete.
     * @example
     * // Delete a few CoursePdfs
     * const { count } = await prisma.coursePdf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursePdfDeleteManyArgs>(args?: SelectSubset<T, CoursePdfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoursePdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePdfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoursePdfs
     * const coursePdf = await prisma.coursePdf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursePdfUpdateManyArgs>(args: SelectSubset<T, CoursePdfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoursePdf.
     * @param {CoursePdfUpsertArgs} args - Arguments to update or create a CoursePdf.
     * @example
     * // Update or create a CoursePdf
     * const coursePdf = await prisma.coursePdf.upsert({
     *   create: {
     *     // ... data to create a CoursePdf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoursePdf we want to update
     *   }
     * })
     */
    upsert<T extends CoursePdfUpsertArgs>(args: SelectSubset<T, CoursePdfUpsertArgs<ExtArgs>>): Prisma__CoursePdfClient<$Result.GetResult<Prisma.$CoursePdfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoursePdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePdfCountArgs} args - Arguments to filter CoursePdfs to count.
     * @example
     * // Count the number of CoursePdfs
     * const count = await prisma.coursePdf.count({
     *   where: {
     *     // ... the filter for the CoursePdfs we want to count
     *   }
     * })
    **/
    count<T extends CoursePdfCountArgs>(
      args?: Subset<T, CoursePdfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursePdfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoursePdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePdfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursePdfAggregateArgs>(args: Subset<T, CoursePdfAggregateArgs>): Prisma.PrismaPromise<GetCoursePdfAggregateType<T>>

    /**
     * Group by CoursePdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePdfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoursePdfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursePdfGroupByArgs['orderBy'] }
        : { orderBy?: CoursePdfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoursePdfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursePdfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoursePdf model
   */
  readonly fields: CoursePdfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoursePdf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursePdfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoursePdf model
   */
  interface CoursePdfFieldRefs {
    readonly id: FieldRef<"CoursePdf", 'BigInt'>
    readonly course_id: FieldRef<"CoursePdf", 'BigInt'>
    readonly user_id: FieldRef<"CoursePdf", 'BigInt'>
    readonly pdf_url: FieldRef<"CoursePdf", 'String'>
    readonly created_at: FieldRef<"CoursePdf", 'DateTime'>
    readonly updated_at: FieldRef<"CoursePdf", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoursePdf findUnique
   */
  export type CoursePdfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePdf
     */
    select?: CoursePdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePdf
     */
    omit?: CoursePdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePdfInclude<ExtArgs> | null
    /**
     * Filter, which CoursePdf to fetch.
     */
    where: CoursePdfWhereUniqueInput
  }

  /**
   * CoursePdf findUniqueOrThrow
   */
  export type CoursePdfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePdf
     */
    select?: CoursePdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePdf
     */
    omit?: CoursePdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePdfInclude<ExtArgs> | null
    /**
     * Filter, which CoursePdf to fetch.
     */
    where: CoursePdfWhereUniqueInput
  }

  /**
   * CoursePdf findFirst
   */
  export type CoursePdfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePdf
     */
    select?: CoursePdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePdf
     */
    omit?: CoursePdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePdfInclude<ExtArgs> | null
    /**
     * Filter, which CoursePdf to fetch.
     */
    where?: CoursePdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePdfs to fetch.
     */
    orderBy?: CoursePdfOrderByWithRelationInput | CoursePdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursePdfs.
     */
    cursor?: CoursePdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursePdfs.
     */
    distinct?: CoursePdfScalarFieldEnum | CoursePdfScalarFieldEnum[]
  }

  /**
   * CoursePdf findFirstOrThrow
   */
  export type CoursePdfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePdf
     */
    select?: CoursePdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePdf
     */
    omit?: CoursePdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePdfInclude<ExtArgs> | null
    /**
     * Filter, which CoursePdf to fetch.
     */
    where?: CoursePdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePdfs to fetch.
     */
    orderBy?: CoursePdfOrderByWithRelationInput | CoursePdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursePdfs.
     */
    cursor?: CoursePdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursePdfs.
     */
    distinct?: CoursePdfScalarFieldEnum | CoursePdfScalarFieldEnum[]
  }

  /**
   * CoursePdf findMany
   */
  export type CoursePdfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePdf
     */
    select?: CoursePdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePdf
     */
    omit?: CoursePdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePdfInclude<ExtArgs> | null
    /**
     * Filter, which CoursePdfs to fetch.
     */
    where?: CoursePdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePdfs to fetch.
     */
    orderBy?: CoursePdfOrderByWithRelationInput | CoursePdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoursePdfs.
     */
    cursor?: CoursePdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePdfs.
     */
    skip?: number
    distinct?: CoursePdfScalarFieldEnum | CoursePdfScalarFieldEnum[]
  }

  /**
   * CoursePdf create
   */
  export type CoursePdfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePdf
     */
    select?: CoursePdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePdf
     */
    omit?: CoursePdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePdfInclude<ExtArgs> | null
    /**
     * The data needed to create a CoursePdf.
     */
    data: XOR<CoursePdfCreateInput, CoursePdfUncheckedCreateInput>
  }

  /**
   * CoursePdf createMany
   */
  export type CoursePdfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoursePdfs.
     */
    data: CoursePdfCreateManyInput | CoursePdfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoursePdf update
   */
  export type CoursePdfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePdf
     */
    select?: CoursePdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePdf
     */
    omit?: CoursePdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePdfInclude<ExtArgs> | null
    /**
     * The data needed to update a CoursePdf.
     */
    data: XOR<CoursePdfUpdateInput, CoursePdfUncheckedUpdateInput>
    /**
     * Choose, which CoursePdf to update.
     */
    where: CoursePdfWhereUniqueInput
  }

  /**
   * CoursePdf updateMany
   */
  export type CoursePdfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoursePdfs.
     */
    data: XOR<CoursePdfUpdateManyMutationInput, CoursePdfUncheckedUpdateManyInput>
    /**
     * Filter which CoursePdfs to update
     */
    where?: CoursePdfWhereInput
    /**
     * Limit how many CoursePdfs to update.
     */
    limit?: number
  }

  /**
   * CoursePdf upsert
   */
  export type CoursePdfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePdf
     */
    select?: CoursePdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePdf
     */
    omit?: CoursePdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePdfInclude<ExtArgs> | null
    /**
     * The filter to search for the CoursePdf to update in case it exists.
     */
    where: CoursePdfWhereUniqueInput
    /**
     * In case the CoursePdf found by the `where` argument doesn't exist, create a new CoursePdf with this data.
     */
    create: XOR<CoursePdfCreateInput, CoursePdfUncheckedCreateInput>
    /**
     * In case the CoursePdf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursePdfUpdateInput, CoursePdfUncheckedUpdateInput>
  }

  /**
   * CoursePdf delete
   */
  export type CoursePdfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePdf
     */
    select?: CoursePdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePdf
     */
    omit?: CoursePdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePdfInclude<ExtArgs> | null
    /**
     * Filter which CoursePdf to delete.
     */
    where: CoursePdfWhereUniqueInput
  }

  /**
   * CoursePdf deleteMany
   */
  export type CoursePdfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursePdfs to delete
     */
    where?: CoursePdfWhereInput
    /**
     * Limit how many CoursePdfs to delete.
     */
    limit?: number
  }

  /**
   * CoursePdf without action
   */
  export type CoursePdfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePdf
     */
    select?: CoursePdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePdf
     */
    omit?: CoursePdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePdfInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted: 'deleted'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    youtube_url: 'youtube_url',
    created_at: 'created_at',
    completed_at: 'completed_at',
    updated_at: 'updated_at'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    course_id: 'course_id',
    title: 'title',
    description: 'description',
    chapter_number: 'chapter_number',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    chapter_id: 'chapter_id',
    passing_score: 'passing_score',
    time_limit_secs: 'time_limit_secs',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    quiz_id: 'quiz_id',
    question_text: 'question_text',
    question_type: 'question_type',
    points: 'points',
    question_number: 'question_number',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    id: 'id',
    question_id: 'question_id',
    option_text: 'option_text',
    options_number: 'options_number',
    is_correct: 'is_correct',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const WrittenAnswerScalarFieldEnum: {
    id: 'id',
    question_id: 'question_id',
    answer: 'answer',
    match_percentage: 'match_percentage',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WrittenAnswerScalarFieldEnum = (typeof WrittenAnswerScalarFieldEnum)[keyof typeof WrittenAnswerScalarFieldEnum]


  export const UserCourseProgressScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    course_id: 'course_id',
    completion_percentage: 'completion_percentage',
    is_complete: 'is_complete',
    current_chapter_id: 'current_chapter_id',
    completed_at: 'completed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserCourseProgressScalarFieldEnum = (typeof UserCourseProgressScalarFieldEnum)[keyof typeof UserCourseProgressScalarFieldEnum]


  export const UserChapterProgressScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    chapter_id: 'chapter_id',
    completion_percentage: 'completion_percentage',
    is_complete: 'is_complete',
    completed_at: 'completed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserChapterProgressScalarFieldEnum = (typeof UserChapterProgressScalarFieldEnum)[keyof typeof UserChapterProgressScalarFieldEnum]


  export const UserQuizAttemptScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    quiz_id: 'quiz_id',
    score: 'score',
    passed: 'passed',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserQuizAttemptScalarFieldEnum = (typeof UserQuizAttemptScalarFieldEnum)[keyof typeof UserQuizAttemptScalarFieldEnum]


  export const UserResponseScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    attempt_id: 'attempt_id',
    question_id: 'question_id',
    selected_option_id: 'selected_option_id',
    written_response: 'written_response',
    is_correct: 'is_correct',
    points_awarded: 'points_awarded',
    graded_at: 'graded_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserResponseScalarFieldEnum = (typeof UserResponseScalarFieldEnum)[keyof typeof UserResponseScalarFieldEnum]


  export const CoursePdfScalarFieldEnum: {
    id: 'id',
    course_id: 'course_id',
    user_id: 'user_id',
    pdf_url: 'pdf_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CoursePdfScalarFieldEnum = (typeof CoursePdfScalarFieldEnum)[keyof typeof CoursePdfScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CourseOrderByRelevanceFieldEnum: {
    title: 'title',
    youtube_url: 'youtube_url'
  };

  export type CourseOrderByRelevanceFieldEnum = (typeof CourseOrderByRelevanceFieldEnum)[keyof typeof CourseOrderByRelevanceFieldEnum]


  export const ChapterOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type ChapterOrderByRelevanceFieldEnum = (typeof ChapterOrderByRelevanceFieldEnum)[keyof typeof ChapterOrderByRelevanceFieldEnum]


  export const QuestionOrderByRelevanceFieldEnum: {
    question_text: 'question_text'
  };

  export type QuestionOrderByRelevanceFieldEnum = (typeof QuestionOrderByRelevanceFieldEnum)[keyof typeof QuestionOrderByRelevanceFieldEnum]


  export const OptionOrderByRelevanceFieldEnum: {
    option_text: 'option_text'
  };

  export type OptionOrderByRelevanceFieldEnum = (typeof OptionOrderByRelevanceFieldEnum)[keyof typeof OptionOrderByRelevanceFieldEnum]


  export const WrittenAnswerOrderByRelevanceFieldEnum: {
    answer: 'answer'
  };

  export type WrittenAnswerOrderByRelevanceFieldEnum = (typeof WrittenAnswerOrderByRelevanceFieldEnum)[keyof typeof WrittenAnswerOrderByRelevanceFieldEnum]


  export const UserResponseOrderByRelevanceFieldEnum: {
    written_response: 'written_response'
  };

  export type UserResponseOrderByRelevanceFieldEnum = (typeof UserResponseOrderByRelevanceFieldEnum)[keyof typeof UserResponseOrderByRelevanceFieldEnum]


  export const CoursePdfOrderByRelevanceFieldEnum: {
    pdf_url: 'pdf_url'
  };

  export type CoursePdfOrderByRelevanceFieldEnum = (typeof CoursePdfOrderByRelevanceFieldEnum)[keyof typeof CoursePdfOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    fullname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted?: BoolFilter<"User"> | boolean
    courses?: CourseListRelationFilter
    course_pdfs?: CoursePdfListRelationFilter
    user_course_progress?: UserCourseProgressListRelationFilter
    user_chapter_progress?: UserChapterProgressListRelationFilter
    user_quiz_attempts?: UserQuizAttemptListRelationFilter
    user_responses?: UserResponseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
    course_pdfs?: CoursePdfOrderByRelationAggregateInput
    user_course_progress?: UserCourseProgressOrderByRelationAggregateInput
    user_chapter_progress?: UserChapterProgressOrderByRelationAggregateInput
    user_quiz_attempts?: UserQuizAttemptOrderByRelationAggregateInput
    user_responses?: UserResponseOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted?: BoolFilter<"User"> | boolean
    courses?: CourseListRelationFilter
    course_pdfs?: CoursePdfListRelationFilter
    user_course_progress?: UserCourseProgressListRelationFilter
    user_chapter_progress?: UserChapterProgressListRelationFilter
    user_quiz_attempts?: UserQuizAttemptListRelationFilter
    user_responses?: UserResponseListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    fullname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deleted?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: BigIntFilter<"Course"> | bigint | number
    user_id?: BigIntFilter<"Course"> | bigint | number
    title?: StringFilter<"Course"> | string
    youtube_url?: StringFilter<"Course"> | string
    created_at?: DateTimeFilter<"Course"> | Date | string
    completed_at?: DateTimeNullableFilter<"Course"> | Date | string | null
    updated_at?: DateTimeFilter<"Course"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapters?: ChapterListRelationFilter
    course_pdfs?: CoursePdfListRelationFilter
    user_course_progress?: UserCourseProgressListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    youtube_url?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    chapters?: ChapterOrderByRelationAggregateInput
    course_pdfs?: CoursePdfOrderByRelationAggregateInput
    user_course_progress?: UserCourseProgressOrderByRelationAggregateInput
    _relevance?: CourseOrderByRelevanceInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    user_id?: BigIntFilter<"Course"> | bigint | number
    title?: StringFilter<"Course"> | string
    youtube_url?: StringFilter<"Course"> | string
    created_at?: DateTimeFilter<"Course"> | Date | string
    completed_at?: DateTimeNullableFilter<"Course"> | Date | string | null
    updated_at?: DateTimeFilter<"Course"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapters?: ChapterListRelationFilter
    course_pdfs?: CoursePdfListRelationFilter
    user_course_progress?: UserCourseProgressListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    youtube_url?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Course"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"Course"> | bigint | number
    title?: StringWithAggregatesFilter<"Course"> | string
    youtube_url?: StringWithAggregatesFilter<"Course"> | string
    created_at?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    completed_at?: DateTimeNullableWithAggregatesFilter<"Course"> | Date | string | null
    updated_at?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type ChapterWhereInput = {
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    id?: BigIntFilter<"Chapter"> | bigint | number
    course_id?: BigIntFilter<"Chapter"> | bigint | number
    title?: StringFilter<"Chapter"> | string
    description?: StringNullableFilter<"Chapter"> | string | null
    chapter_number?: BigIntFilter<"Chapter"> | bigint | number
    created_at?: DateTimeFilter<"Chapter"> | Date | string
    updated_at?: DateTimeFilter<"Chapter"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    quizzes?: QuizListRelationFilter
    user_chapter_progress?: UserChapterProgressListRelationFilter
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    chapter_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    course?: CourseOrderByWithRelationInput
    quizzes?: QuizOrderByRelationAggregateInput
    user_chapter_progress?: UserChapterProgressOrderByRelationAggregateInput
    _relevance?: ChapterOrderByRelevanceInput
  }

  export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ChapterWhereInput | ChapterWhereInput[]
    OR?: ChapterWhereInput[]
    NOT?: ChapterWhereInput | ChapterWhereInput[]
    course_id?: BigIntFilter<"Chapter"> | bigint | number
    title?: StringFilter<"Chapter"> | string
    description?: StringNullableFilter<"Chapter"> | string | null
    chapter_number?: BigIntFilter<"Chapter"> | bigint | number
    created_at?: DateTimeFilter<"Chapter"> | Date | string
    updated_at?: DateTimeFilter<"Chapter"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    quizzes?: QuizListRelationFilter
    user_chapter_progress?: UserChapterProgressListRelationFilter
  }, "id">

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    chapter_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _avg?: ChapterAvgOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
    _sum?: ChapterSumOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    OR?: ChapterScalarWhereWithAggregatesInput[]
    NOT?: ChapterScalarWhereWithAggregatesInput | ChapterScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Chapter"> | bigint | number
    course_id?: BigIntWithAggregatesFilter<"Chapter"> | bigint | number
    title?: StringWithAggregatesFilter<"Chapter"> | string
    description?: StringNullableWithAggregatesFilter<"Chapter"> | string | null
    chapter_number?: BigIntWithAggregatesFilter<"Chapter"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Chapter"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: BigIntFilter<"Quiz"> | bigint | number
    chapter_id?: BigIntFilter<"Quiz"> | bigint | number
    passing_score?: BigIntFilter<"Quiz"> | bigint | number
    time_limit_secs?: BigIntFilter<"Quiz"> | bigint | number
    created_at?: DateTimeFilter<"Quiz"> | Date | string
    updated_at?: DateTimeFilter<"Quiz"> | Date | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    questions?: QuestionListRelationFilter
    user_quiz_attempts?: UserQuizAttemptListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    passing_score?: SortOrder
    time_limit_secs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    chapter?: ChapterOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    user_quiz_attempts?: UserQuizAttemptOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    chapter_id?: BigIntFilter<"Quiz"> | bigint | number
    passing_score?: BigIntFilter<"Quiz"> | bigint | number
    time_limit_secs?: BigIntFilter<"Quiz"> | bigint | number
    created_at?: DateTimeFilter<"Quiz"> | Date | string
    updated_at?: DateTimeFilter<"Quiz"> | Date | string
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
    questions?: QuestionListRelationFilter
    user_quiz_attempts?: UserQuizAttemptListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    passing_score?: SortOrder
    time_limit_secs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Quiz"> | bigint | number
    chapter_id?: BigIntWithAggregatesFilter<"Quiz"> | bigint | number
    passing_score?: BigIntWithAggregatesFilter<"Quiz"> | bigint | number
    time_limit_secs?: BigIntWithAggregatesFilter<"Quiz"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: BigIntFilter<"Question"> | bigint | number
    quiz_id?: BigIntFilter<"Question"> | bigint | number
    question_text?: StringFilter<"Question"> | string
    question_type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    points?: BigIntFilter<"Question"> | bigint | number
    question_number?: BigIntFilter<"Question"> | bigint | number
    created_at?: DateTimeFilter<"Question"> | Date | string
    updated_at?: DateTimeFilter<"Question"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    options?: OptionListRelationFilter
    user_responses?: UserResponseListRelationFilter
    written_answers?: WrittenAnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    quiz_id?: SortOrder
    question_text?: SortOrder
    question_type?: SortOrder
    points?: SortOrder
    question_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    options?: OptionOrderByRelationAggregateInput
    user_responses?: UserResponseOrderByRelationAggregateInput
    written_answers?: WrittenAnswerOrderByRelationAggregateInput
    _relevance?: QuestionOrderByRelevanceInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    quiz_id?: BigIntFilter<"Question"> | bigint | number
    question_text?: StringFilter<"Question"> | string
    question_type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    points?: BigIntFilter<"Question"> | bigint | number
    question_number?: BigIntFilter<"Question"> | bigint | number
    created_at?: DateTimeFilter<"Question"> | Date | string
    updated_at?: DateTimeFilter<"Question"> | Date | string
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    options?: OptionListRelationFilter
    user_responses?: UserResponseListRelationFilter
    written_answers?: WrittenAnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    quiz_id?: SortOrder
    question_text?: SortOrder
    question_type?: SortOrder
    points?: SortOrder
    question_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Question"> | bigint | number
    quiz_id?: BigIntWithAggregatesFilter<"Question"> | bigint | number
    question_text?: StringWithAggregatesFilter<"Question"> | string
    question_type?: EnumQuestionTypeWithAggregatesFilter<"Question"> | $Enums.QuestionType
    points?: BigIntWithAggregatesFilter<"Question"> | bigint | number
    question_number?: BigIntWithAggregatesFilter<"Question"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    id?: BigIntFilter<"Option"> | bigint | number
    question_id?: BigIntFilter<"Option"> | bigint | number
    option_text?: StringFilter<"Option"> | string
    options_number?: BigIntFilter<"Option"> | bigint | number
    is_correct?: BoolFilter<"Option"> | boolean
    created_at?: DateTimeFilter<"Option"> | Date | string
    updated_at?: DateTimeFilter<"Option"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    user_responses?: UserResponseListRelationFilter
  }

  export type OptionOrderByWithRelationInput = {
    id?: SortOrder
    question_id?: SortOrder
    option_text?: SortOrder
    options_number?: SortOrder
    is_correct?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    question?: QuestionOrderByWithRelationInput
    user_responses?: UserResponseOrderByRelationAggregateInput
    _relevance?: OptionOrderByRelevanceInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    question_id?: BigIntFilter<"Option"> | bigint | number
    option_text?: StringFilter<"Option"> | string
    options_number?: BigIntFilter<"Option"> | bigint | number
    is_correct?: BoolFilter<"Option"> | boolean
    created_at?: DateTimeFilter<"Option"> | Date | string
    updated_at?: DateTimeFilter<"Option"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    user_responses?: UserResponseListRelationFilter
  }, "id">

  export type OptionOrderByWithAggregationInput = {
    id?: SortOrder
    question_id?: SortOrder
    option_text?: SortOrder
    options_number?: SortOrder
    is_correct?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _avg?: OptionAvgOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
    _sum?: OptionSumOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Option"> | bigint | number
    question_id?: BigIntWithAggregatesFilter<"Option"> | bigint | number
    option_text?: StringWithAggregatesFilter<"Option"> | string
    options_number?: BigIntWithAggregatesFilter<"Option"> | bigint | number
    is_correct?: BoolWithAggregatesFilter<"Option"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Option"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Option"> | Date | string
  }

  export type WrittenAnswerWhereInput = {
    AND?: WrittenAnswerWhereInput | WrittenAnswerWhereInput[]
    OR?: WrittenAnswerWhereInput[]
    NOT?: WrittenAnswerWhereInput | WrittenAnswerWhereInput[]
    id?: BigIntFilter<"WrittenAnswer"> | bigint | number
    question_id?: BigIntFilter<"WrittenAnswer"> | bigint | number
    answer?: StringFilter<"WrittenAnswer"> | string
    match_percentage?: FloatFilter<"WrittenAnswer"> | number
    created_at?: DateTimeFilter<"WrittenAnswer"> | Date | string
    updated_at?: DateTimeFilter<"WrittenAnswer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type WrittenAnswerOrderByWithRelationInput = {
    id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    match_percentage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    question?: QuestionOrderByWithRelationInput
    _relevance?: WrittenAnswerOrderByRelevanceInput
  }

  export type WrittenAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: WrittenAnswerWhereInput | WrittenAnswerWhereInput[]
    OR?: WrittenAnswerWhereInput[]
    NOT?: WrittenAnswerWhereInput | WrittenAnswerWhereInput[]
    question_id?: BigIntFilter<"WrittenAnswer"> | bigint | number
    answer?: StringFilter<"WrittenAnswer"> | string
    match_percentage?: FloatFilter<"WrittenAnswer"> | number
    created_at?: DateTimeFilter<"WrittenAnswer"> | Date | string
    updated_at?: DateTimeFilter<"WrittenAnswer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type WrittenAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    match_percentage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WrittenAnswerCountOrderByAggregateInput
    _avg?: WrittenAnswerAvgOrderByAggregateInput
    _max?: WrittenAnswerMaxOrderByAggregateInput
    _min?: WrittenAnswerMinOrderByAggregateInput
    _sum?: WrittenAnswerSumOrderByAggregateInput
  }

  export type WrittenAnswerScalarWhereWithAggregatesInput = {
    AND?: WrittenAnswerScalarWhereWithAggregatesInput | WrittenAnswerScalarWhereWithAggregatesInput[]
    OR?: WrittenAnswerScalarWhereWithAggregatesInput[]
    NOT?: WrittenAnswerScalarWhereWithAggregatesInput | WrittenAnswerScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"WrittenAnswer"> | bigint | number
    question_id?: BigIntWithAggregatesFilter<"WrittenAnswer"> | bigint | number
    answer?: StringWithAggregatesFilter<"WrittenAnswer"> | string
    match_percentage?: FloatWithAggregatesFilter<"WrittenAnswer"> | number
    created_at?: DateTimeWithAggregatesFilter<"WrittenAnswer"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"WrittenAnswer"> | Date | string
  }

  export type UserCourseProgressWhereInput = {
    AND?: UserCourseProgressWhereInput | UserCourseProgressWhereInput[]
    OR?: UserCourseProgressWhereInput[]
    NOT?: UserCourseProgressWhereInput | UserCourseProgressWhereInput[]
    id?: BigIntFilter<"UserCourseProgress"> | bigint | number
    user_id?: BigIntFilter<"UserCourseProgress"> | bigint | number
    course_id?: BigIntFilter<"UserCourseProgress"> | bigint | number
    completion_percentage?: FloatFilter<"UserCourseProgress"> | number
    is_complete?: BoolFilter<"UserCourseProgress"> | boolean
    current_chapter_id?: BigIntNullableFilter<"UserCourseProgress"> | bigint | number | null
    completed_at?: DateTimeNullableFilter<"UserCourseProgress"> | Date | string | null
    created_at?: DateTimeFilter<"UserCourseProgress"> | Date | string
    updated_at?: DateTimeFilter<"UserCourseProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type UserCourseProgressOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    completion_percentage?: SortOrder
    is_complete?: SortOrder
    current_chapter_id?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type UserCourseProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserCourseProgressWhereInput | UserCourseProgressWhereInput[]
    OR?: UserCourseProgressWhereInput[]
    NOT?: UserCourseProgressWhereInput | UserCourseProgressWhereInput[]
    user_id?: BigIntFilter<"UserCourseProgress"> | bigint | number
    course_id?: BigIntFilter<"UserCourseProgress"> | bigint | number
    completion_percentage?: FloatFilter<"UserCourseProgress"> | number
    is_complete?: BoolFilter<"UserCourseProgress"> | boolean
    current_chapter_id?: BigIntNullableFilter<"UserCourseProgress"> | bigint | number | null
    completed_at?: DateTimeNullableFilter<"UserCourseProgress"> | Date | string | null
    created_at?: DateTimeFilter<"UserCourseProgress"> | Date | string
    updated_at?: DateTimeFilter<"UserCourseProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type UserCourseProgressOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    completion_percentage?: SortOrder
    is_complete?: SortOrder
    current_chapter_id?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCourseProgressCountOrderByAggregateInput
    _avg?: UserCourseProgressAvgOrderByAggregateInput
    _max?: UserCourseProgressMaxOrderByAggregateInput
    _min?: UserCourseProgressMinOrderByAggregateInput
    _sum?: UserCourseProgressSumOrderByAggregateInput
  }

  export type UserCourseProgressScalarWhereWithAggregatesInput = {
    AND?: UserCourseProgressScalarWhereWithAggregatesInput | UserCourseProgressScalarWhereWithAggregatesInput[]
    OR?: UserCourseProgressScalarWhereWithAggregatesInput[]
    NOT?: UserCourseProgressScalarWhereWithAggregatesInput | UserCourseProgressScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserCourseProgress"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"UserCourseProgress"> | bigint | number
    course_id?: BigIntWithAggregatesFilter<"UserCourseProgress"> | bigint | number
    completion_percentage?: FloatWithAggregatesFilter<"UserCourseProgress"> | number
    is_complete?: BoolWithAggregatesFilter<"UserCourseProgress"> | boolean
    current_chapter_id?: BigIntNullableWithAggregatesFilter<"UserCourseProgress"> | bigint | number | null
    completed_at?: DateTimeNullableWithAggregatesFilter<"UserCourseProgress"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"UserCourseProgress"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserCourseProgress"> | Date | string
  }

  export type UserChapterProgressWhereInput = {
    AND?: UserChapterProgressWhereInput | UserChapterProgressWhereInput[]
    OR?: UserChapterProgressWhereInput[]
    NOT?: UserChapterProgressWhereInput | UserChapterProgressWhereInput[]
    id?: BigIntFilter<"UserChapterProgress"> | bigint | number
    user_id?: BigIntFilter<"UserChapterProgress"> | bigint | number
    chapter_id?: BigIntFilter<"UserChapterProgress"> | bigint | number
    completion_percentage?: BigIntFilter<"UserChapterProgress"> | bigint | number
    is_complete?: BoolFilter<"UserChapterProgress"> | boolean
    completed_at?: DateTimeNullableFilter<"UserChapterProgress"> | Date | string | null
    created_at?: DateTimeFilter<"UserChapterProgress"> | Date | string
    updated_at?: DateTimeFilter<"UserChapterProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }

  export type UserChapterProgressOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_id?: SortOrder
    completion_percentage?: SortOrder
    is_complete?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    chapter?: ChapterOrderByWithRelationInput
  }

  export type UserChapterProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserChapterProgressWhereInput | UserChapterProgressWhereInput[]
    OR?: UserChapterProgressWhereInput[]
    NOT?: UserChapterProgressWhereInput | UserChapterProgressWhereInput[]
    user_id?: BigIntFilter<"UserChapterProgress"> | bigint | number
    chapter_id?: BigIntFilter<"UserChapterProgress"> | bigint | number
    completion_percentage?: BigIntFilter<"UserChapterProgress"> | bigint | number
    is_complete?: BoolFilter<"UserChapterProgress"> | boolean
    completed_at?: DateTimeNullableFilter<"UserChapterProgress"> | Date | string | null
    created_at?: DateTimeFilter<"UserChapterProgress"> | Date | string
    updated_at?: DateTimeFilter<"UserChapterProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chapter?: XOR<ChapterScalarRelationFilter, ChapterWhereInput>
  }, "id">

  export type UserChapterProgressOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_id?: SortOrder
    completion_percentage?: SortOrder
    is_complete?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserChapterProgressCountOrderByAggregateInput
    _avg?: UserChapterProgressAvgOrderByAggregateInput
    _max?: UserChapterProgressMaxOrderByAggregateInput
    _min?: UserChapterProgressMinOrderByAggregateInput
    _sum?: UserChapterProgressSumOrderByAggregateInput
  }

  export type UserChapterProgressScalarWhereWithAggregatesInput = {
    AND?: UserChapterProgressScalarWhereWithAggregatesInput | UserChapterProgressScalarWhereWithAggregatesInput[]
    OR?: UserChapterProgressScalarWhereWithAggregatesInput[]
    NOT?: UserChapterProgressScalarWhereWithAggregatesInput | UserChapterProgressScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserChapterProgress"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"UserChapterProgress"> | bigint | number
    chapter_id?: BigIntWithAggregatesFilter<"UserChapterProgress"> | bigint | number
    completion_percentage?: BigIntWithAggregatesFilter<"UserChapterProgress"> | bigint | number
    is_complete?: BoolWithAggregatesFilter<"UserChapterProgress"> | boolean
    completed_at?: DateTimeNullableWithAggregatesFilter<"UserChapterProgress"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"UserChapterProgress"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserChapterProgress"> | Date | string
  }

  export type UserQuizAttemptWhereInput = {
    AND?: UserQuizAttemptWhereInput | UserQuizAttemptWhereInput[]
    OR?: UserQuizAttemptWhereInput[]
    NOT?: UserQuizAttemptWhereInput | UserQuizAttemptWhereInput[]
    id?: BigIntFilter<"UserQuizAttempt"> | bigint | number
    user_id?: BigIntFilter<"UserQuizAttempt"> | bigint | number
    quiz_id?: BigIntFilter<"UserQuizAttempt"> | bigint | number
    score?: FloatFilter<"UserQuizAttempt"> | number
    passed?: BoolFilter<"UserQuizAttempt"> | boolean
    created_at?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    updated_at?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    user_responses?: UserResponseListRelationFilter
  }

  export type UserQuizAttemptOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
    user_responses?: UserResponseOrderByRelationAggregateInput
  }

  export type UserQuizAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserQuizAttemptWhereInput | UserQuizAttemptWhereInput[]
    OR?: UserQuizAttemptWhereInput[]
    NOT?: UserQuizAttemptWhereInput | UserQuizAttemptWhereInput[]
    user_id?: BigIntFilter<"UserQuizAttempt"> | bigint | number
    quiz_id?: BigIntFilter<"UserQuizAttempt"> | bigint | number
    score?: FloatFilter<"UserQuizAttempt"> | number
    passed?: BoolFilter<"UserQuizAttempt"> | boolean
    created_at?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    updated_at?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    user_responses?: UserResponseListRelationFilter
  }, "id">

  export type UserQuizAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserQuizAttemptCountOrderByAggregateInput
    _avg?: UserQuizAttemptAvgOrderByAggregateInput
    _max?: UserQuizAttemptMaxOrderByAggregateInput
    _min?: UserQuizAttemptMinOrderByAggregateInput
    _sum?: UserQuizAttemptSumOrderByAggregateInput
  }

  export type UserQuizAttemptScalarWhereWithAggregatesInput = {
    AND?: UserQuizAttemptScalarWhereWithAggregatesInput | UserQuizAttemptScalarWhereWithAggregatesInput[]
    OR?: UserQuizAttemptScalarWhereWithAggregatesInput[]
    NOT?: UserQuizAttemptScalarWhereWithAggregatesInput | UserQuizAttemptScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserQuizAttempt"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"UserQuizAttempt"> | bigint | number
    quiz_id?: BigIntWithAggregatesFilter<"UserQuizAttempt"> | bigint | number
    score?: FloatWithAggregatesFilter<"UserQuizAttempt"> | number
    passed?: BoolWithAggregatesFilter<"UserQuizAttempt"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"UserQuizAttempt"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserQuizAttempt"> | Date | string
  }

  export type UserResponseWhereInput = {
    AND?: UserResponseWhereInput | UserResponseWhereInput[]
    OR?: UserResponseWhereInput[]
    NOT?: UserResponseWhereInput | UserResponseWhereInput[]
    id?: BigIntFilter<"UserResponse"> | bigint | number
    user_id?: BigIntFilter<"UserResponse"> | bigint | number
    attempt_id?: BigIntFilter<"UserResponse"> | bigint | number
    question_id?: BigIntFilter<"UserResponse"> | bigint | number
    selected_option_id?: BigIntNullableFilter<"UserResponse"> | bigint | number | null
    written_response?: StringNullableFilter<"UserResponse"> | string | null
    is_correct?: BoolFilter<"UserResponse"> | boolean
    points_awarded?: BigIntFilter<"UserResponse"> | bigint | number
    graded_at?: DateTimeNullableFilter<"UserResponse"> | Date | string | null
    created_at?: DateTimeFilter<"UserResponse"> | Date | string
    updated_at?: DateTimeFilter<"UserResponse"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    attempt?: XOR<UserQuizAttemptScalarRelationFilter, UserQuizAttemptWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    selected_option?: XOR<OptionNullableScalarRelationFilter, OptionWhereInput> | null
  }

  export type UserResponseOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    selected_option_id?: SortOrderInput | SortOrder
    written_response?: SortOrderInput | SortOrder
    is_correct?: SortOrder
    points_awarded?: SortOrder
    graded_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    attempt?: UserQuizAttemptOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    selected_option?: OptionOrderByWithRelationInput
    _relevance?: UserResponseOrderByRelevanceInput
  }

  export type UserResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserResponseWhereInput | UserResponseWhereInput[]
    OR?: UserResponseWhereInput[]
    NOT?: UserResponseWhereInput | UserResponseWhereInput[]
    user_id?: BigIntFilter<"UserResponse"> | bigint | number
    attempt_id?: BigIntFilter<"UserResponse"> | bigint | number
    question_id?: BigIntFilter<"UserResponse"> | bigint | number
    selected_option_id?: BigIntNullableFilter<"UserResponse"> | bigint | number | null
    written_response?: StringNullableFilter<"UserResponse"> | string | null
    is_correct?: BoolFilter<"UserResponse"> | boolean
    points_awarded?: BigIntFilter<"UserResponse"> | bigint | number
    graded_at?: DateTimeNullableFilter<"UserResponse"> | Date | string | null
    created_at?: DateTimeFilter<"UserResponse"> | Date | string
    updated_at?: DateTimeFilter<"UserResponse"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    attempt?: XOR<UserQuizAttemptScalarRelationFilter, UserQuizAttemptWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    selected_option?: XOR<OptionNullableScalarRelationFilter, OptionWhereInput> | null
  }, "id">

  export type UserResponseOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    selected_option_id?: SortOrderInput | SortOrder
    written_response?: SortOrderInput | SortOrder
    is_correct?: SortOrder
    points_awarded?: SortOrder
    graded_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserResponseCountOrderByAggregateInput
    _avg?: UserResponseAvgOrderByAggregateInput
    _max?: UserResponseMaxOrderByAggregateInput
    _min?: UserResponseMinOrderByAggregateInput
    _sum?: UserResponseSumOrderByAggregateInput
  }

  export type UserResponseScalarWhereWithAggregatesInput = {
    AND?: UserResponseScalarWhereWithAggregatesInput | UserResponseScalarWhereWithAggregatesInput[]
    OR?: UserResponseScalarWhereWithAggregatesInput[]
    NOT?: UserResponseScalarWhereWithAggregatesInput | UserResponseScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserResponse"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"UserResponse"> | bigint | number
    attempt_id?: BigIntWithAggregatesFilter<"UserResponse"> | bigint | number
    question_id?: BigIntWithAggregatesFilter<"UserResponse"> | bigint | number
    selected_option_id?: BigIntNullableWithAggregatesFilter<"UserResponse"> | bigint | number | null
    written_response?: StringNullableWithAggregatesFilter<"UserResponse"> | string | null
    is_correct?: BoolWithAggregatesFilter<"UserResponse"> | boolean
    points_awarded?: BigIntWithAggregatesFilter<"UserResponse"> | bigint | number
    graded_at?: DateTimeNullableWithAggregatesFilter<"UserResponse"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"UserResponse"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserResponse"> | Date | string
  }

  export type CoursePdfWhereInput = {
    AND?: CoursePdfWhereInput | CoursePdfWhereInput[]
    OR?: CoursePdfWhereInput[]
    NOT?: CoursePdfWhereInput | CoursePdfWhereInput[]
    id?: BigIntFilter<"CoursePdf"> | bigint | number
    course_id?: BigIntFilter<"CoursePdf"> | bigint | number
    user_id?: BigIntFilter<"CoursePdf"> | bigint | number
    pdf_url?: StringFilter<"CoursePdf"> | string
    created_at?: DateTimeFilter<"CoursePdf"> | Date | string
    updated_at?: DateTimeFilter<"CoursePdf"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CoursePdfOrderByWithRelationInput = {
    id?: SortOrder
    course_id?: SortOrder
    user_id?: SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    course?: CourseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: CoursePdfOrderByRelevanceInput
  }

  export type CoursePdfWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CoursePdfWhereInput | CoursePdfWhereInput[]
    OR?: CoursePdfWhereInput[]
    NOT?: CoursePdfWhereInput | CoursePdfWhereInput[]
    course_id?: BigIntFilter<"CoursePdf"> | bigint | number
    user_id?: BigIntFilter<"CoursePdf"> | bigint | number
    pdf_url?: StringFilter<"CoursePdf"> | string
    created_at?: DateTimeFilter<"CoursePdf"> | Date | string
    updated_at?: DateTimeFilter<"CoursePdf"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CoursePdfOrderByWithAggregationInput = {
    id?: SortOrder
    course_id?: SortOrder
    user_id?: SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CoursePdfCountOrderByAggregateInput
    _avg?: CoursePdfAvgOrderByAggregateInput
    _max?: CoursePdfMaxOrderByAggregateInput
    _min?: CoursePdfMinOrderByAggregateInput
    _sum?: CoursePdfSumOrderByAggregateInput
  }

  export type CoursePdfScalarWhereWithAggregatesInput = {
    AND?: CoursePdfScalarWhereWithAggregatesInput | CoursePdfScalarWhereWithAggregatesInput[]
    OR?: CoursePdfScalarWhereWithAggregatesInput[]
    NOT?: CoursePdfScalarWhereWithAggregatesInput | CoursePdfScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CoursePdf"> | bigint | number
    course_id?: BigIntWithAggregatesFilter<"CoursePdf"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"CoursePdf"> | bigint | number
    pdf_url?: StringWithAggregatesFilter<"CoursePdf"> | string
    created_at?: DateTimeWithAggregatesFilter<"CoursePdf"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CoursePdf"> | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    courses?: CourseCreateNestedManyWithoutUserInput
    course_pdfs?: CoursePdfCreateNestedManyWithoutUserInput
    user_course_progress?: UserCourseProgressCreateNestedManyWithoutUserInput
    user_chapter_progress?: UserChapterProgressCreateNestedManyWithoutUserInput
    user_quiz_attempts?: UserQuizAttemptCreateNestedManyWithoutUserInput
    user_responses?: UserResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    course_pdfs?: CoursePdfUncheckedCreateNestedManyWithoutUserInput
    user_course_progress?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    user_chapter_progress?: UserChapterProgressUncheckedCreateNestedManyWithoutUserInput
    user_quiz_attempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutUserInput
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    courses?: CourseUpdateManyWithoutUserNestedInput
    course_pdfs?: CoursePdfUpdateManyWithoutUserNestedInput
    user_course_progress?: UserCourseProgressUpdateManyWithoutUserNestedInput
    user_chapter_progress?: UserChapterProgressUpdateManyWithoutUserNestedInput
    user_quiz_attempts?: UserQuizAttemptUpdateManyWithoutUserNestedInput
    user_responses?: UserResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    course_pdfs?: CoursePdfUncheckedUpdateManyWithoutUserNestedInput
    user_course_progress?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    user_chapter_progress?: UserChapterProgressUncheckedUpdateManyWithoutUserNestedInput
    user_quiz_attempts?: UserQuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    user_responses?: UserResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseCreateInput = {
    id?: bigint | number
    title: string
    youtube_url: string
    created_at?: Date | string
    completed_at?: Date | string | null
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCoursesInput
    chapters?: ChapterCreateNestedManyWithoutCourseInput
    course_pdfs?: CoursePdfCreateNestedManyWithoutCourseInput
    user_course_progress?: UserCourseProgressCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    title: string
    youtube_url: string
    created_at?: Date | string
    completed_at?: Date | string | null
    updated_at?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutCourseInput
    course_pdfs?: CoursePdfUncheckedCreateNestedManyWithoutCourseInput
    user_course_progress?: UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursesNestedInput
    chapters?: ChapterUpdateManyWithoutCourseNestedInput
    course_pdfs?: CoursePdfUpdateManyWithoutCourseNestedInput
    user_course_progress?: UserCourseProgressUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutCourseNestedInput
    course_pdfs?: CoursePdfUncheckedUpdateManyWithoutCourseNestedInput
    user_course_progress?: UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    title: string
    youtube_url: string
    created_at?: Date | string
    completed_at?: Date | string | null
    updated_at?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterCreateInput = {
    id?: bigint | number
    title: string
    description?: string | null
    chapter_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    course: CourseCreateNestedOneWithoutChaptersInput
    quizzes?: QuizCreateNestedManyWithoutChapterInput
    user_chapter_progress?: UserChapterProgressCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateInput = {
    id?: bigint | number
    course_id: bigint | number
    title: string
    description?: string | null
    chapter_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutChapterInput
    user_chapter_progress?: UserChapterProgressUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutChaptersNestedInput
    quizzes?: QuizUpdateManyWithoutChapterNestedInput
    user_chapter_progress?: UserChapterProgressUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutChapterNestedInput
    user_chapter_progress?: UserChapterProgressUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterCreateManyInput = {
    id?: bigint | number
    course_id: bigint | number
    title: string
    description?: string | null
    chapter_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ChapterUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    id?: bigint | number
    passing_score: bigint | number
    time_limit_secs: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    chapter: ChapterCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
    user_quiz_attempts?: UserQuizAttemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: bigint | number
    chapter_id: bigint | number
    passing_score: bigint | number
    time_limit_secs: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    user_quiz_attempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    passing_score?: BigIntFieldUpdateOperationsInput | bigint | number
    time_limit_secs?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    user_quiz_attempts?: UserQuizAttemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chapter_id?: BigIntFieldUpdateOperationsInput | bigint | number
    passing_score?: BigIntFieldUpdateOperationsInput | bigint | number
    time_limit_secs?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    user_quiz_attempts?: UserQuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: bigint | number
    chapter_id: bigint | number
    passing_score: bigint | number
    time_limit_secs: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuizUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    passing_score?: BigIntFieldUpdateOperationsInput | bigint | number
    time_limit_secs?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chapter_id?: BigIntFieldUpdateOperationsInput | bigint | number
    passing_score?: BigIntFieldUpdateOperationsInput | bigint | number
    time_limit_secs?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: bigint | number
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint | number
    question_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    options?: OptionCreateNestedManyWithoutQuestionInput
    user_responses?: UserResponseCreateNestedManyWithoutQuestionInput
    written_answers?: WrittenAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: bigint | number
    quiz_id: bigint | number
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint | number
    question_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutQuestionInput
    written_answers?: WrittenAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    options?: OptionUpdateManyWithoutQuestionNestedInput
    user_responses?: UserResponseUpdateManyWithoutQuestionNestedInput
    written_answers?: WrittenAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quiz_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    user_responses?: UserResponseUncheckedUpdateManyWithoutQuestionNestedInput
    written_answers?: WrittenAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: bigint | number
    quiz_id: bigint | number
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint | number
    question_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quiz_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionCreateInput = {
    id?: bigint | number
    option_text: string
    options_number: bigint | number
    is_correct: boolean
    created_at?: Date | string
    updated_at?: Date | string
    question: QuestionCreateNestedOneWithoutOptionsInput
    user_responses?: UserResponseCreateNestedManyWithoutSelected_optionInput
  }

  export type OptionUncheckedCreateInput = {
    id?: bigint | number
    question_id: bigint | number
    option_text: string
    options_number: bigint | number
    is_correct: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutSelected_optionInput
  }

  export type OptionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    option_text?: StringFieldUpdateOperationsInput | string
    options_number?: BigIntFieldUpdateOperationsInput | bigint | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
    user_responses?: UserResponseUpdateManyWithoutSelected_optionNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    option_text?: StringFieldUpdateOperationsInput | string
    options_number?: BigIntFieldUpdateOperationsInput | bigint | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_responses?: UserResponseUncheckedUpdateManyWithoutSelected_optionNestedInput
  }

  export type OptionCreateManyInput = {
    id?: bigint | number
    question_id: bigint | number
    option_text: string
    options_number: bigint | number
    is_correct: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OptionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    option_text?: StringFieldUpdateOperationsInput | string
    options_number?: BigIntFieldUpdateOperationsInput | bigint | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    option_text?: StringFieldUpdateOperationsInput | string
    options_number?: BigIntFieldUpdateOperationsInput | bigint | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WrittenAnswerCreateInput = {
    id?: bigint | number
    answer: string
    match_percentage: number
    created_at?: Date | string
    updated_at?: Date | string
    question: QuestionCreateNestedOneWithoutWritten_answersInput
  }

  export type WrittenAnswerUncheckedCreateInput = {
    id?: bigint | number
    question_id: bigint | number
    answer: string
    match_percentage: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WrittenAnswerUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    match_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutWritten_answersNestedInput
  }

  export type WrittenAnswerUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    match_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WrittenAnswerCreateManyInput = {
    id?: bigint | number
    question_id: bigint | number
    answer: string
    match_percentage: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WrittenAnswerUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    match_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WrittenAnswerUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    match_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressCreateInput = {
    id?: bigint | number
    completion_percentage: number
    is_complete: boolean
    current_chapter_id?: bigint | number | null
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_course_progressInput
    course: CourseCreateNestedOneWithoutUser_course_progressInput
  }

  export type UserCourseProgressUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    course_id: bigint | number
    completion_percentage: number
    is_complete: boolean
    current_chapter_id?: bigint | number | null
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCourseProgressUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: FloatFieldUpdateOperationsInput | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    current_chapter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_course_progressNestedInput
    course?: CourseUpdateOneRequiredWithoutUser_course_progressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: FloatFieldUpdateOperationsInput | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    current_chapter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    course_id: bigint | number
    completion_percentage: number
    is_complete: boolean
    current_chapter_id?: bigint | number | null
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCourseProgressUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: FloatFieldUpdateOperationsInput | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    current_chapter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: FloatFieldUpdateOperationsInput | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    current_chapter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChapterProgressCreateInput = {
    id?: bigint | number
    completion_percentage: bigint | number
    is_complete: boolean
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_chapter_progressInput
    chapter: ChapterCreateNestedOneWithoutUser_chapter_progressInput
  }

  export type UserChapterProgressUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    chapter_id: bigint | number
    completion_percentage: bigint | number
    is_complete: boolean
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserChapterProgressUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: BigIntFieldUpdateOperationsInput | bigint | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_chapter_progressNestedInput
    chapter?: ChapterUpdateOneRequiredWithoutUser_chapter_progressNestedInput
  }

  export type UserChapterProgressUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    chapter_id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: BigIntFieldUpdateOperationsInput | bigint | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChapterProgressCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    chapter_id: bigint | number
    completion_percentage: bigint | number
    is_complete: boolean
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserChapterProgressUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: BigIntFieldUpdateOperationsInput | bigint | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChapterProgressUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    chapter_id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: BigIntFieldUpdateOperationsInput | bigint | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizAttemptCreateInput = {
    id?: bigint | number
    score: number
    passed: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_quiz_attemptsInput
    quiz: QuizCreateNestedOneWithoutUser_quiz_attemptsInput
    user_responses?: UserResponseCreateNestedManyWithoutAttemptInput
  }

  export type UserQuizAttemptUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    quiz_id: bigint | number
    score: number
    passed: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type UserQuizAttemptUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    score?: FloatFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_quiz_attemptsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutUser_quiz_attemptsNestedInput
    user_responses?: UserResponseUpdateManyWithoutAttemptNestedInput
  }

  export type UserQuizAttemptUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quiz_id?: BigIntFieldUpdateOperationsInput | bigint | number
    score?: FloatFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_responses?: UserResponseUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type UserQuizAttemptCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    quiz_id: bigint | number
    score: number
    passed: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserQuizAttemptUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    score?: FloatFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizAttemptUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quiz_id?: BigIntFieldUpdateOperationsInput | bigint | number
    score?: FloatFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResponseCreateInput = {
    id?: bigint | number
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_responsesInput
    attempt: UserQuizAttemptCreateNestedOneWithoutUser_responsesInput
    question: QuestionCreateNestedOneWithoutUser_responsesInput
    selected_option?: OptionCreateNestedOneWithoutUser_responsesInput
  }

  export type UserResponseUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    attempt_id: bigint | number
    question_id: bigint | number
    selected_option_id?: bigint | number | null
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserResponseUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_responsesNestedInput
    attempt?: UserQuizAttemptUpdateOneRequiredWithoutUser_responsesNestedInput
    question?: QuestionUpdateOneRequiredWithoutUser_responsesNestedInput
    selected_option?: OptionUpdateOneWithoutUser_responsesNestedInput
  }

  export type UserResponseUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    attempt_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    selected_option_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResponseCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    attempt_id: bigint | number
    question_id: bigint | number
    selected_option_id?: bigint | number | null
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserResponseUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResponseUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    attempt_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    selected_option_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePdfCreateInput = {
    id?: bigint | number
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
    course: CourseCreateNestedOneWithoutCourse_pdfsInput
    user: UserCreateNestedOneWithoutCourse_pdfsInput
  }

  export type CoursePdfUncheckedCreateInput = {
    id?: bigint | number
    course_id: bigint | number
    user_id: bigint | number
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CoursePdfUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourse_pdfsNestedInput
    user?: UserUpdateOneRequiredWithoutCourse_pdfsNestedInput
  }

  export type CoursePdfUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePdfCreateManyInput = {
    id?: bigint | number
    course_id: bigint | number
    user_id: bigint | number
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CoursePdfUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePdfUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CoursePdfListRelationFilter = {
    every?: CoursePdfWhereInput
    some?: CoursePdfWhereInput
    none?: CoursePdfWhereInput
  }

  export type UserCourseProgressListRelationFilter = {
    every?: UserCourseProgressWhereInput
    some?: UserCourseProgressWhereInput
    none?: UserCourseProgressWhereInput
  }

  export type UserChapterProgressListRelationFilter = {
    every?: UserChapterProgressWhereInput
    some?: UserChapterProgressWhereInput
    none?: UserChapterProgressWhereInput
  }

  export type UserQuizAttemptListRelationFilter = {
    every?: UserQuizAttemptWhereInput
    some?: UserQuizAttemptWhereInput
    none?: UserQuizAttemptWhereInput
  }

  export type UserResponseListRelationFilter = {
    every?: UserResponseWhereInput
    some?: UserResponseWhereInput
    none?: UserResponseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoursePdfOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCourseProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserChapterProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserQuizAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelevanceInput = {
    fields: CourseOrderByRelevanceFieldEnum | CourseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    youtube_url?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    youtube_url?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    youtube_url?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterOrderByRelevanceInput = {
    fields: ChapterOrderByRelevanceFieldEnum | ChapterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chapter_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChapterAvgOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    chapter_number?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chapter_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chapter_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChapterSumOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    chapter_number?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ChapterScalarRelationFilter = {
    is?: ChapterWhereInput
    isNot?: ChapterWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    passing_score?: SortOrder
    time_limit_secs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    passing_score?: SortOrder
    time_limit_secs?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    passing_score?: SortOrder
    time_limit_secs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    passing_score?: SortOrder
    time_limit_secs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    id?: SortOrder
    chapter_id?: SortOrder
    passing_score?: SortOrder
    time_limit_secs?: SortOrder
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[]
    notIn?: $Enums.QuestionType[]
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type OptionListRelationFilter = {
    every?: OptionWhereInput
    some?: OptionWhereInput
    none?: OptionWhereInput
  }

  export type WrittenAnswerListRelationFilter = {
    every?: WrittenAnswerWhereInput
    some?: WrittenAnswerWhereInput
    none?: WrittenAnswerWhereInput
  }

  export type OptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WrittenAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelevanceInput = {
    fields: QuestionOrderByRelevanceFieldEnum | QuestionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    quiz_id?: SortOrder
    question_text?: SortOrder
    question_type?: SortOrder
    points?: SortOrder
    question_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    quiz_id?: SortOrder
    points?: SortOrder
    question_number?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    quiz_id?: SortOrder
    question_text?: SortOrder
    question_type?: SortOrder
    points?: SortOrder
    question_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    quiz_id?: SortOrder
    question_text?: SortOrder
    question_type?: SortOrder
    points?: SortOrder
    question_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    quiz_id?: SortOrder
    points?: SortOrder
    question_number?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[]
    notIn?: $Enums.QuestionType[]
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type OptionOrderByRelevanceInput = {
    fields: OptionOrderByRelevanceFieldEnum | OptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OptionCountOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    option_text?: SortOrder
    options_number?: SortOrder
    is_correct?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OptionAvgOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    options_number?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    option_text?: SortOrder
    options_number?: SortOrder
    is_correct?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    option_text?: SortOrder
    options_number?: SortOrder
    is_correct?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OptionSumOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    options_number?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WrittenAnswerOrderByRelevanceInput = {
    fields: WrittenAnswerOrderByRelevanceFieldEnum | WrittenAnswerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WrittenAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    match_percentage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WrittenAnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    match_percentage?: SortOrder
  }

  export type WrittenAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    match_percentage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WrittenAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    answer?: SortOrder
    match_percentage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WrittenAnswerSumOrderByAggregateInput = {
    id?: SortOrder
    question_id?: SortOrder
    match_percentage?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type UserCourseProgressCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    completion_percentage?: SortOrder
    is_complete?: SortOrder
    current_chapter_id?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserCourseProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    completion_percentage?: SortOrder
    current_chapter_id?: SortOrder
  }

  export type UserCourseProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    completion_percentage?: SortOrder
    is_complete?: SortOrder
    current_chapter_id?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserCourseProgressMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    completion_percentage?: SortOrder
    is_complete?: SortOrder
    current_chapter_id?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserCourseProgressSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    course_id?: SortOrder
    completion_percentage?: SortOrder
    current_chapter_id?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type UserChapterProgressCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_id?: SortOrder
    completion_percentage?: SortOrder
    is_complete?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserChapterProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_id?: SortOrder
    completion_percentage?: SortOrder
  }

  export type UserChapterProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_id?: SortOrder
    completion_percentage?: SortOrder
    is_complete?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserChapterProgressMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_id?: SortOrder
    completion_percentage?: SortOrder
    is_complete?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserChapterProgressSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    chapter_id?: SortOrder
    completion_percentage?: SortOrder
  }

  export type UserQuizAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserQuizAttemptAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
    score?: SortOrder
  }

  export type UserQuizAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserQuizAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
    score?: SortOrder
    passed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserQuizAttemptSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    quiz_id?: SortOrder
    score?: SortOrder
  }

  export type UserQuizAttemptScalarRelationFilter = {
    is?: UserQuizAttemptWhereInput
    isNot?: UserQuizAttemptWhereInput
  }

  export type OptionNullableScalarRelationFilter = {
    is?: OptionWhereInput | null
    isNot?: OptionWhereInput | null
  }

  export type UserResponseOrderByRelevanceInput = {
    fields: UserResponseOrderByRelevanceFieldEnum | UserResponseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserResponseCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    selected_option_id?: SortOrder
    written_response?: SortOrder
    is_correct?: SortOrder
    points_awarded?: SortOrder
    graded_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserResponseAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    selected_option_id?: SortOrder
    points_awarded?: SortOrder
  }

  export type UserResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    selected_option_id?: SortOrder
    written_response?: SortOrder
    is_correct?: SortOrder
    points_awarded?: SortOrder
    graded_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserResponseMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    selected_option_id?: SortOrder
    written_response?: SortOrder
    is_correct?: SortOrder
    points_awarded?: SortOrder
    graded_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserResponseSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    attempt_id?: SortOrder
    question_id?: SortOrder
    selected_option_id?: SortOrder
    points_awarded?: SortOrder
  }

  export type CoursePdfOrderByRelevanceInput = {
    fields: CoursePdfOrderByRelevanceFieldEnum | CoursePdfOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CoursePdfCountOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    user_id?: SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CoursePdfAvgOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    user_id?: SortOrder
  }

  export type CoursePdfMaxOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    user_id?: SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CoursePdfMinOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    user_id?: SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CoursePdfSumOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    user_id?: SortOrder
  }

  export type CourseCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CoursePdfCreateNestedManyWithoutUserInput = {
    create?: XOR<CoursePdfCreateWithoutUserInput, CoursePdfUncheckedCreateWithoutUserInput> | CoursePdfCreateWithoutUserInput[] | CoursePdfUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursePdfCreateOrConnectWithoutUserInput | CoursePdfCreateOrConnectWithoutUserInput[]
    createMany?: CoursePdfCreateManyUserInputEnvelope
    connect?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
  }

  export type UserCourseProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput> | UserCourseProgressCreateWithoutUserInput[] | UserCourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutUserInput | UserCourseProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserCourseProgressCreateManyUserInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type UserChapterProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserChapterProgressCreateWithoutUserInput, UserChapterProgressUncheckedCreateWithoutUserInput> | UserChapterProgressCreateWithoutUserInput[] | UserChapterProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChapterProgressCreateOrConnectWithoutUserInput | UserChapterProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserChapterProgressCreateManyUserInputEnvelope
    connect?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
  }

  export type UserQuizAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuizAttemptCreateWithoutUserInput, UserQuizAttemptUncheckedCreateWithoutUserInput> | UserQuizAttemptCreateWithoutUserInput[] | UserQuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutUserInput | UserQuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: UserQuizAttemptCreateManyUserInputEnvelope
    connect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
  }

  export type UserResponseCreateNestedManyWithoutUserInput = {
    create?: XOR<UserResponseCreateWithoutUserInput, UserResponseUncheckedCreateWithoutUserInput> | UserResponseCreateWithoutUserInput[] | UserResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutUserInput | UserResponseCreateOrConnectWithoutUserInput[]
    createMany?: UserResponseCreateManyUserInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CoursePdfUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoursePdfCreateWithoutUserInput, CoursePdfUncheckedCreateWithoutUserInput> | CoursePdfCreateWithoutUserInput[] | CoursePdfUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursePdfCreateOrConnectWithoutUserInput | CoursePdfCreateOrConnectWithoutUserInput[]
    createMany?: CoursePdfCreateManyUserInputEnvelope
    connect?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
  }

  export type UserCourseProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput> | UserCourseProgressCreateWithoutUserInput[] | UserCourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutUserInput | UserCourseProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserCourseProgressCreateManyUserInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type UserChapterProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserChapterProgressCreateWithoutUserInput, UserChapterProgressUncheckedCreateWithoutUserInput> | UserChapterProgressCreateWithoutUserInput[] | UserChapterProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChapterProgressCreateOrConnectWithoutUserInput | UserChapterProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserChapterProgressCreateManyUserInputEnvelope
    connect?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
  }

  export type UserQuizAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuizAttemptCreateWithoutUserInput, UserQuizAttemptUncheckedCreateWithoutUserInput> | UserQuizAttemptCreateWithoutUserInput[] | UserQuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutUserInput | UserQuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: UserQuizAttemptCreateManyUserInputEnvelope
    connect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
  }

  export type UserResponseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserResponseCreateWithoutUserInput, UserResponseUncheckedCreateWithoutUserInput> | UserResponseCreateWithoutUserInput[] | UserResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutUserInput | UserResponseCreateOrConnectWithoutUserInput[]
    createMany?: UserResponseCreateManyUserInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutUserInput | CourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutUserInput | CourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutUserInput | CourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CoursePdfUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoursePdfCreateWithoutUserInput, CoursePdfUncheckedCreateWithoutUserInput> | CoursePdfCreateWithoutUserInput[] | CoursePdfUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursePdfCreateOrConnectWithoutUserInput | CoursePdfCreateOrConnectWithoutUserInput[]
    upsert?: CoursePdfUpsertWithWhereUniqueWithoutUserInput | CoursePdfUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoursePdfCreateManyUserInputEnvelope
    set?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    disconnect?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    delete?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    connect?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    update?: CoursePdfUpdateWithWhereUniqueWithoutUserInput | CoursePdfUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoursePdfUpdateManyWithWhereWithoutUserInput | CoursePdfUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoursePdfScalarWhereInput | CoursePdfScalarWhereInput[]
  }

  export type UserCourseProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput> | UserCourseProgressCreateWithoutUserInput[] | UserCourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutUserInput | UserCourseProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutUserInput | UserCourseProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCourseProgressCreateManyUserInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutUserInput | UserCourseProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutUserInput | UserCourseProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type UserChapterProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserChapterProgressCreateWithoutUserInput, UserChapterProgressUncheckedCreateWithoutUserInput> | UserChapterProgressCreateWithoutUserInput[] | UserChapterProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChapterProgressCreateOrConnectWithoutUserInput | UserChapterProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserChapterProgressUpsertWithWhereUniqueWithoutUserInput | UserChapterProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserChapterProgressCreateManyUserInputEnvelope
    set?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    disconnect?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    delete?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    connect?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    update?: UserChapterProgressUpdateWithWhereUniqueWithoutUserInput | UserChapterProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserChapterProgressUpdateManyWithWhereWithoutUserInput | UserChapterProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserChapterProgressScalarWhereInput | UserChapterProgressScalarWhereInput[]
  }

  export type UserQuizAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuizAttemptCreateWithoutUserInput, UserQuizAttemptUncheckedCreateWithoutUserInput> | UserQuizAttemptCreateWithoutUserInput[] | UserQuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutUserInput | UserQuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: UserQuizAttemptUpsertWithWhereUniqueWithoutUserInput | UserQuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuizAttemptCreateManyUserInputEnvelope
    set?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    disconnect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    delete?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    connect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    update?: UserQuizAttemptUpdateWithWhereUniqueWithoutUserInput | UserQuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuizAttemptUpdateManyWithWhereWithoutUserInput | UserQuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuizAttemptScalarWhereInput | UserQuizAttemptScalarWhereInput[]
  }

  export type UserResponseUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserResponseCreateWithoutUserInput, UserResponseUncheckedCreateWithoutUserInput> | UserResponseCreateWithoutUserInput[] | UserResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutUserInput | UserResponseCreateOrConnectWithoutUserInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutUserInput | UserResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserResponseCreateManyUserInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutUserInput | UserResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutUserInput | UserResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput> | CourseCreateWithoutUserInput[] | CourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutUserInput | CourseCreateOrConnectWithoutUserInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutUserInput | CourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseCreateManyUserInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutUserInput | CourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutUserInput | CourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CoursePdfUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoursePdfCreateWithoutUserInput, CoursePdfUncheckedCreateWithoutUserInput> | CoursePdfCreateWithoutUserInput[] | CoursePdfUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursePdfCreateOrConnectWithoutUserInput | CoursePdfCreateOrConnectWithoutUserInput[]
    upsert?: CoursePdfUpsertWithWhereUniqueWithoutUserInput | CoursePdfUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoursePdfCreateManyUserInputEnvelope
    set?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    disconnect?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    delete?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    connect?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    update?: CoursePdfUpdateWithWhereUniqueWithoutUserInput | CoursePdfUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoursePdfUpdateManyWithWhereWithoutUserInput | CoursePdfUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoursePdfScalarWhereInput | CoursePdfScalarWhereInput[]
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput> | UserCourseProgressCreateWithoutUserInput[] | UserCourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutUserInput | UserCourseProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutUserInput | UserCourseProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCourseProgressCreateManyUserInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutUserInput | UserCourseProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutUserInput | UserCourseProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type UserChapterProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserChapterProgressCreateWithoutUserInput, UserChapterProgressUncheckedCreateWithoutUserInput> | UserChapterProgressCreateWithoutUserInput[] | UserChapterProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChapterProgressCreateOrConnectWithoutUserInput | UserChapterProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserChapterProgressUpsertWithWhereUniqueWithoutUserInput | UserChapterProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserChapterProgressCreateManyUserInputEnvelope
    set?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    disconnect?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    delete?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    connect?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    update?: UserChapterProgressUpdateWithWhereUniqueWithoutUserInput | UserChapterProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserChapterProgressUpdateManyWithWhereWithoutUserInput | UserChapterProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserChapterProgressScalarWhereInput | UserChapterProgressScalarWhereInput[]
  }

  export type UserQuizAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuizAttemptCreateWithoutUserInput, UserQuizAttemptUncheckedCreateWithoutUserInput> | UserQuizAttemptCreateWithoutUserInput[] | UserQuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutUserInput | UserQuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: UserQuizAttemptUpsertWithWhereUniqueWithoutUserInput | UserQuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuizAttemptCreateManyUserInputEnvelope
    set?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    disconnect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    delete?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    connect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    update?: UserQuizAttemptUpdateWithWhereUniqueWithoutUserInput | UserQuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuizAttemptUpdateManyWithWhereWithoutUserInput | UserQuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuizAttemptScalarWhereInput | UserQuizAttemptScalarWhereInput[]
  }

  export type UserResponseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserResponseCreateWithoutUserInput, UserResponseUncheckedCreateWithoutUserInput> | UserResponseCreateWithoutUserInput[] | UserResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutUserInput | UserResponseCreateOrConnectWithoutUserInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutUserInput | UserResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserResponseCreateManyUserInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutUserInput | UserResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutUserInput | UserResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type ChapterCreateNestedManyWithoutCourseInput = {
    create?: XOR<ChapterCreateWithoutCourseInput, ChapterUncheckedCreateWithoutCourseInput> | ChapterCreateWithoutCourseInput[] | ChapterUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutCourseInput | ChapterCreateOrConnectWithoutCourseInput[]
    createMany?: ChapterCreateManyCourseInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type CoursePdfCreateNestedManyWithoutCourseInput = {
    create?: XOR<CoursePdfCreateWithoutCourseInput, CoursePdfUncheckedCreateWithoutCourseInput> | CoursePdfCreateWithoutCourseInput[] | CoursePdfUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePdfCreateOrConnectWithoutCourseInput | CoursePdfCreateOrConnectWithoutCourseInput[]
    createMany?: CoursePdfCreateManyCourseInputEnvelope
    connect?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
  }

  export type UserCourseProgressCreateNestedManyWithoutCourseInput = {
    create?: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput> | UserCourseProgressCreateWithoutCourseInput[] | UserCourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutCourseInput | UserCourseProgressCreateOrConnectWithoutCourseInput[]
    createMany?: UserCourseProgressCreateManyCourseInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type ChapterUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ChapterCreateWithoutCourseInput, ChapterUncheckedCreateWithoutCourseInput> | ChapterCreateWithoutCourseInput[] | ChapterUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutCourseInput | ChapterCreateOrConnectWithoutCourseInput[]
    createMany?: ChapterCreateManyCourseInputEnvelope
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
  }

  export type CoursePdfUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CoursePdfCreateWithoutCourseInput, CoursePdfUncheckedCreateWithoutCourseInput> | CoursePdfCreateWithoutCourseInput[] | CoursePdfUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePdfCreateOrConnectWithoutCourseInput | CoursePdfCreateOrConnectWithoutCourseInput[]
    createMany?: CoursePdfCreateManyCourseInputEnvelope
    connect?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
  }

  export type UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput> | UserCourseProgressCreateWithoutCourseInput[] | UserCourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutCourseInput | UserCourseProgressCreateOrConnectWithoutCourseInput[]
    createMany?: UserCourseProgressCreateManyCourseInputEnvelope
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    upsert?: UserUpsertWithoutCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursesInput, UserUpdateWithoutCoursesInput>, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type ChapterUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ChapterCreateWithoutCourseInput, ChapterUncheckedCreateWithoutCourseInput> | ChapterCreateWithoutCourseInput[] | ChapterUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutCourseInput | ChapterCreateOrConnectWithoutCourseInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutCourseInput | ChapterUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ChapterCreateManyCourseInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutCourseInput | ChapterUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutCourseInput | ChapterUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type CoursePdfUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CoursePdfCreateWithoutCourseInput, CoursePdfUncheckedCreateWithoutCourseInput> | CoursePdfCreateWithoutCourseInput[] | CoursePdfUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePdfCreateOrConnectWithoutCourseInput | CoursePdfCreateOrConnectWithoutCourseInput[]
    upsert?: CoursePdfUpsertWithWhereUniqueWithoutCourseInput | CoursePdfUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CoursePdfCreateManyCourseInputEnvelope
    set?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    disconnect?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    delete?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    connect?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    update?: CoursePdfUpdateWithWhereUniqueWithoutCourseInput | CoursePdfUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CoursePdfUpdateManyWithWhereWithoutCourseInput | CoursePdfUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CoursePdfScalarWhereInput | CoursePdfScalarWhereInput[]
  }

  export type UserCourseProgressUpdateManyWithoutCourseNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput> | UserCourseProgressCreateWithoutCourseInput[] | UserCourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutCourseInput | UserCourseProgressCreateOrConnectWithoutCourseInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput | UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: UserCourseProgressCreateManyCourseInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput | UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutCourseInput | UserCourseProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type ChapterUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ChapterCreateWithoutCourseInput, ChapterUncheckedCreateWithoutCourseInput> | ChapterCreateWithoutCourseInput[] | ChapterUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ChapterCreateOrConnectWithoutCourseInput | ChapterCreateOrConnectWithoutCourseInput[]
    upsert?: ChapterUpsertWithWhereUniqueWithoutCourseInput | ChapterUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ChapterCreateManyCourseInputEnvelope
    set?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    disconnect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    delete?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    connect?: ChapterWhereUniqueInput | ChapterWhereUniqueInput[]
    update?: ChapterUpdateWithWhereUniqueWithoutCourseInput | ChapterUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ChapterUpdateManyWithWhereWithoutCourseInput | ChapterUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
  }

  export type CoursePdfUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CoursePdfCreateWithoutCourseInput, CoursePdfUncheckedCreateWithoutCourseInput> | CoursePdfCreateWithoutCourseInput[] | CoursePdfUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePdfCreateOrConnectWithoutCourseInput | CoursePdfCreateOrConnectWithoutCourseInput[]
    upsert?: CoursePdfUpsertWithWhereUniqueWithoutCourseInput | CoursePdfUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CoursePdfCreateManyCourseInputEnvelope
    set?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    disconnect?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    delete?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    connect?: CoursePdfWhereUniqueInput | CoursePdfWhereUniqueInput[]
    update?: CoursePdfUpdateWithWhereUniqueWithoutCourseInput | CoursePdfUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CoursePdfUpdateManyWithWhereWithoutCourseInput | CoursePdfUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CoursePdfScalarWhereInput | CoursePdfScalarWhereInput[]
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput> | UserCourseProgressCreateWithoutCourseInput[] | UserCourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: UserCourseProgressCreateOrConnectWithoutCourseInput | UserCourseProgressCreateOrConnectWithoutCourseInput[]
    upsert?: UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput | UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: UserCourseProgressCreateManyCourseInputEnvelope
    set?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    disconnect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    delete?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    connect?: UserCourseProgressWhereUniqueInput | UserCourseProgressWhereUniqueInput[]
    update?: UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput | UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: UserCourseProgressUpdateManyWithWhereWithoutCourseInput | UserCourseProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutChaptersInput = {
    create?: XOR<CourseCreateWithoutChaptersInput, CourseUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutChaptersInput
    connect?: CourseWhereUniqueInput
  }

  export type QuizCreateNestedManyWithoutChapterInput = {
    create?: XOR<QuizCreateWithoutChapterInput, QuizUncheckedCreateWithoutChapterInput> | QuizCreateWithoutChapterInput[] | QuizUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutChapterInput | QuizCreateOrConnectWithoutChapterInput[]
    createMany?: QuizCreateManyChapterInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type UserChapterProgressCreateNestedManyWithoutChapterInput = {
    create?: XOR<UserChapterProgressCreateWithoutChapterInput, UserChapterProgressUncheckedCreateWithoutChapterInput> | UserChapterProgressCreateWithoutChapterInput[] | UserChapterProgressUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: UserChapterProgressCreateOrConnectWithoutChapterInput | UserChapterProgressCreateOrConnectWithoutChapterInput[]
    createMany?: UserChapterProgressCreateManyChapterInputEnvelope
    connect?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<QuizCreateWithoutChapterInput, QuizUncheckedCreateWithoutChapterInput> | QuizCreateWithoutChapterInput[] | QuizUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutChapterInput | QuizCreateOrConnectWithoutChapterInput[]
    createMany?: QuizCreateManyChapterInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type UserChapterProgressUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<UserChapterProgressCreateWithoutChapterInput, UserChapterProgressUncheckedCreateWithoutChapterInput> | UserChapterProgressCreateWithoutChapterInput[] | UserChapterProgressUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: UserChapterProgressCreateOrConnectWithoutChapterInput | UserChapterProgressCreateOrConnectWithoutChapterInput[]
    createMany?: UserChapterProgressCreateManyChapterInputEnvelope
    connect?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CourseUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<CourseCreateWithoutChaptersInput, CourseUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutChaptersInput
    upsert?: CourseUpsertWithoutChaptersInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutChaptersInput, CourseUpdateWithoutChaptersInput>, CourseUncheckedUpdateWithoutChaptersInput>
  }

  export type QuizUpdateManyWithoutChapterNestedInput = {
    create?: XOR<QuizCreateWithoutChapterInput, QuizUncheckedCreateWithoutChapterInput> | QuizCreateWithoutChapterInput[] | QuizUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutChapterInput | QuizCreateOrConnectWithoutChapterInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutChapterInput | QuizUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: QuizCreateManyChapterInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutChapterInput | QuizUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutChapterInput | QuizUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UserChapterProgressUpdateManyWithoutChapterNestedInput = {
    create?: XOR<UserChapterProgressCreateWithoutChapterInput, UserChapterProgressUncheckedCreateWithoutChapterInput> | UserChapterProgressCreateWithoutChapterInput[] | UserChapterProgressUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: UserChapterProgressCreateOrConnectWithoutChapterInput | UserChapterProgressCreateOrConnectWithoutChapterInput[]
    upsert?: UserChapterProgressUpsertWithWhereUniqueWithoutChapterInput | UserChapterProgressUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: UserChapterProgressCreateManyChapterInputEnvelope
    set?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    disconnect?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    delete?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    connect?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    update?: UserChapterProgressUpdateWithWhereUniqueWithoutChapterInput | UserChapterProgressUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: UserChapterProgressUpdateManyWithWhereWithoutChapterInput | UserChapterProgressUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: UserChapterProgressScalarWhereInput | UserChapterProgressScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<QuizCreateWithoutChapterInput, QuizUncheckedCreateWithoutChapterInput> | QuizCreateWithoutChapterInput[] | QuizUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutChapterInput | QuizCreateOrConnectWithoutChapterInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutChapterInput | QuizUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: QuizCreateManyChapterInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutChapterInput | QuizUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutChapterInput | QuizUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UserChapterProgressUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: XOR<UserChapterProgressCreateWithoutChapterInput, UserChapterProgressUncheckedCreateWithoutChapterInput> | UserChapterProgressCreateWithoutChapterInput[] | UserChapterProgressUncheckedCreateWithoutChapterInput[]
    connectOrCreate?: UserChapterProgressCreateOrConnectWithoutChapterInput | UserChapterProgressCreateOrConnectWithoutChapterInput[]
    upsert?: UserChapterProgressUpsertWithWhereUniqueWithoutChapterInput | UserChapterProgressUpsertWithWhereUniqueWithoutChapterInput[]
    createMany?: UserChapterProgressCreateManyChapterInputEnvelope
    set?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    disconnect?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    delete?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    connect?: UserChapterProgressWhereUniqueInput | UserChapterProgressWhereUniqueInput[]
    update?: UserChapterProgressUpdateWithWhereUniqueWithoutChapterInput | UserChapterProgressUpdateWithWhereUniqueWithoutChapterInput[]
    updateMany?: UserChapterProgressUpdateManyWithWhereWithoutChapterInput | UserChapterProgressUpdateManyWithWhereWithoutChapterInput[]
    deleteMany?: UserChapterProgressScalarWhereInput | UserChapterProgressScalarWhereInput[]
  }

  export type ChapterCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<ChapterCreateWithoutQuizzesInput, ChapterUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutQuizzesInput
    connect?: ChapterWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserQuizAttemptCreateNestedManyWithoutQuizInput = {
    create?: XOR<UserQuizAttemptCreateWithoutQuizInput, UserQuizAttemptUncheckedCreateWithoutQuizInput> | UserQuizAttemptCreateWithoutQuizInput[] | UserQuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutQuizInput | UserQuizAttemptCreateOrConnectWithoutQuizInput[]
    createMany?: UserQuizAttemptCreateManyQuizInputEnvelope
    connect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserQuizAttemptUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<UserQuizAttemptCreateWithoutQuizInput, UserQuizAttemptUncheckedCreateWithoutQuizInput> | UserQuizAttemptCreateWithoutQuizInput[] | UserQuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutQuizInput | UserQuizAttemptCreateOrConnectWithoutQuizInput[]
    createMany?: UserQuizAttemptCreateManyQuizInputEnvelope
    connect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
  }

  export type ChapterUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<ChapterCreateWithoutQuizzesInput, ChapterUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutQuizzesInput
    upsert?: ChapterUpsertWithoutQuizzesInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutQuizzesInput, ChapterUpdateWithoutQuizzesInput>, ChapterUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserQuizAttemptUpdateManyWithoutQuizNestedInput = {
    create?: XOR<UserQuizAttemptCreateWithoutQuizInput, UserQuizAttemptUncheckedCreateWithoutQuizInput> | UserQuizAttemptCreateWithoutQuizInput[] | UserQuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutQuizInput | UserQuizAttemptCreateOrConnectWithoutQuizInput[]
    upsert?: UserQuizAttemptUpsertWithWhereUniqueWithoutQuizInput | UserQuizAttemptUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: UserQuizAttemptCreateManyQuizInputEnvelope
    set?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    disconnect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    delete?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    connect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    update?: UserQuizAttemptUpdateWithWhereUniqueWithoutQuizInput | UserQuizAttemptUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: UserQuizAttemptUpdateManyWithWhereWithoutQuizInput | UserQuizAttemptUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: UserQuizAttemptScalarWhereInput | UserQuizAttemptScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserQuizAttemptUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<UserQuizAttemptCreateWithoutQuizInput, UserQuizAttemptUncheckedCreateWithoutQuizInput> | UserQuizAttemptCreateWithoutQuizInput[] | UserQuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutQuizInput | UserQuizAttemptCreateOrConnectWithoutQuizInput[]
    upsert?: UserQuizAttemptUpsertWithWhereUniqueWithoutQuizInput | UserQuizAttemptUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: UserQuizAttemptCreateManyQuizInputEnvelope
    set?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    disconnect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    delete?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    connect?: UserQuizAttemptWhereUniqueInput | UserQuizAttemptWhereUniqueInput[]
    update?: UserQuizAttemptUpdateWithWhereUniqueWithoutQuizInput | UserQuizAttemptUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: UserQuizAttemptUpdateManyWithWhereWithoutQuizInput | UserQuizAttemptUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: UserQuizAttemptScalarWhereInput | UserQuizAttemptScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
  }

  export type OptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type UserResponseCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserResponseCreateWithoutQuestionInput, UserResponseUncheckedCreateWithoutQuestionInput> | UserResponseCreateWithoutQuestionInput[] | UserResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutQuestionInput | UserResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: UserResponseCreateManyQuestionInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type WrittenAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<WrittenAnswerCreateWithoutQuestionInput, WrittenAnswerUncheckedCreateWithoutQuestionInput> | WrittenAnswerCreateWithoutQuestionInput[] | WrittenAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: WrittenAnswerCreateOrConnectWithoutQuestionInput | WrittenAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: WrittenAnswerCreateManyQuestionInputEnvelope
    connect?: WrittenAnswerWhereUniqueInput | WrittenAnswerWhereUniqueInput[]
  }

  export type OptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type UserResponseUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserResponseCreateWithoutQuestionInput, UserResponseUncheckedCreateWithoutQuestionInput> | UserResponseCreateWithoutQuestionInput[] | UserResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutQuestionInput | UserResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: UserResponseCreateManyQuestionInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type WrittenAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<WrittenAnswerCreateWithoutQuestionInput, WrittenAnswerUncheckedCreateWithoutQuestionInput> | WrittenAnswerCreateWithoutQuestionInput[] | WrittenAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: WrittenAnswerCreateOrConnectWithoutQuestionInput | WrittenAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: WrittenAnswerCreateManyQuestionInputEnvelope
    connect?: WrittenAnswerWhereUniqueInput | WrittenAnswerWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type QuizUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    upsert?: QuizUpsertWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionsInput, QuizUpdateWithoutQuestionsInput>, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type OptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuestionInput | OptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuestionInput | OptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuestionInput | OptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type UserResponseUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserResponseCreateWithoutQuestionInput, UserResponseUncheckedCreateWithoutQuestionInput> | UserResponseCreateWithoutQuestionInput[] | UserResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutQuestionInput | UserResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutQuestionInput | UserResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserResponseCreateManyQuestionInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutQuestionInput | UserResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutQuestionInput | UserResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type WrittenAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<WrittenAnswerCreateWithoutQuestionInput, WrittenAnswerUncheckedCreateWithoutQuestionInput> | WrittenAnswerCreateWithoutQuestionInput[] | WrittenAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: WrittenAnswerCreateOrConnectWithoutQuestionInput | WrittenAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: WrittenAnswerUpsertWithWhereUniqueWithoutQuestionInput | WrittenAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: WrittenAnswerCreateManyQuestionInputEnvelope
    set?: WrittenAnswerWhereUniqueInput | WrittenAnswerWhereUniqueInput[]
    disconnect?: WrittenAnswerWhereUniqueInput | WrittenAnswerWhereUniqueInput[]
    delete?: WrittenAnswerWhereUniqueInput | WrittenAnswerWhereUniqueInput[]
    connect?: WrittenAnswerWhereUniqueInput | WrittenAnswerWhereUniqueInput[]
    update?: WrittenAnswerUpdateWithWhereUniqueWithoutQuestionInput | WrittenAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: WrittenAnswerUpdateManyWithWhereWithoutQuestionInput | WrittenAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: WrittenAnswerScalarWhereInput | WrittenAnswerScalarWhereInput[]
  }

  export type OptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuestionInput | OptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuestionInput | OptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuestionInput | OptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type UserResponseUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserResponseCreateWithoutQuestionInput, UserResponseUncheckedCreateWithoutQuestionInput> | UserResponseCreateWithoutQuestionInput[] | UserResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutQuestionInput | UserResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutQuestionInput | UserResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserResponseCreateManyQuestionInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutQuestionInput | UserResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutQuestionInput | UserResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type WrittenAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<WrittenAnswerCreateWithoutQuestionInput, WrittenAnswerUncheckedCreateWithoutQuestionInput> | WrittenAnswerCreateWithoutQuestionInput[] | WrittenAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: WrittenAnswerCreateOrConnectWithoutQuestionInput | WrittenAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: WrittenAnswerUpsertWithWhereUniqueWithoutQuestionInput | WrittenAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: WrittenAnswerCreateManyQuestionInputEnvelope
    set?: WrittenAnswerWhereUniqueInput | WrittenAnswerWhereUniqueInput[]
    disconnect?: WrittenAnswerWhereUniqueInput | WrittenAnswerWhereUniqueInput[]
    delete?: WrittenAnswerWhereUniqueInput | WrittenAnswerWhereUniqueInput[]
    connect?: WrittenAnswerWhereUniqueInput | WrittenAnswerWhereUniqueInput[]
    update?: WrittenAnswerUpdateWithWhereUniqueWithoutQuestionInput | WrittenAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: WrittenAnswerUpdateManyWithWhereWithoutQuestionInput | WrittenAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: WrittenAnswerScalarWhereInput | WrittenAnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserResponseCreateNestedManyWithoutSelected_optionInput = {
    create?: XOR<UserResponseCreateWithoutSelected_optionInput, UserResponseUncheckedCreateWithoutSelected_optionInput> | UserResponseCreateWithoutSelected_optionInput[] | UserResponseUncheckedCreateWithoutSelected_optionInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutSelected_optionInput | UserResponseCreateOrConnectWithoutSelected_optionInput[]
    createMany?: UserResponseCreateManySelected_optionInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type UserResponseUncheckedCreateNestedManyWithoutSelected_optionInput = {
    create?: XOR<UserResponseCreateWithoutSelected_optionInput, UserResponseUncheckedCreateWithoutSelected_optionInput> | UserResponseCreateWithoutSelected_optionInput[] | UserResponseUncheckedCreateWithoutSelected_optionInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutSelected_optionInput | UserResponseCreateOrConnectWithoutSelected_optionInput[]
    createMany?: UserResponseCreateManySelected_optionInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    upsert?: QuestionUpsertWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutOptionsInput, QuestionUpdateWithoutOptionsInput>, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type UserResponseUpdateManyWithoutSelected_optionNestedInput = {
    create?: XOR<UserResponseCreateWithoutSelected_optionInput, UserResponseUncheckedCreateWithoutSelected_optionInput> | UserResponseCreateWithoutSelected_optionInput[] | UserResponseUncheckedCreateWithoutSelected_optionInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutSelected_optionInput | UserResponseCreateOrConnectWithoutSelected_optionInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutSelected_optionInput | UserResponseUpsertWithWhereUniqueWithoutSelected_optionInput[]
    createMany?: UserResponseCreateManySelected_optionInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutSelected_optionInput | UserResponseUpdateWithWhereUniqueWithoutSelected_optionInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutSelected_optionInput | UserResponseUpdateManyWithWhereWithoutSelected_optionInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type UserResponseUncheckedUpdateManyWithoutSelected_optionNestedInput = {
    create?: XOR<UserResponseCreateWithoutSelected_optionInput, UserResponseUncheckedCreateWithoutSelected_optionInput> | UserResponseCreateWithoutSelected_optionInput[] | UserResponseUncheckedCreateWithoutSelected_optionInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutSelected_optionInput | UserResponseCreateOrConnectWithoutSelected_optionInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutSelected_optionInput | UserResponseUpsertWithWhereUniqueWithoutSelected_optionInput[]
    createMany?: UserResponseCreateManySelected_optionInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutSelected_optionInput | UserResponseUpdateWithWhereUniqueWithoutSelected_optionInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutSelected_optionInput | UserResponseUpdateManyWithWhereWithoutSelected_optionInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutWritten_answersInput = {
    create?: XOR<QuestionCreateWithoutWritten_answersInput, QuestionUncheckedCreateWithoutWritten_answersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutWritten_answersInput
    connect?: QuestionWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUpdateOneRequiredWithoutWritten_answersNestedInput = {
    create?: XOR<QuestionCreateWithoutWritten_answersInput, QuestionUncheckedCreateWithoutWritten_answersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutWritten_answersInput
    upsert?: QuestionUpsertWithoutWritten_answersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutWritten_answersInput, QuestionUpdateWithoutWritten_answersInput>, QuestionUncheckedUpdateWithoutWritten_answersInput>
  }

  export type UserCreateNestedOneWithoutUser_course_progressInput = {
    create?: XOR<UserCreateWithoutUser_course_progressInput, UserUncheckedCreateWithoutUser_course_progressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_course_progressInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutUser_course_progressInput = {
    create?: XOR<CourseCreateWithoutUser_course_progressInput, CourseUncheckedCreateWithoutUser_course_progressInput>
    connectOrCreate?: CourseCreateOrConnectWithoutUser_course_progressInput
    connect?: CourseWhereUniqueInput
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserUpdateOneRequiredWithoutUser_course_progressNestedInput = {
    create?: XOR<UserCreateWithoutUser_course_progressInput, UserUncheckedCreateWithoutUser_course_progressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_course_progressInput
    upsert?: UserUpsertWithoutUser_course_progressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_course_progressInput, UserUpdateWithoutUser_course_progressInput>, UserUncheckedUpdateWithoutUser_course_progressInput>
  }

  export type CourseUpdateOneRequiredWithoutUser_course_progressNestedInput = {
    create?: XOR<CourseCreateWithoutUser_course_progressInput, CourseUncheckedCreateWithoutUser_course_progressInput>
    connectOrCreate?: CourseCreateOrConnectWithoutUser_course_progressInput
    upsert?: CourseUpsertWithoutUser_course_progressInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutUser_course_progressInput, CourseUpdateWithoutUser_course_progressInput>, CourseUncheckedUpdateWithoutUser_course_progressInput>
  }

  export type UserCreateNestedOneWithoutUser_chapter_progressInput = {
    create?: XOR<UserCreateWithoutUser_chapter_progressInput, UserUncheckedCreateWithoutUser_chapter_progressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_chapter_progressInput
    connect?: UserWhereUniqueInput
  }

  export type ChapterCreateNestedOneWithoutUser_chapter_progressInput = {
    create?: XOR<ChapterCreateWithoutUser_chapter_progressInput, ChapterUncheckedCreateWithoutUser_chapter_progressInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutUser_chapter_progressInput
    connect?: ChapterWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUser_chapter_progressNestedInput = {
    create?: XOR<UserCreateWithoutUser_chapter_progressInput, UserUncheckedCreateWithoutUser_chapter_progressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_chapter_progressInput
    upsert?: UserUpsertWithoutUser_chapter_progressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_chapter_progressInput, UserUpdateWithoutUser_chapter_progressInput>, UserUncheckedUpdateWithoutUser_chapter_progressInput>
  }

  export type ChapterUpdateOneRequiredWithoutUser_chapter_progressNestedInput = {
    create?: XOR<ChapterCreateWithoutUser_chapter_progressInput, ChapterUncheckedCreateWithoutUser_chapter_progressInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutUser_chapter_progressInput
    upsert?: ChapterUpsertWithoutUser_chapter_progressInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<XOR<ChapterUpdateToOneWithWhereWithoutUser_chapter_progressInput, ChapterUpdateWithoutUser_chapter_progressInput>, ChapterUncheckedUpdateWithoutUser_chapter_progressInput>
  }

  export type UserCreateNestedOneWithoutUser_quiz_attemptsInput = {
    create?: XOR<UserCreateWithoutUser_quiz_attemptsInput, UserUncheckedCreateWithoutUser_quiz_attemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_quiz_attemptsInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutUser_quiz_attemptsInput = {
    create?: XOR<QuizCreateWithoutUser_quiz_attemptsInput, QuizUncheckedCreateWithoutUser_quiz_attemptsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutUser_quiz_attemptsInput
    connect?: QuizWhereUniqueInput
  }

  export type UserResponseCreateNestedManyWithoutAttemptInput = {
    create?: XOR<UserResponseCreateWithoutAttemptInput, UserResponseUncheckedCreateWithoutAttemptInput> | UserResponseCreateWithoutAttemptInput[] | UserResponseUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutAttemptInput | UserResponseCreateOrConnectWithoutAttemptInput[]
    createMany?: UserResponseCreateManyAttemptInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type UserResponseUncheckedCreateNestedManyWithoutAttemptInput = {
    create?: XOR<UserResponseCreateWithoutAttemptInput, UserResponseUncheckedCreateWithoutAttemptInput> | UserResponseCreateWithoutAttemptInput[] | UserResponseUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutAttemptInput | UserResponseCreateOrConnectWithoutAttemptInput[]
    createMany?: UserResponseCreateManyAttemptInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUser_quiz_attemptsNestedInput = {
    create?: XOR<UserCreateWithoutUser_quiz_attemptsInput, UserUncheckedCreateWithoutUser_quiz_attemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_quiz_attemptsInput
    upsert?: UserUpsertWithoutUser_quiz_attemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_quiz_attemptsInput, UserUpdateWithoutUser_quiz_attemptsInput>, UserUncheckedUpdateWithoutUser_quiz_attemptsInput>
  }

  export type QuizUpdateOneRequiredWithoutUser_quiz_attemptsNestedInput = {
    create?: XOR<QuizCreateWithoutUser_quiz_attemptsInput, QuizUncheckedCreateWithoutUser_quiz_attemptsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutUser_quiz_attemptsInput
    upsert?: QuizUpsertWithoutUser_quiz_attemptsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutUser_quiz_attemptsInput, QuizUpdateWithoutUser_quiz_attemptsInput>, QuizUncheckedUpdateWithoutUser_quiz_attemptsInput>
  }

  export type UserResponseUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<UserResponseCreateWithoutAttemptInput, UserResponseUncheckedCreateWithoutAttemptInput> | UserResponseCreateWithoutAttemptInput[] | UserResponseUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutAttemptInput | UserResponseCreateOrConnectWithoutAttemptInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutAttemptInput | UserResponseUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: UserResponseCreateManyAttemptInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutAttemptInput | UserResponseUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutAttemptInput | UserResponseUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type UserResponseUncheckedUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<UserResponseCreateWithoutAttemptInput, UserResponseUncheckedCreateWithoutAttemptInput> | UserResponseCreateWithoutAttemptInput[] | UserResponseUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutAttemptInput | UserResponseCreateOrConnectWithoutAttemptInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutAttemptInput | UserResponseUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: UserResponseCreateManyAttemptInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutAttemptInput | UserResponseUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutAttemptInput | UserResponseUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUser_responsesInput = {
    create?: XOR<UserCreateWithoutUser_responsesInput, UserUncheckedCreateWithoutUser_responsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_responsesInput
    connect?: UserWhereUniqueInput
  }

  export type UserQuizAttemptCreateNestedOneWithoutUser_responsesInput = {
    create?: XOR<UserQuizAttemptCreateWithoutUser_responsesInput, UserQuizAttemptUncheckedCreateWithoutUser_responsesInput>
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutUser_responsesInput
    connect?: UserQuizAttemptWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutUser_responsesInput = {
    create?: XOR<QuestionCreateWithoutUser_responsesInput, QuestionUncheckedCreateWithoutUser_responsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutUser_responsesInput
    connect?: QuestionWhereUniqueInput
  }

  export type OptionCreateNestedOneWithoutUser_responsesInput = {
    create?: XOR<OptionCreateWithoutUser_responsesInput, OptionUncheckedCreateWithoutUser_responsesInput>
    connectOrCreate?: OptionCreateOrConnectWithoutUser_responsesInput
    connect?: OptionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUser_responsesNestedInput = {
    create?: XOR<UserCreateWithoutUser_responsesInput, UserUncheckedCreateWithoutUser_responsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_responsesInput
    upsert?: UserUpsertWithoutUser_responsesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_responsesInput, UserUpdateWithoutUser_responsesInput>, UserUncheckedUpdateWithoutUser_responsesInput>
  }

  export type UserQuizAttemptUpdateOneRequiredWithoutUser_responsesNestedInput = {
    create?: XOR<UserQuizAttemptCreateWithoutUser_responsesInput, UserQuizAttemptUncheckedCreateWithoutUser_responsesInput>
    connectOrCreate?: UserQuizAttemptCreateOrConnectWithoutUser_responsesInput
    upsert?: UserQuizAttemptUpsertWithoutUser_responsesInput
    connect?: UserQuizAttemptWhereUniqueInput
    update?: XOR<XOR<UserQuizAttemptUpdateToOneWithWhereWithoutUser_responsesInput, UserQuizAttemptUpdateWithoutUser_responsesInput>, UserQuizAttemptUncheckedUpdateWithoutUser_responsesInput>
  }

  export type QuestionUpdateOneRequiredWithoutUser_responsesNestedInput = {
    create?: XOR<QuestionCreateWithoutUser_responsesInput, QuestionUncheckedCreateWithoutUser_responsesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutUser_responsesInput
    upsert?: QuestionUpsertWithoutUser_responsesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutUser_responsesInput, QuestionUpdateWithoutUser_responsesInput>, QuestionUncheckedUpdateWithoutUser_responsesInput>
  }

  export type OptionUpdateOneWithoutUser_responsesNestedInput = {
    create?: XOR<OptionCreateWithoutUser_responsesInput, OptionUncheckedCreateWithoutUser_responsesInput>
    connectOrCreate?: OptionCreateOrConnectWithoutUser_responsesInput
    upsert?: OptionUpsertWithoutUser_responsesInput
    disconnect?: OptionWhereInput | boolean
    delete?: OptionWhereInput | boolean
    connect?: OptionWhereUniqueInput
    update?: XOR<XOR<OptionUpdateToOneWithWhereWithoutUser_responsesInput, OptionUpdateWithoutUser_responsesInput>, OptionUncheckedUpdateWithoutUser_responsesInput>
  }

  export type CourseCreateNestedOneWithoutCourse_pdfsInput = {
    create?: XOR<CourseCreateWithoutCourse_pdfsInput, CourseUncheckedCreateWithoutCourse_pdfsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourse_pdfsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCourse_pdfsInput = {
    create?: XOR<UserCreateWithoutCourse_pdfsInput, UserUncheckedCreateWithoutCourse_pdfsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourse_pdfsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutCourse_pdfsNestedInput = {
    create?: XOR<CourseCreateWithoutCourse_pdfsInput, CourseUncheckedCreateWithoutCourse_pdfsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourse_pdfsInput
    upsert?: CourseUpsertWithoutCourse_pdfsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourse_pdfsInput, CourseUpdateWithoutCourse_pdfsInput>, CourseUncheckedUpdateWithoutCourse_pdfsInput>
  }

  export type UserUpdateOneRequiredWithoutCourse_pdfsNestedInput = {
    create?: XOR<UserCreateWithoutCourse_pdfsInput, UserUncheckedCreateWithoutCourse_pdfsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourse_pdfsInput
    upsert?: UserUpsertWithoutCourse_pdfsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCourse_pdfsInput, UserUpdateWithoutCourse_pdfsInput>, UserUncheckedUpdateWithoutCourse_pdfsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[]
    notIn?: $Enums.QuestionType[]
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[]
    notIn?: $Enums.QuestionType[]
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CourseCreateWithoutUserInput = {
    id?: bigint | number
    title: string
    youtube_url: string
    created_at?: Date | string
    completed_at?: Date | string | null
    updated_at?: Date | string
    chapters?: ChapterCreateNestedManyWithoutCourseInput
    course_pdfs?: CoursePdfCreateNestedManyWithoutCourseInput
    user_course_progress?: UserCourseProgressCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    title: string
    youtube_url: string
    created_at?: Date | string
    completed_at?: Date | string | null
    updated_at?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutCourseInput
    course_pdfs?: CoursePdfUncheckedCreateNestedManyWithoutCourseInput
    user_course_progress?: UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutUserInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput>
  }

  export type CourseCreateManyUserInputEnvelope = {
    data: CourseCreateManyUserInput | CourseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CoursePdfCreateWithoutUserInput = {
    id?: bigint | number
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
    course: CourseCreateNestedOneWithoutCourse_pdfsInput
  }

  export type CoursePdfUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    course_id: bigint | number
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CoursePdfCreateOrConnectWithoutUserInput = {
    where: CoursePdfWhereUniqueInput
    create: XOR<CoursePdfCreateWithoutUserInput, CoursePdfUncheckedCreateWithoutUserInput>
  }

  export type CoursePdfCreateManyUserInputEnvelope = {
    data: CoursePdfCreateManyUserInput | CoursePdfCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCourseProgressCreateWithoutUserInput = {
    id?: bigint | number
    completion_percentage: number
    is_complete: boolean
    current_chapter_id?: bigint | number | null
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    course: CourseCreateNestedOneWithoutUser_course_progressInput
  }

  export type UserCourseProgressUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    course_id: bigint | number
    completion_percentage: number
    is_complete: boolean
    current_chapter_id?: bigint | number | null
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCourseProgressCreateOrConnectWithoutUserInput = {
    where: UserCourseProgressWhereUniqueInput
    create: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput>
  }

  export type UserCourseProgressCreateManyUserInputEnvelope = {
    data: UserCourseProgressCreateManyUserInput | UserCourseProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserChapterProgressCreateWithoutUserInput = {
    id?: bigint | number
    completion_percentage: bigint | number
    is_complete: boolean
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    chapter: ChapterCreateNestedOneWithoutUser_chapter_progressInput
  }

  export type UserChapterProgressUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    chapter_id: bigint | number
    completion_percentage: bigint | number
    is_complete: boolean
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserChapterProgressCreateOrConnectWithoutUserInput = {
    where: UserChapterProgressWhereUniqueInput
    create: XOR<UserChapterProgressCreateWithoutUserInput, UserChapterProgressUncheckedCreateWithoutUserInput>
  }

  export type UserChapterProgressCreateManyUserInputEnvelope = {
    data: UserChapterProgressCreateManyUserInput | UserChapterProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserQuizAttemptCreateWithoutUserInput = {
    id?: bigint | number
    score: number
    passed: boolean
    created_at?: Date | string
    updated_at?: Date | string
    quiz: QuizCreateNestedOneWithoutUser_quiz_attemptsInput
    user_responses?: UserResponseCreateNestedManyWithoutAttemptInput
  }

  export type UserQuizAttemptUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    quiz_id: bigint | number
    score: number
    passed: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type UserQuizAttemptCreateOrConnectWithoutUserInput = {
    where: UserQuizAttemptWhereUniqueInput
    create: XOR<UserQuizAttemptCreateWithoutUserInput, UserQuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type UserQuizAttemptCreateManyUserInputEnvelope = {
    data: UserQuizAttemptCreateManyUserInput | UserQuizAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserResponseCreateWithoutUserInput = {
    id?: bigint | number
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    attempt: UserQuizAttemptCreateNestedOneWithoutUser_responsesInput
    question: QuestionCreateNestedOneWithoutUser_responsesInput
    selected_option?: OptionCreateNestedOneWithoutUser_responsesInput
  }

  export type UserResponseUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    attempt_id: bigint | number
    question_id: bigint | number
    selected_option_id?: bigint | number | null
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserResponseCreateOrConnectWithoutUserInput = {
    where: UserResponseWhereUniqueInput
    create: XOR<UserResponseCreateWithoutUserInput, UserResponseUncheckedCreateWithoutUserInput>
  }

  export type UserResponseCreateManyUserInputEnvelope = {
    data: UserResponseCreateManyUserInput | UserResponseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutUserInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutUserInput, CourseUncheckedUpdateWithoutUserInput>
    create: XOR<CourseCreateWithoutUserInput, CourseUncheckedCreateWithoutUserInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutUserInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutUserInput, CourseUncheckedUpdateWithoutUserInput>
  }

  export type CourseUpdateManyWithWhereWithoutUserInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutUserInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: BigIntFilter<"Course"> | bigint | number
    user_id?: BigIntFilter<"Course"> | bigint | number
    title?: StringFilter<"Course"> | string
    youtube_url?: StringFilter<"Course"> | string
    created_at?: DateTimeFilter<"Course"> | Date | string
    completed_at?: DateTimeNullableFilter<"Course"> | Date | string | null
    updated_at?: DateTimeFilter<"Course"> | Date | string
  }

  export type CoursePdfUpsertWithWhereUniqueWithoutUserInput = {
    where: CoursePdfWhereUniqueInput
    update: XOR<CoursePdfUpdateWithoutUserInput, CoursePdfUncheckedUpdateWithoutUserInput>
    create: XOR<CoursePdfCreateWithoutUserInput, CoursePdfUncheckedCreateWithoutUserInput>
  }

  export type CoursePdfUpdateWithWhereUniqueWithoutUserInput = {
    where: CoursePdfWhereUniqueInput
    data: XOR<CoursePdfUpdateWithoutUserInput, CoursePdfUncheckedUpdateWithoutUserInput>
  }

  export type CoursePdfUpdateManyWithWhereWithoutUserInput = {
    where: CoursePdfScalarWhereInput
    data: XOR<CoursePdfUpdateManyMutationInput, CoursePdfUncheckedUpdateManyWithoutUserInput>
  }

  export type CoursePdfScalarWhereInput = {
    AND?: CoursePdfScalarWhereInput | CoursePdfScalarWhereInput[]
    OR?: CoursePdfScalarWhereInput[]
    NOT?: CoursePdfScalarWhereInput | CoursePdfScalarWhereInput[]
    id?: BigIntFilter<"CoursePdf"> | bigint | number
    course_id?: BigIntFilter<"CoursePdf"> | bigint | number
    user_id?: BigIntFilter<"CoursePdf"> | bigint | number
    pdf_url?: StringFilter<"CoursePdf"> | string
    created_at?: DateTimeFilter<"CoursePdf"> | Date | string
    updated_at?: DateTimeFilter<"CoursePdf"> | Date | string
  }

  export type UserCourseProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCourseProgressWhereUniqueInput
    update: XOR<UserCourseProgressUpdateWithoutUserInput, UserCourseProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserCourseProgressCreateWithoutUserInput, UserCourseProgressUncheckedCreateWithoutUserInput>
  }

  export type UserCourseProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCourseProgressWhereUniqueInput
    data: XOR<UserCourseProgressUpdateWithoutUserInput, UserCourseProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserCourseProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserCourseProgressScalarWhereInput
    data: XOR<UserCourseProgressUpdateManyMutationInput, UserCourseProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCourseProgressScalarWhereInput = {
    AND?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
    OR?: UserCourseProgressScalarWhereInput[]
    NOT?: UserCourseProgressScalarWhereInput | UserCourseProgressScalarWhereInput[]
    id?: BigIntFilter<"UserCourseProgress"> | bigint | number
    user_id?: BigIntFilter<"UserCourseProgress"> | bigint | number
    course_id?: BigIntFilter<"UserCourseProgress"> | bigint | number
    completion_percentage?: FloatFilter<"UserCourseProgress"> | number
    is_complete?: BoolFilter<"UserCourseProgress"> | boolean
    current_chapter_id?: BigIntNullableFilter<"UserCourseProgress"> | bigint | number | null
    completed_at?: DateTimeNullableFilter<"UserCourseProgress"> | Date | string | null
    created_at?: DateTimeFilter<"UserCourseProgress"> | Date | string
    updated_at?: DateTimeFilter<"UserCourseProgress"> | Date | string
  }

  export type UserChapterProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserChapterProgressWhereUniqueInput
    update: XOR<UserChapterProgressUpdateWithoutUserInput, UserChapterProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserChapterProgressCreateWithoutUserInput, UserChapterProgressUncheckedCreateWithoutUserInput>
  }

  export type UserChapterProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserChapterProgressWhereUniqueInput
    data: XOR<UserChapterProgressUpdateWithoutUserInput, UserChapterProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserChapterProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserChapterProgressScalarWhereInput
    data: XOR<UserChapterProgressUpdateManyMutationInput, UserChapterProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserChapterProgressScalarWhereInput = {
    AND?: UserChapterProgressScalarWhereInput | UserChapterProgressScalarWhereInput[]
    OR?: UserChapterProgressScalarWhereInput[]
    NOT?: UserChapterProgressScalarWhereInput | UserChapterProgressScalarWhereInput[]
    id?: BigIntFilter<"UserChapterProgress"> | bigint | number
    user_id?: BigIntFilter<"UserChapterProgress"> | bigint | number
    chapter_id?: BigIntFilter<"UserChapterProgress"> | bigint | number
    completion_percentage?: BigIntFilter<"UserChapterProgress"> | bigint | number
    is_complete?: BoolFilter<"UserChapterProgress"> | boolean
    completed_at?: DateTimeNullableFilter<"UserChapterProgress"> | Date | string | null
    created_at?: DateTimeFilter<"UserChapterProgress"> | Date | string
    updated_at?: DateTimeFilter<"UserChapterProgress"> | Date | string
  }

  export type UserQuizAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: UserQuizAttemptWhereUniqueInput
    update: XOR<UserQuizAttemptUpdateWithoutUserInput, UserQuizAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<UserQuizAttemptCreateWithoutUserInput, UserQuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type UserQuizAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: UserQuizAttemptWhereUniqueInput
    data: XOR<UserQuizAttemptUpdateWithoutUserInput, UserQuizAttemptUncheckedUpdateWithoutUserInput>
  }

  export type UserQuizAttemptUpdateManyWithWhereWithoutUserInput = {
    where: UserQuizAttemptScalarWhereInput
    data: XOR<UserQuizAttemptUpdateManyMutationInput, UserQuizAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type UserQuizAttemptScalarWhereInput = {
    AND?: UserQuizAttemptScalarWhereInput | UserQuizAttemptScalarWhereInput[]
    OR?: UserQuizAttemptScalarWhereInput[]
    NOT?: UserQuizAttemptScalarWhereInput | UserQuizAttemptScalarWhereInput[]
    id?: BigIntFilter<"UserQuizAttempt"> | bigint | number
    user_id?: BigIntFilter<"UserQuizAttempt"> | bigint | number
    quiz_id?: BigIntFilter<"UserQuizAttempt"> | bigint | number
    score?: FloatFilter<"UserQuizAttempt"> | number
    passed?: BoolFilter<"UserQuizAttempt"> | boolean
    created_at?: DateTimeFilter<"UserQuizAttempt"> | Date | string
    updated_at?: DateTimeFilter<"UserQuizAttempt"> | Date | string
  }

  export type UserResponseUpsertWithWhereUniqueWithoutUserInput = {
    where: UserResponseWhereUniqueInput
    update: XOR<UserResponseUpdateWithoutUserInput, UserResponseUncheckedUpdateWithoutUserInput>
    create: XOR<UserResponseCreateWithoutUserInput, UserResponseUncheckedCreateWithoutUserInput>
  }

  export type UserResponseUpdateWithWhereUniqueWithoutUserInput = {
    where: UserResponseWhereUniqueInput
    data: XOR<UserResponseUpdateWithoutUserInput, UserResponseUncheckedUpdateWithoutUserInput>
  }

  export type UserResponseUpdateManyWithWhereWithoutUserInput = {
    where: UserResponseScalarWhereInput
    data: XOR<UserResponseUpdateManyMutationInput, UserResponseUncheckedUpdateManyWithoutUserInput>
  }

  export type UserResponseScalarWhereInput = {
    AND?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
    OR?: UserResponseScalarWhereInput[]
    NOT?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
    id?: BigIntFilter<"UserResponse"> | bigint | number
    user_id?: BigIntFilter<"UserResponse"> | bigint | number
    attempt_id?: BigIntFilter<"UserResponse"> | bigint | number
    question_id?: BigIntFilter<"UserResponse"> | bigint | number
    selected_option_id?: BigIntNullableFilter<"UserResponse"> | bigint | number | null
    written_response?: StringNullableFilter<"UserResponse"> | string | null
    is_correct?: BoolFilter<"UserResponse"> | boolean
    points_awarded?: BigIntFilter<"UserResponse"> | bigint | number
    graded_at?: DateTimeNullableFilter<"UserResponse"> | Date | string | null
    created_at?: DateTimeFilter<"UserResponse"> | Date | string
    updated_at?: DateTimeFilter<"UserResponse"> | Date | string
  }

  export type UserCreateWithoutCoursesInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    course_pdfs?: CoursePdfCreateNestedManyWithoutUserInput
    user_course_progress?: UserCourseProgressCreateNestedManyWithoutUserInput
    user_chapter_progress?: UserChapterProgressCreateNestedManyWithoutUserInput
    user_quiz_attempts?: UserQuizAttemptCreateNestedManyWithoutUserInput
    user_responses?: UserResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoursesInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    course_pdfs?: CoursePdfUncheckedCreateNestedManyWithoutUserInput
    user_course_progress?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    user_chapter_progress?: UserChapterProgressUncheckedCreateNestedManyWithoutUserInput
    user_quiz_attempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutUserInput
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type ChapterCreateWithoutCourseInput = {
    id?: bigint | number
    title: string
    description?: string | null
    chapter_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    quizzes?: QuizCreateNestedManyWithoutChapterInput
    user_chapter_progress?: UserChapterProgressCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutCourseInput = {
    id?: bigint | number
    title: string
    description?: string | null
    chapter_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutChapterInput
    user_chapter_progress?: UserChapterProgressUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutCourseInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutCourseInput, ChapterUncheckedCreateWithoutCourseInput>
  }

  export type ChapterCreateManyCourseInputEnvelope = {
    data: ChapterCreateManyCourseInput | ChapterCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CoursePdfCreateWithoutCourseInput = {
    id?: bigint | number
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCourse_pdfsInput
  }

  export type CoursePdfUncheckedCreateWithoutCourseInput = {
    id?: bigint | number
    user_id: bigint | number
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CoursePdfCreateOrConnectWithoutCourseInput = {
    where: CoursePdfWhereUniqueInput
    create: XOR<CoursePdfCreateWithoutCourseInput, CoursePdfUncheckedCreateWithoutCourseInput>
  }

  export type CoursePdfCreateManyCourseInputEnvelope = {
    data: CoursePdfCreateManyCourseInput | CoursePdfCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserCourseProgressCreateWithoutCourseInput = {
    id?: bigint | number
    completion_percentage: number
    is_complete: boolean
    current_chapter_id?: bigint | number | null
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_course_progressInput
  }

  export type UserCourseProgressUncheckedCreateWithoutCourseInput = {
    id?: bigint | number
    user_id: bigint | number
    completion_percentage: number
    is_complete: boolean
    current_chapter_id?: bigint | number | null
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCourseProgressCreateOrConnectWithoutCourseInput = {
    where: UserCourseProgressWhereUniqueInput
    create: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput>
  }

  export type UserCourseProgressCreateManyCourseInputEnvelope = {
    data: UserCourseProgressCreateManyCourseInput | UserCourseProgressCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCoursesInput = {
    update: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type UserUpdateWithoutCoursesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    course_pdfs?: CoursePdfUpdateManyWithoutUserNestedInput
    user_course_progress?: UserCourseProgressUpdateManyWithoutUserNestedInput
    user_chapter_progress?: UserChapterProgressUpdateManyWithoutUserNestedInput
    user_quiz_attempts?: UserQuizAttemptUpdateManyWithoutUserNestedInput
    user_responses?: UserResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    course_pdfs?: CoursePdfUncheckedUpdateManyWithoutUserNestedInput
    user_course_progress?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    user_chapter_progress?: UserChapterProgressUncheckedUpdateManyWithoutUserNestedInput
    user_quiz_attempts?: UserQuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    user_responses?: UserResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChapterUpsertWithWhereUniqueWithoutCourseInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutCourseInput, ChapterUncheckedUpdateWithoutCourseInput>
    create: XOR<ChapterCreateWithoutCourseInput, ChapterUncheckedCreateWithoutCourseInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutCourseInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutCourseInput, ChapterUncheckedUpdateWithoutCourseInput>
  }

  export type ChapterUpdateManyWithWhereWithoutCourseInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutCourseInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    OR?: ChapterScalarWhereInput[]
    NOT?: ChapterScalarWhereInput | ChapterScalarWhereInput[]
    id?: BigIntFilter<"Chapter"> | bigint | number
    course_id?: BigIntFilter<"Chapter"> | bigint | number
    title?: StringFilter<"Chapter"> | string
    description?: StringNullableFilter<"Chapter"> | string | null
    chapter_number?: BigIntFilter<"Chapter"> | bigint | number
    created_at?: DateTimeFilter<"Chapter"> | Date | string
    updated_at?: DateTimeFilter<"Chapter"> | Date | string
  }

  export type CoursePdfUpsertWithWhereUniqueWithoutCourseInput = {
    where: CoursePdfWhereUniqueInput
    update: XOR<CoursePdfUpdateWithoutCourseInput, CoursePdfUncheckedUpdateWithoutCourseInput>
    create: XOR<CoursePdfCreateWithoutCourseInput, CoursePdfUncheckedCreateWithoutCourseInput>
  }

  export type CoursePdfUpdateWithWhereUniqueWithoutCourseInput = {
    where: CoursePdfWhereUniqueInput
    data: XOR<CoursePdfUpdateWithoutCourseInput, CoursePdfUncheckedUpdateWithoutCourseInput>
  }

  export type CoursePdfUpdateManyWithWhereWithoutCourseInput = {
    where: CoursePdfScalarWhereInput
    data: XOR<CoursePdfUpdateManyMutationInput, CoursePdfUncheckedUpdateManyWithoutCourseInput>
  }

  export type UserCourseProgressUpsertWithWhereUniqueWithoutCourseInput = {
    where: UserCourseProgressWhereUniqueInput
    update: XOR<UserCourseProgressUpdateWithoutCourseInput, UserCourseProgressUncheckedUpdateWithoutCourseInput>
    create: XOR<UserCourseProgressCreateWithoutCourseInput, UserCourseProgressUncheckedCreateWithoutCourseInput>
  }

  export type UserCourseProgressUpdateWithWhereUniqueWithoutCourseInput = {
    where: UserCourseProgressWhereUniqueInput
    data: XOR<UserCourseProgressUpdateWithoutCourseInput, UserCourseProgressUncheckedUpdateWithoutCourseInput>
  }

  export type UserCourseProgressUpdateManyWithWhereWithoutCourseInput = {
    where: UserCourseProgressScalarWhereInput
    data: XOR<UserCourseProgressUpdateManyMutationInput, UserCourseProgressUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutChaptersInput = {
    id?: bigint | number
    title: string
    youtube_url: string
    created_at?: Date | string
    completed_at?: Date | string | null
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCoursesInput
    course_pdfs?: CoursePdfCreateNestedManyWithoutCourseInput
    user_course_progress?: UserCourseProgressCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutChaptersInput = {
    id?: bigint | number
    user_id: bigint | number
    title: string
    youtube_url: string
    created_at?: Date | string
    completed_at?: Date | string | null
    updated_at?: Date | string
    course_pdfs?: CoursePdfUncheckedCreateNestedManyWithoutCourseInput
    user_course_progress?: UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutChaptersInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutChaptersInput, CourseUncheckedCreateWithoutChaptersInput>
  }

  export type QuizCreateWithoutChapterInput = {
    id?: bigint | number
    passing_score: bigint | number
    time_limit_secs: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionCreateNestedManyWithoutQuizInput
    user_quiz_attempts?: UserQuizAttemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutChapterInput = {
    id?: bigint | number
    passing_score: bigint | number
    time_limit_secs: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
    user_quiz_attempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutChapterInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutChapterInput, QuizUncheckedCreateWithoutChapterInput>
  }

  export type QuizCreateManyChapterInputEnvelope = {
    data: QuizCreateManyChapterInput | QuizCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type UserChapterProgressCreateWithoutChapterInput = {
    id?: bigint | number
    completion_percentage: bigint | number
    is_complete: boolean
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_chapter_progressInput
  }

  export type UserChapterProgressUncheckedCreateWithoutChapterInput = {
    id?: bigint | number
    user_id: bigint | number
    completion_percentage: bigint | number
    is_complete: boolean
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserChapterProgressCreateOrConnectWithoutChapterInput = {
    where: UserChapterProgressWhereUniqueInput
    create: XOR<UserChapterProgressCreateWithoutChapterInput, UserChapterProgressUncheckedCreateWithoutChapterInput>
  }

  export type UserChapterProgressCreateManyChapterInputEnvelope = {
    data: UserChapterProgressCreateManyChapterInput | UserChapterProgressCreateManyChapterInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutChaptersInput = {
    update: XOR<CourseUpdateWithoutChaptersInput, CourseUncheckedUpdateWithoutChaptersInput>
    create: XOR<CourseCreateWithoutChaptersInput, CourseUncheckedCreateWithoutChaptersInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutChaptersInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutChaptersInput, CourseUncheckedUpdateWithoutChaptersInput>
  }

  export type CourseUpdateWithoutChaptersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursesNestedInput
    course_pdfs?: CoursePdfUpdateManyWithoutCourseNestedInput
    user_course_progress?: UserCourseProgressUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutChaptersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course_pdfs?: CoursePdfUncheckedUpdateManyWithoutCourseNestedInput
    user_course_progress?: UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type QuizUpsertWithWhereUniqueWithoutChapterInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutChapterInput, QuizUncheckedUpdateWithoutChapterInput>
    create: XOR<QuizCreateWithoutChapterInput, QuizUncheckedCreateWithoutChapterInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutChapterInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutChapterInput, QuizUncheckedUpdateWithoutChapterInput>
  }

  export type QuizUpdateManyWithWhereWithoutChapterInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutChapterInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: BigIntFilter<"Quiz"> | bigint | number
    chapter_id?: BigIntFilter<"Quiz"> | bigint | number
    passing_score?: BigIntFilter<"Quiz"> | bigint | number
    time_limit_secs?: BigIntFilter<"Quiz"> | bigint | number
    created_at?: DateTimeFilter<"Quiz"> | Date | string
    updated_at?: DateTimeFilter<"Quiz"> | Date | string
  }

  export type UserChapterProgressUpsertWithWhereUniqueWithoutChapterInput = {
    where: UserChapterProgressWhereUniqueInput
    update: XOR<UserChapterProgressUpdateWithoutChapterInput, UserChapterProgressUncheckedUpdateWithoutChapterInput>
    create: XOR<UserChapterProgressCreateWithoutChapterInput, UserChapterProgressUncheckedCreateWithoutChapterInput>
  }

  export type UserChapterProgressUpdateWithWhereUniqueWithoutChapterInput = {
    where: UserChapterProgressWhereUniqueInput
    data: XOR<UserChapterProgressUpdateWithoutChapterInput, UserChapterProgressUncheckedUpdateWithoutChapterInput>
  }

  export type UserChapterProgressUpdateManyWithWhereWithoutChapterInput = {
    where: UserChapterProgressScalarWhereInput
    data: XOR<UserChapterProgressUpdateManyMutationInput, UserChapterProgressUncheckedUpdateManyWithoutChapterInput>
  }

  export type ChapterCreateWithoutQuizzesInput = {
    id?: bigint | number
    title: string
    description?: string | null
    chapter_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    course: CourseCreateNestedOneWithoutChaptersInput
    user_chapter_progress?: UserChapterProgressCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutQuizzesInput = {
    id?: bigint | number
    course_id: bigint | number
    title: string
    description?: string | null
    chapter_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    user_chapter_progress?: UserChapterProgressUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutQuizzesInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutQuizzesInput, ChapterUncheckedCreateWithoutQuizzesInput>
  }

  export type QuestionCreateWithoutQuizInput = {
    id?: bigint | number
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint | number
    question_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    options?: OptionCreateNestedManyWithoutQuestionInput
    user_responses?: UserResponseCreateNestedManyWithoutQuestionInput
    written_answers?: WrittenAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuizInput = {
    id?: bigint | number
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint | number
    question_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutQuestionInput
    written_answers?: WrittenAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateManyQuizInputEnvelope = {
    data: QuestionCreateManyQuizInput | QuestionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type UserQuizAttemptCreateWithoutQuizInput = {
    id?: bigint | number
    score: number
    passed: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_quiz_attemptsInput
    user_responses?: UserResponseCreateNestedManyWithoutAttemptInput
  }

  export type UserQuizAttemptUncheckedCreateWithoutQuizInput = {
    id?: bigint | number
    user_id: bigint | number
    score: number
    passed: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type UserQuizAttemptCreateOrConnectWithoutQuizInput = {
    where: UserQuizAttemptWhereUniqueInput
    create: XOR<UserQuizAttemptCreateWithoutQuizInput, UserQuizAttemptUncheckedCreateWithoutQuizInput>
  }

  export type UserQuizAttemptCreateManyQuizInputEnvelope = {
    data: UserQuizAttemptCreateManyQuizInput | UserQuizAttemptCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type ChapterUpsertWithoutQuizzesInput = {
    update: XOR<ChapterUpdateWithoutQuizzesInput, ChapterUncheckedUpdateWithoutQuizzesInput>
    create: XOR<ChapterCreateWithoutQuizzesInput, ChapterUncheckedCreateWithoutQuizzesInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutQuizzesInput, ChapterUncheckedUpdateWithoutQuizzesInput>
  }

  export type ChapterUpdateWithoutQuizzesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutChaptersNestedInput
    user_chapter_progress?: UserChapterProgressUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutQuizzesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_chapter_progress?: UserChapterProgressUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: BigIntFilter<"Question"> | bigint | number
    quiz_id?: BigIntFilter<"Question"> | bigint | number
    question_text?: StringFilter<"Question"> | string
    question_type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    points?: BigIntFilter<"Question"> | bigint | number
    question_number?: BigIntFilter<"Question"> | bigint | number
    created_at?: DateTimeFilter<"Question"> | Date | string
    updated_at?: DateTimeFilter<"Question"> | Date | string
  }

  export type UserQuizAttemptUpsertWithWhereUniqueWithoutQuizInput = {
    where: UserQuizAttemptWhereUniqueInput
    update: XOR<UserQuizAttemptUpdateWithoutQuizInput, UserQuizAttemptUncheckedUpdateWithoutQuizInput>
    create: XOR<UserQuizAttemptCreateWithoutQuizInput, UserQuizAttemptUncheckedCreateWithoutQuizInput>
  }

  export type UserQuizAttemptUpdateWithWhereUniqueWithoutQuizInput = {
    where: UserQuizAttemptWhereUniqueInput
    data: XOR<UserQuizAttemptUpdateWithoutQuizInput, UserQuizAttemptUncheckedUpdateWithoutQuizInput>
  }

  export type UserQuizAttemptUpdateManyWithWhereWithoutQuizInput = {
    where: UserQuizAttemptScalarWhereInput
    data: XOR<UserQuizAttemptUpdateManyMutationInput, UserQuizAttemptUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizCreateWithoutQuestionsInput = {
    id?: bigint | number
    passing_score: bigint | number
    time_limit_secs: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    chapter: ChapterCreateNestedOneWithoutQuizzesInput
    user_quiz_attempts?: UserQuizAttemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuestionsInput = {
    id?: bigint | number
    chapter_id: bigint | number
    passing_score: bigint | number
    time_limit_secs: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    user_quiz_attempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutQuestionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
  }

  export type OptionCreateWithoutQuestionInput = {
    id?: bigint | number
    option_text: string
    options_number: bigint | number
    is_correct: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_responses?: UserResponseCreateNestedManyWithoutSelected_optionInput
  }

  export type OptionUncheckedCreateWithoutQuestionInput = {
    id?: bigint | number
    option_text: string
    options_number: bigint | number
    is_correct: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutSelected_optionInput
  }

  export type OptionCreateOrConnectWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput>
  }

  export type OptionCreateManyQuestionInputEnvelope = {
    data: OptionCreateManyQuestionInput | OptionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type UserResponseCreateWithoutQuestionInput = {
    id?: bigint | number
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_responsesInput
    attempt: UserQuizAttemptCreateNestedOneWithoutUser_responsesInput
    selected_option?: OptionCreateNestedOneWithoutUser_responsesInput
  }

  export type UserResponseUncheckedCreateWithoutQuestionInput = {
    id?: bigint | number
    user_id: bigint | number
    attempt_id: bigint | number
    selected_option_id?: bigint | number | null
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserResponseCreateOrConnectWithoutQuestionInput = {
    where: UserResponseWhereUniqueInput
    create: XOR<UserResponseCreateWithoutQuestionInput, UserResponseUncheckedCreateWithoutQuestionInput>
  }

  export type UserResponseCreateManyQuestionInputEnvelope = {
    data: UserResponseCreateManyQuestionInput | UserResponseCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type WrittenAnswerCreateWithoutQuestionInput = {
    id?: bigint | number
    answer: string
    match_percentage: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WrittenAnswerUncheckedCreateWithoutQuestionInput = {
    id?: bigint | number
    answer: string
    match_percentage: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WrittenAnswerCreateOrConnectWithoutQuestionInput = {
    where: WrittenAnswerWhereUniqueInput
    create: XOR<WrittenAnswerCreateWithoutQuestionInput, WrittenAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type WrittenAnswerCreateManyQuestionInputEnvelope = {
    data: WrittenAnswerCreateManyQuestionInput | WrittenAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithoutQuestionsInput = {
    update: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizUpdateWithoutQuestionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    passing_score?: BigIntFieldUpdateOperationsInput | bigint | number
    time_limit_secs?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutQuizzesNestedInput
    user_quiz_attempts?: UserQuizAttemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chapter_id?: BigIntFieldUpdateOperationsInput | bigint | number
    passing_score?: BigIntFieldUpdateOperationsInput | bigint | number
    time_limit_secs?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_quiz_attempts?: UserQuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type OptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutQuestionInput, OptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutQuestionInput, OptionUncheckedUpdateWithoutQuestionInput>
  }

  export type OptionUpdateManyWithWhereWithoutQuestionInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type OptionScalarWhereInput = {
    AND?: OptionScalarWhereInput | OptionScalarWhereInput[]
    OR?: OptionScalarWhereInput[]
    NOT?: OptionScalarWhereInput | OptionScalarWhereInput[]
    id?: BigIntFilter<"Option"> | bigint | number
    question_id?: BigIntFilter<"Option"> | bigint | number
    option_text?: StringFilter<"Option"> | string
    options_number?: BigIntFilter<"Option"> | bigint | number
    is_correct?: BoolFilter<"Option"> | boolean
    created_at?: DateTimeFilter<"Option"> | Date | string
    updated_at?: DateTimeFilter<"Option"> | Date | string
  }

  export type UserResponseUpsertWithWhereUniqueWithoutQuestionInput = {
    where: UserResponseWhereUniqueInput
    update: XOR<UserResponseUpdateWithoutQuestionInput, UserResponseUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserResponseCreateWithoutQuestionInput, UserResponseUncheckedCreateWithoutQuestionInput>
  }

  export type UserResponseUpdateWithWhereUniqueWithoutQuestionInput = {
    where: UserResponseWhereUniqueInput
    data: XOR<UserResponseUpdateWithoutQuestionInput, UserResponseUncheckedUpdateWithoutQuestionInput>
  }

  export type UserResponseUpdateManyWithWhereWithoutQuestionInput = {
    where: UserResponseScalarWhereInput
    data: XOR<UserResponseUpdateManyMutationInput, UserResponseUncheckedUpdateManyWithoutQuestionInput>
  }

  export type WrittenAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: WrittenAnswerWhereUniqueInput
    update: XOR<WrittenAnswerUpdateWithoutQuestionInput, WrittenAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<WrittenAnswerCreateWithoutQuestionInput, WrittenAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type WrittenAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: WrittenAnswerWhereUniqueInput
    data: XOR<WrittenAnswerUpdateWithoutQuestionInput, WrittenAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type WrittenAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: WrittenAnswerScalarWhereInput
    data: XOR<WrittenAnswerUpdateManyMutationInput, WrittenAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type WrittenAnswerScalarWhereInput = {
    AND?: WrittenAnswerScalarWhereInput | WrittenAnswerScalarWhereInput[]
    OR?: WrittenAnswerScalarWhereInput[]
    NOT?: WrittenAnswerScalarWhereInput | WrittenAnswerScalarWhereInput[]
    id?: BigIntFilter<"WrittenAnswer"> | bigint | number
    question_id?: BigIntFilter<"WrittenAnswer"> | bigint | number
    answer?: StringFilter<"WrittenAnswer"> | string
    match_percentage?: FloatFilter<"WrittenAnswer"> | number
    created_at?: DateTimeFilter<"WrittenAnswer"> | Date | string
    updated_at?: DateTimeFilter<"WrittenAnswer"> | Date | string
  }

  export type QuestionCreateWithoutOptionsInput = {
    id?: bigint | number
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint | number
    question_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    user_responses?: UserResponseCreateNestedManyWithoutQuestionInput
    written_answers?: WrittenAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutOptionsInput = {
    id?: bigint | number
    quiz_id: bigint | number
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint | number
    question_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutQuestionInput
    written_answers?: WrittenAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutOptionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
  }

  export type UserResponseCreateWithoutSelected_optionInput = {
    id?: bigint | number
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_responsesInput
    attempt: UserQuizAttemptCreateNestedOneWithoutUser_responsesInput
    question: QuestionCreateNestedOneWithoutUser_responsesInput
  }

  export type UserResponseUncheckedCreateWithoutSelected_optionInput = {
    id?: bigint | number
    user_id: bigint | number
    attempt_id: bigint | number
    question_id: bigint | number
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserResponseCreateOrConnectWithoutSelected_optionInput = {
    where: UserResponseWhereUniqueInput
    create: XOR<UserResponseCreateWithoutSelected_optionInput, UserResponseUncheckedCreateWithoutSelected_optionInput>
  }

  export type UserResponseCreateManySelected_optionInputEnvelope = {
    data: UserResponseCreateManySelected_optionInput | UserResponseCreateManySelected_optionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutOptionsInput = {
    update: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuestionUpdateWithoutOptionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    user_responses?: UserResponseUpdateManyWithoutQuestionNestedInput
    written_answers?: WrittenAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutOptionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quiz_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_responses?: UserResponseUncheckedUpdateManyWithoutQuestionNestedInput
    written_answers?: WrittenAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserResponseUpsertWithWhereUniqueWithoutSelected_optionInput = {
    where: UserResponseWhereUniqueInput
    update: XOR<UserResponseUpdateWithoutSelected_optionInput, UserResponseUncheckedUpdateWithoutSelected_optionInput>
    create: XOR<UserResponseCreateWithoutSelected_optionInput, UserResponseUncheckedCreateWithoutSelected_optionInput>
  }

  export type UserResponseUpdateWithWhereUniqueWithoutSelected_optionInput = {
    where: UserResponseWhereUniqueInput
    data: XOR<UserResponseUpdateWithoutSelected_optionInput, UserResponseUncheckedUpdateWithoutSelected_optionInput>
  }

  export type UserResponseUpdateManyWithWhereWithoutSelected_optionInput = {
    where: UserResponseScalarWhereInput
    data: XOR<UserResponseUpdateManyMutationInput, UserResponseUncheckedUpdateManyWithoutSelected_optionInput>
  }

  export type QuestionCreateWithoutWritten_answersInput = {
    id?: bigint | number
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint | number
    question_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    options?: OptionCreateNestedManyWithoutQuestionInput
    user_responses?: UserResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutWritten_answersInput = {
    id?: bigint | number
    quiz_id: bigint | number
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint | number
    question_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutWritten_answersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutWritten_answersInput, QuestionUncheckedCreateWithoutWritten_answersInput>
  }

  export type QuestionUpsertWithoutWritten_answersInput = {
    update: XOR<QuestionUpdateWithoutWritten_answersInput, QuestionUncheckedUpdateWithoutWritten_answersInput>
    create: XOR<QuestionCreateWithoutWritten_answersInput, QuestionUncheckedCreateWithoutWritten_answersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutWritten_answersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutWritten_answersInput, QuestionUncheckedUpdateWithoutWritten_answersInput>
  }

  export type QuestionUpdateWithoutWritten_answersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    options?: OptionUpdateManyWithoutQuestionNestedInput
    user_responses?: UserResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutWritten_answersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quiz_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    user_responses?: UserResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserCreateWithoutUser_course_progressInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    courses?: CourseCreateNestedManyWithoutUserInput
    course_pdfs?: CoursePdfCreateNestedManyWithoutUserInput
    user_chapter_progress?: UserChapterProgressCreateNestedManyWithoutUserInput
    user_quiz_attempts?: UserQuizAttemptCreateNestedManyWithoutUserInput
    user_responses?: UserResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_course_progressInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    course_pdfs?: CoursePdfUncheckedCreateNestedManyWithoutUserInput
    user_chapter_progress?: UserChapterProgressUncheckedCreateNestedManyWithoutUserInput
    user_quiz_attempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutUserInput
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_course_progressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_course_progressInput, UserUncheckedCreateWithoutUser_course_progressInput>
  }

  export type CourseCreateWithoutUser_course_progressInput = {
    id?: bigint | number
    title: string
    youtube_url: string
    created_at?: Date | string
    completed_at?: Date | string | null
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCoursesInput
    chapters?: ChapterCreateNestedManyWithoutCourseInput
    course_pdfs?: CoursePdfCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutUser_course_progressInput = {
    id?: bigint | number
    user_id: bigint | number
    title: string
    youtube_url: string
    created_at?: Date | string
    completed_at?: Date | string | null
    updated_at?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutCourseInput
    course_pdfs?: CoursePdfUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutUser_course_progressInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutUser_course_progressInput, CourseUncheckedCreateWithoutUser_course_progressInput>
  }

  export type UserUpsertWithoutUser_course_progressInput = {
    update: XOR<UserUpdateWithoutUser_course_progressInput, UserUncheckedUpdateWithoutUser_course_progressInput>
    create: XOR<UserCreateWithoutUser_course_progressInput, UserUncheckedCreateWithoutUser_course_progressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_course_progressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_course_progressInput, UserUncheckedUpdateWithoutUser_course_progressInput>
  }

  export type UserUpdateWithoutUser_course_progressInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    courses?: CourseUpdateManyWithoutUserNestedInput
    course_pdfs?: CoursePdfUpdateManyWithoutUserNestedInput
    user_chapter_progress?: UserChapterProgressUpdateManyWithoutUserNestedInput
    user_quiz_attempts?: UserQuizAttemptUpdateManyWithoutUserNestedInput
    user_responses?: UserResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_course_progressInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    course_pdfs?: CoursePdfUncheckedUpdateManyWithoutUserNestedInput
    user_chapter_progress?: UserChapterProgressUncheckedUpdateManyWithoutUserNestedInput
    user_quiz_attempts?: UserQuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    user_responses?: UserResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutUser_course_progressInput = {
    update: XOR<CourseUpdateWithoutUser_course_progressInput, CourseUncheckedUpdateWithoutUser_course_progressInput>
    create: XOR<CourseCreateWithoutUser_course_progressInput, CourseUncheckedCreateWithoutUser_course_progressInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutUser_course_progressInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutUser_course_progressInput, CourseUncheckedUpdateWithoutUser_course_progressInput>
  }

  export type CourseUpdateWithoutUser_course_progressInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursesNestedInput
    chapters?: ChapterUpdateManyWithoutCourseNestedInput
    course_pdfs?: CoursePdfUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutUser_course_progressInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutCourseNestedInput
    course_pdfs?: CoursePdfUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutUser_chapter_progressInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    courses?: CourseCreateNestedManyWithoutUserInput
    course_pdfs?: CoursePdfCreateNestedManyWithoutUserInput
    user_course_progress?: UserCourseProgressCreateNestedManyWithoutUserInput
    user_quiz_attempts?: UserQuizAttemptCreateNestedManyWithoutUserInput
    user_responses?: UserResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_chapter_progressInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    course_pdfs?: CoursePdfUncheckedCreateNestedManyWithoutUserInput
    user_course_progress?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    user_quiz_attempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutUserInput
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_chapter_progressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_chapter_progressInput, UserUncheckedCreateWithoutUser_chapter_progressInput>
  }

  export type ChapterCreateWithoutUser_chapter_progressInput = {
    id?: bigint | number
    title: string
    description?: string | null
    chapter_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    course: CourseCreateNestedOneWithoutChaptersInput
    quizzes?: QuizCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutUser_chapter_progressInput = {
    id?: bigint | number
    course_id: bigint | number
    title: string
    description?: string | null
    chapter_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutUser_chapter_progressInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutUser_chapter_progressInput, ChapterUncheckedCreateWithoutUser_chapter_progressInput>
  }

  export type UserUpsertWithoutUser_chapter_progressInput = {
    update: XOR<UserUpdateWithoutUser_chapter_progressInput, UserUncheckedUpdateWithoutUser_chapter_progressInput>
    create: XOR<UserCreateWithoutUser_chapter_progressInput, UserUncheckedCreateWithoutUser_chapter_progressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_chapter_progressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_chapter_progressInput, UserUncheckedUpdateWithoutUser_chapter_progressInput>
  }

  export type UserUpdateWithoutUser_chapter_progressInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    courses?: CourseUpdateManyWithoutUserNestedInput
    course_pdfs?: CoursePdfUpdateManyWithoutUserNestedInput
    user_course_progress?: UserCourseProgressUpdateManyWithoutUserNestedInput
    user_quiz_attempts?: UserQuizAttemptUpdateManyWithoutUserNestedInput
    user_responses?: UserResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_chapter_progressInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    course_pdfs?: CoursePdfUncheckedUpdateManyWithoutUserNestedInput
    user_course_progress?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    user_quiz_attempts?: UserQuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    user_responses?: UserResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChapterUpsertWithoutUser_chapter_progressInput = {
    update: XOR<ChapterUpdateWithoutUser_chapter_progressInput, ChapterUncheckedUpdateWithoutUser_chapter_progressInput>
    create: XOR<ChapterCreateWithoutUser_chapter_progressInput, ChapterUncheckedCreateWithoutUser_chapter_progressInput>
    where?: ChapterWhereInput
  }

  export type ChapterUpdateToOneWithWhereWithoutUser_chapter_progressInput = {
    where?: ChapterWhereInput
    data: XOR<ChapterUpdateWithoutUser_chapter_progressInput, ChapterUncheckedUpdateWithoutUser_chapter_progressInput>
  }

  export type ChapterUpdateWithoutUser_chapter_progressInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutChaptersNestedInput
    quizzes?: QuizUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutUser_chapter_progressInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type UserCreateWithoutUser_quiz_attemptsInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    courses?: CourseCreateNestedManyWithoutUserInput
    course_pdfs?: CoursePdfCreateNestedManyWithoutUserInput
    user_course_progress?: UserCourseProgressCreateNestedManyWithoutUserInput
    user_chapter_progress?: UserChapterProgressCreateNestedManyWithoutUserInput
    user_responses?: UserResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_quiz_attemptsInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    course_pdfs?: CoursePdfUncheckedCreateNestedManyWithoutUserInput
    user_course_progress?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    user_chapter_progress?: UserChapterProgressUncheckedCreateNestedManyWithoutUserInput
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_quiz_attemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_quiz_attemptsInput, UserUncheckedCreateWithoutUser_quiz_attemptsInput>
  }

  export type QuizCreateWithoutUser_quiz_attemptsInput = {
    id?: bigint | number
    passing_score: bigint | number
    time_limit_secs: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    chapter: ChapterCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutUser_quiz_attemptsInput = {
    id?: bigint | number
    chapter_id: bigint | number
    passing_score: bigint | number
    time_limit_secs: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutUser_quiz_attemptsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutUser_quiz_attemptsInput, QuizUncheckedCreateWithoutUser_quiz_attemptsInput>
  }

  export type UserResponseCreateWithoutAttemptInput = {
    id?: bigint | number
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_responsesInput
    question: QuestionCreateNestedOneWithoutUser_responsesInput
    selected_option?: OptionCreateNestedOneWithoutUser_responsesInput
  }

  export type UserResponseUncheckedCreateWithoutAttemptInput = {
    id?: bigint | number
    user_id: bigint | number
    question_id: bigint | number
    selected_option_id?: bigint | number | null
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserResponseCreateOrConnectWithoutAttemptInput = {
    where: UserResponseWhereUniqueInput
    create: XOR<UserResponseCreateWithoutAttemptInput, UserResponseUncheckedCreateWithoutAttemptInput>
  }

  export type UserResponseCreateManyAttemptInputEnvelope = {
    data: UserResponseCreateManyAttemptInput | UserResponseCreateManyAttemptInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUser_quiz_attemptsInput = {
    update: XOR<UserUpdateWithoutUser_quiz_attemptsInput, UserUncheckedUpdateWithoutUser_quiz_attemptsInput>
    create: XOR<UserCreateWithoutUser_quiz_attemptsInput, UserUncheckedCreateWithoutUser_quiz_attemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_quiz_attemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_quiz_attemptsInput, UserUncheckedUpdateWithoutUser_quiz_attemptsInput>
  }

  export type UserUpdateWithoutUser_quiz_attemptsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    courses?: CourseUpdateManyWithoutUserNestedInput
    course_pdfs?: CoursePdfUpdateManyWithoutUserNestedInput
    user_course_progress?: UserCourseProgressUpdateManyWithoutUserNestedInput
    user_chapter_progress?: UserChapterProgressUpdateManyWithoutUserNestedInput
    user_responses?: UserResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_quiz_attemptsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    course_pdfs?: CoursePdfUncheckedUpdateManyWithoutUserNestedInput
    user_course_progress?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    user_chapter_progress?: UserChapterProgressUncheckedUpdateManyWithoutUserNestedInput
    user_responses?: UserResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizUpsertWithoutUser_quiz_attemptsInput = {
    update: XOR<QuizUpdateWithoutUser_quiz_attemptsInput, QuizUncheckedUpdateWithoutUser_quiz_attemptsInput>
    create: XOR<QuizCreateWithoutUser_quiz_attemptsInput, QuizUncheckedCreateWithoutUser_quiz_attemptsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutUser_quiz_attemptsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutUser_quiz_attemptsInput, QuizUncheckedUpdateWithoutUser_quiz_attemptsInput>
  }

  export type QuizUpdateWithoutUser_quiz_attemptsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    passing_score?: BigIntFieldUpdateOperationsInput | bigint | number
    time_limit_secs?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutUser_quiz_attemptsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chapter_id?: BigIntFieldUpdateOperationsInput | bigint | number
    passing_score?: BigIntFieldUpdateOperationsInput | bigint | number
    time_limit_secs?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type UserResponseUpsertWithWhereUniqueWithoutAttemptInput = {
    where: UserResponseWhereUniqueInput
    update: XOR<UserResponseUpdateWithoutAttemptInput, UserResponseUncheckedUpdateWithoutAttemptInput>
    create: XOR<UserResponseCreateWithoutAttemptInput, UserResponseUncheckedCreateWithoutAttemptInput>
  }

  export type UserResponseUpdateWithWhereUniqueWithoutAttemptInput = {
    where: UserResponseWhereUniqueInput
    data: XOR<UserResponseUpdateWithoutAttemptInput, UserResponseUncheckedUpdateWithoutAttemptInput>
  }

  export type UserResponseUpdateManyWithWhereWithoutAttemptInput = {
    where: UserResponseScalarWhereInput
    data: XOR<UserResponseUpdateManyMutationInput, UserResponseUncheckedUpdateManyWithoutAttemptInput>
  }

  export type UserCreateWithoutUser_responsesInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    courses?: CourseCreateNestedManyWithoutUserInput
    course_pdfs?: CoursePdfCreateNestedManyWithoutUserInput
    user_course_progress?: UserCourseProgressCreateNestedManyWithoutUserInput
    user_chapter_progress?: UserChapterProgressCreateNestedManyWithoutUserInput
    user_quiz_attempts?: UserQuizAttemptCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_responsesInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    course_pdfs?: CoursePdfUncheckedCreateNestedManyWithoutUserInput
    user_course_progress?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    user_chapter_progress?: UserChapterProgressUncheckedCreateNestedManyWithoutUserInput
    user_quiz_attempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_responsesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_responsesInput, UserUncheckedCreateWithoutUser_responsesInput>
  }

  export type UserQuizAttemptCreateWithoutUser_responsesInput = {
    id?: bigint | number
    score: number
    passed: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutUser_quiz_attemptsInput
    quiz: QuizCreateNestedOneWithoutUser_quiz_attemptsInput
  }

  export type UserQuizAttemptUncheckedCreateWithoutUser_responsesInput = {
    id?: bigint | number
    user_id: bigint | number
    quiz_id: bigint | number
    score: number
    passed: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserQuizAttemptCreateOrConnectWithoutUser_responsesInput = {
    where: UserQuizAttemptWhereUniqueInput
    create: XOR<UserQuizAttemptCreateWithoutUser_responsesInput, UserQuizAttemptUncheckedCreateWithoutUser_responsesInput>
  }

  export type QuestionCreateWithoutUser_responsesInput = {
    id?: bigint | number
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint | number
    question_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    options?: OptionCreateNestedManyWithoutQuestionInput
    written_answers?: WrittenAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutUser_responsesInput = {
    id?: bigint | number
    quiz_id: bigint | number
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint | number
    question_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    written_answers?: WrittenAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutUser_responsesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUser_responsesInput, QuestionUncheckedCreateWithoutUser_responsesInput>
  }

  export type OptionCreateWithoutUser_responsesInput = {
    id?: bigint | number
    option_text: string
    options_number: bigint | number
    is_correct: boolean
    created_at?: Date | string
    updated_at?: Date | string
    question: QuestionCreateNestedOneWithoutOptionsInput
  }

  export type OptionUncheckedCreateWithoutUser_responsesInput = {
    id?: bigint | number
    question_id: bigint | number
    option_text: string
    options_number: bigint | number
    is_correct: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OptionCreateOrConnectWithoutUser_responsesInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutUser_responsesInput, OptionUncheckedCreateWithoutUser_responsesInput>
  }

  export type UserUpsertWithoutUser_responsesInput = {
    update: XOR<UserUpdateWithoutUser_responsesInput, UserUncheckedUpdateWithoutUser_responsesInput>
    create: XOR<UserCreateWithoutUser_responsesInput, UserUncheckedCreateWithoutUser_responsesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_responsesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_responsesInput, UserUncheckedUpdateWithoutUser_responsesInput>
  }

  export type UserUpdateWithoutUser_responsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    courses?: CourseUpdateManyWithoutUserNestedInput
    course_pdfs?: CoursePdfUpdateManyWithoutUserNestedInput
    user_course_progress?: UserCourseProgressUpdateManyWithoutUserNestedInput
    user_chapter_progress?: UserChapterProgressUpdateManyWithoutUserNestedInput
    user_quiz_attempts?: UserQuizAttemptUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_responsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    course_pdfs?: CoursePdfUncheckedUpdateManyWithoutUserNestedInput
    user_course_progress?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    user_chapter_progress?: UserChapterProgressUncheckedUpdateManyWithoutUserNestedInput
    user_quiz_attempts?: UserQuizAttemptUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserQuizAttemptUpsertWithoutUser_responsesInput = {
    update: XOR<UserQuizAttemptUpdateWithoutUser_responsesInput, UserQuizAttemptUncheckedUpdateWithoutUser_responsesInput>
    create: XOR<UserQuizAttemptCreateWithoutUser_responsesInput, UserQuizAttemptUncheckedCreateWithoutUser_responsesInput>
    where?: UserQuizAttemptWhereInput
  }

  export type UserQuizAttemptUpdateToOneWithWhereWithoutUser_responsesInput = {
    where?: UserQuizAttemptWhereInput
    data: XOR<UserQuizAttemptUpdateWithoutUser_responsesInput, UserQuizAttemptUncheckedUpdateWithoutUser_responsesInput>
  }

  export type UserQuizAttemptUpdateWithoutUser_responsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    score?: FloatFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_quiz_attemptsNestedInput
    quiz?: QuizUpdateOneRequiredWithoutUser_quiz_attemptsNestedInput
  }

  export type UserQuizAttemptUncheckedUpdateWithoutUser_responsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    quiz_id?: BigIntFieldUpdateOperationsInput | bigint | number
    score?: FloatFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithoutUser_responsesInput = {
    update: XOR<QuestionUpdateWithoutUser_responsesInput, QuestionUncheckedUpdateWithoutUser_responsesInput>
    create: XOR<QuestionCreateWithoutUser_responsesInput, QuestionUncheckedCreateWithoutUser_responsesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutUser_responsesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutUser_responsesInput, QuestionUncheckedUpdateWithoutUser_responsesInput>
  }

  export type QuestionUpdateWithoutUser_responsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    options?: OptionUpdateManyWithoutQuestionNestedInput
    written_answers?: WrittenAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUser_responsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quiz_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    written_answers?: WrittenAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type OptionUpsertWithoutUser_responsesInput = {
    update: XOR<OptionUpdateWithoutUser_responsesInput, OptionUncheckedUpdateWithoutUser_responsesInput>
    create: XOR<OptionCreateWithoutUser_responsesInput, OptionUncheckedCreateWithoutUser_responsesInput>
    where?: OptionWhereInput
  }

  export type OptionUpdateToOneWithWhereWithoutUser_responsesInput = {
    where?: OptionWhereInput
    data: XOR<OptionUpdateWithoutUser_responsesInput, OptionUncheckedUpdateWithoutUser_responsesInput>
  }

  export type OptionUpdateWithoutUser_responsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    option_text?: StringFieldUpdateOperationsInput | string
    options_number?: BigIntFieldUpdateOperationsInput | bigint | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateWithoutUser_responsesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    option_text?: StringFieldUpdateOperationsInput | string
    options_number?: BigIntFieldUpdateOperationsInput | bigint | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateWithoutCourse_pdfsInput = {
    id?: bigint | number
    title: string
    youtube_url: string
    created_at?: Date | string
    completed_at?: Date | string | null
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCoursesInput
    chapters?: ChapterCreateNestedManyWithoutCourseInput
    user_course_progress?: UserCourseProgressCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourse_pdfsInput = {
    id?: bigint | number
    user_id: bigint | number
    title: string
    youtube_url: string
    created_at?: Date | string
    completed_at?: Date | string | null
    updated_at?: Date | string
    chapters?: ChapterUncheckedCreateNestedManyWithoutCourseInput
    user_course_progress?: UserCourseProgressUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCourse_pdfsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourse_pdfsInput, CourseUncheckedCreateWithoutCourse_pdfsInput>
  }

  export type UserCreateWithoutCourse_pdfsInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    courses?: CourseCreateNestedManyWithoutUserInput
    user_course_progress?: UserCourseProgressCreateNestedManyWithoutUserInput
    user_chapter_progress?: UserChapterProgressCreateNestedManyWithoutUserInput
    user_quiz_attempts?: UserQuizAttemptCreateNestedManyWithoutUserInput
    user_responses?: UserResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCourse_pdfsInput = {
    id?: bigint | number
    fullname: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted?: boolean
    courses?: CourseUncheckedCreateNestedManyWithoutUserInput
    user_course_progress?: UserCourseProgressUncheckedCreateNestedManyWithoutUserInput
    user_chapter_progress?: UserChapterProgressUncheckedCreateNestedManyWithoutUserInput
    user_quiz_attempts?: UserQuizAttemptUncheckedCreateNestedManyWithoutUserInput
    user_responses?: UserResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCourse_pdfsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCourse_pdfsInput, UserUncheckedCreateWithoutCourse_pdfsInput>
  }

  export type CourseUpsertWithoutCourse_pdfsInput = {
    update: XOR<CourseUpdateWithoutCourse_pdfsInput, CourseUncheckedUpdateWithoutCourse_pdfsInput>
    create: XOR<CourseCreateWithoutCourse_pdfsInput, CourseUncheckedCreateWithoutCourse_pdfsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourse_pdfsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourse_pdfsInput, CourseUncheckedUpdateWithoutCourse_pdfsInput>
  }

  export type CourseUpdateWithoutCourse_pdfsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursesNestedInput
    chapters?: ChapterUpdateManyWithoutCourseNestedInput
    user_course_progress?: UserCourseProgressUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourse_pdfsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutCourseNestedInput
    user_course_progress?: UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutCourse_pdfsInput = {
    update: XOR<UserUpdateWithoutCourse_pdfsInput, UserUncheckedUpdateWithoutCourse_pdfsInput>
    create: XOR<UserCreateWithoutCourse_pdfsInput, UserUncheckedCreateWithoutCourse_pdfsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCourse_pdfsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCourse_pdfsInput, UserUncheckedUpdateWithoutCourse_pdfsInput>
  }

  export type UserUpdateWithoutCourse_pdfsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    courses?: CourseUpdateManyWithoutUserNestedInput
    user_course_progress?: UserCourseProgressUpdateManyWithoutUserNestedInput
    user_chapter_progress?: UserChapterProgressUpdateManyWithoutUserNestedInput
    user_quiz_attempts?: UserQuizAttemptUpdateManyWithoutUserNestedInput
    user_responses?: UserResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCourse_pdfsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    courses?: CourseUncheckedUpdateManyWithoutUserNestedInput
    user_course_progress?: UserCourseProgressUncheckedUpdateManyWithoutUserNestedInput
    user_chapter_progress?: UserChapterProgressUncheckedUpdateManyWithoutUserNestedInput
    user_quiz_attempts?: UserQuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    user_responses?: UserResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseCreateManyUserInput = {
    id?: bigint | number
    title: string
    youtube_url: string
    created_at?: Date | string
    completed_at?: Date | string | null
    updated_at?: Date | string
  }

  export type CoursePdfCreateManyUserInput = {
    id?: bigint | number
    course_id: bigint | number
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCourseProgressCreateManyUserInput = {
    id?: bigint | number
    course_id: bigint | number
    completion_percentage: number
    is_complete: boolean
    current_chapter_id?: bigint | number | null
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserChapterProgressCreateManyUserInput = {
    id?: bigint | number
    chapter_id: bigint | number
    completion_percentage: bigint | number
    is_complete: boolean
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserQuizAttemptCreateManyUserInput = {
    id?: bigint | number
    quiz_id: bigint | number
    score: number
    passed: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserResponseCreateManyUserInput = {
    id?: bigint | number
    attempt_id: bigint | number
    question_id: bigint | number
    selected_option_id?: bigint | number | null
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CourseUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUpdateManyWithoutCourseNestedInput
    course_pdfs?: CoursePdfUpdateManyWithoutCourseNestedInput
    user_course_progress?: UserCourseProgressUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: ChapterUncheckedUpdateManyWithoutCourseNestedInput
    course_pdfs?: CoursePdfUncheckedUpdateManyWithoutCourseNestedInput
    user_course_progress?: UserCourseProgressUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    youtube_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePdfUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourse_pdfsNestedInput
  }

  export type CoursePdfUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePdfUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: FloatFieldUpdateOperationsInput | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    current_chapter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutUser_course_progressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: FloatFieldUpdateOperationsInput | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    current_chapter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    course_id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: FloatFieldUpdateOperationsInput | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    current_chapter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChapterProgressUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: BigIntFieldUpdateOperationsInput | bigint | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutUser_chapter_progressNestedInput
  }

  export type UserChapterProgressUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chapter_id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: BigIntFieldUpdateOperationsInput | bigint | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChapterProgressUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chapter_id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: BigIntFieldUpdateOperationsInput | bigint | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizAttemptUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    score?: FloatFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutUser_quiz_attemptsNestedInput
    user_responses?: UserResponseUpdateManyWithoutAttemptNestedInput
  }

  export type UserQuizAttemptUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quiz_id?: BigIntFieldUpdateOperationsInput | bigint | number
    score?: FloatFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_responses?: UserResponseUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type UserQuizAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    quiz_id?: BigIntFieldUpdateOperationsInput | bigint | number
    score?: FloatFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResponseUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attempt?: UserQuizAttemptUpdateOneRequiredWithoutUser_responsesNestedInput
    question?: QuestionUpdateOneRequiredWithoutUser_responsesNestedInput
    selected_option?: OptionUpdateOneWithoutUser_responsesNestedInput
  }

  export type UserResponseUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    attempt_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    selected_option_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResponseUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    attempt_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    selected_option_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterCreateManyCourseInput = {
    id?: bigint | number
    title: string
    description?: string | null
    chapter_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CoursePdfCreateManyCourseInput = {
    id?: bigint | number
    user_id: bigint | number
    pdf_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCourseProgressCreateManyCourseInput = {
    id?: bigint | number
    user_id: bigint | number
    completion_percentage: number
    is_complete: boolean
    current_chapter_id?: bigint | number | null
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ChapterUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUpdateManyWithoutChapterNestedInput
    user_chapter_progress?: UserChapterProgressUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutChapterNestedInput
    user_chapter_progress?: UserChapterProgressUncheckedUpdateManyWithoutChapterNestedInput
  }

  export type ChapterUncheckedUpdateManyWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chapter_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePdfUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCourse_pdfsNestedInput
  }

  export type CoursePdfUncheckedUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePdfUncheckedUpdateManyWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: FloatFieldUpdateOperationsInput | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    current_chapter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_course_progressNestedInput
  }

  export type UserCourseProgressUncheckedUpdateWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: FloatFieldUpdateOperationsInput | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    current_chapter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCourseProgressUncheckedUpdateManyWithoutCourseInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: FloatFieldUpdateOperationsInput | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    current_chapter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateManyChapterInput = {
    id?: bigint | number
    passing_score: bigint | number
    time_limit_secs: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserChapterProgressCreateManyChapterInput = {
    id?: bigint | number
    user_id: bigint | number
    completion_percentage: bigint | number
    is_complete: boolean
    completed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuizUpdateWithoutChapterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    passing_score?: BigIntFieldUpdateOperationsInput | bigint | number
    time_limit_secs?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutQuizNestedInput
    user_quiz_attempts?: UserQuizAttemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutChapterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    passing_score?: BigIntFieldUpdateOperationsInput | bigint | number
    time_limit_secs?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
    user_quiz_attempts?: UserQuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutChapterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    passing_score?: BigIntFieldUpdateOperationsInput | bigint | number
    time_limit_secs?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChapterProgressUpdateWithoutChapterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: BigIntFieldUpdateOperationsInput | bigint | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_chapter_progressNestedInput
  }

  export type UserChapterProgressUncheckedUpdateWithoutChapterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: BigIntFieldUpdateOperationsInput | bigint | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChapterProgressUncheckedUpdateManyWithoutChapterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    completion_percentage?: BigIntFieldUpdateOperationsInput | bigint | number
    is_complete?: BoolFieldUpdateOperationsInput | boolean
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyQuizInput = {
    id?: bigint | number
    question_text: string
    question_type: $Enums.QuestionType
    points: bigint | number
    question_number: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserQuizAttemptCreateManyQuizInput = {
    id?: bigint | number
    user_id: bigint | number
    score: number
    passed: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuestionUpdateWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUpdateManyWithoutQuestionNestedInput
    user_responses?: UserResponseUpdateManyWithoutQuestionNestedInput
    written_answers?: WrittenAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    user_responses?: UserResponseUncheckedUpdateManyWithoutQuestionNestedInput
    written_answers?: WrittenAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    points?: BigIntFieldUpdateOperationsInput | bigint | number
    question_number?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuizAttemptUpdateWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    score?: FloatFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_quiz_attemptsNestedInput
    user_responses?: UserResponseUpdateManyWithoutAttemptNestedInput
  }

  export type UserQuizAttemptUncheckedUpdateWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    score?: FloatFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_responses?: UserResponseUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type UserQuizAttemptUncheckedUpdateManyWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    score?: FloatFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionCreateManyQuestionInput = {
    id?: bigint | number
    option_text: string
    options_number: bigint | number
    is_correct: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserResponseCreateManyQuestionInput = {
    id?: bigint | number
    user_id: bigint | number
    attempt_id: bigint | number
    selected_option_id?: bigint | number | null
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WrittenAnswerCreateManyQuestionInput = {
    id?: bigint | number
    answer: string
    match_percentage: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OptionUpdateWithoutQuestionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    option_text?: StringFieldUpdateOperationsInput | string
    options_number?: BigIntFieldUpdateOperationsInput | bigint | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_responses?: UserResponseUpdateManyWithoutSelected_optionNestedInput
  }

  export type OptionUncheckedUpdateWithoutQuestionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    option_text?: StringFieldUpdateOperationsInput | string
    options_number?: BigIntFieldUpdateOperationsInput | bigint | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_responses?: UserResponseUncheckedUpdateManyWithoutSelected_optionNestedInput
  }

  export type OptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    option_text?: StringFieldUpdateOperationsInput | string
    options_number?: BigIntFieldUpdateOperationsInput | bigint | number
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResponseUpdateWithoutQuestionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_responsesNestedInput
    attempt?: UserQuizAttemptUpdateOneRequiredWithoutUser_responsesNestedInput
    selected_option?: OptionUpdateOneWithoutUser_responsesNestedInput
  }

  export type UserResponseUncheckedUpdateWithoutQuestionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    attempt_id?: BigIntFieldUpdateOperationsInput | bigint | number
    selected_option_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResponseUncheckedUpdateManyWithoutQuestionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    attempt_id?: BigIntFieldUpdateOperationsInput | bigint | number
    selected_option_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WrittenAnswerUpdateWithoutQuestionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    match_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WrittenAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    match_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WrittenAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    answer?: StringFieldUpdateOperationsInput | string
    match_percentage?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResponseCreateManySelected_optionInput = {
    id?: bigint | number
    user_id: bigint | number
    attempt_id: bigint | number
    question_id: bigint | number
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserResponseUpdateWithoutSelected_optionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_responsesNestedInput
    attempt?: UserQuizAttemptUpdateOneRequiredWithoutUser_responsesNestedInput
    question?: QuestionUpdateOneRequiredWithoutUser_responsesNestedInput
  }

  export type UserResponseUncheckedUpdateWithoutSelected_optionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    attempt_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResponseUncheckedUpdateManyWithoutSelected_optionInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    attempt_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResponseCreateManyAttemptInput = {
    id?: bigint | number
    user_id: bigint | number
    question_id: bigint | number
    selected_option_id?: bigint | number | null
    written_response?: string | null
    is_correct: boolean
    points_awarded: bigint | number
    graded_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserResponseUpdateWithoutAttemptInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUser_responsesNestedInput
    question?: QuestionUpdateOneRequiredWithoutUser_responsesNestedInput
    selected_option?: OptionUpdateOneWithoutUser_responsesNestedInput
  }

  export type UserResponseUncheckedUpdateWithoutAttemptInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    selected_option_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResponseUncheckedUpdateManyWithoutAttemptInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    question_id?: BigIntFieldUpdateOperationsInput | bigint | number
    selected_option_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    written_response?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    points_awarded?: BigIntFieldUpdateOperationsInput | bigint | number
    graded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
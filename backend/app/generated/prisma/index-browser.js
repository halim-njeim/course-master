
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  email: 'email',
  password: 'password',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted: 'deleted'
};

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  title: 'title',
  youtube_url: 'youtube_url',
  created_at: 'created_at',
  completed_at: 'completed_at',
  updated_at: 'updated_at'
};

exports.Prisma.ChapterScalarFieldEnum = {
  id: 'id',
  course_id: 'course_id',
  title: 'title',
  description: 'description',
  chapter_number: 'chapter_number',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.QuizScalarFieldEnum = {
  id: 'id',
  chapter_id: 'chapter_id',
  passing_score: 'passing_score',
  time_limit_secs: 'time_limit_secs',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.QuestionScalarFieldEnum = {
  id: 'id',
  quiz_id: 'quiz_id',
  question_text: 'question_text',
  question_type: 'question_type',
  points: 'points',
  question_number: 'question_number',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.OptionScalarFieldEnum = {
  id: 'id',
  question_id: 'question_id',
  option_text: 'option_text',
  options_number: 'options_number',
  is_correct: 'is_correct',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.WrittenAnswerScalarFieldEnum = {
  id: 'id',
  question_id: 'question_id',
  answer: 'answer',
  match_percentage: 'match_percentage',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserCourseProgressScalarFieldEnum = {
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

exports.Prisma.UserChapterProgressScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  chapter_id: 'chapter_id',
  completion_percentage: 'completion_percentage',
  is_complete: 'is_complete',
  completed_at: 'completed_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserQuizAttemptScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  quiz_id: 'quiz_id',
  score: 'score',
  passed: 'passed',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserResponseScalarFieldEnum = {
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

exports.Prisma.CourseResourceScalarFieldEnum = {
  id: 'id',
  resource_type_id: 'resource_type_id',
  course_id: 'course_id',
  user_id: 'user_id',
  resource_url: 'resource_url',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ResourceTypeScalarFieldEnum = {
  id: 'id',
  extension: 'extension',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  fullname: 'fullname',
  email: 'email',
  password: 'password'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.CourseOrderByRelevanceFieldEnum = {
  title: 'title',
  youtube_url: 'youtube_url'
};

exports.Prisma.ChapterOrderByRelevanceFieldEnum = {
  title: 'title',
  description: 'description'
};

exports.Prisma.QuestionOrderByRelevanceFieldEnum = {
  question_text: 'question_text'
};

exports.Prisma.OptionOrderByRelevanceFieldEnum = {
  option_text: 'option_text'
};

exports.Prisma.WrittenAnswerOrderByRelevanceFieldEnum = {
  answer: 'answer'
};

exports.Prisma.UserResponseOrderByRelevanceFieldEnum = {
  written_response: 'written_response'
};

exports.Prisma.CourseResourceOrderByRelevanceFieldEnum = {
  resource_url: 'resource_url'
};

exports.Prisma.ResourceTypeOrderByRelevanceFieldEnum = {
  extension: 'extension'
};
exports.QuestionType = exports.$Enums.QuestionType = {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  SINGLE_CHOICE: 'SINGLE_CHOICE',
  TRUE_FALSE: 'TRUE_FALSE',
  WRITTEN: 'WRITTEN'
};

exports.Prisma.ModelName = {
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
  CourseResource: 'CourseResource',
  ResourceType: 'ResourceType'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
